import { _ as __assign, c as __spreadArray } from './LocalizationContext-aba63676.js';

var SUPPORTED_MIMES = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp' // not supported in IE
  ],
  VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4'],
  AUDIO: ['audio/aac', 'audio/midi', 'audio/x-midi', 'audio/mpeg', 'audio/ogg', 'audio/opus', 'audio/wav', 'audio/webm', 'audio/3gpp', 'audio/3gpp2', 'audio/mp3']
};
var UIKitMessageTypes = {
  ADMIN: "ADMIN",
  TEXT: "TEXT",
  FILE: "FILE",
  THUMBNAIL: "THUMBNAIL",
  OG: "OG",
  UNKNOWN: "UNKNOWN"
};
var UIKitFileTypes = {
  IMAGE: "IMAGE",
  AUDIO: "AUDIO",
  VIDEO: "VIDEO",
  GIF: "GIF",
  OTHERS: "OTHERS"
};
var SendingMessageStatus = {
  NONE: 'none',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
  PENDING: 'pending'
};
var OutgoingMessageStates = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  DELIVERED: 'DELIVERED',
  READ: 'READ'
};
var isTextuallyNull = function (text) {
  if (text === '' || text === null) {
    return true;
  }

  return false;
};
var isImage = function (type) {
  return SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0;
};
var isVideo = function (type) {
  return SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0;
};
var isGif = function (type) {
  return type === 'image/gif';
};
var isSupportedFileView = function (type) {
  return isImage(type) || isVideo(type);
};
var isAudio = function (type) {
  return SUPPORTED_MIMES.AUDIO.indexOf(type) >= 0;
};
var getUIKitFileTypes = function () {
  return __assign({}, UIKitFileTypes);
};
var getUIKitFileType = function (type) {
  if (isGif(type)) return UIKitFileTypes.GIF;
  if (isImage(type)) return UIKitFileTypes.IMAGE;
  if (isVideo(type)) return UIKitFileTypes.VIDEO;
  if (isAudio(type)) return UIKitFileTypes.AUDIO;
  return UIKitFileTypes.OTHERS;
};
var getOutgoingMessageStates = function () {
  return __assign({}, OutgoingMessageStates);
};
var getOutgoingMessageState = function (channel, message) {
  var _a;

  if (message.sendingStatus === 'pending') return OutgoingMessageStates.PENDING;
  if (message.sendingStatus === 'failed') return OutgoingMessageStates.FAILED;

  if ((_a = channel === null || channel === void 0 ? void 0 : channel.isGroupChannel) === null || _a === void 0 ? void 0 : _a.call(channel)) {
    /* GroupChannel only */
    if (channel.getUnreadMemberCount(message) === 0) {
      return OutgoingMessageStates.READ;
    } else if (channel.getUndeliveredMemberCount(message) === 0) {
      return OutgoingMessageStates.DELIVERED;
    }
  }

  if (message.sendingStatus === 'succeeded') return OutgoingMessageStates.SENT;
  return OutgoingMessageStates.NONE;
};
var isSentMessage = function (channel, message) {
  return getOutgoingMessageState(channel, message) === OutgoingMessageStates.SENT || getOutgoingMessageState(channel, message) === OutgoingMessageStates.DELIVERED || getOutgoingMessageState(channel, message) === OutgoingMessageStates.READ;
};

