'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var LocalizationContext = require('./LocalizationContext-a892fa67.js');
var actionTypes = require('./actionTypes-996c10cc.js');
var index$5 = require('./index-17a2b0e2.js');
var index = require('./index-742f020d.js');
var index$4 = require('./index-5b85a146.js');
var LeaveChannel = require('./LeaveChannel-cf408875.js');
var index$3 = require('./index-2f4c431c.js');
var index$1 = require('./index-2e6401de.js');
var index$2 = require('./index-2777e434.js');
var index$6 = require('./index-b725679c.js');
require('react-dom');
require('./utils-726ca4c5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const RESET_CHANNEL_LIST = 'RESET_CHANNEL_LIST';
const CREATE_CHANNEL = 'CREATE_CHANNEL';
const SET_AUTO_SELECT_CHANNEL_ITEM = 'SET_AUTO_SELECT_CHANNEL_ITEM';
const LEAVE_CHANNEL_SUCCESS = 'LEAVE_CHANNEL_SUCCESS';
const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
const SHOW_CHANNEL_SETTINGS = 'SHOW_CHANNEL_SETTINGS';
const HIDE_CHANNEL_SETTINGS = 'HIDE_CHANNEL_SETTINGS';
const FETCH_CHANNELS_START = 'FETCH_CHANNELS_START';
const FETCH_CHANNELS_SUCCESS = 'FETCH_CHANNELS_SUCCESS';
const FETCH_CHANNELS_FAILURE = 'FETCH_CHANNELS_FAILURE';
const INIT_CHANNELS_START = 'INIT_CHANNELS_START';
const INIT_CHANNELS_SUCCESS = 'INIT_CHANNELS_SUCCESS';
const INIT_CHANNELS_FAILURE = 'INIT_CHANNELS_FAILURE';
const ON_USER_JOINED = 'ON_USER_JOINED';
const ON_CHANNEL_DELETED = 'ON_CHANNEL_DELETED';
const ON_LAST_MESSAGE_UPDATED = 'ON_LAST_MESSAGE_UPDATED';
const ON_USER_LEFT = 'ON_USER_LEFT';
const ON_CHANNEL_CHANGED = 'ON_CHANNEL_CHANGED';
const ON_CHANNEL_ARCHIVED = 'ON_CHANNEL_ARCHIVED';
const ON_CHANNEL_FROZEN = 'ON_CHANNEL_FROZEN';
const ON_CHANNEL_UNFROZEN = 'ON_CHANNEL_UNFROZEN';
const ON_READ_RECEIPT_UPDATED = 'ON_READ_RECEIPT_UPDATED';
const ON_DELIVERY_RECEIPT_UPDATED = 'ON_DELIVERY_RECEIPT_UPDATED';
const CHANNEL_REPLACED_TO_TOP = 'CHANNEL_REPLACED_TO_TOP';
const CHANNEL_LIST_PARAMS_UPDATED = 'CHANNEL_LIST_PARAMS_UPDATED';

var channelListInitialState = {
  // we might not need this initialized state -> should remove
  initialized: false,
  loading: false,
  allChannels: [],
  currentChannel: null,
  showSettings: false,
  channelListQuery: null,
  currentUserId: '',
  disableAutoSelect: false
};

function reducer(state, action) {
  switch (action.type) {
    case INIT_CHANNELS_START:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        loading: true
      });

    case RESET_CHANNEL_LIST:
      return channelListInitialState;

    case INIT_CHANNELS_SUCCESS:
      {
        const nextChannel = action.payload && action.payload.length && action.payload.length > 0 ? action.payload[0].url : null;
        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          initialized: true,
          loading: false,
          allChannels: action.payload,
          currentChannel: state.disableAutoSelect ? null : nextChannel
        });
      }

    case FETCH_CHANNELS_SUCCESS:
      {
        const currentChannels = state.allChannels.map(c => c.url);
        const filteredChannels = action.payload.filter(_ref => {
          let {
            url
          } = _ref;
          return !currentChannels.find(c => c === url);
        });
        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          allChannels: [...state.allChannels, ...filteredChannels]
        });
      }

    case CREATE_CHANNEL:
      {
        const channel = action.payload;

        if (state.channelListQuery) {
          if (index.filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              allChannels: index.getChannelsWithUpsertedChannel(state.allChannels, channel)
            });
          }

          return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
            currentChannel: channel.url
          });
        }

        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          currentChannel: channel.url,
          allChannels: [channel, ...state.allChannels.filter(ch => ch.url !== channel.url)]
        });
      }

    case ON_CHANNEL_ARCHIVED:
      {
        const channel = action.payload;

        if (state.channelListQuery) {
          if (index.filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              allChannels: index.getChannelsWithUpsertedChannel(state.allChannels, channel)
            });
          }
        }

        const nextChannel = channel.url === state.currentChannel ? state.allChannels[state.allChannels[0].url === channel.url ? 1 : 0].url : state.currentChannel;
        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          currentChannel: state.disableAutoSelect ? null : nextChannel,
          allChannels: state.allChannels.filter(_ref2 => {
            let {
              url
            } = _ref2;
            return url !== channel.url;
          })
        });
      }

    case LEAVE_CHANNEL_SUCCESS:
    case ON_CHANNEL_DELETED:
      {
        const channelUrl = action.payload;
        const nextChannel = channelUrl === state.currentChannel ? state.allChannels[0].url : state.currentChannel;
        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          currentChannel: state.disableAutoSelect ? null : nextChannel,
          allChannels: state.allChannels.filter(_ref3 => {
            let {
              url
            } = _ref3;
            return url !== channelUrl;
          })
        });
      }

    case ON_USER_LEFT:
      {
        const {
          channel,
          isMe
        } = action.payload;

        if (state.channelListQuery) {
          if (index.filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            const filteredChannels = index.getChannelsWithUpsertedChannel(state.allChannels, channel);
            const nextChannel = isMe && channel.url === state.currentChannel ? filteredChannels[0].url : state.currentChannel;
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              currentChannel: state.disableAutoSelect ? null : nextChannel,
              allChannels: filteredChannels
            });
          }

          const nextChannel = channel.url === state.currentChannel ? state.allChannels[0].url : state.currentChannel;
          return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
            currentChannel: state.disableAutoSelect ? null : nextChannel,
            allChannels: state.allChannels.filter(_ref4 => {
              let {
                url
              } = _ref4;
              return url !== channel.url;
            })
          });
        }

        const filteredChannels = state.allChannels.filter(c => !(c.url === channel.url && isMe));
        const nextChannel = isMe && channel.url === state.currentChannel ? filteredChannels[0].url : state.currentChannel;
        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          currentChannel: state.disableAutoSelect ? null : nextChannel,
          allChannels: filteredChannels
        });
      }

    case ON_USER_JOINED:
    case ON_CHANNEL_CHANGED:
    case ON_READ_RECEIPT_UPDATED:
    case ON_DELIVERY_RECEIPT_UPDATED:
      {
        const {
          allChannels = []
        } = state;
        const channel = action.payload;
        const {
          unreadMessageCount
        } = channel;
        if (!channel.lastMessage) return state;

        if (state.channelListQuery) {
          if (index.filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              allChannels: index.getChannelsWithUpsertedChannel(allChannels, channel)
            });
          }

          const nextChannel = channel.url === state.currentChannel ? state.allChannels[state.allChannels[0].url === channel.url ? 1 : 0].url // if coming channel is first of channel list, current channel will be the next one
          : state.currentChannel;
          return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
            currentChannel: state.disableAutoSelect ? null : nextChannel,
            allChannels: state.allChannels.filter(_ref5 => {
              let {
                url
              } = _ref5;
              return url !== channel.url;
            })
          });
        } // if its only an unread message count change, dont push to top


        if (unreadMessageCount === 0) {
          const currentChannel = allChannels.find(_ref6 => {
            let {
              url
            } = _ref6;
            return url === channel.url;
          });
          const currentUnreadCount = currentChannel && currentChannel.unreadMessageCount;

          if (currentUnreadCount === 0) {
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              allChannels: state.allChannels.map(ch => ch.url === channel.url ? channel : ch)
            });
          }
        }

        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          allChannels: [channel, ...state.allChannels.filter(_ref7 => {
            let {
              url
            } = _ref7;
            return url !== action.payload.url;
          })]
        });
      }

    case SET_CURRENT_CHANNEL:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        currentChannel: action.payload
      });

    case SHOW_CHANNEL_SETTINGS:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        showSettings: true
      });

    case HIDE_CHANNEL_SETTINGS:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        showSettings: false
      });

    case ON_LAST_MESSAGE_UPDATED:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        allChannels: state.allChannels.map(channel => channel.url === action.payload.url ? action.payload : channel)
      });

    case ON_CHANNEL_FROZEN:
      {
        const channel = action.payload;

        if (state.channelListQuery) {
          if (index.filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              allChannels: index.getChannelsWithUpsertedChannel(state.allChannels, channel)
            });
          }

          const nextChannel = channel.url === state.currentChannel ? state.allChannels[state.allChannels[0].url === channel.url ? 1 : 0].url // if coming channel is first of channel list, current channel will be the next one
          : state.currentChannel;
          return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
            currentChannel: state.disableAutoSelect ? null : nextChannel,
            allChannels: state.allChannels.filter(_ref8 => {
              let {
                url
              } = _ref8;
              return url !== channel.url;
            })
          });
        }

        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          allChannels: state.allChannels.map(ch => {
            if (ch.url === channel.url) {
              // eslint-disable-next-line no-param-reassign
              ch.isFrozen = true;
              return ch;
            }

            return ch;
          })
        });
      }

    case ON_CHANNEL_UNFROZEN:
      {
        const channel = action.payload;

        if (state.channelListQuery) {
          if (index.filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
              allChannels: index.getChannelsWithUpsertedChannel(state.allChannels, channel)
            });
          }

          const nextChannel = channel.url === state.currentChannel ? state.allChannels[state.allChannels[0].url === channel.url ? 1 : 0].url // if coming channel is first of channel list, current channel will be the next one
          : state.currentChannel;
          return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
            currentChannel: state.disableAutoSelect ? null : nextChannel,
            allChannels: state.allChannels.filter(_ref9 => {
              let {
                url
              } = _ref9;
              return url !== channel.url;
            })
          });
        }

        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          allChannels: state.allChannels.map(ch => {
            if (ch.url === channel.url) {
              // eslint-disable-next-line no-param-reassign
              ch.isFrozen = false;
              return ch;
            }

            return ch;
          })
        });
      }

    case CHANNEL_REPLACED_TO_TOP:
      {
        return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
          allChannels: [action.payload, ...state.allChannels.filter(channel => channel.url !== action.payload.url)]
        });
      }

    case CHANNEL_LIST_PARAMS_UPDATED:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        currentUserId: action.payload.currentUserId,
        channelListQuery: action.payload.channelListQuery
      });

    case SET_AUTO_SELECT_CHANNEL_ITEM:
      return LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, state), {}, {
        disableAutoSelect: action.payload
      });

    default:
      return state;
  }
}

