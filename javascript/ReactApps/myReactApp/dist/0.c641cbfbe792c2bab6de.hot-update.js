webpackHotUpdate(0,{

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _index = __webpack_require__(31);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(28);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(11);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(29);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _actions = __webpack_require__(371);
	
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
				//console.log("submit button click");
				this.props.dispadispactch();
			}
		}, {
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					null,
					_react3.default.createElement('input', {
						type: 'text',
						placeholder: 'Type in your todo',
						value: this.state.inputText,
						onChange: this.handleChange.bind(this)
					}),
					_react3.default.createElement(
						'button',
						{ onClick: this.handleSubmit.bind(this) },
						'Submit'
					)
				);
			}
		}]);
	
		return TodoInput;
	}(_react2.Component));
	
	exports.default = TodoInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ },

/***/ 371:
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
		}
	};
	
	exports.default = actions;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVkdXgvYWN0aW9ucy5qc3g/OWJkOSJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImlucHV0VGV4dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGFkaXNwYWN0Y2giLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiVG9kb0lucHV0IiwiYWN0aW9ucyIsImFkZFRvZG8iLCJ0ZXh0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0MscUJBQVlBLEtBQVosRUFBbUJDLE9BQW5CLEVBQTJCO0FBQUE7O0FBQUEscUhBQ3BCRCxLQURvQixFQUNiQyxPQURhOztBQUUxQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsZUFBVztBQURDLElBQWI7QUFGMEI7QUFLMUI7Ozs7Z0NBRVlDLEssRUFBTTtBQUNsQixTQUFLQyxRQUFMLENBQWM7QUFDYkYsZ0JBQVdDLE1BQU1FLE1BQU4sQ0FBYUM7QUFEWCxLQUFkO0FBR0E7OztnQ0FFWUgsSyxFQUFNO0FBQ2xCQSxVQUFNSSxjQUFOO0FBQ0E7QUFDQSxTQUFLUixLQUFMLENBQVdTLGNBQVg7QUFDQTs7OzRCQUlPO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQztBQUNHLFlBQUssTUFEUjtBQUVHLG1CQUFZLG1CQUZmO0FBR0csYUFBTyxLQUFLUCxLQUFMLENBQVdDLFNBSHJCO0FBSUcsZ0JBQVUsS0FBS08sWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKYixPQUREO0FBT0c7QUFBQTtBQUFBLFFBQVEsU0FBUyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFqQjtBQUFBO0FBQUE7QUFQSCxLQUREO0FBWUE7Ozs7OzttQkFHYUUsUzs7Ozs7Ozs7Ozs7OztBQ3pDZixLQUFJQyxVQUFVO0FBQ2JDLFdBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN2QixVQUFPO0FBQ05DLFVBQU0sVUFEQTtBQUVORCxVQUFNQTtBQUZBLElBQVA7QUFJQTtBQU5ZLEVBQWQ7O21CQVNlRixPIiwiZmlsZSI6IjAuYzY0MWNiZmJlNzkyYzJiYWI2ZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy5qc3gnO1xuXG5jbGFzcyBUb2RvSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFRleHQ6ICcnXG5cdFx0fVxuXHR9O1xuXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpbnB1dFRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblx0XG5cdGhhbmRsZVN1Ym1pdChldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2NvbnNvbGUubG9nKFwic3VibWl0IGJ1dHRvbiBjbGlja1wiKTtcblx0XHR0aGlzLnByb3BzLmRpc3BhZGlzcGFjdGNoKCk7XG5cdH1cblx0XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0IFx0IFx0dHlwZT1cInRleHRcIiBcblx0XHRcdCBcdCBcdHBsYWNlaG9sZGVyPVwiVHlwZSBpbiB5b3VyIHRvZG9cIlxuXHRcdFx0IFx0IFx0dmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRUZXh0fVxuXHRcdFx0IFx0IFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0IFx0IFx0Lz5cblx0XHQgXHQgXHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0lucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvSW5wdXQuanN4IiwibGV0IGFjdGlvbnMgPSB7XG5cdGFkZFRvZG86IGZ1bmN0aW9uKHRleHQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJBRERfVE9ET1wiLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVkdXgvYWN0aW9ucy5qc3giXSwic291cmNlUm9vdCI6IiJ9