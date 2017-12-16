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
				this.props.addTodo(this.state.inputText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVG9kb0lucHV0LmpzeD8xYjg0Il0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW5wdXRUZXh0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb2RvIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUNoYW5nZSIsIlRvZG9JbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0MscUJBQVlBLEtBQVosRUFBbUJDLE9BQW5CLEVBQTJCO0FBQUE7O0FBQUEscUhBQ3BCRCxLQURvQixFQUNiQyxPQURhOztBQUUxQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsZUFBVztBQURDLElBQWI7QUFGMEI7QUFLMUI7Ozs7Z0NBRVlDLEssRUFBTTtBQUNsQixTQUFLQyxRQUFMLENBQWM7QUFDYkYsZ0JBQVdDLE1BQU1FLE1BQU4sQ0FBYUM7QUFEWCxLQUFkO0FBR0E7OztnQ0FFWUgsSyxFQUFNO0FBQ2xCQSxVQUFNSSxjQUFOO0FBQ0EsU0FBS1IsS0FBTCxDQUFZUyxPQUFaLENBQW9CLEtBQUtQLEtBQUwsQ0FBV0MsU0FBL0I7QUFDQTs7OzRCQUlPO0FBQ1AsV0FDQztBQUFBO0FBQUEsT0FBTSxVQUFVLEtBQUtPLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWhCO0FBQ0U7QUFDRyxZQUFLLE1BRFI7QUFFRyxtQkFBWSxtQkFGZjtBQUdHLGFBQU8sS0FBS1QsS0FBTCxDQUFXQyxTQUhyQjtBQUlHLGdCQUFVLEtBQUtTLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCO0FBSmIsT0FERjtBQU9JLDhDQUFPLE1BQUssUUFBWjtBQVBKLEtBREQ7QUFZQTs7Ozs7O21CQUdhRSxTIiwiZmlsZSI6IjAuMmVjYzNiZDBmMGYwMTk0MzJkNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRvZG9JbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KXtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VGV4dDogJydcblx0XHR9XG5cdH07XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlucHV0VGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXHRcblx0aGFuZGxlU3VibWl0KGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMgLmFkZFRvZG8odGhpcy5zdGF0ZS5pbnB1dFRleHQpO1xuXHR9XG5cdFxuXG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdCBcdCBcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdCBcdCBcdHBsYWNlaG9sZGVyPVwiVHlwZSBpbiB5b3VyIHRvZG9cIlxuXHRcdFx0XHQgXHQgXHR2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFRleHR9XG5cdFx0XHRcdCBcdCBcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0IFx0IFx0Lz5cblx0XHRcdCBcdCBcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgIC8+XHRcdFx0XHRcblx0XHRcdDwvZm9ybT5cblx0XHRcdFxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0lucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9Ub2RvSW5wdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==