var isFailedMessage = function (channel, message) {
  return getOutgoingMessageState(channel, message) === OutgoingMessageStates.FAILED;
};
var isPendingMessage = function (channel, message) {
  return getOutgoingMessageState(channel, message) === OutgoingMessageStates.PENDING;
};
var isSentStatus = function (state) {
  return state === OutgoingMessageStates.SENT || state === OutgoingMessageStates.DELIVERED || state === OutgoingMessageStates.READ;
};
var isAdminMessage = function (message) {
  var _a;

  return message && (((_a = message.isAdminMessage) === null || _a === void 0 ? void 0 : _a.call(message)) || message['messageType'] && message.messageType === 'admin');
};
var isUserMessage = function (message) {
  var _a;

  return message && (((_a = message.isUserMessage) === null || _a === void 0 ? void 0 : _a.call(message)) || message['messageType'] && message.messageType === 'user');
};
var isFileMessage = function (message) {
  var _a;

  return message && (((_a = message.isFileMessage) === null || _a === void 0 ? void 0 : _a.call(message)) || message['messageType'] && message.messageType === 'file');
};
var isOGMessage = function (message) {
  var _a;

  return !!(message && isUserMessage(message) && (message === null || message === void 0 ? void 0 : message.ogMetaData) && ((_a = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _a === void 0 ? void 0 : _a.url));
};
var isTextMessage = function (message) {
  return isUserMessage(message) && !isOGMessage(message);
};
var isThumbnailMessage = function (message) {
  return message && isFileMessage(message) && isSupportedFileView(message.type);
};
var isImageMessage = function (message) {
  return message && isThumbnailMessage(message) && isImage(message.type);
};
var isVideoMessage = function (message) {
  return message && isThumbnailMessage(message) && isVideo(message.type);
};
var isGifMessage = function (message) {
  return message && isThumbnailMessage(message) && isGif(message.type);
};
var isAudioMessage = function (message) {
  return message && isFileMessage(message) && isAudio(message.type);
};
var isEditedMessage = function (message) {
  return isUserMessage(message) && (message === null || message === void 0 ? void 0 : message.updatedAt) > 0;
};
var getUIKitMessageTypes = function () {
  return __assign({}, UIKitMessageTypes);
};
var getUIKitMessageType = function (message) {
  if (isAdminMessage(message)) return UIKitMessageTypes.ADMIN;

  if (isUserMessage(message)) {
    return isOGMessage(message) ? UIKitMessageTypes.OG : UIKitMessageTypes.TEXT;
  }

  if (isFileMessage(message)) {
    return isThumbnailMessage(message) ? UIKitMessageTypes.THUMBNAIL : UIKitMessageTypes.FILE;
  }

  return UIKitMessageTypes.UNKNOWN;
};
var getSendingMessageStatus = function () {
  return __assign({}, SendingMessageStatus);
};

var reducer = function (accumulator, currentValue) {
  if (Array.isArray(currentValue)) {
    return __spreadArray(__spreadArray([], accumulator, true), currentValue, true);
  } else {
    accumulator.push(currentValue);
    return accumulator;
  }
};

var getClassName = function (classNames) {
  return Array.isArray(classNames) ? classNames.reduce(reducer, []).join(' ') : classNames;
};
var isReactedBy = function (userId, reaction) {
  return reaction.userIds.some(function (reactorUserId) {
    return reactorUserId === userId;
  });
};
var getEmojiTooltipString = function (reaction, userId, memberNicknamesMap, stringSet) {
  var you = '';

  if (isReactedBy(userId, reaction)) {
    you = reaction.userIds.length === 1 ? stringSet.TOOLTIP__YOU : stringSet.TOOLTIP__AND_YOU;
  }

  return "".concat(reaction.userIds.filter(function (reactorUserId) {
    return reactorUserId !== userId;
  }).map(function (reactorUserId) {
    return memberNicknamesMap.get(reactorUserId) || stringSet.TOOLTIP__UNKNOWN_USER;
  }).join(', ')).concat(you);
};
var URL_REG = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var isUrl = function (text) {
  return URL_REG.test(text);
};
var truncateString = function (fullStr, strLen) {
  if (!strLen) strLen = 40;
  if (fullStr === null || fullStr === undefined) return '';
  if (fullStr.length <= strLen) return fullStr;
  var separator = '...';
  var sepLen = separator.length;
  var charsToShow = strLen - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);
  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};
