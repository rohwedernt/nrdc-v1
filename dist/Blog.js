"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _BlogItem = _interopRequireDefault(require("./BlogItem"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BlogContent = _reactPose.default.ul({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 75,
    transition: {
      y: {
        type: 'spring',
        stiffness: 500,
        damping: 15
      },
      default: {
        duration: 2000
      }
    }
  },
  closed: {
    y: '-100%',
    delay: 300
  }
});

const Item = _reactPose.default.div({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 20,
    opacity: 0
  }
});

class Travel extends _react.default.PureComponent {
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
    const image = "https://cdn-images-1.medium.com/max/711/1*jhD-rWxuFvo17Q1Mw6LuEw.jpeg";
    return /*#__PURE__*/_react.default.createElement(BlogContent, {
      className: "blog-content",
      pose: isOpen ? 'open' : 'closed'
    }, /*#__PURE__*/_react.default.createElement(Item, {
      className: "item"
    }, /*#__PURE__*/_react.default.createElement(_BlogItem.default, {
      image: image,
      title: "Building a React App",
      desc: "This is a sample code post about some unbelievable feat accompished in computer science"
    })));
  }

}

var _default = Travel;
exports.default = _default;