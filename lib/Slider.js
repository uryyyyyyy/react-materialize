'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.initSlider = _this.initSlider.bind(_this);
    _this.fullscreenReset = _this.fullscreenReset.bind(_this);
    _this.setActiveIndex = _this.setActiveIndex.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'initSlider',
    value: function initSlider() {
      this.instance = M.Slider.init(this._slider, this.props.options);
    }

    /**
     * If the slider was not in fullscreen, the height is set as a style attribute
     * on the Slider element. When `.destroy()` is called, this attribute is not
     * removed, resulting in a fullscreen displayed incorrectly.
     */

  }, {
    key: 'fullscreenReset',
    value: function fullscreenReset(wasFullscreen) {
      if (!wasFullscreen && this.props.fullscreen) {
        this.instance.el.removeAttribute('style');
        this.instance.el.childNodes[0].removeAttribute('style');
      }
    }
  }, {
    key: 'setActiveIndex',
    value: function setActiveIndex(activeIndex) {
      var indicators = this.props.options.indicators;
      // In case this option is not defined, we assume true, as per default

      var showIndicators = typeof indicators === 'undefined' || indicators;
      if (showIndicators && activeIndex) {
        this.instance['$indicators'][activeIndex].className = 'indicator-item active';
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initSlider();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!this.instance) return;
      var activeIndex = this.instance.activeIndex;
      this.instance.destroy();
      this.fullscreenReset(prevProps.fullscreen);
      this.initSlider();
      // keep indicator at current index displayed
      this.setActiveIndex(activeIndex);
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
          fullscreen = _props.fullscreen,
          children = _props.children,
          className = _props.className;

      var classes = {
        fullscreen: fullscreen,
        slider: true
      };

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this2._slider = node;
          },
          className: (0, _classnames2.default)(classes, className)
        },
        _react2.default.createElement(
          'ul',
          { className: 'slides' },
          children
        )
      );
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * Whether or not the Slider should be fullscreen
   * @default false
   */
  fullscreen: _propTypes2.default.bool,
  options: _propTypes2.default.shape({
    /**
     * Set to false to hide slide indicators
     * @default true
     */
    indicators: _propTypes2.default.bool,
    /**
     * The interval between transitions in ms
     * @default 6000
     */
    interval: _propTypes2.default.number,
    /**
     * The duration of the transation animation in ms
     * @default 500
     */
    duration: _propTypes2.default.number,
    /**
     * The height of the Slider window
     * @default 400
     */
    height: _propTypes2.default.number
  })
};

Slider.defaultProps = {
  fullscreen: false,
  options: {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  }
};

exports.default = Slider;