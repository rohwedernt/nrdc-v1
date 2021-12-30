"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const style = {
  paddingTop: '30px',
  display: 'flex',
  justifyContent: 'center'
};

class Navigation extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: style
    }, /*#__PURE__*/_react.default.createElement("ul", {
      style: {
        display: 'flex',
        listStyleType: 'none',
        padding: '0',
        margin: '0'
      }
    }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      destination: "/home",
      text: "nateRohweder",
      class: "title"
    }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      destination: "/about",
      text: "about"
    }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      destination: "/code",
      text: "codeStuff"
    }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      destination: "/music",
      text: "musicStuff"
    }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      destination: "/travel",
      text: "travelStuff"
    }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      destination: "/craftBeer",
      text: "craftBeerStuff"
    })));
  }

}

var _default = Navigation;
exports.default = _default;