const getChannelTitle = function () {
  let channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let currentUserId = arguments.length > 1 ? arguments[1] : undefined;
  let stringSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : index$3.LabelStringSet;

  if (!channel || !channel.name && !channel.members) {
    return stringSet.NO_TITLE;
  }

  if (channel.name && channel.name !== 'Group Channel') {
    return channel.name;
  }

  if (channel.members.length === 1) {
    return stringSet.NO_MEMBERS;
  }

  return channel.members.filter(_ref => {
    let {
      userId
    } = _ref;
    return userId !== currentUserId;
  }).map(_ref2 => {
    let {
      nickname
    } = _ref2;
    return nickname || stringSet.NO_NAME;
  }).join(', ');
};
const getLastMessageCreatedAt = (channel, locale) => {
  var _channel$lastMessage;

  const createdAt = channel === null || channel === void 0 ? void 0 : (_channel$lastMessage = channel.lastMessage) === null || _channel$lastMessage === void 0 ? void 0 : _channel$lastMessage.createdAt;
  const optionalParam = locale ? {
    locale
  } : null;

  if (!createdAt) {
    return '';
  }

  if (index$1.isToday(createdAt)) {
    return index$2.format(createdAt, 'p', optionalParam);
  }

  if (index$1.isYesterday(createdAt)) {
    return index$1.formatRelative(createdAt, new Date(), optionalParam);
  }

  return index$2.format(createdAt, 'MMM dd', optionalParam);
};
const getTotalMembers = channel => channel && channel.memberCount ? channel.memberCount : 0;

const getPrettyLastMessage = function () {
  let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const MAXLEN = 30;
  const {
    messageType,
    name
  } = message;

  if (messageType === 'file') {
    return index.truncateString(name, MAXLEN);
  }

  return message.message;
};

