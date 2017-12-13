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
				var _this2 = this;
	
				return _react3.default.createElement(
					'ul',
					null,
					this.props.todos.map(function (todo) {
						return _react3.default.createElement(
							'li',
							{ key: todo.id },
							todo.text,
							_react3.default.createElement(
								'button',
								{ onClick: _this2.compTodo.bind(_this2) },
								'compTodo'
							)
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
	
	//export default connect(mapSateToProps)(TodoList);
	exports.default = TodoList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0xpc3QuanN4P2MzZTIiXSwibmFtZXMiOlsiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwidG9kb3MiLCJtYXAiLCJ0b2RvIiwiaWQiLCJ0ZXh0IiwiY29tcFRvZG8iLCJiaW5kIiwibWFwU2F0ZVRvUHJvcHMiLCJzdGF0ZSIsIlRvZG9MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJVUEsSyxFQUFNO0FBQ2RBLFVBQU1DLGNBQU47QUFDQTs7QUFHQTs7OzRCQUVPO0FBQUE7O0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFFRSxVQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixhQUNDO0FBQUE7QUFBQSxTQUFJLEtBQUtBLEtBQUtDLEVBQWQ7QUFBbUJELFlBQUtFLElBQXhCO0FBQ0E7QUFBQTtBQUFBLFVBQVEsU0FBUyxPQUFLQyxRQUFMLENBQWNDLElBQWQsUUFBakI7QUFBQTtBQUFBO0FBREEsT0FERDtBQUlBLE1BTEQ7QUFGRixLQUREO0FBWUE7Ozs7OztBQUdGLFVBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzdCLFNBQU9BLEtBQVA7QUFDQTs7QUFFRDttQkFDZUMsUSIsImZpbGUiOiIwLjI1ZWM2ZDU4MzRmMjM2OThiNmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdFxuXHRjb21wVG9kbyhldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL3RoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy4odGhpcy5zdGF0ZS5pbnB1dFRleHQpKTtcblx0XHRcblxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXt0b2RvLmlkfT57dG9kby50ZXh0fSBcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNvbXBUb2RvLmJpbmQodGhpcyl9PmNvbXBUb2RvPC9idXR0b24+PC9saT5cdFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTYXRlVG9Qcm9wcyhzdGF0ZSl7XG5cdHJldHVybiBzdGF0ZTtcbn1cblxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFNhdGVUb1Byb3BzKShUb2RvTGlzdCk7XG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0xpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==