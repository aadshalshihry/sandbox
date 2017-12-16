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
				this.setState(e.target.in);
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
					})
				);
			}
		}]);

		return TextInput;
	}(_react2.Component));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRlbnQuanN4Pzk3YjkiXSwibmFtZXMiOlsiQ29udGVudCIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwiaW4iLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJjaGFuZ2VJbnB1dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUdTO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFFQyxtQ0FBQyxTQUFEO0FBRkQsS0FERDtBQU1BOzs7Ozs7bUJBR2FBLE87Ozs7O0FBR2QscUJBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTJCO0FBQUE7O0FBQUEsc0hBQ3BCRCxLQURvQixFQUNiQyxPQURhOztBQUUxQixVQUFLQyxLQUFMLEdBQWE7QUFDWkMsUUFBSTtBQURRLElBQWI7QUFGMEI7QUFLMUI7Ozs7K0JBRVdDLEMsRUFBRTtBQUNiLFNBQUtDLFFBQUwsQ0FBY0QsRUFBRUUsTUFBRixDQUFTSCxFQUF2QjtBQUNBOzs7NEJBR087QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUNDLDhDQUFPLE1BQUssTUFBWjtBQUNDLGFBQU8sS0FBS0QsS0FBTCxDQUFXQyxFQURuQjtBQUVDLGdCQUFVLEtBQUtJLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCO0FBRlg7QUFERCxLQUREO0FBUUEiLCJmaWxlIjoiMC5hZWRiZThjZjY3MzY0YjFmOTFkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD5Db250ZW50IHJlYWN0IGlzIHdvcmtpbmchPC9wPlxuXHRcdFx0XHQ8VGV4dElucHV0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KXtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGluOiBcIkluXCJcblx0XHR9XG5cdH07XG5cdFxuXHRjaGFuZ2VJbnB1dChlKXtcblx0XHR0aGlzLnNldFN0YXRlKGUudGFyZ2V0LmluKVxuXHR9XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5pbn1cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5jaGFuZ2VJbnB1dC5iaW5kKHRoaXMpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29udGVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9