const getLastMessage = channel => channel && channel.lastMessage ? getPrettyLastMessage(channel.lastMessage) : '';
const getChannelUnreadMessageCount = channel => channel && channel.unreadMessageCount ? channel.unreadMessageCount : 0;

function ChannelPreview(_ref) {
  let {
    channel,
    currentUser,
    isActive,
    ChannelAction,
    theme,
    onClick,
    tabIndex
  } = _ref;
  const {
    userId
  } = currentUser;
  const {
    isBroadcast,
    isFrozen
  } = channel;
  const {
    stringSet,
    dateLocale
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-channel-preview', isActive ? 'sendbird-channel-preview--active' : ''].join(' '),
    role: "link",
    onClick: onClick,
    onKeyPress: onClick,
    tabIndex: tabIndex
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__avatar"
  }, /*#__PURE__*/React__default["default"].createElement(index$4.ChannelAvatar, {
    channel: channel,
    userId: userId,
    theme: theme
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__upper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__upper__header"
  }, isBroadcast && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__upper__header__broadcast-icon"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    type: index$3.IconTypes.BROADCAST,
    fillColor: index$3.IconColors.SECONDARY,
    height: "16px",
    width: "16px"
  })), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    className: "sendbird-channel-preview__content__upper__header__channel-name",
    type: index$3.LabelTypography.SUBTITLE_2,
    color: index$3.LabelColors.ONBACKGROUND_1
  }, getChannelTitle(channel, userId, stringSet)), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    className: "sendbird-channel-preview__content__upper__header__total-members",
    type: index$3.LabelTypography.CAPTION_2,
    color: index$3.LabelColors.ONBACKGROUND_2
  }, getTotalMembers(channel)), isFrozen && /*#__PURE__*/React__default["default"].createElement("div", {
    title: "Frozen",
    className: "sendbird-channel-preview__content__upper__header__frozen-icon"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    type: index$3.IconTypes.FREEZE,
    fillColor: index$3.IconColors.PRIMARY,
    height: 12,
    width: 12
  }))), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    type: index$3.LabelTypography.CAPTION_3,
    color: index$3.LabelColors.ONBACKGROUND_2
  }, getLastMessageCreatedAt(channel, dateLocale))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__lower"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    className: "sendbird-channel-preview__content__lower__last-message",
    type: index$3.LabelTypography.BODY_2,
    color: index$3.LabelColors.ONBACKGROUND_3
  }, getLastMessage(channel)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__lower__unread-message-count"
  }, getChannelUnreadMessageCount(channel) // return number
  ? /*#__PURE__*/React__default["default"].createElement(LeaveChannel.Badge, {
    count: getChannelUnreadMessageCount(channel)
  }) : null))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__action"
  }, ChannelAction));
}
ChannelPreview.propTypes = {
  channel: PropTypes__default["default"].shape({
    members: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({})),
    coverUrl: PropTypes__default["default"].string,
    isBroadcast: PropTypes__default["default"].bool,
    isFrozen: PropTypes__default["default"].bool
  }),
  currentUser: PropTypes__default["default"].shape({
    userId: PropTypes__default["default"].string
  }),
  isActive: PropTypes__default["default"].bool,
  ChannelAction: PropTypes__default["default"].element.isRequired,
  theme: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  tabIndex: PropTypes__default["default"].number
};
ChannelPreview.defaultProps = {
  channel: {},
  currentUser: {},
  isActive: false,
  theme: 'light',
  onClick: () => {},
  tabIndex: 0
};

function ChannelHeader(_ref) {
  let {
    user,
    renderHeader,
    iconButton,
    onEdit,
    allowProfileEdit
  } = _ref;
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-channel-header', allowProfileEdit ? 'sendbird-channel-header--allow-edit' : ''].join(' ')
  }, renderHeader ? renderHeader() : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title",
    role: "button",
    onClick: onEdit,
    onKeyDown: onEdit,
    tabIndex: "0"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title__left"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Avatar, {
    width: "32px",
    height: "32px",
    src: user.profileUrl,
    alt: user.nickname
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title__right"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    className: "sendbird-channel-header__title__right__name",
    type: index$3.LabelTypography.SUBTITLE_2,
    color: index$3.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    className: "sendbird-channel-header__title__right__user-id",
    type: index$3.LabelTypography.BODY_2,
    color: index$3.LabelColors.ONBACKGROUND_2
  }, user.userId))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__right-icon"
  }, iconButton));
}
ChannelHeader.propTypes = {
  user: PropTypes__default["default"].shape({
    profileUrl: PropTypes__default["default"].string,
    nickname: PropTypes__default["default"].string,
    userId: PropTypes__default["default"].string
  }),
  renderHeader: PropTypes__default["default"].func,
  iconButton: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].instanceOf(index$5.IconButton)]),
  onEdit: PropTypes__default["default"].func.isRequired,
  allowProfileEdit: PropTypes__default["default"].bool
};
ChannelHeader.defaultProps = {
  user: {},
  renderHeader: null,
  iconButton: null,
  allowProfileEdit: false
};

