'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var index = require('./index-de107146.js');
var index$1 = require('./index-54590273.js');
var SendbirdSdkContext = require('./SendbirdSdkContext-89d804b3.js');
var index$2 = require('./index-9855395f.js');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const http = /https?:\/\//;
function LinkLabel(_ref) {
  let {
    className,
    src,
    type,
    color,
    children
  } = _ref;
  const url = http.test(src) ? src : `http://${src}`;
  return /*#__PURE__*/React__default["default"].createElement("a", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-link-label', color ? index.changeColorToClassName(color) : ''].join(' '),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird-link-label__label",
    type: type,
    color: color
  }, children));
}
LinkLabel.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  src: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].oneOf(Object.keys(index.LabelTypography)).isRequired,
  color: PropTypes__default["default"].oneOf(Object.keys(index.LabelColors)).isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired
};
LinkLabel.defaultProps = {
  className: ''
};

function DateSeparator(_ref) {
  let {
    className,
    children,
    separatorColor
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-separator'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-separator__left', `${index$1.changeColorToClassName(separatorColor)}--background-color`].join(' ')
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-separator__text"
  }, children), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-separator__right', `${index$1.changeColorToClassName(separatorColor)}--background-color`].join(' ')
  }));
}
DateSeparator.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].element]),
  separatorColor: PropTypes__default["default"].string
};
DateSeparator.defaultProps = {
  className: '',
  children: /*#__PURE__*/React__default["default"].createElement(index.Label, {
    type: index.LabelTypography.CAPTION_2,
    color: index.LabelColors.ONBACKGROUND_2
  }, "Date Separator"),
  separatorColor: index$1.Colors.ONBACKGROUND_4
};

const LINE_HEIGHT = 76;

const noop = () => {};

const KeyCode = {
  SHIFT: 16,
  ENTER: 13
};

const handleUploadFile = callback => event => {
  if (event.target.files && event.target.files[0]) {
    callback(event.target.files[0]);
  } // eslint-disable-next-line no-param-reassign


  event.target.value = '';
};

