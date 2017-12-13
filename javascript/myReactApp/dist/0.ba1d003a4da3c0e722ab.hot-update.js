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
			key: 'deleteLastLetter',
			value: function deleteLastLetter() {
				var tempName = this.state.name;
				tempName = tempName.slice(0, tempName.length - 1);
				console.log(tempName);
				this.setState({
					name: tempName
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
					_react3.default.createElement(_DisplayInput2.default, {
						name: this.state.name,
						deleteLastLetter: this.deleteLastLetter })
				);
			}
		}]);
	
		return TextInput;
	}(_react2.Component));
	
	exports.default = TextInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVGV4dElucHV0LmpzeD81YjFlIl0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibmFtZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwidGVtcE5hbWUiLCJzbGljZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VJbnB1dCIsImJpbmQiLCJkZWxldGVMYXN0TGV0dGVyIiwiVGV4dElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHFCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLHFIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU07QUFETSxJQUFiO0FBRjBCO0FBSzFCOzs7OytCQUVXQyxDLEVBQUU7QUFDYixTQUFLQyxRQUFMLENBQWM7QUFDYkYsV0FBTUMsRUFBRUUsTUFBRixDQUFTQztBQURGLEtBQWQ7QUFHQTs7O3NDQUVpQjtBQUNqQixRQUFJQyxXQUFXLEtBQUtOLEtBQUwsQ0FBV0MsSUFBMUI7QUFDQUssZUFBV0EsU0FBU0MsS0FBVCxDQUFlLENBQWYsRUFBa0JELFNBQVNFLE1BQVQsR0FBa0IsQ0FBcEMsQ0FBWDtBQUNBQyxZQUFRQyxHQUFSLENBQVlKLFFBQVo7QUFDQSxTQUFLSCxRQUFMLENBQWM7QUFDYkYsV0FBTUs7QUFETyxLQUFkO0FBR0E7Ozs0QkFHTztBQUNQLFdBQ0M7QUFBQTtBQUFBO0FBQ0MsOENBQU8sTUFBSyxNQUFaO0FBQ0MsYUFBTyxLQUFLTixLQUFMLENBQVdDLElBRG5CO0FBRUMsZ0JBQVUsS0FBS1UsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEI7QUFGWCxPQUREO0FBTUM7QUFDRSxZQUFNLEtBQUtaLEtBQUwsQ0FBV0MsSUFEbkI7QUFFRSx3QkFBb0IsS0FBS1ksZ0JBRjNCO0FBTkQsS0FERDtBQWFBOzs7Ozs7bUJBR2FDLFMiLCJmaWxlIjoiMC5iYTFkMDAzYTRkYTNjMGU3MjJhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IERpc3BsYXlJbnB1dCBmcm9tICcuL0Rpc3BsYXlJbnB1dC5qc3gnO1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiBcIlJvbWFuIEFsc2hlaHJpXCJcblx0XHR9XG5cdH07XG5cdFxuXHRjaGFuZ2VJbnB1dChlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG5hbWU6IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHR9KVxuXHR9XG5cblx0ZGVsZXRlTGFzdExldHRlcigpe1xuXHRcdGxldCB0ZW1wTmFtZSA9IHRoaXMuc3RhdGUubmFtZTtcblx0XHR0ZW1wTmFtZSA9IHRlbXBOYW1lLnNsaWNlKDAsIHRlbXBOYW1lLmxlbmd0aCAtIDEpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBOYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG5hbWU6IHRlbXBOYW1lXG5cdFx0XHR9KVxuXHR9XG5cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUlucHV0LmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PERpc3BsYXlJbnB1dCBcblx0XHRcdFx0ICBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdCAgZGVsZXRlTGFzdExldHRlciA9IHt0aGlzLmRlbGV0ZUxhc3RMZXR0ZXJ9IC8+XG5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L1RleHRJbnB1dC5qc3giXSwic291cmNlUm9vdCI6IiJ9