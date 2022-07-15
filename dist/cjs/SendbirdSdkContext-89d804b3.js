'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getStringSet = function () {
  let lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  const stringSet = {
    en: {
      OPEN_CHANNEL_SETTINGS__OPERATOR_TITLE: 'Channel Information',
      OPEN_CHANNEL_SETTINGS__OPERATOR_URL: 'URL',
      OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE: 'Participants',
      OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL: 'Delete channel',
      OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE: 'Delete this channel',
      OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT: 'Delete',
      OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE: 'Participants',
      OPEN_CHANNEL_SETTINGS__EMPTY_LIST: 'No participants yet',
      OPEN_CHANNEL_SETTINGS__SEE_ALL: 'See all participants',
      OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE: 'All participants',
      OPEN_CHANNEL_SETTINGS__NO_TITLE: '(No title)',
      OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS: 'participants',
      TRYING_TO_CONNECT: 'Trying to connect…',
      USER_PROFILE__MESSAGE: 'Message',
      USER_PROFILE__USER_ID: 'User ID',
      EDIT_PROFILE__TITLE: 'My profile',
      EDIT_PROFILE__IMAGE_LABEL: 'Profile image',
      EDIT_PROFILE__IMAGE_UPLOAD: 'Upload',
      EDIT_PROFILE__NICKNAME_LABEL: 'Nickname',
      EDIT_PROFILE__NICKNAME_PLACEHOLDER: 'Enter your nickname',
      EDIT_PROFILE__USERID_LABEL: 'User ID',
      EDIT_PROFILE__THEME_LABEL: 'Dark theme',
      MESSAGE_INPUT__PLACE_HOLDER: 'Enter message',
      MESSAGE_INPUT__PLACE_HOLDER__DISABLED: 'Chat is unavailable in this channel',
      MESSAGE_INPUT__PLACE_HOLDER__MUTED: 'Chat is unavailable because you are being muted',
      MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER: 'Reply to message',
      CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE: 'new message(s) since',
      CHANNEL__MESSAGE_LIST__NOTIFICATION__ON: 'on',
      CHANNEL_SETTING__HEADER__TITLE: 'Channel information',
      CHANNEL_SETTING__PROFILE__EDIT: 'Edit',
      CHANNEL_SETTING__MEMBERS__TITLE: 'Members',
      CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS: 'All members',
      CHANNEL_SETTING__MEMBERS__INVITE_MEMBER: 'Invite users',
      CHANNEL_SETTING__MEMBERS__YOU: ' (You)',
      CHANNEL_SETTING__LEAVE_CHANNEL__TITLE: 'Leave channel',
      CHANNEL_SETTING__OPERATORS__TITLE: 'Operators',
      CHANNEL_SETTING__OPERATORS__TITLE_ALL: 'All operators',
      CHANNEL_SETTING__OPERATORS__TITLE_ADD: 'Add operator',
      CHANNEL_SETTING__MUTED_MEMBERS__TITLE: 'Muted members',
      CHANNEL_SETTING__BANNED_MEMBERS__TITLE: 'Banned members',
      CHANNEL_SETTING__FREEZE_CHANNEL: 'Freeze Channel',
      BUTTON__CANCEL: 'Cancel',
      BUTTON__DELETE: 'Delete',
      BUTTON__SAVE: 'Save',
      BUTTON__CREATE: 'Create',
      BUTTON__INVITE: 'Invite',
      BADGE__OVER: '+',
      MODAL__DELETE_MESSAGE__TITLE: 'Delete this message?',
      MODAL__CHANNEL_INFORMATION__TITLE: 'Edit channel information',
      MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE: 'Channel image',
      MODAL__CHANNEL_INFORMATION__UPLOAD: 'Upload',
      MODAL__CHANNEL_INFORMATION__CHANNEL_NAME: 'Channel name',
      MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER: 'Enter name',
      MODAL__INVITE_MEMBER__TITLE: 'Invite member',
      MODAL__INVITE_MEMBER__SELECTEC: 'selected',
      MODAL__CHOOSE_CHANNEL_TYPE__TITLE: 'New channel',
      MODAL__CHOOSE_CHANNEL_TYPE__GROUP: 'Group',
      MODAL__CHOOSE_CHANNEL_TYPE__SUPER_GROUP: 'Super group',
      MODAL__CHOOSE_CHANNEL_TYPE__BROADCAST: 'Broadcast',
      MODAL__CREATE_CHANNEL__TITLE: 'New channel',
      MODAL__CREATE_CHANNEL__SELECTED: 'selected',
      TYPING_INDICATOR__IS_TYPING: 'is typing...',
      TYPING_INDICATOR__AND: 'and',
      TYPING_INDICATOR__ARE_TYPING: 'are typing...',
      TYPING_INDICATOR__MULTIPLE_TYPING: 'Several people are typing...',
      CHANNEL_FROZEN: 'Channel frozen',
      PLACE_HOLDER__NO_CHANNEL: 'No channels',
      PLACE_HOLDER__WRONG: 'Something went wrong',
      PLACE_HOLDER__RETRY_TO_CONNECT: 'Retry',
      PLACE_HOLDER__NO_MESSAGES: 'No messages',
      NO_TITLE: 'No title',
      NO_NAME: '(No name)',
      NO_MEMBERS: '(No members)',
      TOOLTIP__AND_YOU: ', and you',
      TOOLTIP__YOU: 'you',
      TOOLTIP__UNKNOWN_USER: '(no name)',
      UNKNOWN__UNKNOWN_MESSAGE_TYPE: '(Unknown message type)',
      UNKNOWN__CANNOT_READ_MESSAGE: 'Cannot read this message.',
      MESSAGE_EDITED: '(edited)',
      MESSAGE_MENU__COPY: 'Copy',
      MESSAGE_MENU__REPLY: 'Reply',
      MESSAGE_MENU__EDIT: 'Edit',
      MESSAGE_MENU__RESEND: 'Resend',
      MESSAGE_MENU__DELETE: 'Delete',
      SEARCH: 'Search',
      SEARCH_IN_CHANNEL: 'Search in channel',
      SEARCH_IN: 'Search in',
      SEARCHING: 'Searching for messages...',
      NO_SEARCHED_MESSAGE: 'No results found.',
      QUOTE_MESSAGE_INPUT__REPLY_TO: 'Reply to',
      QUOTE_MESSAGE_INPUT__FILE_TYPE_IMAGE: 'Photo',
      QUOTE_MESSAGE_INPUT__FILE_TYPE_GIF: 'GIF',
      QUOTE_MESSAGE_INPUT__FILE_TYPE__VIDEO: 'Video',
      QUOTED_MESSAGE__REPLIED_TO: 'replied to',
      QUOTED_MESSAGE__CURRENT_USER: 'You',
      // FIXME: get back legacy, remove after refactoring open channel messages
      CONTEXT_MENU_DROPDOWN__COPY: 'Copy',
      CONTEXT_MENU_DROPDOWN__EDIT: 'Edit',
      CONTEXT_MENU_DROPDOWN__RESEND: 'Resend',
      CONTEXT_MENU_DROPDOWN__DELETE: 'Delete'
    }
  };
  return stringSet[lang];
};

