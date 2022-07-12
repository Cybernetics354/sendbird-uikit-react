'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var reactDom = require('react-dom');
var LocalizationContext = require('./LocalizationContext-20ab283e.js');
var index = require('./index-1e853591.js');
var index$1 = require('./index-baa7cbb7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

/**
 * user profile goes deep inside the component tree
 * use this context as a short circuit to send in values
 */

const UserProfileContext = /*#__PURE__*/React__default["default"].createContext({
  disableUserProfile: true,
  isOpenChannel: false,
  renderUserProfile: null
});

const UserProfileProvider = props => {
  const {
    children,
    className
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(UserProfileContext.Provider, {
    value: props
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, children));
};

UserProfileProvider.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].any]).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  isOpenChannel: PropTypes__default["default"].bool,
  // eslint-disable-next-line react/no-unused-prop-types
  disableUserProfile: PropTypes__default["default"].bool,
  // eslint-disable-next-line react/no-unused-prop-types
  renderUserProfile: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string
};
UserProfileProvider.defaultProps = {
  className: null,
  isOpenChannel: false,
  disableUserProfile: false,
  renderUserProfile: null
};

const IconButton = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    className,
    children,
    disabled,
    width,
    height,
    type,
    onClick,
    onBlur,
    style
  } = props;
  const [pressed, setPressed] = React.useState('');
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default["default"].createElement("button", {
      className: [...(Array.isArray(className) ? className : [className]), 'sendbird-iconbutton', pressed].join(' '),
      disabled: disabled,
      ref: ref,
      type: type // eslint-disable-line react/button-has-type
      ,
      style: LocalizationContext._objectSpread2(LocalizationContext._objectSpread2({}, style), {}, {
        height,
        width
      }),
      onClick: e => {
        if (disabled) {
          return;
        }

        setPressed('sendbird-iconbutton--pressed');
        onClick(e);
      },
      onBlur: e => {
        setPressed('');
        onBlur(e);
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "sendbird-iconbutton__inner"
    }, children))
  );
});
IconButton.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].any]).isRequired,
  disabled: PropTypes__default["default"].bool,
  width: PropTypes__default["default"].string,
  height: PropTypes__default["default"].string,
  type: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  style: PropTypes__default["default"].shape({})
};
IconButton.defaultProps = {
  className: '',
  disabled: false,
  width: '56px',
  height: '56px',
  type: 'button',
  onClick: () => {},
  onBlur: () => {},
  style: {}
};

// simple component to be used as modal root
const MODAL_ROOT = 'sendbird-modal-root';

const Type = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  DANGER: 'DANGER',
  DISABLED: 'DISABLED'
};
const Size = {
  BIG: 'BIG',
  SMALL: 'SMALL'
};

function changeTypeToClassName(type) {
  switch (type) {
    case Type.PRIMARY:
      return 'sendbird-button--primary';

    case Type.SECONDARY:
      return 'sendbird-button--secondary';

    case Type.DANGER:
      return 'sendbird-button--danger';

    case Type.DISABLED:
      return 'sendbird-button--disabled';

    default:
      return null;
  }
}
function changeSizeToClassName(size) {
  switch (size) {
    case Size.BIG:
      return 'sendbird-button--big';

    case Size.SMALL:
      return 'sendbird-button--small';

    default:
      return null;
  }
}

function Button(_ref) {
  let {
    className,
    type,
    size,
    children,
    disabled,
    onClick
  } = _ref;
  const injectingClassNames = [...(Array.isArray(className) ? className : [className]), 'sendbird-button', disabled ? 'sendbird-button__disabled' : '', changeTypeToClassName(type), changeSizeToClassName(size)].join(' ');
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: injectingClassNames,
    type: "button",
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird-button__text",
    type: index.LabelTypography.BUTTON_1,
    color: index.LabelColors.ONCONTENT_1
  }, children));
}
const ButtonTypes = Type;
const ButtonSizes = Size;
Button.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  type: PropTypes__default["default"].oneOf(Object.keys(Type)),
  size: PropTypes__default["default"].oneOf(Object.keys(Size)),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]),
  disabled: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func
};
Button.defaultProps = {
  className: '',
  type: Type.PRIMARY,
  size: Size.BIG,
  children: 'Button',
  disabled: false,
  onClick: () => {}
};

