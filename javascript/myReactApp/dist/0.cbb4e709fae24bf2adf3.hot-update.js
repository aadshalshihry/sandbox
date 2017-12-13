webpackHotUpdate(0,{

/***/ 341:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
		DispalyInput: {
			displayName: 'DispalyInput'
		}
	};
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/DisplayInput.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});
	
	var _homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/roman/workspace/myReactApp/components/content/DisplayInput.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
		return function (Component) {
			return _homeRomanWorkspaceMyReactAppNode_modulesReactTransformHmrLibIndexJs2(_homeRomanWorkspaceMyReactAppNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}
	
	var DispalyInput = _wrapComponent('DispalyInput')(function (_Component) {
		_inherits(DispalyInput, _Component);
	
		function DispalyInput(props, context) {
			_classCallCheck(this, DispalyInput);
	
			var _this = _possibleConstructorReturn(this, (DispalyInput.__proto__ || Object.getPrototypeOf(DispalyInput)).call(this, props, context));
	
			_this.state = {
				name: _this.props.name
			};
			return _this;
		}
	
		_createClass(DispalyInput, [{
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
					_react3.default.createElement('br', null),
					_react3.default.createElement(
						'p',
						null,
						this.props.name
					),
					_react3.default.createElement(
						'button',
						{
							onClick: this.deleteLastLetter.bind(this) },
						'Delete last letter'
					)
				);
			}
		}]);
	
		return DispalyInput;
	}(_react2.Component));
	
	exports.default = DispalyInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvRGlzcGxheUlucHV0LmpzeD84MTdhIl0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibmFtZSIsInRlbXBOYW1lIiwic2xpY2UiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkZWxldGVMYXN0TGV0dGVyIiwiYmluZCIsIkRpc3BhbHlJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Msd0JBQVlBLEtBQVosRUFBbUJDLE9BQW5CLEVBQTJCO0FBQUE7O0FBQUEsMkhBQ3BCRCxLQURvQixFQUNiQyxPQURhOztBQUUxQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTSxNQUFLSCxLQUFMLENBQVdHO0FBREwsSUFBYjtBQUYwQjtBQUsxQjs7OztzQ0FDaUI7QUFDakIsUUFBSUMsV0FBVyxLQUFLRixLQUFMLENBQVdDLElBQTFCO0FBQ0FDLGVBQVdBLFNBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCRCxTQUFTRSxNQUFULEdBQWtCLENBQXBDLENBQVg7QUFDQUMsWUFBUUMsR0FBUixDQUFZSixRQUFaO0FBQ0EsU0FBS0ssUUFBTCxDQUFjO0FBQ2JOLFdBQU1DO0FBRE8sS0FBZDtBQUdBOzs7NEJBRU87QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUVDLDhDQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUksV0FBS0osS0FBTCxDQUFXRztBQUFmLE1BSEQ7QUFJQztBQUFBO0FBQUE7QUFDQyxnQkFBUyxLQUFLTyxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEVjtBQUFBO0FBQUE7QUFKRCxLQUREO0FBV0E7Ozs7OzttQkFJYUMsWSIsImZpbGUiOiIwLmNiYjRlNzA5ZmFlMjRiZjJhZGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEaXNwYWx5SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWVcblx0XHR9XG5cdH1cblx0ZGVsZXRlTGFzdExldHRlcigpe1xuXHRcdGxldCB0ZW1wTmFtZSA9IHRoaXMuc3RhdGUubmFtZTtcblx0XHR0ZW1wTmFtZSA9IHRlbXBOYW1lLnNsaWNlKDAsIHRlbXBOYW1lLmxlbmd0aCAtIDEpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBOYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG5hbWU6IHRlbXBOYW1lXG5cdFx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PHA+e3RoaXMucHJvcHMubmFtZX08L3A+XG5cdFx0XHRcdDxidXR0b24gXG5cdFx0XHRcdCBvbkNsaWNrPXt0aGlzLmRlbGV0ZUxhc3RMZXR0ZXIuYmluZCh0aGlzKX0+XG5cdFx0XHRcdCBEZWxldGUgbGFzdCBsZXR0ZXJcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGlzcGFseUlucHV0O1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250ZW50L0Rpc3BsYXlJbnB1dC5qc3giXSwic291cmNlUm9vdCI6IiJ9