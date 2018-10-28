'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.modalID = props.id || 'modal_' + (0, _idgen2.default)();
    _this.showModal = _this.showModal.bind(_this);
    _this.createRoot();
    return _this;
  }

  _createClass(Modal, [{
    key: 'createRoot',
    value: function createRoot() {
      this.modalRoot = document.createElement('div');
      document.body.appendChild(this.modalRoot);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var _props = this.props,
            trigger = _props.trigger,
            options = _props.options,
            open = _props.open;


        this.instance = M.Modal.init(this._modal, options);

        if (open) this.showModal();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalRoot);

      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if the modal is not open yet
      if (!this.props.open && nextProps.open) {
        this.showModal();
        // open could be undefined
      } else if (nextProps.open === false) {
        this.hideModal();
      }
    }
  }, {
    key: 'renderModalPortal',
    value: function renderModalPortal() {
      var _this2 = this;

      var _props2 = this.props,
          actions = _props2.actions,
          bottomSheet = _props2.bottomSheet,
          children = _props2.children,
          fixedFooter = _props2.fixedFooter,
          header = _props2.header,
          className = _props2.className,
          other = _objectWithoutProperties(_props2, ['actions', 'bottomSheet', 'children', 'fixedFooter', 'header', 'className']);

      delete other.options;
      delete other.trigger;

      var classes = (0, _classnames2.default)('modal', {
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      }, className);

      return this.modalRoot ? _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        _extends({}, other, {
          className: classes,
          id: this.modalID,
          ref: function ref(div) {
            _this2._modal = div;
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h4',
            null,
            header
          ),
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.Children.toArray(actions)
        )
      ), this.modalRoot) : null;
    }
  }, {
    key: 'showModal',
    value: function showModal(e) {
      e && e.preventDefault();

      this.instance && this.instance.open();
    }
  }, {
    key: 'hideModal',
    value: function hideModal(e) {
      e && e.preventDefault();

      this.instance && this.instance.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = this.props.trigger;


      return _react2.default.createElement(
        'div',
        null,
        trigger && _react2.default.cloneElement(trigger, { onClick: this.showModal }),
        this.renderModalPortal()
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: _propTypes2.default.shape({
    /*
    * Opacity of the modal overlay.
    */
    opacity: _propTypes2.default.number,
    /*
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes2.default.number,
    /*
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes2.default.number,
    /**
     * Callback function called before modal is opened.
     */
    onOpenStart: _propTypes2.default.func,
    /**
     * Callback function called after modal is opened.
     */
    onOpenEnd: _propTypes2.default.func,
    /**
     * Callback function called before modal is closed.
     */
    onCloseStart: _propTypes2.default.func,
    /**
     * Callback function called after modal is closed.
     */
    onCloseEnd: _propTypes2.default.func,
    /**
     * Prevent page from scrolling while modal is open.
     */
    preventScrolling: _propTypes2.default.bool,
    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     */
    dismissible: _propTypes2.default.bool,
    /**
     * Starting top offset
     */
    startingTop: _propTypes2.default.string,
    /**
     * Ending top offset
     */
    endingTop: _propTypes2.default.string
  }),
  /**
   * Extra class to added to the Modal
   */
  className: _propTypes2.default.string,
  /**
   * Modal is opened on mount
   */
  open: _propTypes2.default.bool,
  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: _propTypes2.default.bool,
  /**
   * Component children
   */
  children: _propTypes2.default.node,
  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * Text to shown in the header of the modal
   */
  header: _propTypes2.default.string,
  /**
   * The button to trigger the display of the modal
   */
  trigger: _propTypes2.default.node,
  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: _propTypes2.default.node,
  /**
   * The ID to trigger the modal opening/closing
   */
  id: _propTypes2.default.string
};

Modal.defaultProps = {
  options: {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  },
  fixedFooter: false,
  bottomSheet: false,
  actions: [_react2.default.createElement(
    _Button2.default,
    { waves: 'green', modal: 'close', flat: true },
    'Close'
  )]
};

exports.default = Modal;