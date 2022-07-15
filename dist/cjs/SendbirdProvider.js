'use strict';

var SendbirdSdkContext = require('./SendbirdSdkContext-89d804b3.js');
var React = require('react');
var PropTypes = require('prop-types');
var Sb = require('sendbird');
var actionTypes = require('./actionTypes-e40dc21b.js');
var index = require('./index-9855395f.js');
var cssVars = require('css-vars-ponyfill');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Sb__default = /*#__PURE__*/_interopDefaultLegacy(Sb);
var cssVars__default = /*#__PURE__*/_interopDefaultLegacy(cssVars);

const INIT_SDK = 'INIT_SDK';
const SET_SDK_LOADING = 'SET_SDK_LOADING';
const RESET_SDK = 'RESET_SDK';
const SDK_ERROR = 'SDK_ERROR';

const APP_VERSION_STRING = '2.7.1';
const disconnectSdk = _ref => {
  let {
    sdkDispatcher,
    userDispatcher,
    sdk,
    onDisconnect
  } = _ref;
  sdkDispatcher({
    type: SET_SDK_LOADING,
    payload: true
  });

  if (sdk && sdk.disconnect) {
    sdk.disconnect().then(() => {
      sdkDispatcher({
        type: RESET_SDK
      });
      userDispatcher({
        type: actionTypes.RESET_USER
      });
    }).finally(() => {
      onDisconnect();
    });
  } else {
    onDisconnect();
  }
};
const handleConnection = (_ref2, dispatchers) => {
  let {
    userId,
    appId,
    nickname,
    profileUrl,
    accessToken,
    sdk,
    logger
  } = _ref2;
  const {
    sdkDispatcher,
    userDispatcher
  } = dispatchers;
  disconnectSdk({
    sdkDispatcher,
    userDispatcher,
    sdk,
    logger,
    onDisconnect: () => {
      logger.info('Setup connection');
      sdkDispatcher({
        type: SET_SDK_LOADING,
        payload: true
      });

      if (userId && appId) {
        const newSdk = new Sb__default["default"]({
          appId
        }); // to check if code is released version from rollup and *not from storybook*
        // see rollup config file

        {
          newSdk.addExtension('sb_uikit', APP_VERSION_STRING);
        }

        const connectCbSucess = user => {
          sdkDispatcher({
            type: INIT_SDK,
            payload: newSdk
          });
          userDispatcher({
            type: actionTypes.INIT_USER,
            payload: user
          }); // use nickname/profileUrl if provided
          // or set userID as nickname

          if ((nickname !== user.nickname || profileUrl !== user.profileUrl) && !(index.isTextuallyNull(nickname) && index.isTextuallyNull(profileUrl))) {
            newSdk.updateCurrentUserInfo(nickname || user.nickname, profileUrl || user.profileUrl).then(namedUser => {
              userDispatcher({
                type: actionTypes.UPDATE_USER_INFO,
                payload: namedUser
              });
            });
          }
        };

        const connectCbError = e => {
          logger.error('Connection failed', `${e}`);
          sdkDispatcher({
            type: RESET_SDK
          });
          sdkDispatcher({
            type: actionTypes.RESET_USER
          });
          sdkDispatcher({
            type: SDK_ERROR
          });
        };

        if (accessToken) {
          newSdk.connect(userId, accessToken).then(res => connectCbSucess(res)).catch(err => connectCbError(err));
        } else {
          newSdk.connect(userId).then(res => connectCbSucess(res)).catch(err => connectCbError(err));
        }
      } else {
        sdkDispatcher({
          type: SDK_ERROR
        });
        logger.warning('Connection failed', 'UserId or appId missing');
      }
    }
  });
};

var isEmpty = function (obj) {
  if (obj === null || obj === undefined) {
    return true;
  }

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
};

