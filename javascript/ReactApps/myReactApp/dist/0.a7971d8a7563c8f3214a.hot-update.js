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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Il0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW5wdXRUZXh0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsImNvbXBsZXRlZFRvZG8iLCJ0b2RvIiwiaWQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiVG9kb0lucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHFCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLHFIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVc7QUFEQyxJQUFiO0FBRjBCO0FBSzFCOzs7O2dDQUVZQyxLLEVBQU07QUFDbEIsU0FBS0MsUUFBTCxDQUFjO0FBQ2JGLGdCQUFXQyxNQUFNRSxNQUFOLENBQWFDO0FBRFgsS0FBZDtBQUdBOzs7Z0NBRVlILEssRUFBTTtBQUNsQkEsVUFBTUksY0FBTjtBQUNBO0FBQ0EsU0FBS1IsS0FBTCxDQUFXUyxRQUFYLENBQW9CLGtCQUFRQyxhQUFSLENBQXNCLEtBQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkMsRUFBdEMsQ0FBcEI7QUFDQTs7OzRCQUlPO0FBQ1AsV0FDQztBQUFBO0FBQUEsT0FBTSxVQUFVLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWhCO0FBQ0U7QUFDRyxZQUFLLE1BRFI7QUFFRyxtQkFBWSxtQkFGZjtBQUdHLGFBQU8sS0FBS1osS0FBTCxDQUFXQyxTQUhyQjtBQUlHLGdCQUFVLEtBQUtZLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCO0FBSmIsT0FERjtBQU9JLDhDQUFPLE1BQUssUUFBWjtBQVBKLEtBREQ7QUFZQTs7Ozs7O21CQUdhRSxTIiwiZmlsZSI6IjAuYTc5NzFkOGE3NTYzYzhmMzIxNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYWN0aW9ucyAgZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy5qc3gnO1xuXG5jbGFzcyBUb2RvSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFRleHQ6ICcnXG5cdFx0fVxuXHR9O1xuXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpbnB1dFRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblx0XG5cdGhhbmRsZVN1Ym1pdChldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvL2NvbnNvbGUubG9nKFwic3VibWl0IGJ1dHRvbiBjbGlja1wiKTtcblx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuY29tcGxldGVkVG9kbyh0aGlzLnN0YXRlLnRvZG8uaWQpKTtcblx0fVxuXHRcblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHQgXHQgXHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHQgXHQgXHRwbGFjZWhvbGRlcj1cIlR5cGUgaW4geW91ciB0b2RvXCJcblx0XHRcdFx0IFx0IFx0dmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRUZXh0fVxuXHRcdFx0XHQgXHQgXHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdCBcdCBcdC8+XG5cdFx0XHQgXHQgXHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHRcdFx0XHRcblx0XHRcdDwvZm9ybT5cblx0XHRcdFxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0lucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvSW5wdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==