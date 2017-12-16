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
				//console.log("submit button click");
				this.props.dispatch(_actions2.default.completedTodo(this.state.todo.id));
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Il0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW5wdXRUZXh0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsImNvbXBsZXRlZFRvZG8iLCJ0b2RvIiwiaWQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiVG9kb0lucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHFCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLHFIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVc7QUFEQyxJQUFiO0FBRjBCO0FBSzFCOzs7O2dDQUVZQyxLLEVBQU07QUFDbEIsU0FBS0MsUUFBTCxDQUFjO0FBQ2JGLGdCQUFXQyxNQUFNRSxNQUFOLENBQWFDO0FBRFgsS0FBZDtBQUdBOzs7Z0NBRVlILEssRUFBTTtBQUNsQkEsVUFBTUksY0FBTjtBQUNBO0FBQ0EsU0FBS1IsS0FBTCxDQUFXUyxRQUFYLENBQW9CLGtCQUFRQyxhQUFSLENBQXNCLEtBQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkMsRUFBdEMsQ0FBcEI7QUFDQTs7OzRCQUlPO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQztBQUNHLFlBQUssTUFEUjtBQUVHLG1CQUFZLG1CQUZmO0FBR0csYUFBTyxLQUFLVixLQUFMLENBQVdDLFNBSHJCO0FBSUcsZ0JBQVUsS0FBS1UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKYixPQUREO0FBT0c7QUFBQTtBQUFBLFFBQVEsU0FBUyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFqQjtBQUFBO0FBQUE7QUFQSCxLQUREO0FBWUE7Ozs7OzttQkFHYUUsUyIsImZpbGUiOiIwLmIzZjM5NmRkYTNhMjI3NDIyZjFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFjdGlvbnMgIGZyb20gJy4uL3JlZHV4L2FjdGlvbnMuanN4JztcblxuY2xhc3MgVG9kb0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpe1xuXHRcdHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRUZXh0OiAnJ1xuXHRcdH1cblx0fTtcblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aW5wdXRUZXh0OiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cdFxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInN1Ym1pdCBidXR0b24gY2xpY2tcIik7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmNvbXBsZXRlZFRvZG8odGhpcy5zdGF0ZS50b2RvLmlkKSk7XG5cdH1cblx0XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0IFx0IFx0dHlwZT1cInRleHRcIiBcblx0XHRcdCBcdCBcdHBsYWNlaG9sZGVyPVwiVHlwZSBpbiB5b3VyIHRvZG9cIlxuXHRcdFx0IFx0IFx0dmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRUZXh0fVxuXHRcdFx0IFx0IFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0IFx0IFx0Lz5cblx0XHQgXHQgXHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0lucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvSW5wdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==