function EditUserProfile(_a) {
  var user = _a.user,
      _b = _a.theme,
      theme = _b === void 0 ? 'light' : _b,
      onCancel = _a.onCancel,
      onSubmit = _a.onSubmit,
      _c = _a.changeTheme,
      changeTheme = _c === void 0 ? index$6.noop : _c,
      _d = _a.onThemeChange,
      onThemeChange = _d === void 0 ? null : _d;
  var hiddenInputRef = React.useRef(null);
  var inputRef = React.useRef(null);
  var formRef = React.useRef(null);
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _e = React.useState(null),
      currentImg = _e[0],
      setCurrentImg = _e[1];

  var _f = React.useState(null),
      newFile = _f[0],
      setNewFile = _f[1];

  return /*#__PURE__*/React__default["default"].createElement(index$5.Modal, {
    titleText: stringSet.EDIT_PROFILE__TITLE,
    submitText: stringSet.BUTTON__SAVE,
    type: index$5.Type.PRIMARY,
    onCancel: onCancel,
    onSubmit: function () {
      if (user.nickname !== '' && !inputRef.current.value) {
        if (formRef.current.reportValidity) {
          // might not work in explorer
          formRef.current.reportValidity();
        }

        return;
      }

      onSubmit(inputRef.current.value, newFile);
      onCancel();
    }
  }, /*#__PURE__*/React__default["default"].createElement("form", {
    className: "sendbird-edit-user-profile",
    ref: formRef,
    onSubmit: function (e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird-edit-user-profile__img"
  }, /*#__PURE__*/React__default["default"].createElement(index$6.InputLabel, null, stringSet.EDIT_PROFILE__IMAGE_LABEL), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-edit-user-profile__img__avatar"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Avatar, {
    width: "80px",
    height: "80px",
    src: currentImg || user.profileUrl
  })), /*#__PURE__*/React__default["default"].createElement("input", {
    ref: hiddenInputRef,
    type: "file",
    accept: "image/gif, image/jpeg, image/png",
    style: {
      display: 'none'
    },
    onChange: function (e) {
      setCurrentImg(URL.createObjectURL(e.target.files[0]));
      setNewFile(e.target.files[0]);
      hiddenInputRef.current.value = '';
    }
  }), /*#__PURE__*/React__default["default"].createElement(index$5.TextButton, {
    className: "sendbird-edit-user-profile__img__avatar-button",
    notUnderline: true,
    onClick: function () {
      return hiddenInputRef.current.click();
    }
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    type: index$3.LabelTypography.BUTTON_1,
    color: index$3.LabelColors.PRIMARY
  }, stringSet.EDIT_PROFILE__IMAGE_UPLOAD))), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird-edit-user-profile__name"
  }, /*#__PURE__*/React__default["default"].createElement(index$6.InputLabel, null, stringSet.EDIT_PROFILE__NICKNAME_LABEL), /*#__PURE__*/React__default["default"].createElement(index$6.Input, {
    required: user.nickname !== '',
    name: "sendbird-edit-user-profile__name__input",
    ref: inputRef,
    value: user.nickname,
    placeHolder: stringSet.EDIT_PROFILE__NICKNAME_PLACEHOLDER
  })), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird-edit-user-profile__userid"
  }, /*#__PURE__*/React__default["default"].createElement(index$6.InputLabel, null, stringSet.EDIT_PROFILE__USERID_LABEL), /*#__PURE__*/React__default["default"].createElement(index$6.Input, {
    disabled: true,
    name: "sendbird-edit-user-profile__userid__input",
    value: user.userId
  })), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird-edit-user-profile__theme"
  }, /*#__PURE__*/React__default["default"].createElement(index$6.InputLabel, null, stringSet.EDIT_PROFILE__THEME_LABEL), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-edit-user-profile__theme__theme-icon"
  }, theme === 'dark' ? /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    onClick: function () {
      changeTheme('light');

      if (onThemeChange && typeof onThemeChange === 'function') {
        onThemeChange('light');
      }
    },
    type: index$3.IconTypes.TOGGLE_ON,
    width: 44,
    height: 24
  }) : /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    onClick: function () {
      changeTheme('dark');

      if (onThemeChange && typeof onThemeChange === 'function') {
        onThemeChange('dark');
      }
    },
    type: index$3.IconTypes.TOGGLE_OFF,
    width: 44,
    height: 24
  })))));
}

var mapStoreToProps = function (store) {
  return {
    theme: store.config.theme,
    changeTheme: store.config.setCurrenttheme
  };
};

var ConnectedEditUserProfile = LocalizationContext.withSendbirdContext(EditUserProfile, mapStoreToProps);

function AddChannel(_ref) {
  let {
    sdk,
    disabled,
    channelListDispatcher,
    onBeforeCreateChannel,
    userId,
    userFilledApplicationUserListQuery,
    userListQuery
  } = _ref;
  const [showModal, setShowModal] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState('group');
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);

  if (!sdk || !sdk.createApplicationUserListQuery) {
    return null;
  }

  const isBroadcastAvailable = LeaveChannel.isBroadcastChannelEnabled(sdk);
  const isSupergroupAvailable = LeaveChannel.isSuperGroupChannelEnabled(sdk);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(index$5.IconButton, {
    height: "32px",
    width: "32px",
    onClick: () => {
      setShowModal(true);
    },
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    type: index$3.IconTypes.CREATE,
    fillColor: index$3.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), showModal && step === 0 && /*#__PURE__*/React__default["default"].createElement(index$5.Modal, {
    titleText: stringSet.MODAL__CHOOSE_CHANNEL_TYPE__TITLE,
    hideFooter: true,
    onCancel: () => {
      setShowModal(false);
    },
    onSubmit: () => {}
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle-wrap"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: () => {
      setType('group');
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: () => {
      setType('group');
      setStep(1);
    }
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    className: "sendbird-add-channel__rectangle__chat-icon",
    type: index$3.IconTypes.CHAT,
    fillColor: index$3.IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    type: index$3.LabelTypography.SUBTITLE_1,
    color: index$3.LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CHOOSE_CHANNEL_TYPE__GROUP)), isSupergroupAvailable && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: () => {
      setType('supergroup');
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: () => {
      setType('supergroup');
      setStep(1);
    }
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    className: "sendbird-add-channel__rectangle__supergroup-icon",
    type: index$3.IconTypes.SUPERGROUP,
    fillColor: index$3.IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    type: index$3.LabelTypography.SUBTITLE_1,
    color: index$3.LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CHOOSE_CHANNEL_TYPE__SUPER_GROUP)), isBroadcastAvailable && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: () => {
      setType('broadcast');
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: () => {
      setType('broadcast');
      setStep(1);
    }
  }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
    className: "sendbird-add-channel__rectangle__broadcast-icon",
    type: index$3.IconTypes.BROADCAST,
    fillColor: index$3.IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default["default"].createElement(index$3.Label, {
    type: index$3.LabelTypography.SUBTITLE_1,
    color: index$3.LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CHOOSE_CHANNEL_TYPE__BROADCAST)))), showModal && step === 1 && /*#__PURE__*/React__default["default"].createElement(LeaveChannel.InviteMembers, {
    swapParams: sdk && sdk.getErrorFirstCallback && sdk.getErrorFirstCallback(),
    titleText: stringSet.MODAL__CREATE_CHANNEL__TITLE,
    submitText: stringSet.BUTTON__CREATE,
    closeModal: () => {
      setStep(0);
      setShowModal(false);
    },
    idsToFilter: [userId],
    userQueryCreator: () => userListQuery && typeof userListQuery === 'function' ? userListQuery() : LeaveChannel.createDefaultUserListQuery({
      sdk,
      userFilledApplicationUserListQuery
    }),
    onSubmit: selectedUsers => LeaveChannel.createChannel(sdk, selectedUsers, onBeforeCreateChannel, userId, type).then(channel => {
      // maybe - do this in event listener
      channelListDispatcher({
        type: CREATE_CHANNEL,
        payload: channel
      });
    })
  }));
}
AddChannel.propTypes = {
  sdk: PropTypes__default["default"].shape({
    getErrorFirstCallback: PropTypes__default["default"].func,
    createApplicationUserListQuery: PropTypes__default["default"].func
  }).isRequired,
  disabled: PropTypes__default["default"].bool,
  channelListDispatcher: PropTypes__default["default"].func.isRequired,
  userFilledApplicationUserListQuery: PropTypes__default["default"].shape({}),
  onBeforeCreateChannel: PropTypes__default["default"].func,
  userId: PropTypes__default["default"].string.isRequired,
  userListQuery: PropTypes__default["default"].func
};
AddChannel.defaultProps = {
  disabled: false,
  userFilledApplicationUserListQuery: {},
  onBeforeCreateChannel: null,
  userListQuery: null
};

