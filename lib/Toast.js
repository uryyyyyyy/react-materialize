'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = function Toast(props) {
  var children = props.children,
      className = props.className,
      _props$options = props.options,
      options = _props$options === undefined ? {} : _props$options;


  var showToast = function showToast() {
    return M.toast(options);
  };

  return _react2.default.createElement(
    _Button2.default,
    { onClick: showToast, className: (0, _classnames2.default)('toast', className) },
    children
  );
};

Toast.propTypes = {
  className: _propTypes2.default.string,
  /*
   * Toast trigger content
   */
  children: _propTypes2.default.node,
  /*
   * Options to pass to Toast method
   * <a href="https://materializecss.com/toasts.html">More</a>
   */
  options: _propTypes2.default.shape({
    /*
     * The HTML content of the Toast.
     * @default ''
     */
    html: _propTypes2.default.string,
    /*
     * Length in ms the Toast stays before dismissal.
     * @default 4000
     */
    displayLength: _propTypes2.default.number,
    /*
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: _propTypes2.default.number,
    /*
     * Transition out duration in milliseconds.
     * @default 375
     */
    outDuration: _propTypes2.default.number,
    /*
     * Classes to be added to the toast element.
     * @default ''
     */
    classes: _propTypes2.default.string,
    /*
     * Callback function called when toast is dismissed.
     * @default null
     */
    completeCallback: _propTypes2.default.func,
    /*
     * The percentage of the toast's width it takes for a drag to dismiss a Toast.
     * @default 0.8
     */
    activationPercent: _propTypes2.default.number
  })
};

exports.default = Toast;