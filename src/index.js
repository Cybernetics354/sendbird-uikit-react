export MessageHoc from "./smart-components/Conversation/components/MessageHOC";

// sendbird provider component to handle sdk connection and data
export SendBirdProvider from './lib/Sendbird';

// complete app component - If user wants an out of the box solution
export App from './smart-components/App/index';
export Sendbird from './lib/Sendbird'

// Individual smart components
export ChannelSettings from './smart-components/ChannelSettings';
export ChannelList from './smart-components/ChannelList';
export Channel, {
  getEmojiCategoriesFromEmojiContainer,
  getAllEmojisFromEmojiContainer,
  getEmojisFromEmojiContainer,
} from './smart-components/Conversation';
export getStringSet from './ui/Label/stringSet';
export OpenChannel from './smart-components/OpenchannelConversation';
export OpenChannelSettings from './smart-components/OpenChannelSettings';
export MessageSearch from './smart-components/MessageSearch';

export MessageSearchPannel from './smart-components/MessageSearch/messageSearchPannel';

// HOC for using ui-kit state
// withBird(MyCustomComponent) will give the sendbird state as props to MyCustomComponent
export withSendBird from './lib/SendbirdSdkContext';
export sendBirdSelectors from './lib/selectors';
export useSendbirdStateContext from './hooks/useSendbirdStateContext';

export SendbirdReducer from './smart-components/Conversation/dux/reducers.js';
