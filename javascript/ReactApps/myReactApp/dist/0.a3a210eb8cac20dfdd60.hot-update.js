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
						actions: this.props.actions,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qc3g/OWJjYyJdLCJuYW1lcyI6WyJwcm9wcyIsImFjdGlvbnMiLCJ0b2RvcyIsIm1hcFNhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUtTO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQywwREFERDtBQUVDLDJEQUZEO0FBR0M7QUFDQyxlQUFVLEtBQUtBLEtBQUwsQ0FBV0MsT0FEdEI7QUFFQyxhQUFPLEtBQUtELEtBQUwsQ0FBV0U7QUFGbkIsT0FIRDtBQU9DLDBEQVBEO0FBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJELEtBREQ7QUFZQTs7Ozs7O0FBR0YsVUFBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDN0IsU0FBT0EsS0FBUDtBQUNBO0FBQ0QsVUFBU0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXFDO0FBQ3BDLFNBQU87QUFDTkwsWUFBUyxrREFBNEJLLFFBQTVCO0FBREgsR0FBUDtBQUdBOzttQkFFYyx5QkFBUUgsY0FBUixFQUF3QkUsa0JBQXhCLEVBQTRDRSxHQUE1QyxDIiwiZmlsZSI6IjAuYTNhMjEwZWI4Y2FjMjBkZmRkNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL3JlZHV4L2FjdGlvbnMuanN4J1xuXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIuanN4JztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZUJhci5qc3gnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50LmpzeCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzeCc7XG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8U2lkZUJhciAvPlxuXHRcdFx0XHQ8Q29udGVudCAgXG5cdFx0XHRcdFx0YWN0aW9ucz0ge3RoaXMucHJvcHMuYWN0aW9uc31cblx0XHRcdFx0XHR0b2Rvcz17dGhpcy5wcm9wcy50b2Rvc31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8cD5BcHAgcmVhY3QgaXMgd29ya2luZyE8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFNhdGVUb1Byb3BzKHN0YXRlKXtcblx0cmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKXtcblx0cmV0dXJuIHtcblx0XHRhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTYXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==