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
	
	var _reactRedux = __webpack_require__(132);
	
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
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'ul',
					null,
					this.state.todos.map(function (todo) {
						return _react3.default.createElement(
							'li',
							{ key: todo.id },
							todo.text
						);
					})
				);
			}
		}]);
	
		return TodoList;
	}(_react2.Component));
	
	function mapSateToProps(state) {
		return state;
	}
	
	exports.default = (0, _reactRedux.connect)(mapSateToProps)(TodoList);
	//export default TodoList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0xpc3QuanN4P2MzZTIiXSwibmFtZXMiOlsic3RhdGUiLCJ0b2RvcyIsIm1hcCIsInRvZG8iLCJpZCIsInRleHQiLCJtYXBTYXRlVG9Qcm9wcyIsIlRvZG9MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJUztBQUNQLFdBQ0M7QUFBQTtBQUFBO0FBRUUsVUFBS0EsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUIsYUFBTztBQUFBO0FBQUEsU0FBSSxLQUFLQSxLQUFLQyxFQUFkO0FBQW1CRCxZQUFLRTtBQUF4QixPQUFQO0FBQ0EsTUFGRDtBQUZGLEtBREQ7QUFTQTs7Ozs7O0FBR0YsVUFBU0MsY0FBVCxDQUF3Qk4sS0FBeEIsRUFBOEI7QUFDN0IsU0FBT0EsS0FBUDtBQUNBOzttQkFFYyx5QkFBUU0sY0FBUixFQUF3QkMsUUFBeEIsQztBQUNmLDJCIiwiZmlsZSI6IjAuMDVmNTkwOTE2NDFhZThkMGEzNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS50b2Rvcy5tYXAoKHRvZG8pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXt0b2RvLmlkfT57dG9kby50ZXh0fTwvbGk+XHRcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU2F0ZVRvUHJvcHMoc3RhdGUpe1xuXHRyZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU2F0ZVRvUHJvcHMpKFRvZG9MaXN0KTtcbi8vZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9MaXN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=