function ChannelPreviewAction(_ref) {
  let {
    disabled,
    onLeaveChannel
  } = _ref;
  const parentRef = React.useRef(null);
  const [showModal, setShowModal] = React.useState(false);
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    role: "button",
    style: {
      display: 'inline-block'
    },
    onKeyDown: e => {
      e.stopPropagation();
    },
    tabIndex: 0,
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default["default"].createElement(index$5.ContextMenu, {
    menuTrigger: toggleDropdown => /*#__PURE__*/React__default["default"].createElement(index$5.IconButton, {
      ref: parentRef,
      onClick: toggleDropdown,
      height: "32px",
      width: "32px"
    }, /*#__PURE__*/React__default["default"].createElement(index$3.Icon, {
      type: index$3.IconTypes.MORE,
      fillColor: index$3.IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    })),
    menuItems: closeDropdown => /*#__PURE__*/React__default["default"].createElement(index$5.MenuItems, {
      parentRef: parentRef,
      parentContainRef: parentRef,
      closeDropdown: closeDropdown
    }, /*#__PURE__*/React__default["default"].createElement(index$5.MenuItem, {
      onClick: () => {
        if (disabled) {
          return;
        }

        setShowModal(true);
        closeDropdown();
      }
    }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))
  }), showModal && /*#__PURE__*/React__default["default"].createElement(LeaveChannel.LeaveChannel, {
    onCloseModal: () => setShowModal(false),
    onLeaveChannel: onLeaveChannel
  }));
}
ChannelPreviewAction.propTypes = {
  disabled: PropTypes__default["default"].bool,
  onLeaveChannel: PropTypes__default["default"].func.isRequired
};
ChannelPreviewAction.defaultProps = {
  disabled: false
};

function ChannelsPlaceholder(_ref) {
  let {
    type
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-list"
  }, /*#__PURE__*/React__default["default"].createElement(index$3.PlaceHolder, {
    type: type
  }));
}
ChannelsPlaceholder.propTypes = {
  type: PropTypes__default["default"].string.isRequired
};

const DELIVERY_RECIPT$1 = 'delivery_receipt';

const createEventHandler = _ref => {
  let {
    sdk,
    sdkChannelHandlerId,
    channelListDispatcher,
    logger
  } = _ref;
  const ChannelHandler = new sdk.ChannelHandler();

  ChannelHandler.onChannelChanged = channel => {
    logger.info('ChannelList: onChannelChanged', channel);
    channelListDispatcher({
      type: ON_CHANNEL_CHANGED,
      payload: channel
    });
  };

  ChannelHandler.onChannelDeleted = channelUrl => {
    logger.info('ChannelList: onChannelDeleted', channelUrl);
    channelListDispatcher({
      type: ON_CHANNEL_DELETED,
      payload: channelUrl
    });
  };

  ChannelHandler.onUserJoined = channel => {
    logger.info('ChannelList: onUserJoined', channel);

    if (channel.lastMessage) {
      channelListDispatcher({
        type: ON_USER_JOINED,
        payload: channel
      });
    }
  };

  ChannelHandler.onUserBanned = (channel, user) => {
    const {
      currentUser
    } = sdk;
    logger.info('Channel | useHandleChannelEvents: onUserBanned', channel);

    if (user.userId === currentUser.userId) {
      channelListDispatcher({
        type: ON_USER_LEFT,
        payload: {
          channel,
          isMe: true
        }
      });
    } else {
      channelListDispatcher({
        type: ON_USER_LEFT,
        payload: {
          channel,
          isMe: false
        }
      });
    }
  };

  ChannelHandler.onUserLeft = (channel, leftUser) => {
    const {
      currentUser
    } = sdk;
    const isMe = currentUser.userId === leftUser.userId;
    logger.info('ChannelList: onUserLeft', channel);
    channelListDispatcher({
      type: ON_USER_LEFT,
      payload: {
        channel,
        isMe
      }
    });
  };

  ChannelHandler.onReadStatus = channel => {
    logger.info('ChannelList: onReadStatus', channel);
    channelListDispatcher({
      type: ON_READ_RECEIPT_UPDATED,
      payload: channel
    });
  };

  ChannelHandler.onDeliveryReceiptUpdated = channel => {
    logger.info('ChannelList: onDeliveryReceiptUpdated', channel);

    if (channel.lastMessage) {
      channelListDispatcher({
        type: ON_DELIVERY_RECEIPT_UPDATED,
        payload: channel
      });
    }
  };

  ChannelHandler.onMessageUpdated = (channel, message) => {
    if (channel.lastMessage.isEqual(message)) {
      logger.info('ChannelList: onMessageUpdated', channel);
      channelListDispatcher({
        type: ON_LAST_MESSAGE_UPDATED,
        payload: channel
      });
    }
  };

  ChannelHandler.onChannelHidden = channel => {
    logger.info('ChannelList: onChannelHidden', channel);
    channelListDispatcher({
      type: ON_CHANNEL_ARCHIVED,
      payload: channel
    });
  };

  ChannelHandler.onChannelFrozen = channel => {
    logger.info('ChannelList: onChannelFrozen', channel);
    channelListDispatcher({
      type: ON_CHANNEL_FROZEN,
      payload: channel
    });
  };

  ChannelHandler.onChannelUnfrozen = channel => {
    logger.info('ChannelList: onChannelUnfrozen', channel);
    channelListDispatcher({
      type: ON_CHANNEL_UNFROZEN,
      payload: channel
    });
  };

  logger.info('ChannelList: Added channelHandler');
  sdk.addChannelHandler(sdkChannelHandlerId, ChannelHandler);
};

