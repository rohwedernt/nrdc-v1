"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _icons = require("./icons/icons.js");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const HomeContent = _reactPose.default.div({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 100,
    transition: {
      y: {
        type: 'spring',
        stiffness: 300,
        damping: 100
      },
      default: {
        duration: 1000
      }
    }
  },
  closed: {
    y: '-10%',
    delay: 300
  }
});

const Item = _reactPose.default.div({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -10,
    opacity: 0
  }
});

class Home extends _react.default.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "toggle", () => this.setState({
      isOpen: !this.state.isOpen
    }));
  }

  componentDidMount() {
    setTimeout(this.toggle, 0);
  }

  render() {
    const {
      isOpen
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(HomeContent, {
      className: "blog-content",
      pose: isOpen ? 'open' : 'closed'
    }, /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/rohwedernt"
    }, /*#__PURE__*/_react.default.createElement(Item, {
      className: "item"
    }, /*#__PURE__*/_react.default.createElement(_icons.Github, null))), /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.linkedin.com/in/nate-rohweder-8b1026121/"
    }, /*#__PURE__*/_react.default.createElement(Item, {
      className: "item"
    }, /*#__PURE__*/_react.default.createElement(_icons.LinkedIn, null))), /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://twitter.com/nrohweder1"
    }, /*#__PURE__*/_react.default.createElement(Item, {
      className: "item"
    }, /*#__PURE__*/_react.default.createElement(_icons.Twitter, null))), /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.facebook.com/rohwedernt"
    }, /*#__PURE__*/_react.default.createElement(Item, {
      className: "item"
    }, /*#__PURE__*/_react.default.createElement(_icons.Facebook, null))), /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://www.instagram.com/naterohweder/"
    }, /*#__PURE__*/_react.default.createElement(Item, {
      className: "item"
    }, /*#__PURE__*/_react.default.createElement(_icons.Instagram, null))));
  }

}

var _default = Home;
exports.default = _default;