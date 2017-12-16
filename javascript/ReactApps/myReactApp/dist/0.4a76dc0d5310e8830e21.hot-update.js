webpackHotUpdate(0,{

/***/ 148:
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
	
	var _actions = __webpack_require__(150);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		TodoInput: {
			displayName: 'TodoInput'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TodoInput.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TodoInput.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var TodoInput = _wrapComponent('TodoInput')(function (_Component) {
		_inherits(TodoInput, _Component);
	
		function TodoInput(props, context) {
			_classCallCheck(this, TodoInput);
	
			var _this = _possibleConstructorReturn(this, (TodoInput.__proto__ || Object.getPrototypeOf(TodoInput)).call(this, props, context));
	
			_this.state = {
				inputText: ''
			};
			return _this;
		}
	
		_createClass(TodoInput, [{
			key: 'handleChange',
			value: function handleChange(event) {
				this.setState({
					inputText: event.target.value
				});
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(event) {
				event.preventDefault();
				this.props.dispatch(_actions2.default.addTodo(this.state.inputText));
			}
		}, {
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit.bind(this) },
					_react3.default.createElement('input', {
						type: 'text',
						placeholder: 'Type in your todo',
						value: this.state.inputText,
						onChange: this.handleChange.bind(this)
					}),
					_react3.default.createElement('input', { type: 'submit' })
				);
			}
		}]);
	
		return TodoInput;
	}(_react2.Component));
	
	exports.default = TodoInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },

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
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				return _react3.default.createElement(
					'ul',
					null,
					this.props.todos.map(function (todo) {
						return _react3.default.createElement(_TodoItem2.default, {
							key: todo.id,
							todo: todo,
							dispatch: _this2.props.dispatch
						});
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

/***/ },

/***/ 150:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var actions = {
		addTodo: function addTodo(text) {
			return {
				type: "ADD_TODO",
				text: text
			};
		},
		completedTodo: function completedTodo(id) {
			return {
				type: "COMPLETED_TODO",
				id: id
			};
		},
		deleteTodo: function deleteTodo(id) {
			return {
				type: "DELETE_TODO",
				id: id
			};
		}
	};
	
	exports.default = actions;

/***/ },

/***/ 151:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function getId(state) {
		return state.todos.reduce(function (maxId, todo) {
			return Math.max(todo.id, maxId);
		}, -1) + 1;
	}
	
	var reducer = function reducer(state, action) {
		switch (action.type) {
			case "ADD_TODO":
				return Object.assign({}, state, {
					todos: [{
						id: getId(state),
						text: action.text,
						completed: false
	
					}].concat(_toConsumableArray(state.todos))
				});
	
			case "COMPLETE_TODO":
				return Object.assign({}, state, {
					todos: state.todos.map(function (todo) {
						return todo.id === action.id ? Object.assign({}, todo, {
							completed: !todo.completed
						}) : todo;
					})
				});
	
			case "DELETE_TODO":
				return Object.assign({}, state, {
					todos: state.todos.filter(function (todo) {
						return todo.id !== action.id;
					})
				});
	
			default:
				return state;
		}
	};
	
	exports.default = reducer;

/***/ },

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
			key: 'handleDelete',
			value: function handleDelete() {
				this.props.dispatch(actions.completedTodo(this.props.todo.id));
			}
		}, {
			key: 'handleComplete',
			value: function handleComplete() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGVudC9Ub2RvTGlzdC5qc3g/YzNlMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHV4L2FjdGlvbnMuanN4PzliZDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWR1eC9yZWR1Y2VyLmpzeD9lOWY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGVudC9Ub2RvSXRlbS5qc3g/MDM1ZiJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImlucHV0VGV4dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJhZGRUb2RvIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUNoYW5nZSIsIlRvZG9JbnB1dCIsInRvZG9zIiwibWFwIiwidG9kbyIsImlkIiwibWFwU2F0ZVRvUHJvcHMiLCJUb2RvTGlzdCIsImFjdGlvbnMiLCJ0ZXh0IiwidHlwZSIsImNvbXBsZXRlZFRvZG8iLCJkZWxldGVUb2RvIiwiZ2V0SWQiLCJyZWR1Y2UiLCJtYXhJZCIsIk1hdGgiLCJtYXgiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcGxldGVkIiwiZmlsdGVyIiwiaGFuZGxlQ29tcGxldGUiLCJoYW5kbGVEZWxldGUiLCJUb2RvSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQyxxQkFBWUEsS0FBWixFQUFtQkMsT0FBbkIsRUFBMkI7QUFBQTs7QUFBQSxxSEFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBRTFCLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxlQUFXO0FBREMsSUFBYjtB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QXVCLElBQXZCLENBQWpCO0FBQUE7QUFBQTtBQUhELEtBREQ7QUFPQTs7Ozs7O0FBR0YsVUFBU08sY0FBVCxDQUF3QmpCLEtBQXhCLEVBQThCO0FBQzdCLFNBQU9BLEtBQVA7QUFDQTs7QUFFRDttQkFDZXFDLFEiLCJmaWxlIjoiMC40YTc2ZGMwZDUzMTBlODgzMGUyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhY3Rpb25zICBmcm9tICcuLi9yZWR1eC9hY3Rpb25zLmpzeCc7XG5cbmNsYXNzIFRvZG9JbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KXtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VGV4dDogJydcblx0XHR9XG5cdH07XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlucHV0VGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXHRcblx0aGFuZGxlU3VibWl0KGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5hZGRUb2RvKHRoaXMuc3RhdGUuaW5wdXRUZXh0KSk7XG5cdH1cblx0XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0IFx0IFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0IFx0IFx0cGxhY2Vob2xkZXI9XCJUeXBlIGluIHlvdXIgdG9kb1wiXG5cdFx0XHRcdCBcdCBcdHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VGV4dH1cblx0XHRcdFx0IFx0IFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHQgXHQgXHQvPlxuXHRcdFx0IFx0IFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiAgLz5cdFx0XHRcdFxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvSW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9JbnB1dC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0uanN4JztcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxUb2RvSXRlbSBcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17dG9kby5pZH0gIFxuXHRcdFx0XHRcdFx0XHRcdFx0dG9kbz17dG9kb30gIFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU2F0ZVRvUHJvcHMoc3RhdGUpe1xuXHRyZXR1cm4gc3RhdGU7XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTYXRlVG9Qcm9wcykoVG9kb0xpc3QpO1xuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9MaXN0LmpzeCIsImxldCBhY3Rpb25zID0ge1xuXHRhZGRUb2RvKHRleHQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJBRERfVE9ET1wiLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH1cblx0fSxcblxuXHRjb21wbGV0ZWRUb2RvKGlkKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJDT01QTEVURURfVE9ET1wiLFxuXHRcdFx0aWQ6IGlkXG5cdFx0fVxuXHR9LFxuXG5cdGRlbGV0ZVRvZG8oaWQpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcIkRFTEVURV9UT0RPXCIsXG5cdFx0XHRpZDogaWRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlZHV4L2FjdGlvbnMuanN4IiwiZnVuY3Rpb24gZ2V0SWQoc3RhdGUpIHtcblx0cmV0dXJuIHN0YXRlLnRvZG9zLnJlZHVjZSgobWF4SWQsIHRvZG8pID0+IHtcblx0XHRyZXR1cm4gTWF0aC5tYXgodG9kby5pZCwgbWF4SWQpXG5cdH0sIC0xKSArIDFcbn1cblxubGV0IHJlZHVjZXIgPSBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSBcIkFERF9UT0RPXCI6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0dG9kb3M6IFt7XG5cdFx0XHRcdFx0aWQ6IGdldElkKHN0YXRlKSxcblx0XHRcdFx0XHR0ZXh0OiBhY3Rpb24udGV4dCxcblx0XHRcdFx0XHRjb21wbGV0ZWQ6IGZhbHNlXG5cblx0XHRcdFx0fSwgLi4uc3RhdGUudG9kb3NdXG5cdFx0XHR9KVxuXG5cdFx0Y2FzZSBcIkNPTVBMRVRFX1RPRE9cIjpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0b2Rvczogc3RhdGUudG9kb3MubWFwKCh0b2RvKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRvZG8uaWQgPT09IGFjdGlvbi5pZCA/XG5cdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHt9LCB0b2RvLCB7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlZDogIXRvZG8uY29tcGxldGVkXG5cdFx0XHRcdFx0XHR9KSA6IHRvZG9cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXG5cdFx0Y2FzZSBcIkRFTEVURV9UT0RPXCI6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0dG9kb3M6IHN0YXRlLnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0b2RvLmlkICE9PSBhY3Rpb24uaWRcblx0XHRcdFx0fSlcblx0XHRcdH0pXHRcblxuXG5cblx0XHRkZWZhdWx0OiBcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVkdXgvcmVkdWNlci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGhhbmRsZURlbGV0ZSgpe1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5jb21wbGV0ZWRUb2RvKHRoaXMucHJvcHMudG9kby5pZCkpO1xuXHR9XG5cdFxuXHRoYW5kbGVDb21wbGV0ZSgpe1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5kZWxldGVUb2RvKHRoaXMucHJvcHMudG9kby5pZCkpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaT5cblx0XHRcdFx0PGRpdj57dGhpcy5wcm9wcy50b2RvLnRleHR9PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDb21wbGV0ZS5iaW5kKHRoaXMpfT5Db21wbGV0ZWRlPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX0+RGVsZXRlPC9idXR0b24+XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU2F0ZVRvUHJvcHMoc3RhdGUpe1xuXHRyZXR1cm4gc3RhdGU7XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTYXRlVG9Qcm9wcykoVG9kb0l0ZW0pO1xuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9JdGVtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=