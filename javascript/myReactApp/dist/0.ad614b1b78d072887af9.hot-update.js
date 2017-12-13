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
				var tempName = this.props.name;
				tempName = tempName.slice(0, tempName.length - 1);
				console.log(tempName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvRGlzcGxheUlucHV0LmpzeD84MTdhIl0sIm5hbWVzIjpbInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibmFtZSIsInRlbXBOYW1lIiwic2xpY2UiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlTGFzdExldHRlciIsImJpbmQiLCJEaXNwYWx5SW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdDLHdCQUFZQSxLQUFaLEVBQW1CQyxPQUFuQixFQUEyQjtBQUFBOztBQUFBLDJIQUNwQkQsS0FEb0IsRUFDYkMsT0FEYTs7QUFFMUIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU0sTUFBS0gsS0FBTCxDQUFXRztBQURMLElBQWI7QUFGMEI7QUFLMUI7Ozs7c0NBQ2lCO0FBQ2pCLFFBQUlDLFdBQVcsS0FBS0osS0FBTCxDQUFXRyxJQUExQjtBQUNBQyxlQUFXQSxTQUFTQyxLQUFULENBQWUsQ0FBZixFQUFrQkQsU0FBU0UsTUFBVCxHQUFrQixDQUFwQyxDQUFYO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWUosUUFBWjtBQUNBOzs7NEJBRU87QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUVDLDhDQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUksV0FBS0osS0FBTCxDQUFXRztBQUFmLE1BSEQ7QUFJQztBQUFBO0FBQUE7QUFDQyxnQkFBUyxLQUFLTSxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEVjtBQUFBO0FBQUE7QUFKRCxLQUREO0FBV0E7Ozs7OzttQkFJYUMsWSIsImZpbGUiOiIwLmFkNjE0YjFiNzhkMDcyODg3YWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEaXNwYWx5SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWVcblx0XHR9XG5cdH1cblx0ZGVsZXRlTGFzdExldHRlcigpe1xuXHRcdGxldCB0ZW1wTmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHR0ZW1wTmFtZSA9IHRlbXBOYW1lLnNsaWNlKDAsIHRlbXBOYW1lLmxlbmd0aCAtIDEpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBOYW1lKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxwPnt0aGlzLnByb3BzLm5hbWV9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIFxuXHRcdFx0XHQgb25DbGljaz17dGhpcy5kZWxldGVMYXN0TGV0dGVyLmJpbmQodGhpcyl9PlxuXHRcdFx0XHQgRGVsZXRlIGxhc3QgbGV0dGVyXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERpc3BhbHlJbnB1dDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGVudC9EaXNwbGF5SW5wdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==