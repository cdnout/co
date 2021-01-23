'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createPlotlyComponent = function createPlotlyComponent(plotlyInstance) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(Plotly, _React$Component);

    function Plotly() {
      _classCallCheck(this, Plotly);

      return _possibleConstructorReturn(this, (Plotly.__proto__ || Object.getPrototypeOf(Plotly)).apply(this, arguments));
    }

    _createClass(Plotly, [{
      key: 'attachListeners',
      value: function attachListeners() {
        if (this.props.onClick) this.container.on('plotly_click', this.props.onClick);
        if (this.props.onBeforeHover) this.container.on('plotly_beforehover', this.props.onBeforeHover);
        if (this.props.onHover) this.container.on('plotly_hover', this.props.onHover);
        if (this.props.onUnHover) this.container.on('plotly_unhover', this.props.onUnHover);
        if (this.props.onSelected) this.container.on('plotly_selected', this.props.onSelected);
        if (this.props.onRelayout) {
          this.container.on('plotly_relayout', this.props.onRelayout);
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        //TODO logic for detecting change in props
        return true;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            data = _props.data,
            layout = _props.layout,
            config = _props.config;

        plotlyInstance.newPlot(this.container, data, (0, _lodash2.default)(layout), config); //We clone the layout as plotly mutates it.
        this.attachListeners();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        //TODO use minimal update for given changes
        if (prevProps.data !== this.props.data || prevProps.layout !== this.props.layout || prevProps.config !== this.props.config) {
          var _props2 = this.props,
              data = _props2.data,
              layout = _props2.layout,
              config = _props2.config;

          plotlyInstance.newPlot(this.container, data, (0, _lodash2.default)(layout), config); //We clone the layout as plotly mutates it.
          this.attachListeners();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        plotlyInstance.purge(this.container);
      }
    }, {
      key: 'resize',
      value: function resize() {
        plotlyInstance.Plots.resize(this.container);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
            data = _props3.data,
            layout = _props3.layout,
            config = _props3.config,
            other = _objectWithoutProperties(_props3, ['data', 'layout', 'config']);
        //Remove props that would cause React to warn for unknown props.


        delete other.onClick;
        delete other.onBeforeHover;
        delete other.onHover;
        delete other.onUnHover;
        delete other.onSelected;
        delete other.onRelayout;

        return _react2.default.createElement('div', _extends({}, other, { ref: function ref(node) {
            return _this2.container = node;
          } }));
      }
    }]);

    return Plotly;
  }(_react2.default.Component), _class.propTypes = {
    data: _propTypes2.default.array,
    layout: _propTypes2.default.object,
    config: _propTypes2.default.object,
    onClick: _propTypes2.default.func,
    onBeforeHover: _propTypes2.default.func,
    onHover: _propTypes2.default.func,
    onUnHover: _propTypes2.default.func,
    onSelected: _propTypes2.default.func,
    onRelayout: _propTypes2.default.func
  }, _temp;
};

exports.default = createPlotlyComponent;