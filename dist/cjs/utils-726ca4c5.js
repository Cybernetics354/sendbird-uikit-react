'use strict';

var DEFAULT_URL_PREFIX = 'https://static.sendbird.com/sample/cover/cover_';
var getOpenChannelAvatar = function (channel) {
  if (channel && channel.coverUrl) {
    return channel.coverUrl;
  }
};
var getChannelAvatarSource = function (channel, currentUserId) {
  if (channel && channel.coverUrl) {
    if (!new RegExp("^".concat(DEFAULT_URL_PREFIX)).test(channel.coverUrl)) {
      return channel.coverUrl;
    }
  }

  return channel && channel.members ? channel.members.filter(function (member) {
    return member.userId !== currentUserId;
  }).map(function (_a) {
    var profileUrl = _a.profileUrl;
    return profileUrl;
  }) : [];
};
var useDefaultAvatar = function (channel) {
  if (channel && channel.coverUrl) {
    if (new RegExp("^".concat(DEFAULT_URL_PREFIX)).test(channel.coverUrl)) {
      return true;
    }

    return false;
  }

  return true;
};

exports.getChannelAvatarSource = getChannelAvatarSource;
exports.getOpenChannelAvatar = getOpenChannelAvatar;
exports.useDefaultAvatar = useDefaultAvatar;
//# sourceMappingURL=utils-726ca4c5.js.map
