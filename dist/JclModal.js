"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./JclModal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var JclModal = function JclModal(_ref) {
  var isOpen = _ref.isOpen,
    onRequestClose = _ref.onRequestClose,
    children = _ref.children,
    className = _ref.className;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-button",
    onClick: onRequestClose,
    "aria-label": "Close modal"
  }, "\xD7")));
};
var _default = exports["default"] = JclModal;