const MessageInput = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    className,
    isEdit,
    disabled,
    value,
    name,
    placeholder,
    maxLength,
    onFileUpload,
    onSendMessage,
    onCancelEdit,
    onStartTyping,
    channelUrl
  } = props;
  const {
    stringSet
  } = React.useContext(SendbirdSdkContext.LocalizationContext);
  const fileInputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState(value);
  const [isShiftPressed, setIsShiftPressed] = React.useState(false);

  const setHeight = () => {
    try {
      const elem = ref.current;
      const MAX_HEIGHT = window.document.body.offsetHeight * 0.6;

      if (elem && elem.scrollHeight >= LINE_HEIGHT) {
        if (MAX_HEIGHT < elem.scrollHeight) {
          elem.style.height = 'auto';
          elem.style.height = `${MAX_HEIGHT}px`;
        } else {
          elem.style.height = 'auto';
          elem.style.height = `${elem.scrollHeight}px`;
        }
      } else {
        elem.style.height = '';
      }
    } catch (error) {// error
    }
  }; // after setHeight called twice, the textarea goes to the initialized


  React.useEffect(() => {
    setHeight();
    return setHeight;
  }, [inputValue]); // clear input value when channel changes

  React.useEffect(() => {
    if (!isEdit) {
      setInputValue('');
    }
  }, [channelUrl]);

  const sendMessage = () => {
    if (inputValue && inputValue.trim().length > 0) {
      const trimmedInputValue = inputValue.trim();

      if (isEdit) {
        // useUpdateMessageCallback
        onSendMessage(name, trimmedInputValue, () => {
          onCancelEdit();
        });
      } else {
        // useSendMessageCallback
        onSendMessage();
        setInputValue('');
      }
    }
  };

  return /*#__PURE__*/React__default["default"].createElement("form", {
    className: index$2.getClassName([className, isEdit ? 'sendbird-message-input__edit' : '', disabled ? 'sendbird-message-input-form__disabled' : ''])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: index$2.getClassName(['sendbird-message-input', disabled ? 'sendbird-message-input__disabled' : ''])
  }, /*#__PURE__*/React__default["default"].createElement("textarea", {
    className: "sendbird-message-input--textarea",
    disabled: disabled,
    ref: ref,
    name: name,
    value: inputValue,
    maxLength: maxLength,
    onChange: e => {
      setInputValue(e.target.value);
      onStartTyping();
    },
    onKeyDown: e => {
      if (e.keyCode === KeyCode.SHIFT) {
        setIsShiftPressed(true);
      }

      if (!isShiftPressed && e.keyCode === KeyCode.ENTER) {
        e.preventDefault();
        sendMessage();
      }
    },
    onKeyUp: e => {
      if (e.keyCode === KeyCode.SHIFT) {
        setIsShiftPressed(false);
      }
    }
  }), !inputValue && /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird-message-input--placeholder",
    type: index.LabelTypography.BODY_1,
    color: index.LabelColors.ONBACKGROUND_3
  }, placeholder || stringSet.MESSAGE_INPUT__PLACE_HOLDER), !isEdit && inputValue && inputValue.trim().length > 0 && /*#__PURE__*/React__default["default"].createElement(index$1.IconButton, {
    className: "sendbird-message-input--send",
    height: "32px",
    width: "32px",
    onClick: sendMessage
  }, /*#__PURE__*/React__default["default"].createElement(index.Icon, {
    type: index.IconTypes.SEND,
    fillColor: index.IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  })), !isEdit && (!inputValue || !(inputValue.trim().length > 0)) && /*#__PURE__*/React__default["default"].createElement(index$1.IconButton, {
    className: "sendbird-message-input--attach",
    height: "32px",
    width: "32px",
    onClick: () => {
      // todo: clear previous input
      fileInputRef.current.click();
    }
  }, /*#__PURE__*/React__default["default"].createElement(index.Icon, {
    type: index.IconTypes.ATTACH,
    fillColor: index.IconColors.CONTENT_INVERSE,
    width: "20px",
    height: "20px"
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    className: "sendbird-message-input--attach-input",
    type: "file",
    ref: fileInputRef,
    onChange: handleUploadFile(onFileUpload)
  }))), isEdit && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input--edit-action"
  }, /*#__PURE__*/React__default["default"].createElement(index$1.Button, {
    className: "sendbird-message-input--edit-action__cancel",
    type: index$1.ButtonTypes.SECONDARY,
    size: index$1.ButtonSizes.SMALL,
    onClick: onCancelEdit
  }, stringSet.BUTTON__CANCEL), /*#__PURE__*/React__default["default"].createElement(index$1.Button, {
    className: "sendbird-message-input--edit-action__save",
    type: index$1.ButtonTypes.PRIMARY,
    size: index$1.ButtonSizes.SMALL,
    onClick: () => {
      if (inputValue) {
        const trimmedInputValue = inputValue.trim();
        onSendMessage(name, trimmedInputValue, () => {
          onCancelEdit();
        });
      }
    }
  }, stringSet.BUTTON__SAVE)));
});
MessageInput.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  placeholder: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].bool]),
  isEdit: PropTypes__default["default"].bool,
  name: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  value: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool,
  maxLength: PropTypes__default["default"].number,
  onFileUpload: PropTypes__default["default"].func,
  onSendMessage: PropTypes__default["default"].func,
  onStartTyping: PropTypes__default["default"].func,
  onCancelEdit: PropTypes__default["default"].func,
  channelUrl: PropTypes__default["default"].string
};
MessageInput.defaultProps = {
  className: '',
  value: '',
  channelUrl: '',
  onSendMessage: noop,
  name: 'sendbird-message-input',
  isEdit: false,
  disabled: false,
  placeholder: '',
  maxLength: 5000,
  onFileUpload: noop,
  onCancelEdit: noop,
  onStartTyping: noop
};

