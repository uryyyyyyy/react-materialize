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

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _this.state = {
      value: ''
    };

    _this.id = props.id || (0, _idgen2.default)();
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(TextInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var onChange = this.props.onChange;

      if (onChange) onChange(event);

      this.setState({ value: event.target.value });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        M.updateTextFields();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          s = _props.s,
          m = _props.m,
          l = _props.l,
          disabled = _props.disabled,
          noLayout = _props.noLayout,
          placeholder = _props.placeholder,
          icon = _props.icon,
          label = _props.label,
          inputClassName = _props.inputClassName,
          success = _props.success,
          error = _props.error,
          validate = _props.validate,
          value = _props.value,
          type = _props.type;


      var sizes = { s: s, m: m, l: l };

      var responsiveClasses = void 0;
      if (!noLayout) {
        responsiveClasses = { col: true };
        _constants2.default.SIZES.forEach(function (size) {
          responsiveClasses[size + sizes[size]] = sizes[size];
        });
      }

      var wrapperClasses = (0, _classnames2.default)('input-field', responsiveClasses);

      var inputProps = {
        placeholder: placeholder,
        type: type || 'text',
        id: this.id,
        value: value || this.state.value,
        disabled: disabled
      };

      var renderLabel = function renderLabel() {
        return label && _react2.default.createElement(
          'label',
          {
            'data-success': success,
            'data-error': error,
            htmlFor: inputProps.id
          },
          label
        );
      };

      var renderIcon = function renderIcon() {
        return icon && _react2.default.createElement(
          'i',
          { className: 'material-icons prefix' },
          icon
        );
      };

      return _react2.default.createElement(
        'div',
        { className: wrapperClasses },
        renderIcon(),
        _react2.default.createElement('input', _extends({
          ref: function ref(el) {
            _this2.inputRef = el;
          },
          onChange: this.handleChange,
          className: (0, _classnames2.default)({ validate: validate }, inputClassName)
        }, inputProps)),
        renderLabel()
      );
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes2.default.bool,
  /*
   * Responsive size for Small
   */
  s: _propTypes2.default.number,
  /*
   * Responsive size for Medium
   */
  m: _propTypes2.default.number,
  /*
   * Responsive size for Large
   */
  l: _propTypes2.default.number,
  /*
   * disabled input
   */
  disabled: _propTypes2.default.bool,
  /*
   * Placeholder string
   */
  placeholder: _propTypes2.default.string,
  /*
   * override id
   * @default idgen()
   */
  id: _propTypes2.default.string,
  /*
   * prefix icon
   */
  icon: _propTypes2.default.string,
  /*
   * label text
   */
  label: _propTypes2.default.string,
  /*
   * Input initial value
   */
  value: _propTypes2.default.string,
  /*
   * Add validate class to input
   */
  validate: _propTypes2.default.bool,
  /*
   * Custom success message
   */
  success: _propTypes2.default.string,
  /*
   * Custom error message
   */
  error: _propTypes2.default.string,
  /*
   * Additional classes for input
   */
  inputClassName: _propTypes2.default.string,
  /*
   * override type="text"
   */
  type: _propTypes2.default.string,
  /*
   * onChange callback
   */
  onChange: _propTypes2.default.func
};

exports.default = TextInput;