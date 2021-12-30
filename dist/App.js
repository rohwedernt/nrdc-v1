"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _styles = require("@material-ui/core/styles");

var _Navigation = _interopRequireDefault(require("./Navigation.js"));

var _Main = _interopRequireDefault(require("./Main.js"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const theme = (0, _styles.createMuiTheme)({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Raleway', 'sans-serif'].join(',')
  }
});

class Nrdcv1 extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.MuiThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_Navigation.default, null), /*#__PURE__*/_react.default.createElement(_Main.default, null)));
  }

}

var _default = Nrdcv1;
exports.default = _default;