const ModalHeader = _ref => {
  let {
    titleText
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__header"
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    type: index.LabelTypography.H_1,
    color: index.LabelColors.ONBACKGROUND_1
  }, titleText));
};
ModalHeader.propTypes = {
  titleText: PropTypes__default["default"].string.isRequired
};
const ModalBody = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__body"
  }, children);
};
ModalBody.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element.isRequired, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element.isRequired)])
};
ModalBody.defaultProps = {
  children: null
};
const ModalFooter = _ref3 => {
  let {
    onSubmit,
    onCancel,
    disabled = false,
    submitText,
    type
  } = _ref3;
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__footer"
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    type: ButtonTypes.SECONDARY,
    onClick: onCancel
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    type: index.LabelTypography.BUTTON_1,
    color: index.LabelColors.ONBACKGROUND_1
  }, stringSet.BUTTON__CANCEL)), /*#__PURE__*/React__default["default"].createElement(Button, {
    type: type,
    disabled: disabled,
    onClick: onSubmit
  }, submitText));
};
ModalFooter.propTypes = {
  onCancel: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func.isRequired,
  submitText: PropTypes__default["default"].string.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string
};
ModalFooter.defaultProps = {
  disabled: false,
  type: ButtonTypes.DANGER
};
function Modal(props) {
  const {
    children,
    onCancel,
    onSubmit,
    disabled,
    submitText,
    titleText,
    hideFooter,
    type
  } = props;
  const {
    body
  } = document;
  React.useEffect(() => {
    body.className = `sendbird-modal-pop-up ${body.className}`;
    return () => {
      body.className = body.className.split(' ').filter(className => className !== 'sendbird-modal-pop-up').join(' ');
    };
  }, []);
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__content"
  }, /*#__PURE__*/React__default["default"].createElement(ModalHeader, {
    titleText: titleText
  }), /*#__PURE__*/React__default["default"].createElement(ModalBody, null, children), !hideFooter && /*#__PURE__*/React__default["default"].createElement(ModalFooter, {
    disabled: disabled,
    onCancel: onCancel,
    onSubmit: onSubmit,
    submitText: submitText,
    type: type
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__close"
  }, /*#__PURE__*/React__default["default"].createElement(IconButton, {
    width: "32px",
    height: "32px",
    onClick: onCancel
  }, /*#__PURE__*/React__default["default"].createElement(index.Icon, {
    type: index.IconTypes.CLOSE,
    fillColor: index.IconColors.DEFAULT,
    width: "24px",
    height: "24px"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__backdrop"
  })), document.getElementById(MODAL_ROOT));
}
Modal.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]),
  onCancel: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func.isRequired,
  hideFooter: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string
};
Modal.defaultProps = {
  children: null,
  hideFooter: false,
  disabled: false,
  type: ButtonTypes.DANGER
};

const Colors = {
  ONBACKGROUND_1: 'ONBACKGROUND_1',
  ONBACKGROUND_2: 'ONBACKGROUND_2',
  ONBACKGROUND_3: 'ONBACKGROUND_3',
  ONBACKGROUND_4: 'ONBACKGROUND_4',
  ONCONTENT_1: 'ONCONTENT_1',
  PRIMARY: 'PRIMARY',
  ERROR: 'ERROR'
};
function changeColorToClassName(color) {
  switch (color) {
    case Colors.ONBACKGROUND_1:
      return 'sendbird-color--onbackground-1';

    case Colors.ONBACKGROUND_2:
      return 'sendbird-color--onbackground-2';

    case Colors.ONBACKGROUND_3:
      return 'sendbird-color--onbackground-3';

    case Colors.ONBACKGROUND_4:
      return 'sendbird-color--onbackground-4';

    case Colors.ONCONTENT_1:
      return 'sendbird-color--oncontent-1';

    case Colors.PRIMARY:
      return 'sendbird-color--primary';

    case Colors.ERROR:
      return 'sendbird-color--error';

    default:
      return null;
  }
}

function TextButton(_ref) {
  let {
    className,
    color,
    disabled,
    notUnderline,
    onClick,
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), changeColorToClassName(color), notUnderline ? 'sendbird-textbutton--not-underline' : 'sendbird-textbutton', disabled ? 'sendbird-textbutton--disabled' : ''].join(' '),
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: onClick
  }, children);
}
TextButton.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  color: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool,
  notUnderline: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]).isRequired
};
TextButton.defaultProps = {
  className: '',
  color: Colors.ONBACKGROUND_1,
  disabled: false,
  notUnderline: false,
  onClick: () => {}
};

const SEND_MESSAGE_START = 'SEND_MESSAGE_START';
const SEND_USER_MESSAGE = 'SEND_USER_MESSAGE';
const SEND_FILE_MESSAGE = 'SEND_FILE_MESSAGE';
const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const LEAVE_CHANNEL = 'LEAVE_CHANNEL';
const CREATE_CHANNEL = 'CREATE_CHANNEL';

