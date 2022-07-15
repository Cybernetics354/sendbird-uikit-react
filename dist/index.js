export { C as Channel, M as MessageHoc, r as SendbirdReducer, a as getAllEmojisFromEmojiContainer, g as getEmojiCategoriesFromEmojiContainer, b as getEmojisFromEmojiContainer } from './index-226de335.js';
export { default as SendBirdProvider, default as Sendbird } from './SendbirdProvider.js';
export { A as App, M as MessageSearchPannel } from './index-3be5b1ee.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
import { S as SendbirdSdkContext } from './SendbirdSdkContext-d0ef7c7c.js';
export { g as getStringSet, w as withSendBird } from './SendbirdSdkContext-d0ef7c7c.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-fac6acf6.js';
import { useContext } from 'react';
import 'prop-types';
import './index-b3ce6401.js';
import './index-7739d6e2.js';
import './compareIds-86398458.js';
import './index-acb952b8.js';
import 'react-dom';
import './index-1f37a0d4.js';
import './utils-a4a179f4.js';
import 'sendbird';
import './actionTypes-283421d3.js';
import 'css-vars-ponyfill';
import './LeaveChannel-99362c20.js';
import './index-ca049a84.js';
import './index-ad25d36a.js';
import './index-c179bd8f.js';

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
