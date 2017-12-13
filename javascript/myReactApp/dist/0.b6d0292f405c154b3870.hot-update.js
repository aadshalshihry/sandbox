webpackHotUpdate(0,{

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _index = __webpack_require__(26);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(22);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(10);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(23);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(77);
	
	var _redux = __webpack_require__(141);
	
	var _actions = __webpack_require__(150);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _Header = __webpack_require__(146);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _SideBar = __webpack_require__(147);
	
	var _SideBar2 = _interopRequireDefault(_SideBar);
	
	var _Content = __webpack_require__(144);
	
	var _Content2 = _interopRequireDefault(_Content);
	
	var _Footer = __webpack_require__(145);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		App: {
			displayName: 'App'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/App.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/App.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var App = _wrapComponent('App')(function (_Component) {
		_inherits(App, _Component);
	
		function App() {
			_classCallCheck(this, App);
	
			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}
	
		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(_Header2.default, null),
					_react3.default.createElement(_SideBar2.default, null),
					_react3.default.createElement(_Content2.default, {
						dispatch: this.props.dispatch,
						todos: this.props.todos
					}),
					_react3.default.createElement(_Footer2.default, null),
					_react3.default.createElement(
						'p',
						null,
						'App react is working!'
					)
				);
			}
		}]);
	
		return App;
	}(_react2.Component));
	
	function mapSateToProps(state) {
		return state;
	}
	function mapDispatchToProps(dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch)
		};
	}
	
	exports.default = (0, _reactRedux.connect)(mapSateToProps, mapDispatchToProps)(App);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyJdLCJuYW1lcyI6WyJwcm9wcyIsImRpc3BhdGNoIiwidG9kb3MiLCJtYXBTYXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWN0aW9ucyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUtTO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQywwREFERDtBQUVDLDJEQUZEO0FBR0M7QUFDQyxnQkFBVSxLQUFLQSxLQUFMLENBQVdDLFFBRHRCO0FBRUMsYUFBTyxLQUFLRCxLQUFMLENBQVdFO0FBRm5CLE9BSEQ7QUFPQywwREFQRDtBQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRCxLQUREO0FBWUE7Ozs7OztBQUdGLFVBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzdCLFNBQU9BLEtBQVA7QUFDQTtBQUNELFVBQVNDLGtCQUFULENBQTRCSixRQUE1QixFQUFxQztBQUNwQyxTQUFPO0FBQ05LLFlBQVMsa0RBQTRCTCxRQUE1QjtBQURILEdBQVA7QUFHQTs7bUJBRWMseUJBQVFFLGNBQVIsRUFBd0JFLGtCQUF4QixFQUE0Q0UsR0FBNUMsQyIsImZpbGUiOiIwLmI2ZDAyOTJmNDA1YzE1NGIzODcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9yZWR1eC9hY3Rpb25zLmpzeCdcblxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzeCc7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL1NpZGVCYXIuanN4JztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudC5qc3gnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qc3gnO1xuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PFNpZGVCYXIgLz5cblx0XHRcdFx0PENvbnRlbnQgIFxuXHRcdFx0XHRcdGRpc3BhdGNoPXt0aGlzLnByb3BzLmRpc3BhdGNofVxuXHRcdFx0XHRcdHRvZG9zPXt0aGlzLnByb3BzLnRvZG9zfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxwPkFwcCByZWFjdCBpcyB3b3JraW5nITwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU2F0ZVRvUHJvcHMoc3RhdGUpe1xuXHRyZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpe1xuXHRyZXR1cm4ge1xuXHRcdGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFNhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qc3giXSwic291cmNlUm9vdCI6IiJ9