var useTheme = function (overrides) {
  React.useLayoutEffect(function () {
    if (!isEmpty(overrides)) {
      cssVars__default["default"]({
        variables: SendbirdSdkContext.__assign({
          '--sendbird-dark-primary-500': '#4d2aa6',
          '--sendbird-dark-primary-400': '#6440C4',
          '--sendbird-dark-primary-300': '#7B53EF',
          '--sendbird-dark-primary-200': '#9E8CF5',
          '--sendbird-dark-primary-100': '#E2DFFF',
          '--sendbird-dark-secondary-500': '#007A7A',
          '--sendbird-dark-secondary-400': '#189A8D',
          '--sendbird-dark-secondary-300': '#2EBA9F',
          '--sendbird-dark-secondary-200': '#6FD6BE',
          '--sendbird-dark-secondary-100': '#AEF2DC',
          '--sendbird-dark-information-100': '#b2d9ff',
          '--sendbird-dark-error-500': '#A30E2D',
          '--sendbird-dark-error-400': '#C11F41',
          '--sendbird-dark-error-300': '#E53157',
          '--sendbird-dark-error-200': '#FF6183',
          '--sendbird-dark-error-100': '#FFABBD',
          '--sendbird-dark-background-700': '#000000',
          '--sendbird-dark-background-600': '#161616',
          '--sendbird-dark-background-500': '#2C2C2C',
          '--sendbird-dark-background-400': '#393939',
          '--sendbird-dark-background-300': '#A8A8A8',
          '--sendbird-dark-background-200': '#D9D9D9',
          '--sendbird-dark-background-100': '#F0F0F0',
          '--sendbird-dark-background-50': '#FFFFFF',
          '--sendbird-dark-overlay': 'rgba(0, 0, 0, 0.32)',
          '--sendbird-dark-onlight-01': 'rgba(0, 0, 0, 0.88)',
          '--sendbird-dark-onlight-02': 'rgba(0, 0, 0, 0.50)',
          '--sendbird-dark-onlight-03': 'rgba(0, 0, 0, 0.38)',
          '--sendbird-dark-onlight-04': 'rgba(0, 0, 0, 0.12)',
          '--sendbird-dark-ondark-01': 'rgba(255, 255, 255, 0.88)',
          '--sendbird-dark-ondark-02': 'rgba(255, 255, 255, 0.50)',
          '--sendbird-dark-ondark-03': 'rgba(255, 255, 255, 0.38)',
          '--sendbird-dark-ondark-04': 'rgba(255, 255, 255, 0.12)',
          '--sendbird-dark-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
          '--sendbird-dark-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
          '--sendbird-dark-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
          '--sendbird-dark-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
          '--sendbird-dark-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
          '--sendbird-light-primary-500': '#4d2aa6',
          '--sendbird-light-primary-400': '#6440C4',
          '--sendbird-light-primary-300': '#7B53EF',
          '--sendbird-light-primary-200': '#9E8CF5',
          '--sendbird-light-primary-100': '#E2DFFF',
          '--sendbird-light-secondary-500': '#007A7A',
          '--sendbird-light-secondary-400': '#189A8D',
          '--sendbird-light-secondary-300': '#2EBA9F',
          '--sendbird-light-secondary-200': '#6FD6BE',
          '--sendbird-light-secondary-100': '#AEF2DC',
          '--sendbird-light-information-100': '#b2d9ff',
          '--sendbird-light-error-500': '#A30E2D',
          '--sendbird-light-error-400': '#C11F41',
          '--sendbird-light-error-300': '#E53157',
          '--sendbird-light-error-200': '#FF6183',
          '--sendbird-light-error-100': '#FFABBD',
          '--sendbird-light-background-700': '#000000',
          '--sendbird-light-background-600': '#161616',
          '--sendbird-light-background-500': '#2C2C2C',
          '--sendbird-light-background-400': '#393939',
          '--sendbird-light-background-300': '#A8A8A8',
          '--sendbird-light-background-200': '#D9D9D9',
          '--sendbird-light-background-100': '#F0F0F0',
          '--sendbird-light-background-50': ' #FFFFFF',
          '--sendbird-light-overlay': 'rgba(0, 0, 0, 0.32)',
          '--sendbird-light-onlight-01': 'rgba(0, 0, 0, 0.88)',
          '--sendbird-light-onlight-02': 'rgba(0, 0, 0, 0.50)',
          '--sendbird-light-onlight-03': 'rgba(0, 0, 0, 0.38)',
          '--sendbird-light-onlight-04': 'rgba(0, 0, 0, 0.12)',
          '--sendbird-light-ondark-01': 'rgba(255, 255, 255, 0.88)',
          '--sendbird-light-ondark-02': 'rgba(255, 255, 255, 0.50)',
          '--sendbird-light-ondark-03': 'rgba(255, 255, 255, 0.38)',
          '--sendbird-light-ondark-04': 'rgba(255, 255, 255, 0.12)',
          '--sendbird-light-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
          '--sendbird-light-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
          '--sendbird-light-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
          '--sendbird-light-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
          '--sendbird-light-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
        }, overrides)
      });
    }
  }, [overrides]);
};