const FileViewerComponent = _ref => {
  let {
    // sender
    profileUrl,
    nickname,
    // file
    name,
    type,
    url,
    // others
    isByMe,
    onClose,
    onDelete,
    disableDelete
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__left"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__left__avatar"
  }, /*#__PURE__*/React__default["default"].createElement(index.Avatar, {
    height: "32px",
    width: "32px",
    src: profileUrl
  })), /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird-fileviewer__header__left__filename",
    type: index.LabelTypography.H_2,
    color: index.LabelColors.ONBACKGROUND_1
  }, name), /*#__PURE__*/React__default["default"].createElement(index.Label, {
    className: "sendbird-fileviewer__header__left__sender-name",
    type: index.LabelTypography.BODY_1,
    color: index.LabelColors.ONBACKGROUND_2
  }, nickname)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right"
  }, index$2.isSupportedFileView(type) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right__actions"
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    className: "sendbird-fileviewer__header__right__actions__download",
    rel: "noopener noreferrer",
    href: url,
    target: "_blank"
  }, /*#__PURE__*/React__default["default"].createElement(index.Icon, {
    type: index.IconTypes.DOWNLOAD,
    fillColor: index.IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px"
  })), onDelete && isByMe && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__delete"
  }, /*#__PURE__*/React__default["default"].createElement(index.Icon, {
    className: disableDelete ? 'disabled' : '',
    type: index.IconTypes.DELETE,
    fillColor: disableDelete ? index.IconColors.GRAY : index.IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: () => {
      if (!disableDelete) {
        onDelete();
      }
    }
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__close"
  }, /*#__PURE__*/React__default["default"].createElement(index.Icon, {
    type: index.IconTypes.CLOSE,
    fillColor: index.IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: onClose
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__content"
  }, index$2.isVideo(type) &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/media-has-caption
  React__default["default"].createElement("video", {
    controls: true,
    className: "sendbird-fileviewer__content__video"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: url,
    type: type
  })), index$2.isImage(type) && /*#__PURE__*/React__default["default"].createElement("img", {
    src: url,
    alt: name,
    className: "sendbird-fileviewer__content__img"
  }), !index$2.isSupportedFileView(type) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__content__unsupported"
  }, /*#__PURE__*/React__default["default"].createElement(index.Label, {
    type: index.LabelTypography.H_1,
    color: index.LabelColors.ONBACKGROUND_1
  }, "Unsupoprted message"))));
};
FileViewerComponent.propTypes = {
  profileUrl: PropTypes__default["default"].string.isRequired,
  nickname: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  url: PropTypes__default["default"].string.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  onClose: PropTypes__default["default"].func.isRequired,
  onDelete: PropTypes__default["default"].func.isRequired,
  isByMe: PropTypes__default["default"].bool,
  disableDelete: PropTypes__default["default"].bool
};
FileViewerComponent.defaultProps = {
  isByMe: true,
  disableDelete: false
};
function FileViewer(props) {
  const {
    message,
    isByMe,
    onClose,
    onDelete
  } = props;
  const {
    sender = {},
    type,
    url,
    name = '',
    threadInfo = {}
  } = message;
  const disableDelete = (threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.replyCount) > 0;
  const {
    profileUrl,
    nickname = ''
  } = sender;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(FileViewerComponent, {
    profileUrl: profileUrl,
    nickname: nickname,
    type: type,
    url: url,
    name: name,
    onClose: onClose,
    onDelete: onDelete,
    isByMe: isByMe,
    disableDelete: disableDelete
  }), document.getElementById(index$1.MODAL_ROOT));
}
FileViewer.propTypes = {
  message: PropTypes__default["default"].shape({
    sender: PropTypes__default["default"].shape({
      profileUrl: PropTypes__default["default"].string,
      nickname: PropTypes__default["default"].string
    }),
    type: PropTypes__default["default"].string,
    url: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string
  }).isRequired,
  isByMe: PropTypes__default["default"].bool,
  onClose: PropTypes__default["default"].func.isRequired,
  onDelete: PropTypes__default["default"].func.isRequired
};
FileViewer.defaultProps = {
  isByMe: true
};

const isEmpty = val => val === null || val === undefined; // Some Ids return string and number inconsistently
// only use to comapre IDs


function compareIds (a, b) {
  if (isEmpty(a) || isEmpty(b)) {
    return false;
  }

  const aString = a.toString();
  const bString = b.toString();
  return aString === bString;
}

exports.DateSeparator = DateSeparator;
exports.FileViewer = FileViewer;
exports.LinkLabel = LinkLabel;
exports.MessageInput = MessageInput;
exports.compareIds = compareIds;
//# sourceMappingURL=compareIds-074cb64a.js.map