const getSdk = store => {
  const {
    stores = {}
  } = store;
  const {
    sdkStore = {}
  } = stores;
  const {
    sdk
  } = sdkStore;
  return sdk;
};
const getPubSub = store => {
  const {
    config = {}
  } = store;
  const {
    pubSub
  } = config;
  return pubSub;
}; // SendBird disconnect. Invalidates currentUser
// eslint-disable-next-line max-len

const getConnect = store => (userId, accessToken) => new Promise((resolve, reject) => {
  const sdk = getSdk(store);

  if (!sdk) {
    reject(new Error('Sdk not found'));
  }

  if (!accessToken) {
    sdk.connect(userId).then(res => resolve(res)).catch(err => reject(err));
  } else {
    sdk.connect(userId, accessToken).then(res => resolve(res)).catch(err => reject(err));
  }
}); // SendBird disconnect. Invalidates currentUser

const getDisconnect = store => () => new Promise((resolve, reject) => {
  const sdk = getSdk(store);

  if (!sdk) {
    reject(new Error('Sdk not found'));
  }

  sdk.disconnect().then(res => resolve(res)).catch(err => reject(err));
}); // Using the updateCurrentUserInfo() method
// you can update a user's nickname and profile image with a URL
// eslint-disable-next-line max-len

const getUpdateUserInfo = store => (nickName, profileUrl) => new Promise((resolve, reject) => {
  const sdk = getSdk(store);

  if (!sdk) {
    reject(new Error('Sdk not found'));
  }

  sdk.updateCurrentUserInfo(nickName, profileUrl).then(res => resolve(res)).catch(err => reject(err));
});
const getSendUserMessage = store => (channelUrl, userMessageParams) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      const promisify = () => {
        let pendingMsg = null;
        const pendingPromise = new Promise((resolve_, reject_) => {
          pendingMsg = channel.sendUserMessage(userMessageParams, (res, err) => {
            const swapParams = sdk.getErrorFirstCallback();
            let message = res;
            let error = err;

            if (swapParams) {
              message = err;
              error = res;
            }

            if (error) {
              reject_(error);
              return;
            }

            resolve_(message);
            pubsub.publish(SEND_USER_MESSAGE, {
              message,
              channel
            });
          });
          pubsub.publish(SEND_MESSAGE_START, {
            message: pendingMsg,
            channel
          });
        });

        pendingPromise.get = () => pendingMsg;

        return pendingPromise;
      };

      resolve(promisify());
    }).catch(reject);
  });
};
const getSendFileMessage = store => function (channelUrl, fileMessageParams) {
  let prgHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      const promisify = () => {
        let pendingMsg = null;
        let progressEvent = null;
        const pendingPromise = new Promise((resolve_, reject_) => {
          pendingMsg = channel.sendFileMessage(fileMessageParams, event => {
            // Useless progressHandler callback functions could be called everytime
            // Performance vs Readability
            if (prgHandler && event) {
              progressEvent = event;
            }
          }, (res, err) => {
            const swapParams = sdk.getErrorFirstCallback();
            let message = res;
            let error = err;

            if (swapParams) {
              message = err;
              error = res;
            }

            if (!progressEvent) {
              if (error) {
                reject_(error);
              } else {
                resolve_(message);
                pubsub.publish(SEND_FILE_MESSAGE, {
                  message,
                  channel
                });
              }

              return;
            } // If prgHandler and progressEvent exists call prgHandler with progressEvent first


            resolve_(new Promise((resolve2, reject2) => {
              prgHandler(progressEvent);

              if (error) {
                reject2(error);
                return;
              }

              resolve2(message);
              pubsub.publish(SEND_FILE_MESSAGE, {
                message,
                channel
              });
            }));
          });
        });

        if (fileMessageParams.file) {
          // keep the file's local version in pendingMsg.localUrl
          // because promise doesnt allow overriding of pendingMsg.url
          // eslint-disable-next-line no-param-reassign
          pendingMsg.localUrl = URL.createObjectURL(fileMessageParams.file);
        }

        if (fileMessageParams.fileUrl) {
          // eslint-disable-next-line no-param-reassign
          pendingMsg.localUrl = fileMessageParams.fileUrl;
        } // eslint-disable-next-line no-param-reassign


        pendingMsg.requestState = 'pending';
        pubsub.publish(SEND_MESSAGE_START, {
          message: pendingMsg,
          channel
        });

        pendingPromise.get = () => pendingMsg;

        return pendingPromise;
      };

      resolve(promisify());
    }).catch(reject);
  });
};
const getUpdateUserMessage = store => (channelUrl, messageId, params) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      channel.updateUserMessage(messageId, params, (res, err) => {
        const swapParams = sdk.getErrorFirstCallback();
        let message = res;
        let error = err;

        if (swapParams) {
          message = err;
          error = res;
        }

        if (error) {
          reject(error);
          return;
        }

        resolve(message);
        pubsub.publish(UPDATE_USER_MESSAGE, {
          message,
          channel,
          // workaround for updating channelPreview on message-edit
          // https://sendbird.atlassian.net/browse/UIKIT-268
          fromSelector: true
        });
      });
    }).catch(reject);
  });
};
const getDeleteMessage = store => (channelUrl, message) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      const {
        messageId
      } = message;
      channel.deleteMessage(message, (res, err) => {
        const swapParams = sdk.getErrorFirstCallback();
        let error = err;

        if (swapParams) {
          error = res;
        }

        if (error) {
          reject(error);
          return;
        }

        resolve(message);
        pubsub.publish(DELETE_MESSAGE, {
          messageId,
          channel
        });
      });
    }).catch(reject);
  });
};
const getResendUserMessage = store => (channelUrl, failedMessage) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      channel.resendUserMessage(failedMessage).then(message => {
        resolve(message);
        pubsub.publish(SEND_USER_MESSAGE, {
          message,
          channel
        });
      }).catch(reject);
    }).catch(reject);
  });
};
const getResendFileMessage = store => (channelUrl, failedMessage) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      channel.resendFileMessage(failedMessage).then(message => {
        resolve(message);
        pubsub.publish(SEND_FILE_MESSAGE, {
          message,
          channel
        });
      }).catch(reject);
    }).catch(reject);
  });
};
const getCreateChannel = store => params => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.createChannel(params).then(channel => {
      resolve(channel);
      pubsub.publish(CREATE_CHANNEL, {
        channel
      });
    }).catch(reject);
  });
};
const getLeaveChannel = store => channelUrl => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      channel.leave().then(() => {
        resolve(channel);
        pubsub.publish(LEAVE_CHANNEL, {
          channel
        });
      }).catch(reject);
    }).catch(reject);
  });
};
const getFreezeChannel = store => channelUrl => {
  const sdk = getSdk(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      channel.freeze().then(() => {
        // do not need pubsub here - event listener works
        resolve(channel);
      }).catch(reject);
    }).catch(reject);
  });
};
const getUnFreezeChannel = store => channelUrl => {
  const sdk = getSdk(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.GroupChannel.getChannel(channelUrl).then(channel => {
      channel.unfreeze().then(() => {
        // do not need pubsub here - event listener works
        resolve(channel);
      }).catch(reject);
    }).catch(reject);
  });
};
const getCreateOpenChannel = store => params => {
  const sdk = getSdk(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.createChannel(params).then(channel => {
      resolve(channel);
    }).catch(reject);
  });
};
const enterOpenChannel = store => channelUrl => {
  const sdk = getSdk(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl, (openChannel, error) => {
      if (error) {
        reject(new Error(error));
        return;
      }

      openChannel.enter((response, enterError) => {
        if (error) {
          reject(new Error(enterError));
          return;
        }

        resolve(response);
      });
    });
  });
};
const exitOpenChannel = store => channelUrl => {
  const sdk = getSdk(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl, (openChannel, error) => {
      if (error) {
        reject(new Error(error));
        return;
      }

      openChannel.exit((response, exitError) => {
        if (error) {
          reject(new Error(exitError));
          return;
        }

        resolve(response);
      });
    });
  });
};
const getOpenChannelSendUserMessage = store => (channelUrl, userMessageParams) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl).then(channel => {
      const promisify = () => {
        let pendingMsg = null;
        const pendingPromise = new Promise((resolve_, reject_) => {
          pendingMsg = channel.sendUserMessage(userMessageParams, (res, err) => {
            const swapParams = sdk.getErrorFirstCallback();
            let message = res;
            let error = err;

            if (swapParams) {
              message = err;
              error = res;
            }

            if (error) {
              reject_(error);
              return;
            }

            resolve_(message);
            pubsub.publish(SEND_USER_MESSAGE, {
              message,
              channel
            });
          });
          pubsub.publish(SEND_MESSAGE_START, {
            message: pendingMsg,
            channel
          });
        });

        pendingPromise.get = () => pendingMsg;

        return pendingPromise;
      };

      resolve(promisify());
    }).catch(reject);
  });
};
const getOpenChannelSendFileMessage = store => (channelUrl, fileMessageParams) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl).then(channel => {
      const promisify = () => {
        let pendingMsg = null;
        const pendingPromise = new Promise((resolve_, reject_) => {
          pendingMsg = channel.sendFileMessage(fileMessageParams, (res, err) => {
            const swapParams = sdk.getErrorFirstCallback();
            let message = res;
            let error = err;

            if (swapParams) {
              message = err;
              error = res;
            }

            if (error) {
              reject_(error);
              return;
            }

            resolve_(message);
            pubsub.publish(SEND_FILE_MESSAGE, {
              message,
              channel
            });
          });
        });

        if (fileMessageParams.file) {
          // keep the file's local version in pendingMsg.localUrl
          // because promise doesnt allow overriding of pendingMsg.url
          // eslint-disable-next-line no-param-reassign
          pendingMsg.localUrl = URL.createObjectURL(fileMessageParams.file);
        }

        if (fileMessageParams.fileUrl) {
          // eslint-disable-next-line no-param-reassign
          pendingMsg.localUrl = fileMessageParams.fileUrl;
        } // eslint-disable-next-line no-param-reassign


        pendingMsg.requestState = 'pending';
        pubsub.publish(SEND_MESSAGE_START, {
          message: pendingMsg,
          channel
        });

        pendingPromise.get = () => pendingMsg;

        return pendingPromise;
      };

      resolve(promisify());
    }).catch(reject);
  });
};
const getOpenChannelUpdateUserMessage = store => (channelUrl, messageId, params) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl).then(channel => {
      channel.updateUserMessage(messageId, params, (res, err) => {
        const swapParams = sdk.getErrorFirstCallback();
        let message = res;
        let error = err;

        if (swapParams) {
          message = err;
          error = res;
        }

        if (error) {
          reject(error);
          return;
        }

        resolve(message);
        pubsub.publish(UPDATE_USER_MESSAGE, {
          message,
          channel,
          // workaround for updating channelPreview on message-edit
          // https://sendbird.atlassian.net/browse/UIKIT-268
          fromSelector: true
        });
      });
    }).catch(reject);
  });
};
const getOpenChannelDeleteMessage = store => (channelUrl, message) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl).then(channel => {
      const {
        messageId
      } = message;
      channel.deleteMessage(message, (res, err) => {
        const swapParams = sdk.getErrorFirstCallback();
        let error = err;

        if (swapParams) {
          error = res;
        }

        if (error) {
          reject(error);
          return;
        }

        resolve(message);
        pubsub.publish(DELETE_MESSAGE, {
          messageId,
          channel
        });
      });
    }).catch(reject);
  });
};
const getOpenChannelResendUserMessage = store => (channelUrl, failedMessage) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl).then(channel => {
      channel.resendUserMessage(failedMessage).then(message => {
        resolve(message);
        pubsub.publish(SEND_USER_MESSAGE, {
          message,
          channel
        });
      }).catch(reject);
    }).catch(reject);
  });
};
const getOpenChannelResendFileMessage = store => (channelUrl, failedMessage) => {
  const sdk = getSdk(store);
  const pubsub = getPubSub(store);
  return new Promise((resolve, reject) => {
    if (!sdk) {
      reject(new Error('Sdk not found'));
    }

    sdk.OpenChannel.getChannel(channelUrl).then(channel => {
      channel.resendFileMessage(failedMessage).then(message => {
        resolve(message);
        pubsub.publish(SEND_FILE_MESSAGE, {
          message,
          channel
        });
      }).catch(reject);
    }).catch(reject);
  });
};
var selectors = {
  getSdk,
  getConnect,
  getDisconnect,
  getUpdateUserInfo,
  getSendUserMessage,
  getSendFileMessage,
  getUpdateUserMessage,
  getDeleteMessage,
  getResendUserMessage,
  getResendFileMessage,
  getFreezeChannel,
  getUnFreezeChannel,
  getCreateChannel,
  getLeaveChannel,
  getCreateOpenChannel,
  getEnterOpenChannel: enterOpenChannel,
  getExitOpenChannel: exitOpenChannel,
  getOpenChannelSendUserMessage,
  getOpenChannelSendFileMessage,
  getOpenChannelUpdateUserMessage,
  getOpenChannelDeleteMessage,
  getOpenChannelResendUserMessage,
  getOpenChannelResendFileMessage
};