var sdkInitialState = {
  initialized: false,
  loading: false,
  sdk: {},
  error: false
};

function reducer$1(state, action) {
  switch (action.type) {
    case SET_SDK_LOADING:
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, state), {}, {
        initialized: false,
        loading: action.payload
      });

    case SDK_ERROR:
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, state), {}, {
        initialized: false,
        loading: false,
        error: true
      });

    case INIT_SDK:
      return {
        sdk: action.payload,
        initialized: true,
        loading: false,
        error: false
      };

    case RESET_SDK:
      return sdkInitialState;

    default:
      return state;
  }
}

var userInitialState = {
  initialized: false,
  loading: false,
  user: {}
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.INIT_USER:
      return {
        initialized: true,
        loading: false,
        user: action.payload
      };

    case actionTypes.RESET_USER:
      return userInitialState;

    case actionTypes.UPDATE_USER_INFO:
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, state), {}, {
        user: action.payload
      });

    default:
      return state;
  }
}

function useConnectionStatus(sdk, logger) {
  const [isOnline, setIsOnline] = React.useState(true);
  React.useEffect(() => {
    const uniqueHandlerId = SendbirdSdkContext.uuidv4();
    logger.warning('sdk changed', uniqueHandlerId);
    let handler;

    if (sdk && sdk.ConnectionHandler) {
      handler = new sdk.ConnectionHandler();

      handler.onReconnectStarted = () => {
        setIsOnline(false);
        logger.warning('onReconnectStarted', {
          isOnline
        });
      };

      handler.onReconnectSucceeded = () => {
        setIsOnline(true);
        logger.warning('onReconnectSucceeded', {
          isOnline
        });
      };

      handler.onReconnectFailed = () => {
        sdk.reconnect();
        logger.warning('onReconnectFailed');
      };

      logger.info('Added ConnectionHandler', uniqueHandlerId);
      sdk.addConnectionHandler(uniqueHandlerId, handler);
    }

    return () => {
      try {
        sdk.removeConnectionHandler(uniqueHandlerId);
        logger.info('Removed ConnectionHandler', uniqueHandlerId);
      } catch (_unused) {//
      }
    };
  }, [sdk]);
  React.useEffect(() => {
    const tryReconnect = () => {
      try {
        logger.warning('Try reconnecting SDK');

        if (sdk.getConnectionState() !== 'OPEN') {
          // connection is not broken yet
          sdk.reconnect();
        }
      } catch (_unused2) {//
      }
    }; // addEventListener version


    window.addEventListener('online', tryReconnect);
    return () => {
      window.removeEventListener('online', tryReconnect);
    };
  }, [sdk]); // add offline-class to body

  React.useEffect(() => {
    const body = document.querySelector('body');

    if (!isOnline) {
      try {
        body.classList.add('sendbird__offline');
        logger.info('Added class sendbird__offline to body');
      } catch (e) {//
      }
    } else {
      try {
        body.classList.remove('sendbird__offline');
        logger.info('Removed class sendbird__offline from body');
      } catch (e) {//
      }
    }
  }, [isOnline]);
  return isOnline;
}

// Logger, pretty much explains it
// in SendbirdProvider
// const [logger, setLogger] = useState(LoggerFactory(logLevel));
const LOG_LEVELS = {
  DEBUG: 'debug',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
  ALL: 'all'
};

const colorLog = level => {
  switch (level) {
    case LOG_LEVELS.WARNING:
      return 'color: Orange';

    case LOG_LEVELS.ERROR:
      return 'color: Red';

    default:
      return 'color: Gray';
  }
};