const createChannelListQuery = _ref2 => {
  let {
    sdk,
    userFilledChannelListQuery = {}
  } = _ref2;
  const channelListQuery = sdk.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = false;
  channelListQuery.order = 'latest_last_message'; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'

  channelListQuery.limit = 20; // The value of pagination limit could be set up to 100.

  if (userFilledChannelListQuery) {
    Object.keys(userFilledChannelListQuery).forEach(key => {
      channelListQuery[key] = userFilledChannelListQuery[key];
    });
  }

  return channelListQuery;
};
/**
 * Setup event listener
 * create channel source query
 * addloading screen
 */


function setupChannelList(_ref3) {
  let {
    sdk,
    sdkChannelHandlerId,
    channelListDispatcher,
    setChannelSource,
    onChannelSelect,
    userFilledChannelListQuery,
    logger,
    sortChannelList,
    disableAutoSelect
  } = _ref3;

  if (sdk && sdk.ChannelHandler) {
    createEventHandler({
      sdk,
      channelListDispatcher,
      sdkChannelHandlerId,
      logger
    });
  } else {
    logger.console.warning('ChannelList - createEventHandler: sdk or sdk.ChannelHandler does not exist', sdk);
  }

  logger.info('ChannelList - creating query', {
    userFilledChannelListQuery
  });
  const channelListQuery = createChannelListQuery({
    sdk,
    userFilledChannelListQuery
  });
  logger.info('ChannelList - created query', channelListQuery);
  setChannelSource(channelListQuery);
  channelListDispatcher({
    type: INIT_CHANNELS_START
  });

  if (userFilledChannelListQuery) {
    logger.info('ChannelList - setting up channelListQuery', channelListQuery);
    channelListDispatcher({
      type: CHANNEL_LIST_PARAMS_UPDATED,
      payload: {
        channelListQuery,
        currentUserId: sdk && sdk.currentUser && sdk.currentUser.userId
      }
    });
  }

  logger.info('ChannelList - fetching channels');

  if (channelListQuery.hasNext) {
    channelListQuery.next((response, error) => {
      var _sdk$appInfo, _sdk$appInfo$premiumF;

      const swapParams = sdk.getErrorFirstCallback();
      let channelList = response;
      let err = error;

      if (swapParams) {
        channelList = error;
        err = response;
      }

      logger.info('ChannelList - fetched channels', channelList);

      if (err) {
        logger.error('ChannelList - couldnt fetch channels', err);
        channelListDispatcher({
          type: INIT_CHANNELS_FAILURE
        });
        return;
      } // select first channel


      logger.info('ChannelList - highlight channel', channelList[0]);
      let sorted = channelList;

      if (sortChannelList && typeof sortChannelList === 'function') {
        sorted = sortChannelList(channelList);
        logger.info('ChannelList - channel list sorted', sorted);
      }

      if (!disableAutoSelect) {
        onChannelSelect(sorted[0]);
      }

      channelListDispatcher({
        type: INIT_CHANNELS_SUCCESS,
        payload: sorted
      });
      const canSetMarkAsDelivered = sdk === null || sdk === void 0 ? void 0 : (_sdk$appInfo = sdk.appInfo) === null || _sdk$appInfo === void 0 ? void 0 : (_sdk$appInfo$premiumF = _sdk$appInfo.premiumFeatureList) === null || _sdk$appInfo$premiumF === void 0 ? void 0 : _sdk$appInfo$premiumF.find(feature => feature === DELIVERY_RECIPT$1);

      if (canSetMarkAsDelivered) {
        var _channelList;

        logger.info('ChannelList: Marking all channels as read'); // eslint-disable-next-line no-unused-expressions

        (_channelList = channelList) === null || _channelList === void 0 ? void 0 : _channelList.forEach((channel, idx) => {
          // Plan-based rate limits - minimum limit is 5 requests per second
          setTimeout(() => {
            // eslint-disable-next-line no-unused-expressions
            channel === null || channel === void 0 ? void 0 : channel.markAsDelivered();
          }, 500 * idx);
        });
      }
    });
  } else {
    logger.warning('ChannelList - there are no more channels');
  }
}

const pubSubHandleRemover = subscriber => {
  subscriber.forEach(s => {
    try {
      s.remove();
    } catch (_unused) {//
    }
  });
};
const pubSubHandler = (pubSub, channelListDispatcher) => {
  const subScriber = new Map();
  if (!pubSub) return subScriber;
  subScriber.set(index$5.CREATE_CHANNEL, pubSub.subscribe(index$5.CREATE_CHANNEL, msg => {
    const {
      channel
    } = msg;
    channelListDispatcher({
      type: 'CREATE_CHANNEL',
      payload: channel
    });
  }));
  subScriber.set(index$5.UPDATE_USER_MESSAGE, pubSub.subscribe(index$5.UPDATE_USER_MESSAGE, msg => {
    var _updatedChannel$lastM;

    const {
      channel,
      message
    } = msg;
    const updatedChannel = channel;

    if ((updatedChannel === null || updatedChannel === void 0 ? void 0 : (_updatedChannel$lastM = updatedChannel.lastMessage) === null || _updatedChannel$lastM === void 0 ? void 0 : _updatedChannel$lastM.messageId) === message.messageId) {
      updatedChannel.lastMessage = message;
    }

    if (channel) {
      channelListDispatcher({
        type: ON_LAST_MESSAGE_UPDATED,
        payload: updatedChannel
      });
    }
  }));
  subScriber.set(index$5.LEAVE_CHANNEL, pubSub.subscribe(index$5.LEAVE_CHANNEL, msg => {
    const {
      channel
    } = msg;
    channelListDispatcher({
      type: LEAVE_CHANNEL_SUCCESS,
      payload: channel.url
    });
  }));
  subScriber.set(index$5.SEND_MESSAGE_START, pubSub.subscribe(index$5.SEND_MESSAGE_START, msg => {
    const {
      channel
    } = msg;
    channelListDispatcher({
      type: CHANNEL_REPLACED_TO_TOP,
      payload: channel
    });
  }));
  return subScriber;
};

const noop = () => {};

const DELIVERY_RECIPT = 'delivery_receipt';