var copyToClipboard = function (text) {
  // @ts-ignore: Unreachable code error
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    // @ts-ignore: Unreachable code error
    return window.clipboardData.setData('Text', text);
  }

  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  return false;
};
var getEmojiListAll = function (emojiContainer) {
  var _a;

  return (_a = emojiContainer === null || emojiContainer === void 0 ? void 0 : emojiContainer.emojiCategories) === null || _a === void 0 ? void 0 : _a.map(function (emojiCategory) {
    return emojiCategory.emojis;
  }).reduce(function (prevArr, currArr) {
    return prevArr.concat(currArr);
  }, []);
};
var getEmojiMapAll = function (emojiContainer) {
  var _a;

  var emojiMap = new Map();
  (_a = emojiContainer === null || emojiContainer === void 0 ? void 0 : emojiContainer.emojiCategories) === null || _a === void 0 ? void 0 : _a.forEach(function (category) {
    var _a;

    (_a = category === null || category === void 0 ? void 0 : category.emojis) === null || _a === void 0 ? void 0 : _a.forEach(function (emoji) {
      if (emoji && emoji.key) {
        emojiMap.set(emoji.key, emoji);
      }
    });
  });
  return emojiMap;
};
var getUserName = function (user) {
  return (user === null || user === void 0 ? void 0 : user.friendName) || (user === null || user === void 0 ? void 0 : user.nickname) || (user === null || user === void 0 ? void 0 : user.userId);
};
var getSenderName = function (message) {
  return message.sender && getUserName(message.sender);
};
var hasSameMembers = function (a, b) {
  if (a === b) {
    return true;
  }

  if (a == null || b == null) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  var sortedA = __spreadArray([], a, true).sort();

  var sortedB = __spreadArray([], b, true).sort();

  for (var i = 0; i < sortedA.length; ++i) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
};
var isFriend = function (user) {
  return !!(user.friendDiscoveryKey || user.friendName);
};
var filterMessageListParams = function (params, message) {
  var _a, _b, _c;

  if ((params === null || params === void 0 ? void 0 : params.messageType) && params.messageType !== message.messageType) {
    return false;
  }

  if (((_a = params === null || params === void 0 ? void 0 : params.customTypes) === null || _a === void 0 ? void 0 : _a.length) > 0) {
    var customTypes = params.customTypes.filter(function (item) {
      return item !== '*';
    }); // Because Chat SDK inserts '*' when customTypes is empty

    if (customTypes.length > 0 && !customTypes.includes(message.customType)) {
      return false;
    }
  }

  if ((params === null || params === void 0 ? void 0 : params.senderUserIds) && ((_b = params === null || params === void 0 ? void 0 : params.senderUserIds) === null || _b === void 0 ? void 0 : _b.length) > 0) {
    if ((message === null || message === void 0 ? void 0 : message.isUserMessage()) || message.isFileMessage()) {
      var messageSender = message.sender || message['_sender'];

      if (!((_c = params === null || params === void 0 ? void 0 : params.senderUserIds) === null || _c === void 0 ? void 0 : _c.includes(messageSender === null || messageSender === void 0 ? void 0 : messageSender.userId))) {
        return false;
      }
    } else {
      return false;
    }
  }

  if (!(params === null || params === void 0 ? void 0 : params.includeParentMessageInfo) && ((message === null || message === void 0 ? void 0 : message.parentMessageId) || (message === null || message === void 0 ? void 0 : message.parentMessage))) {
    return false;
  }

  return true;
};
var filterChannelListParams = function (params, channel, currentUserId) {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  if (!(params === null || params === void 0 ? void 0 : params.includeEmpty) && (channel === null || channel === void 0 ? void 0 : channel.lastMessage) && channel.lastMessage === null) {
    return false;
  }

  if (((_a = params === null || params === void 0 ? void 0 : params._searchFilter) === null || _a === void 0 ? void 0 : _a.search_query) && ((_b = params._searchFilter.search_fields) === null || _b === void 0 ? void 0 : _b.length) > 0) {
    var searchFilter = params._searchFilter;
    var searchQuery_1 = searchFilter.search_query;
    var searchFields = searchFilter.search_fields;

    if (searchQuery_1 && searchFields && searchFields.length > 0) {
      if (!searchFields.some(function (searchField) {
        switch (searchField) {
          case 'channel_name':
            {
              return channel.name.toLowerCase().includes(searchQuery_1.toLowerCase());
            }

          case 'member_nickname':
            {
              return channel.members.some(function (member) {
                return member.nickname.toLowerCase().includes(searchQuery_1.toLowerCase());
              });
            }

          default:
            {
              return true;
            }
        }
      })) {
        return false;
      }
    }
  }

  if (((_d = (_c = params === null || params === void 0 ? void 0 : params._userIdsFilter) === null || _c === void 0 ? void 0 : _c.userIds) === null || _d === void 0 ? void 0 : _d.length) > 0) {
    var userIdsFilter = params._userIdsFilter;
    var includeMode = userIdsFilter.includeMode,
        queryType = userIdsFilter.queryType;
    var userIds = userIdsFilter.userIds;
    var memberIds_1 = channel.members.map(function (member) {
      return member.userId;
    });

    if (!includeMode) {
      // exact match
      if (!userIds.includes(currentUserId)) {
        userIds.push(currentUserId); // add the caller's userId if not added already.
      }

      if (channel.members.length > userIds.length) {
        return false; // userIds may contain one or more non-member(s).
      }

      if (!hasSameMembers(userIds, memberIds_1)) {
        return false;
      }
    } else if (userIds.length > 0) {
      // inclusive
      switch (queryType) {
        case 'AND':
          {
            if (userIds.some(function (userId) {
              return !memberIds_1.includes(userId);
            })) {
              return false;
            }

            break;
          }

        case 'OR':
          {
            if (userIds.every(function (userId) {
              return !memberIds_1.includes(userId);
            })) {
              return false;
            }

            break;
          }
      }
    }
  }

  if ((params === null || params === void 0 ? void 0 : params.includeEmpty) === false && (channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null) {
    return false;
  }

  if ((params === null || params === void 0 ? void 0 : params.includeFrozen) === false && (channel === null || channel === void 0 ? void 0 : channel.isFrozen) === true) {
    return false;
  }

  if (((_e = params === null || params === void 0 ? void 0 : params.customTypesFilter) === null || _e === void 0 ? void 0 : _e.length) > 0 && !params.customTypesFilter.includes(channel === null || channel === void 0 ? void 0 : channel.customType)) {
    return false;
  }

  if ((params === null || params === void 0 ? void 0 : params.customTypeStartsWithFilter) && !new RegExp("^".concat(params.customTypeStartsWithFilter)).test(channel === null || channel === void 0 ? void 0 : channel.customType)) {
    return false;
  }

  if ((params === null || params === void 0 ? void 0 : params.channelNameContainsFilter) && !((_f = channel === null || channel === void 0 ? void 0 : channel.name) === null || _f === void 0 ? void 0 : _f.toLowerCase().includes(params.channelNameContainsFilter.toLowerCase()))) {
    return false;
  }

  if (params === null || params === void 0 ? void 0 : params.nicknameContainsFilter) {
    var lowerCasedSubString_1 = params.nicknameContainsFilter.toLowerCase();

    if ((_g = channel === null || channel === void 0 ? void 0 : channel.members) === null || _g === void 0 ? void 0 : _g.every(function (member) {
      return !member.nickname.toLowerCase().includes(lowerCasedSubString_1);
    })) {
      return false;
    }
  }

  if (((_h = params === null || params === void 0 ? void 0 : params.channelUrlsFilter) === null || _h === void 0 ? void 0 : _h.length) > 0 && !params.channelUrlsFilter.includes(channel === null || channel === void 0 ? void 0 : channel.url)) {
    return false;
  }

  if (params === null || params === void 0 ? void 0 : params.memberStateFilter) {
    switch (params.memberStateFilter) {
      case 'joined_only':
        if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'joined') {
          return false;
        }

        break;

      case 'invited_only':
        if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'invited') {
          return false;
        }

        break;

      case 'invited_by_friend':
        if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'invited' || !isFriend(channel.inviter)) {
          return false;
        }

        break;

      case 'invited_by_non_friend':
        if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'invited' || isFriend(channel.inviter)) {
          return false;
        }

        break;
    }
  }

  if (params === null || params === void 0 ? void 0 : params.hiddenChannelFilter) {
    switch (params.hiddenChannelFilter) {
      case 'unhidden_only':
        if ((channel === null || channel === void 0 ? void 0 : channel.isHidden) || (channel === null || channel === void 0 ? void 0 : channel.hiddenState) !== 'unhidden') {
          return false;
        }

        break;

      case 'hidden_only':
        if (!(channel === null || channel === void 0 ? void 0 : channel.isHidden)) {
          return false;
        }

        break;

      case 'hidden_allow_auto_unhide':
        if (!(channel === null || channel === void 0 ? void 0 : channel.isHidden) || (channel === null || channel === void 0 ? void 0 : channel.hiddenState) !== 'hidden_allow_auto_unhide') {
          return false;
        }

        break;

      case 'hidden_prevent_auto_unhide':
        if (!(channel === null || channel === void 0 ? void 0 : channel.isHidden) || (channel === null || channel === void 0 ? void 0 : channel.hiddenState) !== 'hidden_prevent_auto_unhide') {
          return false;
        }

        break;
    }
  }

  if (params === null || params === void 0 ? void 0 : params.unreadChannelFilter) {
    switch (params.unreadChannelFilter) {
      case 'unread_message':
        if ((channel === null || channel === void 0 ? void 0 : channel.unreadMessageCount) === 0) {
          return false;
        }

        break;
    }
  }

  if (params === null || params === void 0 ? void 0 : params.publicChannelFilter) {
    switch (params.publicChannelFilter) {
      case 'public':
        if (!(channel === null || channel === void 0 ? void 0 : channel.isPublic)) {
          return false;
        }

        break;

      case 'private':
        if (channel === null || channel === void 0 ? void 0 : channel.isPublic) {
          return false;
        }

        break;
    }
  }

  if (params === null || params === void 0 ? void 0 : params.superChannelFilter) {
    switch (params.superChannelFilter) {
      case 'super':
        if (!(channel === null || channel === void 0 ? void 0 : channel.isSuper)) {
          return false;
        }

        break;

      case 'nonsuper':
        if (channel === null || channel === void 0 ? void 0 : channel.isSuper) {
          return false;
        }

        break;
    }
  }

  return true;
};
var binarySearch = function (list, number) {
  var pivot = Math.floor(list.length / 2);

  if (list[pivot] === number) {
    return pivot;
  }

  var leftList = list.slice(0, pivot);
  var rightList = list.slice(pivot + 1, list.length);

  if (list[pivot] > number) {
    return pivot + 1 + (rightList.length === 0 ? 0 : binarySearch(rightList, number));
  } else {
    return leftList.length === 0 ? pivot : binarySearch(leftList, number);
  }
}; // This is required when channel is displayed on channel list by filter

