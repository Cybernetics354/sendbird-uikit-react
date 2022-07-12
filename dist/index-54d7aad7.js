import React__default, { useState, useEffect, useContext, Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { a as _objectSpread2, b as LocalizationContext, w as withSendbirdContext, d as _defineProperty } from './LocalizationContext-84f2379a.js';
import { L as Label, a as LabelTypography, b as LabelColors, I as Icon, c as IconTypes, d as IconColors, A as Avatar } from './index-d7f49a62.js';
import { m as getClassName } from './index-8a12b66b.js';

/**
 * user profile goes deep inside the component tree
 * use this context as a short circuit to send in values
 */

const UserProfileContext = /*#__PURE__*/React__default.createContext({
  disableUserProfile: true,
  isOpenChannel: false,
  renderUserProfile: null
});

const UserProfileProvider = props => {
  const {
    children,
    className
  } = props;
  return /*#__PURE__*/React__default.createElement(UserProfileContext.Provider, {
    value: props
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, children));
};

UserProfileProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  isOpenChannel: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  disableUserProfile: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  renderUserProfile: PropTypes.func,
  className: PropTypes.string
};
UserProfileProvider.defaultProps = {
  className: null,
  isOpenChannel: false,
  disableUserProfile: false,
  renderUserProfile: null
};

const IconButton = /*#__PURE__*/React__default.forwardRef((props, ref) => {
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
  const [pressed, setPressed] = useState('');
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default.createElement("button", {
      className: [...(Array.isArray(className) ? className : [className]), 'sendbird-iconbutton', pressed].join(' '),
      disabled: disabled,
      ref: ref,
      type: type // eslint-disable-line react/button-has-type
      ,
      style: _objectSpread2(_objectSpread2({}, style), {}, {
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
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "sendbird-iconbutton__inner"
    }, children))
  );
});
IconButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.shape({})
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
  return /*#__PURE__*/React__default.createElement("button", {
    className: injectingClassNames,
    type: "button",
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-button__text",
    type: LabelTypography.BUTTON_1,
    color: LabelColors.ONCONTENT_1
  }, children));
}
const ButtonTypes = Type;
const ButtonSizes = Size;
Button.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  type: PropTypes.oneOf(Object.keys(Type)),
  size: PropTypes.oneOf(Object.keys(Size)),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_1,
    color: LabelColors.ONBACKGROUND_1
  }, titleText));
};
ModalHeader.propTypes = {
  titleText: PropTypes.string.isRequired
};
const ModalBody = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__body"
  }, children);
};
ModalBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)])
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
  } = useContext(LocalizationContext);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__footer"
  }, /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    onClick: onCancel
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.BUTTON__CANCEL)), /*#__PURE__*/React__default.createElement(Button, {
    type: type,
    disabled: disabled,
    onClick: onSubmit
  }, submitText));
};
ModalFooter.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
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
  useEffect(() => {
    body.className = `sendbird-modal-pop-up ${body.className}`;
    return () => {
      body.className = body.className.split(' ').filter(className => className !== 'sendbird-modal-pop-up').join(' ');
    };
  }, []);
  return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__content"
  }, /*#__PURE__*/React__default.createElement(ModalHeader, {
    titleText: titleText
  }), /*#__PURE__*/React__default.createElement(ModalBody, null, children), !hideFooter && /*#__PURE__*/React__default.createElement(ModalFooter, {
    disabled: disabled,
    onCancel: onCancel,
    onSubmit: onSubmit,
    submitText: submitText,
    type: type
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__close"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    width: "32px",
    height: "32px",
    onClick: onCancel
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    fillColor: IconColors.DEFAULT,
    width: "24px",
    height: "24px"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__backdrop"
  })), document.getElementById(MODAL_ROOT));
}
Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  hideFooter: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), changeColorToClassName(color), notUnderline ? 'sendbird-textbutton--not-underline' : 'sendbird-textbutton', disabled ? 'sendbird-textbutton--disabled' : ''].join(' '),
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: onClick
  }, children);
}
TextButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  notUnderline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
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
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird__user-profile"
  }, /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-avatar"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    height: "80px",
    width: "80px",
    src: user.profileUrl
  })), /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-name"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME)), user.userId !== currentUserId && !disableMessaging && /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-message"
  }, /*#__PURE__*/React__default.createElement(Button, {
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
  }, stringSet.USER_PROFILE__MESSAGE)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird__user-profile-separator"
  }), /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-userId"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird__user-profile-userId--label",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.USER_PROFILE__USER_ID), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird__user-profile-userId--value",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_1
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