function ChannelList(props) {
  const {
    stores: {
      sdkStore = {},
      userStore = {}
    },
    config: {
      userId,
      isOnline,
      userListQuery,
      logger,
      pubSub,
      theme
    },
    dispatchers: {
      userDispatcher
    },
    queries = {},
    renderChannelPreview,
    renderHeader,
    renderUserProfile,
    disableUserProfile,
    allowProfileEdit,
    sortChannelList,
    onProfileEditSuccess,
    onThemeChange,
    onBeforeCreateChannel,
    onChannelSelect,
    disableAutoSelect
  } = props;
  const {
    config = {}
  } = props; // enable if it is true atleast once(both are flase by default)

  const enableEditProfile = allowProfileEdit || config.allowProfileEdit;
  const userDefinedDisableUserProfile = disableUserProfile || config.disableUserProfile;
  const userDefinedRenderProfile = renderUserProfile || config.renderUserProfile;
  const {
    sdk = {}
  } = sdkStore;
  const userFilledChannelListQuery = queries.channelListQuery;
  const userFilledApplicationUserListQuery = queries.applicationUserListQuery;
  const sdkError = sdkStore.error;
  const sdkIntialized = sdkStore.initialized;
  const [channelListStore, channelListDispatcher] = React.useReducer(reducer, channelListInitialState);
  const [user, setUser] = React.useState({});
  const [channelSource, setChannelSource] = React.useState({});
  const [showProfileEdit, setShowProfileEdit] = React.useState(false);
  const [sdkChannelHandlerId, setSdkChannelHandlerId] = React.useState(null);
  const {
    loading,
    currentChannel
  } = channelListStore;
  React.useEffect(() => {
    setUser(userStore.user);
  }, [userStore.user]);
  React.useEffect(() => {
    const subscriber = pubSubHandler(pubSub, channelListDispatcher);
    return () => {
      pubSubHandleRemover(subscriber);
    };
  }, [sdkIntialized]);
  React.useEffect(() => {
    setSdkChannelHandlerId(LocalizationContext.uuidv4);

    if (sdkIntialized) {
      logger.info('ChannelList: Setup channelHandlers');
      setupChannelList({
        sdk,
        sdkChannelHandlerId,
        channelListDispatcher,
        setChannelSource,
        onChannelSelect,
        userFilledChannelListQuery,
        logger,
        sortChannelList,
        disableAutoSelect
      });
    } else {
      logger.info('ChannelList: Removing channelHandlers'); // remove previous channelHandlers

      if (sdk && sdk.removeChannelHandler) {
        sdk.removeChannelHandler(sdkChannelHandlerId);
      } // remove channelSource


      setChannelSource({}); // cleanup

      channelListDispatcher({
        type: RESET_CHANNEL_LIST
      });
    }

    return () => {
      logger.info('ChannelList: Removing channelHandlers');

      if (sdk && sdk.removeChannelHandler) {
        sdk.removeChannelHandler(sdkChannelHandlerId);
      }
    };
  }, [sdkIntialized, userFilledChannelListQuery, sortChannelList]);
  const {
    allChannels
  } = channelListStore;
  const sortedChannels = sortChannelList && typeof sortChannelList === 'function' ? sortChannelList(allChannels) : allChannels;

  if (sortedChannels.length !== allChannels.length) {
    const warning = `ChannelList: You have removed/added extra channels on sortChannelList
      this could cause unexpected problems`; // eslint-disable-next-line no-console

    console.warn(warning, {
      before: allChannels,
      after: sortedChannels
    });
    logger.warning(warning, {
      before: allChannels,
      after: sortedChannels
    });
  }

  React.useEffect(() => {
    channelListDispatcher({
      type: SET_AUTO_SELECT_CHANNEL_ITEM,
      payload: disableAutoSelect
    });
  }, [disableAutoSelect]);
  React.useEffect(() => {
    if (!sdk || !sdk.GroupChannel || !currentChannel) {
      return;
    }

    sdk.GroupChannel.getChannel(currentChannel, groupChannel => {
      if (groupChannel) {
        onChannelSelect(groupChannel);
      } else {
        onChannelSelect(null);
      }
    });
  }, [currentChannel]);
  return /*#__PURE__*/React__default["default"].createElement(index$5.UserProfileProvider, {
    className: "sendbird-channel-list",
    disableUserProfile: userDefinedDisableUserProfile,
    renderUserProfile: userDefinedRenderProfile
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-list__header"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelHeader, {
    renderHeader: renderHeader,
    user: user,
    onEdit: () => {
      if (enableEditProfile) {
        setShowProfileEdit(true);
      }
    },
    allowProfileEdit: enableEditProfile,
    iconButton: /*#__PURE__*/React__default["default"].createElement(AddChannel, {
      disabled: !isOnline,
      userListQuery: userListQuery,
      sdk: sdk,
      channelListDispatcher: channelListDispatcher,
      userId: userId,
      userFilledApplicationUserListQuery: userFilledApplicationUserListQuery,
      onBeforeCreateChannel: onBeforeCreateChannel
    })
  })), showProfileEdit && /*#__PURE__*/React__default["default"].createElement(ConnectedEditUserProfile, {
    onThemeChange: onThemeChange,
    user: user,
    onCancel: () => {
      setShowProfileEdit(false);
    },
    onSubmit: (newName, newFile) => {
      sdk.updateCurrentUserInfoWithProfileImage(newName, newFile, updatedUser => {
        userDispatcher({
          type: actionTypes.UPDATE_USER_INFO,
          payload: updatedUser
        });

        if (onProfileEditSuccess && typeof onProfileEditSuccess === 'function') {
          onProfileEditSuccess(updatedUser);
        }
      });
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-list__body",
    onScroll: e => {
      const fetchMore = e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight;

      if (fetchMore && channelSource.hasNext) {
        logger.info('ChannelList: Fetching more channels');
        channelListDispatcher({
          type: FETCH_CHANNELS_START
        });
        channelSource.next((response, error) => {
          var _sdk$appInfo, _sdk$appInfo$premiumF;

          const swapParams = sdk.getErrorFirstCallback();
          let channelList = response;
          let err = error;

          if (swapParams) {
            channelList = error;
            err = response;
          }

          if (err) {
            logger.info('ChannelList: Fetching channels failed', err);
            channelListDispatcher({
              type: FETCH_CHANNELS_FAILURE,
              payload: channelList
            });
            return;
          }

          logger.info('ChannelList: Fetching channels successful', channelList);
          channelListDispatcher({
            type: FETCH_CHANNELS_SUCCESS,
            payload: channelList
          });
          const canSetMarkAsDelivered = sdk === null || sdk === void 0 ? void 0 : (_sdk$appInfo = sdk.appInfo) === null || _sdk$appInfo === void 0 ? void 0 : (_sdk$appInfo$premiumF = _sdk$appInfo.premiumFeatureList) === null || _sdk$appInfo$premiumF === void 0 ? void 0 : _sdk$appInfo$premiumF.find(feature => feature === DELIVERY_RECIPT);

          if (canSetMarkAsDelivered) {
            var _channelList;

            logger.info('ChannelList: Marking all channels as read'); // eslint-disable-next-line no-unused-expressions

            (_channelList = channelList) === null || _channelList === void 0 ? void 0 : _channelList.forEach((channel, idx) => {
              // Plan-based rate limits - minimum limit is 5 requests per second
              setTimeout(() => {
                // eslint-disable-next-line no-unused-expressions
                channel === null || channel === void 0 ? void 0 : channel.markAsDelivered();
              }, 500 * idx);
            });
          }
        });
      }
    }
  }, sdkError && /*#__PURE__*/React__default["default"].createElement(ChannelsPlaceholder, {
    type: index$3.PlaceHolderTypes.WRONG
  }), /*#__PURE__*/React__default["default"].createElement("div", null, sortedChannels && sortedChannels.map((channel, idx) => {
    const onLeaveChannel = (c, cb) => {
      logger.info('ChannelList: Leaving channel', c);
      c.leave().then(res => {
        logger.info('ChannelList: Leaving channel success', res);

        if (cb && typeof cb === 'function') {
          cb(res, null);
        }

        channelListDispatcher({
          type: LEAVE_CHANNEL_SUCCESS,
          payload: channel.url
        });
      }).catch(err => {
        logger.error('ChannelList: Leaving channel failed', err);

        if (cb && typeof cb === 'function') {
          cb(null, err);
        }
      });
    };

    const onClick = () => {
      if (!isOnline) {
        return;
      }

      logger.info('ChannelList: Clicked on channel:', channel);
      channelListDispatcher({
        type: SET_CURRENT_CHANNEL,
        payload: channel.url
      });
    };

    return renderChannelPreview ?
    /*#__PURE__*/
    // eslint-disable-next-line
    React__default["default"].createElement("div", {
      key: channel.url,
      onClick: onClick
    }, renderChannelPreview({
      channel,
      onLeaveChannel
    })) : /*#__PURE__*/React__default["default"].createElement(ChannelPreview, {
      key: channel.url,
      tabIndex: idx,
      onClick: onClick,
      channel: channel,
      currentUser: user,
      theme: theme,
      isActive: channel.url === currentChannel // todo - potential performance hit refactor
      ,
      ChannelAction: /*#__PURE__*/React__default["default"].createElement(ChannelPreviewAction, {
        disabled: !isOnline,
        onLeaveChannel: () => onLeaveChannel(channel)
      })
    });
  })), (!sdkIntialized || loading) && /*#__PURE__*/React__default["default"].createElement(ChannelsPlaceholder, {
    type: index$3.PlaceHolderTypes.LOADING
  }), //  placeholder
  (!allChannels || allChannels.length === 0) && /*#__PURE__*/React__default["default"].createElement(ChannelsPlaceholder, {
    type: index$3.PlaceHolderTypes.NO_CHANNELS
  })));
}

