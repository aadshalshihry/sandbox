webpackHotUpdate(0,{

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _index = __webpack_require__(38);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(36);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(21);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(37);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		Content: {
			displayName: "Content"
		},
		TextInput: {
			displayName: "TextInput"
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: "/home/roman/workspace/myReactApp/components/Content.jsx",
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: "/home/roman/workspace/myReactApp/components/Content.jsx",
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var Content = _wrapComponent("Content")(function (_Component) {
		_inherits(Content, _Component);
	
		function Content() {
			_classCallCheck(this, Content);
	
			return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
		}
	
		_createClass(Content, [{
			key: "render",
			value: function render() {
				return _react3.default.createElement(
					"div",
					null,
					_react3.default.createElement(
						"p",
						null,
						"Content react is working!"
					),
					_react3.default.createElement(TextInput, null)
				);
			}
		}]);
	
		return Content;
	}(_react2.Component));
	
	exports.default = Content;
	
	var TextInput = _wrapComponent("TextInput")(function (_Component2) {
		_inherits(TextInput, _Component2);
	
		function TextInput(props, context) {
			_classCallCheck(this, TextInput);
	
			var _this2 = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props, context));
	
			_this2.state = {
				in: "In"
			};
			return _this2;
		}
	
		_createClass(TextInput, [{
			key: "changeInput",
			value: function changeInput(e) {
				this.setState({
					in: e.target.value
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react3.default.createElement(
					"div",
					null,
					_react3.default.createElement("input", { type: "text",
						value: this.state.in,
						onChange: this.changeInput.bind(this)
					}),
					_react3.default.createElement(
						"p",
						null,
						this.state.in
					)
				);
			}
		}]);

		return TextInput;
	}(_react2.Component));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRlbnQuanN4Pzk3YjkiXSwibmFtZXMiOlsiQ29udGVudCIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW4iLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUlucHV0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBR1M7QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDLG1DQUFDLFNBQUQ7QUFGRCxLQUREO0FBTUE7Ozs7OzttQkFHYUEsTzs7Ozs7QUFHZCxxQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBMkI7QUFBQTs7QUFBQSxzSEFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBRTFCLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxRQUFJO0FBRFEsSUFBYjtBQUYwQjtBQUsxQjs7OzsrQkFFV0MsQyxFQUFFO0FBQ2IsU0FBS0MsUUFBTCxDQUFjO0FBQ2JGLFNBQUlDLEVBQUVFLE1BQUYsQ0FBU0M7QUFEQSxLQUFkO0FBR0E7Ozs0QkFHTztBQUNQLFdBQ0M7QUFBQTtBQUFBO0FBQ0MsOENBQU8sTUFBSyxNQUFaO0FBQ0MsYUFBTyxLQUFLTCxLQUFMLENBQVdDLEVBRG5CO0FBRUMsZ0JBQVUsS0FBS0ssV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEI7QUFGWCxPQUREO0FBS0M7QUFBQTtBQUFBO0FBQUksV0FBS1AsS0FBTCxDQUFXQztBQUFmO0FBTEQsS0FERDtBQVNBIiwiZmlsZSI6IjAuNTUzMGQwMmI3ZTEyNjJlMzk2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHA+Q29udGVudCByZWFjdCBpcyB3b3JraW5nITwvcD5cblx0XHRcdFx0PFRleHRJbnB1dCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbjogXCJJblwiXG5cdFx0fVxuXHR9O1xuXHRcblx0Y2hhbmdlSW5wdXQoZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpbjogZS50YXJnZXQudmFsdWVcblx0XHRcdH0pXG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmlufVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxwPnt0aGlzLnN0YXRlLmlufTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRlbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==