function UserProfile(_a) {
  var user = _a.user,
      currentUserId = _a.currentUserId,
      sdk = _a.sdk,
      logger = _a.logger,
      _b = _a.disableMessaging,
      disableMessaging = _b === void 0 ? false : _b,
      createChannel = _a.createChannel,
      onSuccess = _a.onSuccess;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird__user-profile"
  }, /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-avatar"
  }, /*#__PURE__*/React__default["default"].createElement(index.Avatar, {
    height: "80px",
    width: "80px",
    src: user.profileUrl
  })), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-name"
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    type: index.LabelTypography.H_2,
    color: index.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME)), user.userId !== currentUserId && !disableMessaging && /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-message"
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    type: ButtonTypes.SECONDARY,
    onClick: function () {
      var params = new sdk.GroupChannelParams();
      params.isDistinct = true;
      params.addUserIds([user.userId]);
      onSuccess();
      createChannel(params).then(function (groupChannel) {
        logger.info('UserProfile, channel create', groupChannel);
      });
    }
  }, stringSet.USER_PROFILE__MESSAGE)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird__user-profile-separator"
  }), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-userId"
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird__user-profile-userId--label",
    type: index.LabelTypography.CAPTION_2,
    color: index.LabelColors.ONBACKGROUND_2
  }, stringSet.USER_PROFILE__USER_ID), /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird__user-profile-userId--value",
    type: index.LabelTypography.BODY_1,
    color: index.LabelColors.ONBACKGROUND_1
  }, user.userId)));
}