const printLog = _ref => {
  let {
    level,
    title,
    description = ''
  } = _ref;
  // eslint-disable-next-line no-console
  console.log(`%c SendbirdUIKit | ${level} | ${new Date().toISOString()} | ${title} ${description && '|'}`, colorLog(level), description);
};
const getDefaultLogger = () => ({
  info: () => {},
  error: () => {},
  warning: () => {}
});
const LoggerFactory = (lvl, customInterface) => {
  const logInterface = customInterface || printLog;
  const lvlArray = Array.isArray(lvl) ? lvl : [lvl];

  const applyLog = lgLvl => (title, description) => logInterface({
    level: lgLvl,
    title,
    description
  });

  const logger = lvlArray.reduce((accumulator, currentLvl) => {
    if (currentLvl === LOG_LEVELS.DEBUG || currentLvl === LOG_LEVELS.ALL) {
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, accumulator), {}, {
        info: applyLog(LOG_LEVELS.INFO),
        error: applyLog(LOG_LEVELS.ERROR),
        warning: applyLog(LOG_LEVELS.WARNING)
      });
    }

    if (currentLvl === LOG_LEVELS.INFO) {
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, accumulator), {}, {
        info: applyLog(LOG_LEVELS.INFO)
      });
    }

    if (currentLvl === LOG_LEVELS.ERROR) {
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, accumulator), {}, {
        error: applyLog(LOG_LEVELS.ERROR)
      });
    }

    if (currentLvl === LOG_LEVELS.WARNING) {
      return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, accumulator), {}, {
        warning: applyLog(LOG_LEVELS.WARNING)
      });
    }

    return SendbirdSdkContext._objectSpread2({}, accumulator);
  }, getDefaultLogger());
  return logger;
};

// https://davidwalsh.name/pubsub-javascript
// we use pubsub to sync events between multiple components(example - ChannelList, Channel)
// for example, if customer sends a message from their custom component
// without pubsub,we would not be able to listen to it
// in our ChannelList or Conversation
var pubSubFactory = (() => {
  const topics = {};
  const hOP = topics.hasOwnProperty;
  return {
    __getTopics: () => topics,
    subscribe: (topic, listener) => {
      // Create the topic's object if not yet created
      if (!hOP.call(topics, topic)) {
        topics[topic] = [];
      } // Add the listener to queue


      const index = topics[topic].push(listener) - 1; // Provide handle back for removal of topic

      return {
        remove: () => {
          delete topics[topic][index];
        }
      };
    },
    publish: (topic, info) => {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hOP.call(topics, topic)) {
        return;
      } // Cycle through topics queue, fire!


      topics[topic].forEach(item => {
        item(info !== undefined ? info : {});
      });
    }
  };
});

function useAppendDomNode() {
  let ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let rootSelector = arguments.length > 1 ? arguments[1] : undefined;
  React.useEffect(() => {
    const root = document.querySelector(rootSelector);
    ids.forEach(id => {
      const elem = document.createElement('div');
      elem.setAttribute('id', id);
      root.appendChild(elem);
    });
    return () => {
      ids.forEach(id => {
        const target = document.getElementById(id);

        if (target) {
          root.removeChild(target);
        }
      });
    };
  }, []);
}