var LocalizationContext = /*#__PURE__*/React__default["default"].createContext({
  stringSet: getStringSet('en'),
  dateLocale: null
});

var LocalizationProvider = function (props) {
  var children = props.children;
  return /*#__PURE__*/React__default["default"].createElement(LocalizationContext.Provider, {
    value: props
  }, children);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

exports.__assign = function() {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/* eslint-disable no-bitwise */

/* eslint-disable eqeqeq */

/* eslint-disable no-mixed-operators */
// https://stackoverflow.com/a/2117523
// used mainly for dom key generation
var uuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const SendbirdSdkContext = /*#__PURE__*/React__default["default"].createContext();

const withSendbirdContext = (OriginalComponent, mapStoreToProps) => {
  const ContextAwareComponent = props => /*#__PURE__*/React__default["default"].createElement(SendbirdSdkContext.Consumer, null, context => {
    if (mapStoreToProps && typeof mapStoreToProps !== 'function') {
      // eslint-disable-next-line no-console
      console.warn('Second parameter to withSendbirdContext must be a pure function');
    }

    const mergedProps = mapStoreToProps && typeof mapStoreToProps === 'function' ? _objectSpread2(_objectSpread2({}, mapStoreToProps(context)), props) : _objectSpread2(_objectSpread2({}, context), props); // eslint-disable-next-line react/jsx-props-no-spreading

    return /*#__PURE__*/React__default["default"].createElement(OriginalComponent, mergedProps);
  });

  const componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = `SendbirdAware${componentName}`;
  return ContextAwareComponent;
};

exports.LocalizationContext = LocalizationContext;
exports.LocalizationProvider = LocalizationProvider;
exports.SendbirdSdkContext = SendbirdSdkContext;
exports.__spreadArray = __spreadArray;
exports._defineProperty = _defineProperty;
exports._objectSpread2 = _objectSpread2;
exports.getStringSet = getStringSet;
exports.uuidv4 = uuidv4;
exports.withSendbirdContext = withSendbirdContext;
//# sourceMappingURL=SendbirdSdkContext-89d804b3.js.map