var mapStoreToProps = function (store) {
  return {
    sdk: getSdk(store),
    createChannel: getCreateChannel(store),
    logger: store.config.logger,
    pubsub: store.config.pubSub
  };
};

var ConnectedUserProfile = LocalizationContext.withSendbirdContext(UserProfile, mapStoreToProps);

const MENU_ITEMS_POP_UP = 'sendbird-menu-items-pop-up';
class MenuItems$1 extends React.Component {
  constructor(props) {
    super(props);

    LocalizationContext._defineProperty(this, "showParent", () => {
      const {
        parentContainRef = {}
      } = this.props;
      const {
        current
      } = parentContainRef;

      if (parentContainRef && current) {
        current.classList.add('sendbird-icon--pressed');
      }
    });

    LocalizationContext._defineProperty(this, "hideParent", () => {
      const {
        parentContainRef = {}
      } = this.props;
      const {
        current
      } = parentContainRef;

      if (parentContainRef && current) {
        current.classList.remove('sendbird-icon--pressed');
      }
    });

    LocalizationContext._defineProperty(this, "setupEvents", () => {
      const {
        closeDropdown
      } = this.props;
      const {
        menuRef
      } = this;

      const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      this.setState({
        handleClickOutside
      });
      document.addEventListener('mousedown', handleClickOutside);
    });

    LocalizationContext._defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    LocalizationContext._defineProperty(this, "getMenuPosition", () => {
      const {
        parentRef,
        openLeft
      } = this.props;
      const parentRect = parentRef.current.getBoundingClientRect();
      const x = parentRect.x || parentRect.left;
      const y = parentRect.y || parentRect.top;
      const menuStyle = {
        top: y,
        left: x
      };
      if (!this.menuRef.current) return menuStyle;
      const {
        innerWidth,
        innerHeight
      } = window;
      const rect = this.menuRef.current.getBoundingClientRect();

      if (y + rect.height > innerHeight) {
        menuStyle.top -= rect.height;
      }

      if (x + rect.width > innerWidth && !openLeft) {
        menuStyle.left -= rect.width;
      }

      if (menuStyle.top < 0) {
        menuStyle.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
      }

      if (menuStyle.left < 0) {
        menuStyle.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
      }

      menuStyle.top += 32;

      if (openLeft) {
        const padding = Number.isNaN(rect.width - 30) ? 108 // default
        : rect.width - 30;
        menuStyle.left -= padding;
      }

      return this.setState({
        menuStyle
      });
    });

    this.menuRef = /*#__PURE__*/React__default["default"].createRef();
    this.rootForPopup = document.body;
    this.state = {
      menuStyle: {},
      handleClickOutside: () => {}
    };
  }

