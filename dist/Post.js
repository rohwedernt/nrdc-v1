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
  float: 'left',
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

class Post extends _react.default.Component {
  render() {
    const {
      classes
    } = this.props;
    const image = "https://cdn-images-1.medium.com/max/711/1*jhD-rWxuFvo17Q1Mw6LuEw.jpeg";
    return /*#__PURE__*/_react.default.createElement(_Animator.default, null, /*#__PURE__*/_react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 4
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: style
    }, "building a react app"), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      style: avatar,
      alt: "profPic",
      src: image,
      className: classes.avatar
    }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      component: "p"
    }, /*#__PURE__*/_react.default.createElement("p", {
      style: text
    }, "Paragraph 1,"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt id aliquet risus. Posuere sollicitudin aliquam ultrices sagittis. Semper risus in hendrerit gravida rutrum. Eget dolor morbi non arcu risus. Blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Id donec ultrices tincidunt arcu non sodales neque sodales. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Sagittis aliquam malesuada bibendum arcu vitae elementum. Laoreet id donec ultrices tincidunt. Placerat orci nulla pellentesque dignissim enim sit. Ultrices mi tempus imperdiet nulla malesuada.\n                Nulla facilisi morbi tempus iaculis urna id volutpat. Lacinia quis vel eros donec ac odio tempor. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ultricies mi quis hendrerit dolor magna. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Arcu ac tortor dignissim convallis. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Libero nunc consequat interdum varius sit amet mattis. At erat pellentesque adipiscing commodo elit at. Volutpat sed cras ornare arcu dui vivamus arcu felis.", /*#__PURE__*/_react.default.createElement("a", {
      href: "www.google.com"
    }, "here."), /*#__PURE__*/_react.default.createElement("p", {
      style: text
    }, "Paragraph 2,"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", /*#__PURE__*/_react.default.createElement("p", {
      style: text
    }, "Paragraph 3,"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt id aliquet risus. Posuere sollicitudin aliquam ultrices sagittis. Semper risus in hendrerit gravida rutrum. Eget dolor morbi non arcu risus. Blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Id donec ultrices tincidunt arcu non sodales neque sodales. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Sagittis aliquam malesuada bibendum arcu vitae elementum. Laoreet id donec ultrices tincidunt. Placerat orci nulla pellentesque dignissim enim sit. Ultrices mi tempus imperdiet nulla malesuada.\n                Nulla facilisi morbi tempus iaculis urna id volutpat. Lacinia quis vel eros donec ac odio tempor. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ultricies mi quis hendrerit dolor magna. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Arcu ac tortor dignissim convallis. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Libero nunc consequat interdum varius sit amet mattis. At erat pellentesque adipiscing commodo elit at. Volutpat sed cras ornare arcu dui vivamus arcu felis.")));
  }

}

var _default = (0, _styles.withStyles)(styles)(Post);

exports.default = _default;