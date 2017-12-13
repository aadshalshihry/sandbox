webpackHotUpdate(0,{

/***/ 144:
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
	
	var _TodoInput = __webpack_require__(148);
	
	var _TodoInput2 = _interopRequireDefault(_TodoInput);
	
	var _TodoList = __webpack_require__(149);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		Content: {
			displayName: 'Content'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/Content.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/Content.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var Content = _wrapComponent('Content')(function (_Component) {
		_inherits(Content, _Component);
	
		function Content() {
			_classCallCheck(this, Content);
	
			return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
		}
	
		_createClass(Content, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(
						'p',
						null,
						'Content react is working!'
					),
					_react3.default.createElement(_TodoInput2.default, { dispatch: this.props.dispatch }),
					_react3.default.createElement(_TodoList2.default, { todos: this.props.todos,
						dispatch: this.props.dispatch
					})
				);
			}
		}]);
	
		return Content;
	}(_react2.Component));
	
	function mapSateToProps(state) {
		return state;
	}
	
	exports.default = (0, _reactRedux.connect)(mapSateToProps)(Content);
	//export default Content;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
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
			displayName: "TodoList"
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: "/home/roman/workspace/myReactApp/components/content/TodoList.jsx",
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: "/home/roman/workspace/myReactApp/components/content/TodoList.jsx",
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var TodoList = _wrapComponent("TodoList")(function (_Component) {
		_inherits(TodoList, _Component);
	
		function TodoList() {
			_classCallCheck(this, TodoList);
	
			return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
		}
	
		_createClass(TodoList, [{
			key: "compTodo",
			value: function compTodo(event) {
				event.preventDefault();
				//this.props.dispatch(actions.(this.state.inputText));
				console.log("Clicked");
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				return _react3.default.createElement(
					"ul",
					null,
					this.props.todos.map(function (todo) {
						return _react3.default.createElement(
							"li",
							{ key: todo.id },
							todo.text,
							_react3.default.createElement(
								"button",
								{ onClick: _this2.compTodo.bind(_this2) },
								"compTodo"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRlbnQuanN4Pzk3YjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZW50L1RvZG9MaXN0LmpzeD9jM2UyIl0sIm5hbWVzIjpbInByb3BzIiwiZGlzcGF0Y2giLCJ0b2RvcyIsIm1hcFNhdGVUb1Byb3BzIiwic3RhdGUiLCJDb250ZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0b2RvIiwiaWQiLCJ0ZXh0IiwiY29tcFRvZG8iLCJiaW5kIiwiVG9kb0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJUztBQUNQLFdBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUREO0FBRUMsMERBQVcsVUFBVSxLQUFLQSxLQUFMLENBQVdDLFFBQWhDLEdBRkQ7QUFHQyx5REFBVSxPQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBNUI7QUFDQyxnQkFBVSxLQUFLRixLQUFMLENBQVdDO0FBRHRCO0FBSEQsS0FERDtBQVVBOzs7Ozs7QUFHRixVQUFTRSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM3QixTQUFPQSxLQUFQO0FBQ0E7O21CQUVjLHlCQUFRRCxjQUFSLEVBQXdCRSxPQUF4QixDO0FBQ2YsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQ3ZCVUMsSyxFQUFNO0FBQ2RBLFVBQU1DLGNBQU47QUFDQTtBQUNBQyxZQUFRQyxHQUFSLENBQVksU0FBWjtBQUVBOzs7NEJBRU87QUFBQTs7QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUVFLFVBQUtULEtBQUwsQ0FBV0UsS0FBWCxDQUFpQlEsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLGFBQ0M7QUFBQTtBQUFBLFNBQUksS0FBS0EsS0FBS0MsRUFBZDtBQUFtQkQsWUFBS0UsSUFBeEI7QUFDQTtBQUFBO0FBQUEsVUFBUSxTQUFTLE9BQUtDLFFBQUwsQ0FBY0MsSUFBZCxRQUFqQjtBQUFBO0FBQUE7QUFEQSxPQUREO0FBSUEsTUFMRDtBQUZGLEtBREQ7QUFZQTs7Ozs7O0FBR0YsVUFBU1osY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDN0IsU0FBT0EsS0FBUDtBQUNBOztBQUVEO21CQUNlWSxRIiwiZmlsZSI6IjAuZjI3OTk4ZTEzNGU4ZWVlM2Q2ZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgVG9kb0lucHV0IGZyb20gJy4vY29udGVudC9Ub2RvSW5wdXQuanN4JztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL2NvbnRlbnQvVG9kb0xpc3QuanN4JztcblxuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPkNvbnRlbnQgcmVhY3QgaXMgd29ya2luZyE8L3A+XG5cdFx0XHRcdDxUb2RvSW5wdXQgZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9Lz5cblx0XHRcdFx0PFRvZG9MaXN0IHRvZG9zPXt0aGlzLnByb3BzLnRvZG9zfSBcblx0XHRcdFx0XHRkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFNhdGVUb1Byb3BzKHN0YXRlKXtcblx0cmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFNhdGVUb1Byb3BzKShDb250ZW50KTtcbi8vZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250ZW50LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0XG5cdGNvbXBUb2RvKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLih0aGlzLnN0YXRlLmlucHV0VGV4dCkpO1xuXHRcdGNvbnNvbGUubG9nKFwiQ2xpY2tlZFwiKVxuXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy50b2Rvcy5tYXAoKHRvZG8pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxsaSBrZXk9e3RvZG8uaWR9Pnt0b2RvLnRleHR9IFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY29tcFRvZG8uYmluZCh0aGlzKX0+Y29tcFRvZG88L2J1dHRvbj48L2xpPlx0XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC91bD5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFNhdGVUb1Byb3BzKHN0YXRlKXtcblx0cmV0dXJuIHN0YXRlO1xufVxuXG4vL2V4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU2F0ZVRvUHJvcHMpKFRvZG9MaXN0KTtcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvTGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9