  componentDidMount() {
    this.setupEvents();
    this.getMenuPosition();
    this.showParent(); // add className to body

    this.rootForPopup.className = `${MENU_ITEMS_POP_UP} ${this.rootForPopup.className}`;
  }

  componentWillUnmount() {
    this.cleanUpEvents();
    this.hideParent(); // remove className from body

    this.rootForPopup.className = this.rootForPopup.className.split(' ').filter(className => className !== MENU_ITEMS_POP_UP).join(' ');
  }

  render() {
    const {
      menuStyle
    } = this.state;
    const {
      children,
      style
    } = this.props;
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default["default"].createElement("ul", {
      className: "sendbird-dropdown__menu",
      ref: this.menuRef,
      style: LocalizationContext._objectSpread2({
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(menuStyle.left)}px`,
        top: `${Math.round(menuStyle.top)}px`
      }, style)
    }, children)), document.getElementById('sendbird-dropdown-portal'));
  }

}
MenuItems$1.propTypes = {
  closeDropdown: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired,
  style: PropTypes__default["default"].shape({}),
  // https://stackoverflow.com/a/51127130
  parentRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(PropTypes__default["default"].element)
  })]).isRequired,
  parentContainRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(PropTypes__default["default"].element)
  })]).isRequired,
  openLeft: PropTypes__default["default"].bool
};
MenuItems$1.defaultProps = {
  style: {},
  openLeft: false
};

const componentClassName = 'sendbird-sort-by-row';
function SortByRow(_ref) {
  let {
    className,
    maxItemCount,
    itemWidth,
    itemHeight,
    children
  } = _ref;

  if (children.length > maxItemCount) {
    const result = [];

    for (let i = 0; i < children.length; i += maxItemCount) {
      result.push( /*#__PURE__*/React__default["default"].createElement("div", {
        className: [...(Array.isArray(className) ? className : [className]), componentClassName].join(' '),
        key: className + i,
        style: {
          width: itemWidth * maxItemCount,
          height: itemHeight
        }
      }, children.slice(i, i + maxItemCount)));
    }

    return result;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), componentClassName].join(' '),
    style: {
      width: itemWidth * children.length,
      height: itemHeight
    }
  }, children);
}
SortByRow.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  maxItemCount: PropTypes__default["default"].number.isRequired,
  itemWidth: PropTypes__default["default"].number.isRequired,
  itemHeight: PropTypes__default["default"].number.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]).isRequired
};
SortByRow.defaultProps = {
  className: ''
};

const EMOJI_LIST_POP_UP = 'sendbird-emoji-list-pop-up';
class EmojiListItems$1 extends React.Component {
  constructor(props) {
    super(props);

    LocalizationContext._defineProperty(this, "showParent", () => {
      const {
        parentContainRef = {}
      } = this.props;
      const {
        current
      } = parentContainRef;

      if (parentContainRef && current) {
        current.classList.add('sendbird-reactions--pressed');
      }
    });

    LocalizationContext._defineProperty(this, "hideParent", () => {
      const {
        parentContainRef = {}
      } = this.props;
      const {
        current
      } = parentContainRef;

      if (parentContainRef && current) {
        current.classList.remove('sendbird-reactions--pressed');
      }
    });

    LocalizationContext._defineProperty(this, "setupEvents", () => {
      const {
        closeDropdown
      } = this.props;
      const {
        reactionRef
      } = this;

      const handleClickOutside = event => {
        if (reactionRef.current && !reactionRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      this.setState({
        handleClickOutside
      });
      document.addEventListener('mousedown', handleClickOutside);
    });

    LocalizationContext._defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    LocalizationContext._defineProperty(this, "getBarPosition", () => {
      // calculate the location that the context menu should be
      const {
        parentRef,
        spaceFromTrigger
      } = this.props;
      const spaceFromTriggerX = spaceFromTrigger.x || 0;
      const spaceFromTriggerY = spaceFromTrigger.y || 0;
      const parentRect = parentRef.current.getBoundingClientRect();
      const x = parentRect.x || parentRect.left;
      const y = parentRect.y || parentRect.top;
      const reactionStyle = {
        top: y,
        left: x
      };
      if (!this.reactionRef.current) return reactionStyle;
      const rect = this.reactionRef.current.getBoundingClientRect();

      if (reactionStyle.top < rect.height) {
        reactionStyle.top += parentRect.height;
        reactionStyle.top += spaceFromTriggerY;
      } else {
        reactionStyle.top -= rect.height;
        reactionStyle.top -= spaceFromTriggerY;
      }

      reactionStyle.left -= rect.width / 2;
      reactionStyle.left += parentRect.height / 2 - 2;
      reactionStyle.left += spaceFromTriggerX;
      const maximumLeft = window.innerWidth - rect.width;

      if (maximumLeft < reactionStyle.left) {
        reactionStyle.left = maximumLeft;
      }

      if (reactionStyle.left < 0) {
        reactionStyle.left = 0;
      }

      return this.setState({
        reactionStyle
      });
    });

    this.reactionRef = /*#__PURE__*/React__default["default"].createRef();
    this.rootForPopup = document.body;
    this.state = {
      reactionStyle: {},
      handleClickOutside: () => {}
    };
  }

  componentDidMount() {
    this.setupEvents();
    this.getBarPosition();
    this.showParent(); // add className to body

    this.rootForPopup.className = `${EMOJI_LIST_POP_UP} ${this.rootForPopup.className}`;
  }

  componentWillUnmount() {
    this.cleanUpEvents();
    this.hideParent(); // remove className from body

    this.rootForPopup.className = this.rootForPopup.className.split(' ').filter(className => className !== EMOJI_LIST_POP_UP).join(' ');
  }

  render() {
    const {
      reactionStyle
    } = this.state;
    const {
      children
    } = this.props;
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default["default"].createElement("ul", {
      className: "sendbird-dropdown__reaction-bar",
      ref: this.reactionRef,
      style: {
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(reactionStyle.left)}px`,
        top: `${Math.round(reactionStyle.top)}px`
      }
    }, /*#__PURE__*/React__default["default"].createElement(SortByRow, {
      className: "sendbird-dropdown__reaction-bar__row",
      maxItemCount: 8,
      itemWidth: 44,
      itemHeight: 40
    }, children))), document.getElementById('sendbird-emoji-list-portal'));
  }

}
EmojiListItems$1.propTypes = {
  closeDropdown: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired,
  parentRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(PropTypes__default["default"].element)
  })]).isRequired,
  parentContainRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(PropTypes__default["default"].element)
  })]).isRequired,
  spaceFromTrigger: PropTypes__default["default"].shape({
    x: PropTypes__default["default"].number,
    y: PropTypes__default["default"].number
  })
};
EmojiListItems$1.defaultProps = {
  spaceFromTrigger: {}
};

