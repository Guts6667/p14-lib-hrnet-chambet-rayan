"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
var Modal = function Modal(_ref) {
  var title = _ref.title,
    description = _ref.description,
    buttonText = _ref.buttonText;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isClosed = _useState2[0],
    setIsClosed = _useState2[1];
  var handleClick = function handleClick() {
    setIsClosed(!isClosed);
  };
  return !isClosed && /*#__PURE__*/_react.default.createElement("div", {
    className: "container__modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container__modal-text"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-title"
  }, title), /*#__PURE__*/_react.default.createElement("span", null, description)), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn",
    onClick: handleClick
  }, buttonText));
};
var _default = Modal;
exports.default = _default;