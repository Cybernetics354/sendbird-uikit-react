export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-aba63676.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-aba63676.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-0d29f4f6.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-5b8598da.js';
import './index-12a04c2d.js';
import 'css-vars-ponyfill';
import './index-c7dcaeef.js';
import './LeaveChannel-43b6e8f0.js';
import './index-2bfec6a5.js';
import './index-eb37ea5b.js';
import './utils-3f292c5c.js';
import './index-318691e3.js';
import './index-64e63e7b.js';
import './index-113ea9b8.js';
import './index-2ae03b03.js';
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