ChannelList.propTypes = {
  stores: PropTypes__default["default"].shape({
    sdkStore: PropTypes__default["default"].shape({
      initialized: PropTypes__default["default"].bool
    }),
    userStore: PropTypes__default["default"].shape({
      user: PropTypes__default["default"].shape({})
    })
  }).isRequired,
  dispatchers: PropTypes__default["default"].shape({
    userDispatcher: PropTypes__default["default"].func
  }).isRequired,
  config: PropTypes__default["default"].shape({
    userId: PropTypes__default["default"].string.isRequired,
    userListQuery: PropTypes__default["default"].func,
    theme: PropTypes__default["default"].string,
    isOnline: PropTypes__default["default"].bool,
    logger: PropTypes__default["default"].shape({
      info: PropTypes__default["default"].func,
      error: PropTypes__default["default"].func,
      warning: PropTypes__default["default"].func
    }),
    pubSub: PropTypes__default["default"].shape({
      subscribe: PropTypes__default["default"].func,
      publish: PropTypes__default["default"].func
    })
  }).isRequired,
  queries: PropTypes__default["default"].shape({
    channelListQuery: PropTypes__default["default"].shape({
      channelNameContainsFilter: PropTypes__default["default"].string,
      channelUrlsFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
      customTypesFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
      customTypeStartsWithFilter: PropTypes__default["default"].string,
      hiddenChannelFilter: PropTypes__default["default"].string,
      includeEmpty: PropTypes__default["default"].bool,
      limit: PropTypes__default["default"].number,
      memberStateFilter: PropTypes__default["default"].string,
      metadataOrderKeyFilter: PropTypes__default["default"].string,
      nicknameContainsFilter: PropTypes__default["default"].string,
      order: PropTypes__default["default"].string,
      publicChannelFilter: PropTypes__default["default"].string,
      superChannelFilter: PropTypes__default["default"].string,
      unreadChannelFilter: PropTypes__default["default"].string,
      userIdsExactFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
      userIdsIncludeFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
      userIdsIncludeFilterQueryType: PropTypes__default["default"].string
    }),
    applicationUserListQuery: PropTypes__default["default"].shape({
      limit: PropTypes__default["default"].number,
      userIdsFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
      metaDataKeyFilter: PropTypes__default["default"].string,
      metaDataValuesFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)
    })
  }),
  onBeforeCreateChannel: PropTypes__default["default"].func,
  renderChannelPreview: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  disableUserProfile: PropTypes__default["default"].bool,
  renderUserProfile: PropTypes__default["default"].func,
  allowProfileEdit: PropTypes__default["default"].bool,
  sortChannelList: PropTypes__default["default"].func,
  onThemeChange: PropTypes__default["default"].func,
  onProfileEditSuccess: PropTypes__default["default"].func,
  renderHeader: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  onChannelSelect: PropTypes__default["default"].func,
  disableAutoSelect: PropTypes__default["default"].bool
};
ChannelList.defaultProps = {
  onBeforeCreateChannel: null,
  renderChannelPreview: null,
  renderHeader: null,
  disableUserProfile: false,
  renderUserProfile: null,
  allowProfileEdit: false,
  onThemeChange: null,
  sortChannelList: null,
  onProfileEditSuccess: null,
  queries: {},
  onChannelSelect: noop,
  disableAutoSelect: false
};
var ChannelList$1 = LocalizationContext.withSendbirdContext(ChannelList);

module.exports = ChannelList$1;
//# sourceMappingURL=ChannelList.js.map
