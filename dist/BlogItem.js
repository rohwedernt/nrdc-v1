"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  card: {
    maxWidth: 345,
    margin: '15px',
    float: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  }
};

class BlogItem extends _react.default.Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    this.props.history.push("post");
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Card.default, {
      className: classes.card
    }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
      className: classes.media,
      image: this.props.image,
      title: this.props.title
    }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      gutterBottom: true,
      variant: "headline",
      component: "h2"
    }, this.props.title), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      component: "p"
    }, this.props.desc)), /*#__PURE__*/_react.default.createElement(_CardActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: this.routeChange,
      size: "small",
      color: "primary"
    }, "More"))));
  }

}

BlogItem.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles)(BlogItem));

exports.default = _default;