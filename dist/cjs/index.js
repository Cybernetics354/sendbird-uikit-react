'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Channel = require('./index-ed6104c5.js');
var SendbirdProvider = require('./SendbirdProvider.js');
var App = require('./index-8183e6b1.js');
var ChannelSettings = require('./ChannelSettings.js');
var ChannelList = require('./ChannelList.js');
var SendbirdSdkContext = require('./SendbirdSdkContext-89d804b3.js');
var OpenChannel = require('./OpenChannel.js');
var OpenChannelSettings = require('./OpenChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
var index = require('./index-54590273.js');
var React = require('react');
require('prop-types');
require('./index-57f8fd3e.js');
require('./index-9855395f.js');
require('./compareIds-074cb64a.js');
require('./index-de107146.js');
require('react-dom');
require('./index-711fa7d0.js');
require('./utils-ed11a663.js');
require('sendbird');
require('./actionTypes-e40dc21b.js');
require('css-vars-ponyfill');
require('./LeaveChannel-b7e05b82.js');
require('./index-3fd14343.js');
require('./index-8cfeb0c0.js');
require('./index-35e33281.js');

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = React.useContext(SendbirdSdkContext.SendbirdSdkContext);
  return context;
}

exports.Channel = Channel.Conversation;
exports.MessageHoc = Channel.MessageHoc;
exports.SendbirdReducer = Channel.reducer;
exports.getAllEmojisFromEmojiContainer = Channel.getAllEmojisFromEmojiContainer;
exports.getEmojiCategoriesFromEmojiContainer = Channel.getEmojiCategoriesFromEmojiContainer;
exports.getEmojisFromEmojiContainer = Channel.getEmojisFromEmojiContainer;
exports.SendBirdProvider = SendbirdProvider;
exports.Sendbird = SendbirdProvider;
exports.App = App.App;
exports.MessageSearchPannel = App.MessageSearchPannel;
exports.ChannelSettings = ChannelSettings;
exports.ChannelList = ChannelList;
exports.getStringSet = SendbirdSdkContext.getStringSet;
exports.withSendBird = SendbirdSdkContext.withSendbirdContext;
exports.OpenChannel = OpenChannel["default"];
exports.OpenChannelSettings = OpenChannelSettings;
exports.MessageSearch = MessageSearch;
exports.sendBirdSelectors = index.selectors;
exports.useSendbirdStateContext = useSendbirdStateContext;
//# sourceMappingURL=index.js.map
