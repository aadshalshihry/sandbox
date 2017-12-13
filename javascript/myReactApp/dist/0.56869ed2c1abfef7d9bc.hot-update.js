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
				this.props.dispatch(_actions2.default.addTodo(this.state.inputText));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Il0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW5wdXRUZXh0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsImFkZFRvZG8iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiVG9kb0lucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHFCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLHFIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVc7QUFEQyxJQUFiO0FBRjBCO0FBSzFCOzs7O2dDQUVZQyxLLEVBQU07QUFDbEIsU0FBS0MsUUFBTCxDQUFjO0FBQ2JGLGdCQUFXQyxNQUFNRSxNQUFOLENBQWFDO0FBRFgsS0FBZDtBQUdBOzs7Z0NBRVlILEssRUFBTTtBQUNsQkEsVUFBTUksY0FBTjtBQUNBO0FBQ0EsU0FBS1IsS0FBTCxDQUFXUyxRQUFYLENBQW9CLGtCQUFRQyxPQUFSLENBQWdCLEtBQUtSLEtBQUwsQ0FBV0MsU0FBM0IsQ0FBcEI7QUFDQTs7OzRCQUlPO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQztBQUNHLFlBQUssTUFEUjtBQUVHLG1CQUFZLG1CQUZmO0FBR0csYUFBTyxLQUFLRCxLQUFMLENBQVdDLFNBSHJCO0FBSUcsZ0JBQVUsS0FBS1EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKYixPQUREO0FBT0c7QUFBQTtBQUFBLFFBQVEsU0FBUyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFqQjtBQUFBO0FBQUE7QUFQSCxLQUREO0FBWUE7Ozs7OzttQkFHYUUsUyIsImZpbGUiOiIwLjU2ODY5ZWQyYzFhYmZlZjdkOWJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFjdGlvbnMgIGZyb20gJy4uL3JlZHV4L2FjdGlvbnMuanN4JztcblxuY2xhc3MgVG9kb0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpe1xuXHRcdHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRUZXh0OiAnJ1xuXHRcdH1cblx0fTtcblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aW5wdXRUZXh0OiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cdFxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInN1Ym1pdCBidXR0b24gY2xpY2tcIik7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLmFkZFRvZG8odGhpcy5zdGF0ZS5pbnB1dFRleHQpKTtcblx0fVxuXHRcblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHQgXHQgXHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0IFx0IFx0cGxhY2Vob2xkZXI9XCJUeXBlIGluIHlvdXIgdG9kb1wiXG5cdFx0XHQgXHQgXHR2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFRleHR9XG5cdFx0XHQgXHQgXHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHQgXHQgXHQvPlxuXHRcdCBcdCBcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvSW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RvZG9JbnB1dC5qc3giXSwic291cmNlUm9vdCI6IiJ9