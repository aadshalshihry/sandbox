webpackHotUpdate(0,{

/***/ 149:
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
	
	var _TodoItem = __webpack_require__(372);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		TodoList: {
			displayName: 'TodoList'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TodoList.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TodoList.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var TodoList = _wrapComponent('TodoList')(function (_Component) {
		_inherits(TodoList, _Component);
	
		function TodoList() {
			_classCallCheck(this, TodoList);
	
			return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
		}
	
		_createClass(TodoList, [{
			key: 'compTodo',
			value: function compTodo(event) {
				event.preventDefault();
				//this.props.dispatch(actions.(this.state.inputText));
	
			}
		}, {
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'ul',
					null,
					this.props.todos.map(function (todo) {
						return _react3.default.createElement(_TodoItem2.default, null);
					})
				);
			}
		}]);
	
		return TodoList;
	}(_react2.Component));
	
	function mapSateToProps(state) {
		return state;
	}
	
	//export default connect(mapSateToProps)(TodoList);
	exports.default = TodoList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0xpc3QuanN4P2MzZTIiXSwibmFtZXMiOlsiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwidG9kb3MiLCJtYXAiLCJ0b2RvIiwibWFwU2F0ZVRvUHJvcHMiLCJzdGF0ZSIsIlRvZG9MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlVQSxLLEVBQU07QUFDZEEsVUFBTUMsY0FBTjtBQUNBOztBQUdBOzs7NEJBRU87QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUVFLFVBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLGFBQU8sdURBQVA7QUFDQSxNQUZEO0FBRkYsS0FERDtBQVNBOzs7Ozs7QUFHRixVQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM3QixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQ7bUJBQ2VDLFEiLCJmaWxlIjoiMC4zN2Y1ZjdiN2ExODg4MzgwMDExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtLmpzeCc7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0XG5cdGNvbXBUb2RvKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLih0aGlzLnN0YXRlLmlucHV0VGV4dCkpO1xuXG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxUb2RvSXRlbT48L1RvZG9JdGVtPlx0XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC91bD5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFNhdGVUb1Byb3BzKHN0YXRlKXtcblx0cmV0dXJuIHN0YXRlO1xufVxuXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU2F0ZVRvUHJvcHMpKFRvZG9MaXN0KTtcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvTGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9