const ENTER = 13;
const MenuItems = MenuItems$1;
const EmojiListItems = EmojiListItems$1;
const MenuItem = _ref => {
  let {
    className,
    children,
    onClick,
    disable
  } = _ref;

  const handleClickEvent = e => {
    if (!disable) onClick(e);
  };

  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: index$1.getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']),
    role: "menuitem",
    onClick: handleClickEvent,
    onKeyPress: e => {
      if (e.keyCode === ENTER) handleClickEvent(e);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: index.LabelTypography.SUBTITLE_2,
    color: disable ? index.LabelColors.ONBACKGROUND_4 : index.LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]).isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  disable: PropTypes__default["default"].bool
};
MenuItem.defaultProps = {
  className: '',
  disable: false
}; // Root components should be appended before ContextMenu is rendered
function ContextMenu(_ref2) {
  let {
    menuTrigger,
    menuItems
  } = _ref2;
  const [showMenu, setShowMenu] = React.useState(false);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-context-menu",
    style: {
      display: 'inline'
    }
  }, menuTrigger(() => setShowMenu(!showMenu)), showMenu && menuItems(() => setShowMenu(false)));
}
ContextMenu.propTypes = {
  menuTrigger: PropTypes__default["default"].func.isRequired,
  menuItems: PropTypes__default["default"].func.isRequired
};

