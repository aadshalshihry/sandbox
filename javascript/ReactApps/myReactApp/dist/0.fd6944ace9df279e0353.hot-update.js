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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Il0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW5wdXRUZXh0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkaXNwYWRpc3BhY3RjaCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJUb2RvSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHFCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLHFIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVc7QUFEQyxJQUFiO0FBRjBCO0FBSzFCOzs7O2dDQUVZQyxLLEVBQU07QUFDbEIsU0FBS0MsUUFBTCxDQUFjO0FBQ2JGLGdCQUFXQyxNQUFNRSxNQUFOLENBQWFDO0FBRFgsS0FBZDtBQUdBOzs7Z0NBRVlILEssRUFBTTtBQUNsQkEsVUFBTUksY0FBTjtBQUNBO0FBQ0EsU0FBS1IsS0FBTCxDQUFXUyxjQUFYO0FBQ0E7Ozs0QkFJTztBQUNQLFdBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFDRyxZQUFLLE1BRFI7QUFFRyxtQkFBWSxtQkFGZjtBQUdHLGFBQU8sS0FBS1AsS0FBTCxDQUFXQyxTQUhyQjtBQUlHLGdCQUFVLEtBQUtPLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBSmIsT0FERDtBQU9HO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS0MsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakI7QUFBQTtBQUFBO0FBUEgsS0FERDtBQVlBOzs7Ozs7bUJBR2FFLFMiLCJmaWxlIjoiMC5mZDY5NDRhY2U5ZGYyNzllMDM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgVG9kb0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpe1xuXHRcdHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRUZXh0OiAnJ1xuXHRcdH1cblx0fTtcblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aW5wdXRUZXh0OiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cdFxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcInN1Ym1pdCBidXR0b24gY2xpY2tcIik7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYWRpc3BhY3RjaCgpO1xuXHR9XG5cdFxuXG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdCBcdCBcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHQgXHQgXHRwbGFjZWhvbGRlcj1cIlR5cGUgaW4geW91ciB0b2RvXCJcblx0XHRcdCBcdCBcdHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VGV4dH1cblx0XHRcdCBcdCBcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdCBcdCBcdC8+XG5cdFx0IFx0IFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9JbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=