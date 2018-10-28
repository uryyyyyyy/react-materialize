'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaBox = function (_Component) {
  _inherits(MediaBox, _Component);

  function MediaBox() {
    _classCallCheck(this, MediaBox);

    return _possibleConstructorReturn(this, (MediaBox.__proto__ || Object.getPrototypeOf(MediaBox)).apply(this, arguments));
  }

  _createClass(MediaBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var options = this.props.options;


        this.instance = M.Materialbox.init(this._materialBoxed, options);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          src = _props.src,
          className = _props.className,
          caption = _props.caption,
          props = _objectWithoutProperties(_props, ['src', 'className', 'caption']);

      return _react2.default.createElement('img', _extends({
        className: (0, _classnames2.default)('materialboxed', className),
        'data-caption': caption,
        src: src,
        ref: function ref(img) {
          _this2._materialBoxed = img;
        }
      }, props));
    }
  }]);

  return MediaBox;
}(_react.Component);

MediaBox.propTypes = {
  className: _propTypes2.default.string,
  /**
   * The caption shown below the image when opened
   */
  caption: _propTypes2.default.string,
  /**
   * The path to the image
   */
  src: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.shape({
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes2.default.number,
    /**
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes2.default.number,
    /**
     * Callback function called before materialbox is opened.
     */
    onOpenStart: _propTypes2.default.func,
    /**
     * Callback function called after materialbox is opened.
     */
    onOpenEnd: _propTypes2.default.func,
    /**
     * Callback function called before materialbox is closed.
     */
    onCloseStart: _propTypes2.default.func,
    /**
     * Callback function called after materialbox is closed.
     */
    onCloseEnd: _propTypes2.default.func
  })
};

MediaBox.defaultProps = {
  options: {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};

exports.default = MediaBox;