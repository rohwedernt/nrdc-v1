"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./Home"));

var _About = _interopRequireDefault(require("./About"));

var _Blog = _interopRequireDefault(require("./Blog"));

var _Post = _interopRequireDefault(require("./Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const style = {
  flex: '1 1 auto',
  padding: '30px 60px'
};

const Main = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "this-is-main",
  style: style
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/",
  component: _Home.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/home",
  component: _Home.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/about",
  component: _About.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/code",
  component: _Blog.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/music"
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/travel"
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/craftBeer"
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/post",
  component: _Post.default
})));

var _default = Main;
exports.default = _default;