var getChannelsWithUpsertedChannel = function (channels, channel) {
  var _a;

  if (channels.some(function (ch) {
    return ch.url === channel.url;
  })) {
    return channels.map(function (ch) {
      return ch.url === channel.url ? channel : ch;
    });
  }

  var targetIndex = binarySearch(channels.map(function (channel) {
    var _a;

    return ((_a = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _a === void 0 ? void 0 : _a.createdAt) || (channel === null || channel === void 0 ? void 0 : channel.createdAt);
  }), ((_a = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _a === void 0 ? void 0 : _a.createdAt) || (channel === null || channel === void 0 ? void 0 : channel.createdAt));
  return __spreadArray(__spreadArray(__spreadArray([], channels.slice(0, targetIndex), true), [channel], false), channels.slice(targetIndex, channels.length), true);
};

export { isVideo as A, isGif as B, isFileMessage as C, isSupportedFileView as D, getUIKitMessageTypes as E, getSenderName as F, isTextMessage as G, isOGMessage as H, getUIKitMessageType as I, isImageMessage as J, isAudioMessage as K, isImage as L, getOutgoingMessageStates as a, getSendingMessageStatus as b, filterMessageListParams as c, getOutgoingMessageState as d, isSentStatus as e, filterChannelListParams as f, getChannelsWithUpsertedChannel as g, isUserMessage as h, isTextuallyNull as i, isFailedMessage as j, isPendingMessage as k, isSentMessage as l, getClassName as m, copyToClipboard as n, getEmojiListAll as o, getEmojiMapAll as p, isReactedBy as q, getEmojiTooltipString as r, isEditedMessage as s, truncateString as t, getUIKitFileType as u, isVideoMessage as v, isGifMessage as w, isUrl as x, getUIKitFileTypes as y, isThumbnailMessage as z };
//# sourceMappingURL=index-12a04c2d.js.map
