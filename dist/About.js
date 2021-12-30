"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Animator = _interopRequireDefault(require("./Animator.js"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _about = require("./content/about");

require("./about.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    whiteSpace: 'pre-line'
  })
});

const avatar = {
  float: 'right',
  width: '300px',
  height: '300px',
  borderRadius: '5px',
  margin: '20px 20px 10px 10px'
};
const style = {
  fontFamily: 'monospace',
  fontSize: '32px',
  textAlign: 'center',
  webkitTextStroke: '1px #808080',
  color: 'white',
  paddingBottom: '16px'
};
const text = {
  fontWeight: 'bold'
};

class About extends _react.default.Component {
  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_Animator.default, null, /*#__PURE__*/_react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 4
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: style
    }, _about.aboutPost.title), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      style: avatar,
      src: _about.aboutPost.imgPath,
      className: classes.avatar
    }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      component: "p"
    }, /*#__PURE__*/_react.default.createElement("p", {
      style: text
    }, _about.aboutPost.welcome.title, ","), _about.aboutPost.welcome.content, /*#__PURE__*/_react.default.createElement("a", {
      href: "www.google.com"
    }, "here."), /*#__PURE__*/_react.default.createElement("p", {
      style: text
    }, _about.aboutPost.work.title, ","), _about.aboutPost.work.content, /*#__PURE__*/_react.default.createElement("p", {
      style: text
    }, _about.aboutPost.music.title, ","), _about.aboutPost.music.content)));
  }

}

var _default = (0, _styles.withStyles)(styles)(About);

exports.default = _default;