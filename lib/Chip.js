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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chip = function (_Component) {
  _inherits(Chip, _Component);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = this.props.options;


      if (options && typeof M !== 'undefined') {
        this.instance = M.Chips.init(this._chips, options);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.instance && this.instance.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          close = _props.close,
          className = _props.className,
          options = _props.options,
          other = _objectWithoutProperties(_props, ['children', 'close', 'className', 'options']);

      var classes = (0, _classnames2.default)({
        chip: !options,
        chips: options
      }, className);
      var chipContent = _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children,
        close && _react2.default.createElement(
          _Icon2.default,
          null,
          'close'
        )
      );

      if (options) {
        chipContent = null;
      }

      delete other.close;

      return _react2.default.createElement(
        'div',
        _extends({
          className: classes
        }, this.other, {
          ref: function ref(div) {
            _this2._chips = div;
          }
        }),
        chipContent
      );
    }
  }]);

  return Chip;
}(_react.Component);

Chip.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * Shows a close icon
   */
  close: _propTypes2.default.bool,
  /**
   * Options object for the Chip Javascript Plugin
   */
  options: _propTypes2.default.shape({
    /**
     * Set the chip data
     */
    data: _propTypes2.default.arrayOf(_propTypes2.default.objectOf(_propTypes2.default.string)),
    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: _propTypes2.default.string,
    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: _propTypes2.default.string,
    /**
     * Set autocomplete options.
     */
    autocompleteOptions: _propTypes2.default.shape({
      /**
       * Data object defining autocomplete options with optional icon strings.
       */
      data: _propTypes2.default.objectOf(_propTypes2.default.string),
      /**
       * Limit of results the autocomplete shows.
       */
      limit: _propTypes2.default.number,
      /**
       * Minimum number of characters before autocomplete starts.
       */
      minLength: _propTypes2.default.number
    }),
    /**
     * Set chips limit.
     */
    limit: _propTypes2.default.number,
    /**
     * Callback for chip add.
     */
    onChipAdd: _propTypes2.default.func,
    /**
     * Callback for chip select.
     */
    onChipSelect: _propTypes2.default.func,
    /**
     * Callback for chip delete.
     */
    onChipDelete: _propTypes2.default.func
  })
};

Chip.defaultProps = {
  close: false,
  options: null
};

exports.default = Chip;