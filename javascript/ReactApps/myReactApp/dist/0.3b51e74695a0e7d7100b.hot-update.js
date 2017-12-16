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
						return _react3.default.createElement(
							_TodoItem2.default,
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
	
	//export default connect(mapSateToProps)(TodoList);
	exports.default = TodoList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

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
						return _react3.default.createElement(
							'li',
							{ key: todo.id },
							todo.text
						);
					})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0xpc3QuanN4P2MzZTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZW50L1RvZG9JdGVtLmpzeD8wMzVmIl0sIm5hbWVzIjpbImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsInRvZG9zIiwibWFwIiwidG9kbyIsImlkIiwidGV4dCIsIm1hcFNhdGVUb1Byb3BzIiwic3RhdGUiLCJUb2RvTGlzdCIsIlRvZG9JdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlVQSxLLEVBQU07QUFDZEEsVUFBTUMsY0FBTjtBQUNBOztBQUdBOzs7NEJBRU87QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUVFLFVBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLGFBQ0M7QUFBQTtBQUFBLFNBQVUsS0FBS0EsS0FBS0MsRUFBcEI7QUFBeUJELFlBQUtFO0FBQTlCLE9BREQ7QUFJQSxNQUxEO0FBRkYsS0FERDtBQVlBOzs7Ozs7QUFHRixVQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM3QixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQ7bUJBQ2VDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQzdCTFYsSyxFQUFNO0FBQ2RBLFVBQU1DLGNBQU47QUFDQTs7QUFHQTs7OzRCQUVPO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFFRSxVQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixhQUNDO0FBQUE7QUFBQSxTQUFJLEtBQUtBLEtBQUtDLEVBQWQ7QUFBbUJELFlBQUtFO0FBQXhCLE9BREQ7QUFJQSxNQUxEO0FBRkYsS0FERDtBQVlBOzs7Ozs7QUFHRixVQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM3QixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQ7bUJBQ2VFLFEiLCJmaWxlIjoiMC4zYjUxZTc0Njk1YTBlN2Q3MTAwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtLmpzeCc7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0XG5cdGNvbXBUb2RvKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLih0aGlzLnN0YXRlLmlucHV0VGV4dCkpO1xuXG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PFRvZG9JdGVtIGtleT17dG9kby5pZH0+e3RvZG8udGV4dH0gXG5cdFx0XHRcdFx0XHRcdDwvVG9kb0l0ZW0+XHRcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU2F0ZVRvUHJvcHMoc3RhdGUpe1xuXHRyZXR1cm4gc3RhdGU7XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTYXRlVG9Qcm9wcykoVG9kb0xpc3QpO1xuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9MaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0XG5cdGNvbXBUb2RvKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLih0aGlzLnN0YXRlLmlucHV0VGV4dCkpO1xuXG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17dG9kby5pZH0+e3RvZG8udGV4dH0gXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHRcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU2F0ZVRvUHJvcHMoc3RhdGUpe1xuXHRyZXR1cm4gc3RhdGU7XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTYXRlVG9Qcm9wcykoVG9kb0l0ZW0pO1xuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9JdGVtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=