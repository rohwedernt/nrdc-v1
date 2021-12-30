"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPose = _interopRequireWildcard(require("react-pose"));

require("./styles.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PostAnimatorElement = _reactPose.default.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 0,
    transition: {
      y: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      },
      default: {
        duration: 2000
      }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 150
    }
  }
});

class PostAnimator extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    const {
      isVisible
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_reactPose.PoseGroup, null, isVisible && [/*#__PURE__*/_react.default.createElement(PostAnimatorElement, {
      key: "modal",
      className: "modal"
    }, this.props.children)]);
  }

}

var _default = PostAnimator;
exports.default = _default;