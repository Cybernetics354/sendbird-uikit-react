'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var index = require('./index-2f4c431c.js');
var LocalizationContext = require('./LocalizationContext-a892fa67.js');
var index$1 = require('./index-17a2b0e2.js');
var index$2 = require('./index-b725679c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Badge(_ref) {
  let {
    count,
    maxLevel,
    className
  } = _ref;
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  const maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-badge'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-badge__text"
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    type: index.LabelTypography.CAPTION_2,
    color: index.LabelColors.ONCONTENT_1
  }, count > maximumNumber ? `${maximumNumber}${stringSet.BADGE__OVER}` : count)));
}
Badge.propTypes = {
  count: PropTypes__default["default"].number.isRequired,
  maxLevel: PropTypes__default["default"].number,
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
};
Badge.defaultProps = {
  maxLevel: 2,
  className: []
};

const filterUser = idsToFilter => currentId => idsToFilter.includes(currentId);

const InviteMembers = props => {
  const {
    userQueryCreator,
    closeModal,
    onSubmit,
    submitText,
    titleText,
    idsToFilter,
    swapParams
  } = props;
  const [users, setUsers] = React.useState([]);
  const [selectedUsers, setSelectedUsers] = React.useState({});
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  const [usersDataSource, setUsersDataSource] = React.useState({});
  const selectedCount = Object.keys(selectedUsers).length;
  React.useEffect(() => {
    const applicationUserListQuery = userQueryCreator();
    setUsersDataSource(applicationUserListQuery);
    applicationUserListQuery.next((res, err) => {
      // eslint-disable-next-line no-underscore-dangle
      let users_ = res;
      let error = err;

      if (swapParams) {
        users_ = err;
        error = users_;
      }

      if (error) {
        return;
      }

      setUsers(users_);
    });
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(index$1.Modal, {
    titleText: titleText,
    submitText: submitText,
    type: index$1.Type.PRIMARY,
    onCancel: closeModal,
    onSubmit: () => {
      const selectedUserList = Object.keys(selectedUsers);

      if (selectedUserList.length > 0) {
        onSubmit(selectedUserList);
        closeModal();
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    color: selectedCount > 0 ? index.LabelColors.PRIMARY : index.LabelColors.ONBACKGROUND_3,
    type: index.LabelTypography.CAPTION_1
  }, `${selectedCount} ${stringSet.MODAL__INVITE_MEMBER__SELECTEC}`), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-create-channel--scroll",
    onScroll: e => {
      const {
        hasNext
      } = usersDataSource;
      const fetchMore = e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight;

      if (hasNext && fetchMore) {
        usersDataSource.next((usersBatch, error) => {
          if (error) {
            return;
          }

          setUsers([...users, ...usersBatch]);
        });
      }
    }
  }, users.map(user => !filterUser(idsToFilter)(user.userId) && /*#__PURE__*/React__default["default"].createElement(index$2.UserListItem, {
    key: user.userId,
    user: user,
    checkBox: true,
    checked: selectedUsers[user.userId],
    onChange: event => {
      const modifiedSelectedUsers = LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, selectedUsers), {}, {
        [event.target.id]: event.target.checked
      });

      if (!event.target.checked) {
        delete modifiedSelectedUsers[event.target.id];
      }

      setSelectedUsers(modifiedSelectedUsers);
    }
  })))));
};

InviteMembers.propTypes = {
  idsToFilter: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
  swapParams: PropTypes__default["default"].bool,
  userQueryCreator: PropTypes__default["default"].func.isRequired,
  closeModal: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func.isRequired,
  submitText: PropTypes__default["default"].string,
  titleText: PropTypes__default["default"].string
};
InviteMembers.defaultProps = {
  swapParams: false,
  submitText: 'create',
  titleText: 'Create new channel',
  idsToFilter: []
};

const createDefaultUserListQuery = _ref => {
  let {
    sdk,
    userFilledApplicationUserListQuery = {}
  } = _ref;
  const params = sdk.createApplicationUserListQuery();

  if (userFilledApplicationUserListQuery) {
    Object.keys(userFilledApplicationUserListQuery).forEach(key => {
      params[key] = userFilledApplicationUserListQuery[key];
    });
  }

  return params;
};

const getApplicationAttributes = function () {
  let sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    appInfo = {}
  } = sdk;
  const {
    applicationAttributes = []
  } = appInfo;
  return applicationAttributes;
};

const isBroadcastChannelEnabled = function () {
  let sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const ALLOW_BROADCAST_CHANNEL = 'allow_broadcast_channel';
  const applicationAttributes = getApplicationAttributes(sdk);

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(ALLOW_BROADCAST_CHANNEL);
  }

  return false;
};
const isSuperGroupChannelEnabled = function () {
  let sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const ALLOW_SUPER_GROUP_CHANNEL = 'allow_super_group_channel';
  const applicationAttributes = getApplicationAttributes(sdk);

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(ALLOW_SUPER_GROUP_CHANNEL);
  }

  return false;
};
const setChannelType = (params, type) => {
  if (type === 'broadcast') {
    // eslint-disable-next-line no-param-reassign
    params.isBroadcast = true;
  }

  if (type === 'supergroup') {
    // eslint-disable-next-line no-param-reassign
    params.isSuper = true;
  }

  return params;
};
const createChannel = function (sdk, selectedUsers, onBeforeCreateChannel, userId) {
  let type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'group';
  return new Promise((resolve, reject) => {
    // have custom params
    if (onBeforeCreateChannel) {
      const params = onBeforeCreateChannel(selectedUsers);
      setChannelType(params, type);
      sdk.GroupChannel.createChannel(params, (response, error) => {
        const swapParams = sdk.getErrorFirstCallback();
        let groupChannel = response;
        let err = error;

        if (swapParams) {
          groupChannel = error;
          err = response;
        }

        if (err) {
          reject(err);
        }

        resolve(groupChannel);
      });
      return;
    }

    const params = new sdk.GroupChannelParams();
    params.addUserIds(selectedUsers);
    params.isDistinct = false;

    if (userId) {
      params.operatorUserIds = [userId];
    }

    setChannelType(params, type); // do not have custom params

    sdk.GroupChannel.createChannel(params, (response, error) => {
      const swapParams = sdk.getErrorFirstCallback();
      let groupChannel = response;
      let err = error;

      if (swapParams) {
        groupChannel = error;
        err = response;
      }

      if (err) {
        reject(err);
      }

      resolve(groupChannel);
    });
  });
};

const LeaveChannel = props => {
  const {
    onCloseModal,
    onLeaveChannel
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(index$1.Modal, {
    onCancel: onCloseModal,
    onSubmit: onLeaveChannel,
    submitText: "Leave",
    titleText: "Leave this channel?"
  });
};

LeaveChannel.propTypes = {
  onCloseModal: PropTypes__default["default"].func.isRequired,
  onLeaveChannel: PropTypes__default["default"].func.isRequired
};

exports.Badge = Badge;
exports.InviteMembers = InviteMembers;
exports.LeaveChannel = LeaveChannel;
exports.createChannel = createChannel;
exports.createDefaultUserListQuery = createDefaultUserListQuery;
exports.isBroadcastChannelEnabled = isBroadcastChannelEnabled;
exports.isSuperGroupChannelEnabled = isSuperGroupChannelEnabled;
//# sourceMappingURL=LeaveChannel-cf408875.js.map
