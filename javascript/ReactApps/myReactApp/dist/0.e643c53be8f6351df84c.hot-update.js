webpackHotUpdate(0,{

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
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
	
	var _DisplayInput = __webpack_require__(341);
	
	var _DisplayInput2 = _interopRequireDefault(_DisplayInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		TextInput: {
			displayName: 'TextInput'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TextInput.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/TextInput.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var TextInput = _wrapComponent('TextInput')(function (_Component) {
		_inherits(TextInput, _Component);
	
		function TextInput(props, context) {
			_classCallCheck(this, TextInput);
	
			var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props, context));
	
			_this.state = {
				name: "Roman Alshehri"
			};
			return _this;
		}
	
		_createClass(TextInput, [{
			key: 'changeInput',
			value: function changeInput(e) {
				this.setState({
					name: e.target.value
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					null,
					_react3.default.createElement('input', { type: 'text',
						value: this.state.name,
						onChange: this.changeInput.bind(this)
					}),
					_react3.default.createElement(_DisplayInput2.default, { name: this.state.name })
				);
			}
		}]);
	
		return TextInput;
	}(_react2.Component));
	
	exports.default = TextInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVGV4dElucHV0LmpzeD81YjFlIl0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibmFtZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlSW5wdXQiLCJiaW5kIiwiVGV4dElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHFCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLHFIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU07QUFETSxJQUFiO0FBRjBCO0FBSzFCOzs7OytCQUVXQyxDLEVBQUU7QUFDYixTQUFLQyxRQUFMLENBQWM7QUFDYkYsV0FBTUMsRUFBRUUsTUFBRixDQUFTQztBQURGLEtBQWQ7QUFHQTs7OzRCQUdPO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFDQyw4Q0FBTyxNQUFLLE1BQVo7QUFDQyxhQUFPLEtBQUtMLEtBQUwsQ0FBV0MsSUFEbkI7QUFFQyxnQkFBVSxLQUFLSyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtBQUZYLE9BREQ7QUFNQyw2REFBYyxNQUFNLEtBQUtQLEtBQUwsQ0FBV0MsSUFBL0I7QUFORCxLQUREO0FBV0E7Ozs7OzttQkFHYU8sUyIsImZpbGUiOiIwLmU2NDNjNTNiZThmNjM1MWRmODRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRGlzcGxheUlucHV0IGZyb20gJy4vRGlzcGxheUlucHV0LmpzeCc7XG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KXtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6IFwiUm9tYW4gQWxzaGVocmlcIlxuXHRcdH1cblx0fTtcblx0XG5cdGNoYW5nZUlucHV0KGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bmFtZTogZS50YXJnZXQudmFsdWVcblx0XHRcdH0pXG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuY2hhbmdlSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8RGlzcGxheUlucHV0IG5hbWU9e3RoaXMuc3RhdGUubmFtZX0gLz5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbnRlbnQvVGV4dElucHV0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=