var ConnectedUserProfile = withSendbirdContext(UserProfile, mapStoreToProps);

const MENU_ITEMS_POP_UP = 'sendbird-menu-items-pop-up';
class MenuItems$1 extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showParent", () => {
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

    _defineProperty(this, "hideParent", () => {
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

    _defineProperty(this, "setupEvents", () => {
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

    _defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _defineProperty(this, "getMenuPosition", () => {
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

    this.menuRef = /*#__PURE__*/React__default.createRef();
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
    return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default.createElement("ul", {
      className: "sendbird-dropdown__menu",
      ref: this.menuRef,
      style: _objectSpread2({
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(menuStyle.left)}px`,
        top: `${Math.round(menuStyle.top)}px`
      }, style)
    }, children)), document.getElementById('sendbird-dropdown-portal'));
  }

}
MenuItems$1.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  style: PropTypes.shape({}),
  // https://stackoverflow.com/a/51127130
  parentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]).isRequired,
  parentContainRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]).isRequired,
  openLeft: PropTypes.bool
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
      result.push( /*#__PURE__*/React__default.createElement("div", {
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

  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), componentClassName].join(' '),
    style: {
      width: itemWidth * children.length,
      height: itemHeight
    }
  }, children);
}
SortByRow.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  maxItemCount: PropTypes.number.isRequired,
  itemWidth: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired
};
SortByRow.defaultProps = {
  className: ''
};

const EMOJI_LIST_POP_UP = 'sendbird-emoji-list-pop-up';
class EmojiListItems$1 extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showParent", () => {
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

    _defineProperty(this, "hideParent", () => {
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

    _defineProperty(this, "setupEvents", () => {
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

    _defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _defineProperty(this, "getBarPosition", () => {
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

    this.reactionRef = /*#__PURE__*/React__default.createRef();
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
    return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default.createElement("ul", {
      className: "sendbird-dropdown__reaction-bar",
      ref: this.reactionRef,
      style: {
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(reactionStyle.left)}px`,
        top: `${Math.round(reactionStyle.top)}px`
      }
    }, /*#__PURE__*/React__default.createElement(SortByRow, {
      className: "sendbird-dropdown__reaction-bar__row",
      maxItemCount: 8,
      itemWidth: 44,
      itemHeight: 40
    }, children))), document.getElementById('sendbird-emoji-list-portal'));
  }

}
EmojiListItems$1.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  parentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]).isRequired,
  parentContainRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]).isRequired,
  spaceFromTrigger: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
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

  return /*#__PURE__*/React__default.createElement("li", {
    className: getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']),
    role: "menuitem",
    onClick: handleClickEvent,
    onKeyPress: e => {
      if (e.keyCode === ENTER) handleClickEvent(e);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: LabelTypography.SUBTITLE_2,
    color: disable ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool
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
  const [showMenu, setShowMenu] = useState(false);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-context-menu",
    style: {
      display: 'inline'
    }
  }, menuTrigger(() => setShowMenu(!showMenu)), showMenu && menuItems(() => setShowMenu(false)));
}
ContextMenu.propTypes = {
  menuTrigger: PropTypes.func.isRequired,
  menuItems: PropTypes.func.isRequired
};

export { Button as B, ContextMenu as C, DELETE_MESSAGE as D, EmojiListItems as E, IconButton as I, LEAVE_CHANNEL as L, Modal as M, SEND_MESSAGE_START as S, Type as T, UserProfileContext as U, TextButton as a, MenuItems as b, MenuItem as c, ButtonTypes as d, ButtonSizes as e, ConnectedUserProfile as f, getSdk as g, UserProfileProvider as h, CREATE_CHANNEL as i, UPDATE_USER_MESSAGE as j, SEND_USER_MESSAGE as k, SEND_FILE_MESSAGE as l, Colors as m, changeColorToClassName as n, MODAL_ROOT as o, selectors as s };
//# sourceMappingURL=index-54d7aad7.js.map
