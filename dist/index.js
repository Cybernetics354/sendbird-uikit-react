export { default as SendBirdProvider, default as Sendbird } from './SendbirdProvider.js';
export { A as App, M as MessageSearchPannel } from './index-75990176.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-84f2379a.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-84f2379a.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-54d7aad7.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-92c624cb.js';
import './index-8a12b66b.js';
import 'css-vars-ponyfill';
import './index-d7f49a62.js';
import './LeaveChannel-08e3c119.js';
import './index-9a85350e.js';
import './index-788bacf3.js';
import './utils-da4b45ca.js';
import './index-f004d337.js';
import './index-1b1f17ac.js';
import './index-aef006e1.js';
import './index-aa8f7a2f.js';
import 'react-dom';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext };
//# sourceMappingURL=index.js.map
