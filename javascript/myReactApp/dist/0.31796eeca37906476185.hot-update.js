webpackHotUpdate(0,{

/***/ 372:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		TodoItem: {
			displayName: 'TodoItem'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TodoItem.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TodoItem.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var TodoItem = _wrapComponent('TodoItem')(function (_Component) {
		_inherits(TodoItem, _Component);
	
		function TodoItem() {
			_classCallCheck(this, TodoItem);
	
			return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
		}
	
		_createClass(TodoItem, [{
			key: 'handleComplete',
			value: function handleComplete() {
				this.props.dispatch(actions.completedTodo(this.props.todo.id));
			}
		}, {
			key: 'handleDelete',
			value: function handleDelete() {
				this.props.dispatch(actions.deleteTodo(this.props.todo.id));
			}
		}, {
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'li',
					null,
					_react3.default.createElement(
						'div',
						null,
						this.props.todo.text
					),
					_react3.default.createElement(
						'button',
						{ onClick: this.handleComplete.bind(this) },
						'Completede'
					),
					_react3.default.createElement(
						'button',
						{ onClick: this.handleDelete.bind(this) },
						'Delete'
					)
				);
			}
		}]);
	
		return TodoItem;
	}(_react2.Component));
	
	function mapSateToProps(state) {
		return state;
	}
	
	//export default connect(mapSateToProps)(TodoItem);
	exports.default = TodoItem;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0l0ZW0uanN4PzAzNWYiXSwibmFtZXMiOlsicHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJjb21wbGV0ZWRUb2RvIiwidG9kbyIsImlkIiwiZGVsZXRlVG9kbyIsInRleHQiLCJoYW5kbGVDb21wbGV0ZSIsImJpbmQiLCJoYW5kbGVEZWxldGUiLCJtYXBTYXRlVG9Qcm9wcyIsInN0YXRlIiwiVG9kb0l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUlpQjtBQUNmLFNBQUtBLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsUUFBUUMsYUFBUixDQUFzQixLQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0JDLEVBQXRDLENBQXBCO0FBQ0E7OztrQ0FFYTtBQUNiLFNBQUtMLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsUUFBUUksVUFBUixDQUFtQixLQUFLTixLQUFMLENBQVdJLElBQVgsQ0FBZ0JDLEVBQW5DLENBQXBCO0FBQ0E7Ozs0QkFHTztBQUNQLFdBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQU0sV0FBS0wsS0FBTCxDQUFXSSxJQUFYLENBQWdCRztBQUF0QixNQUREO0FBRUM7QUFBQTtBQUFBLFFBQVEsU0FBUyxLQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUFqQjtBQUFBO0FBQUEsTUFGRDtBQUdDO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakI7QUFBQTtBQUFBO0FBSEQsS0FERDtBQU9BOzs7Ozs7QUFHRixVQUFTRSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM3QixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQ7bUJBQ2VDLFEiLCJmaWxlIjoiMC4zMTc5NmVlY2EzNzkwNjQ3NjE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGhhbmRsZUNvbXBsZXRlKCl7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmNvbXBsZXRlZFRvZG8odGhpcy5wcm9wcy50b2RvLmlkKSk7XG5cdH1cblx0XG5cdGhhbmRsZURlbGV0ZSgpe1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5kZWxldGVUb2RvKHRoaXMucHJvcHMudG9kby5pZCkpO1xuXHR9XG5cdFxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGk+XG5cdFx0XHRcdDxkaXY+e3RoaXMucHJvcHMudG9kby50ZXh0fTwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29tcGxldGUuYmluZCh0aGlzKX0+Q29tcGxldGVkZTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9PkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFNhdGVUb1Byb3BzKHN0YXRlKXtcblx0cmV0dXJuIHN0YXRlO1xufVxuXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU2F0ZVRvUHJvcHMpKFRvZG9JdGVtKTtcbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvSXRlbS5qc3giXSwic291cmNlUm9vdCI6IiJ9