function Sendbird(props) {
  const {
    userId,
    appId,
    accessToken,
    children,
    disableUserProfile,
    renderUserProfile,
    allowProfileEdit,
    theme,
    nickname,
    dateLocale,
    profileUrl,
    userListQuery,
    config = {},
    colorSet,
    stringSet,
    imageCompression,
    useReaction
  } = props;
  const {
    logLevel = ''
  } = config;
  const [logger, setLogger] = React.useState(LoggerFactory(logLevel));
  const [pubSub, setPubSub] = React.useState();
  const [sdkStore, sdkDispatcher] = React.useReducer(reducer$1, sdkInitialState);
  const [userStore, userDispatcher] = React.useReducer(reducer, userInitialState);
  useTheme(colorSet);
  React.useEffect(() => {
    setPubSub(pubSubFactory());
  }, []);
  React.useEffect(() => {
    logger.info('App Init'); // dispatch action

    handleConnection({
      userId,
      appId,
      accessToken,
      sdkStore,
      nickname,
      profileUrl,
      sdk: sdkStore.sdk,
      logger
    }, {
      sdkDispatcher,
      userDispatcher
    });
  }, [userId, appId, accessToken]); // to create a pubsub to communicate between parent and child

  React.useEffect(() => {
    setLogger(LoggerFactory(logLevel));
  }, [logLevel]);
  useAppendDomNode(['sendbird-modal-root', 'sendbird-dropdown-portal', 'sendbird-emoji-list-portal'], 'body'); // should move to reducer

  const [currenttheme, setCurrenttheme] = React.useState(theme);
  React.useEffect(() => {
    setCurrenttheme(theme);
  }, [theme]); // add-remove theme from body

  React.useEffect(() => {
    logger.info('Setup theme', `Theme: ${currenttheme}`);

    try {
      const body = document.querySelector('body');
      body.classList.remove('sendbird-theme--light');
      body.classList.remove('sendbird-theme--dark');
      body.classList.add(`sendbird-theme--${currenttheme || 'light'}`);
      logger.info('Finish setup theme'); // eslint-disable-next-line no-empty
    } catch (e) {
      logger.warning('Setup theme failed', `${e}`);
    }

    return () => {
      try {
        const body = document.querySelector('body');
        body.classList.remove('sendbird-theme--light');
        body.classList.remove('sendbird-theme--dark'); // eslint-disable-next-line no-empty
      } catch (_unused) {}
    };
  }, [currenttheme]);
  const isOnline = useConnectionStatus(sdkStore.sdk, logger);
  const localeStringSet = React__default["default"].useMemo(() => {
    if (!stringSet) {
      return SendbirdSdkContext.getStringSet('en');
    }

    return SendbirdSdkContext._objectSpread2(SendbirdSdkContext._objectSpread2({}, SendbirdSdkContext.getStringSet('en')), stringSet);
  }, [stringSet]);
  return /*#__PURE__*/React__default["default"].createElement(SendbirdSdkContext.SendbirdSdkContext.Provider, {
    value: {
      stores: {
        sdkStore,
        userStore
      },
      dispatchers: {
        sdkDispatcher,
        userDispatcher,
        reconnect: () => {
          handleConnection({
            userId,
            appId,
            accessToken,
            sdkStore,
            nickname,
            profileUrl,
            logger,
            sdk: sdkStore.sdk
          }, {
            sdkDispatcher,
            userDispatcher
          });
        }
      },
      config: {
        disableUserProfile,
        renderUserProfile,
        allowProfileEdit,
        isOnline,
        userId,
        appId,
        accessToken,
        theme: currenttheme,
        setCurrenttheme,
        userListQuery,
        logger,
        pubSub,
        imageCompression,
        useReaction
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(SendbirdSdkContext.LocalizationProvider, {
    stringSet: localeStringSet,
    dateLocale: dateLocale
  }, children));
}
Sendbird.propTypes = {
  userId: PropTypes__default["default"].string.isRequired,
  appId: PropTypes__default["default"].string.isRequired,
  accessToken: PropTypes__default["default"].string,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].any]).isRequired,
  theme: PropTypes__default["default"].string,
  nickname: PropTypes__default["default"].string,
  profileUrl: PropTypes__default["default"].string,
  dateLocale: PropTypes__default["default"].shape({}),
  disableUserProfile: PropTypes__default["default"].bool,
  renderUserProfile: PropTypes__default["default"].func,
  allowProfileEdit: PropTypes__default["default"].bool,
  userListQuery: PropTypes__default["default"].func,
  config: PropTypes__default["default"].shape({
    // None Error Warning Info 'All/Debug'
    logLevel: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
    pubSub: PropTypes__default["default"].shape({
      subscribe: PropTypes__default["default"].func,
      publish: PropTypes__default["default"].func
    })
  }),
  stringSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  colorSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  useReaction: PropTypes__default["default"].bool,
  imageCompression: PropTypes__default["default"].shape({
    compressionRate: PropTypes__default["default"].number,
    resizingWidth: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
    resizingHeight: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  })
};
Sendbird.defaultProps = {
  accessToken: '',
  theme: 'light',
  nickname: '',
  profileUrl: '',
  dateLocale: null,
  disableUserProfile: false,
  renderUserProfile: null,
  allowProfileEdit: false,
  userListQuery: null,
  config: {},
  stringSet: null,
  colorSet: null,
  imageCompression: {},
  useReaction: true
};

module.exports = Sendbird;
//# sourceMappingURL=SendbirdProvider.js.map