exports.Button = Button;
exports.ButtonSizes = ButtonSizes;
exports.ButtonTypes = ButtonTypes;
exports.CREATE_CHANNEL = CREATE_CHANNEL;
exports.Colors = Colors;
exports.ConnectedUserProfile = ConnectedUserProfile;
exports.ContextMenu = ContextMenu;
exports.DELETE_MESSAGE = DELETE_MESSAGE;
exports.EmojiListItems = EmojiListItems;
exports.IconButton = IconButton;
exports.LEAVE_CHANNEL = LEAVE_CHANNEL;
exports.MODAL_ROOT = MODAL_ROOT;
exports.MenuItem = MenuItem;
exports.MenuItems = MenuItems;
exports.Modal = Modal;
exports.SEND_FILE_MESSAGE = SEND_FILE_MESSAGE;
exports.SEND_MESSAGE_START = SEND_MESSAGE_START;
exports.SEND_USER_MESSAGE = SEND_USER_MESSAGE;
exports.TextButton = TextButton;
exports.Type = Type;
exports.UPDATE_USER_MESSAGE = UPDATE_USER_MESSAGE;
exports.UserProfileContext = UserProfileContext;
exports.UserProfileProvider = UserProfileProvider;
exports.changeColorToClassName = changeColorToClassName;
exports.getSdk = getSdk;
exports.selectors = selectors;
//# sourceMappingURL=index-59fdb6c9.js.map
