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
			_this.deleteLastLetter = _this.deleteLastLetter.bind(_this);
			_this.changeInput = _this.changeInput.bind(_this);
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
	
				this.setState({
					name: this.state.name.slice(0, this.state.name.length - 1)
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
						onChange: this.changeInput }),
					_react3.default.createElement(_DisplayInput2.default, {
						name: this.state.name,
						del: this.deleteLastLetter })
				);
			}
		}]);
	
		return TextInput;
	}(_react2.Component));
	
	exports.default = TextInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ },

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
	
		function DispalyInput() {
			_classCallCheck(this, DispalyInput);
	
			return _possibleConstructorReturn(this, (DispalyInput.__proto__ || Object.getPrototypeOf(DispalyInput)).apply(this, arguments));
		}
	
		_createClass(DispalyInput, [{
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
							onClick: this.props.del },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRlbnQvVGV4dElucHV0LmpzeD81YjFlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGVudC9EaXNwbGF5SW5wdXQuanN4PzgxN2EiXSwibmFtZXMiOlsicHJvcHMiLCJjb250ZXh0Iiwic3RhdGUiLCJuYW1lIiwiZGVsZXRlTGFzdExldHRlciIsImJpbmQiLCJjaGFuZ2VJbnB1dCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwic2xpY2UiLCJsZW5ndGgiLCJUZXh0SW5wdXQiLCJkZWwiLCJEaXNwYWx5SW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0MscUJBQVlBLEtBQVosRUFBbUJDLE9BQW5CLEVBQTJCO0FBQUE7O0FBQUEscUhBQ3BCRCxLQURvQixFQUNiQyxPQURhOztBQUUxQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTTtBQURNLElBQWI7QUFHQSxTQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBTjBCO0FBTzFCOzs7OytCQUVXRSxDLEVBQUU7QUFDYixTQUFLQyxRQUFMLENBQWM7QUFDYkwsV0FBTUksRUFBRUUsTUFBRixDQUFTQztBQURGLEtBQWQ7QUFHQTs7O3NDQUVpQjs7QUFFakIsU0FBS0YsUUFBTCxDQUFjO0FBQ2JMLFdBQU0sS0FBS0QsS0FBTCxDQUFXQyxJQUFYLENBQWdCUSxLQUFoQixDQUFzQixDQUF0QixFQUF5QixLQUFLVCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JTLE1BQWhCLEdBQXlCLENBQWxEO0FBRE8sS0FBZDtBQUdBOzs7NEJBR087QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUNDLDhDQUFPLE1BQUssTUFBWjtBQUNDLGFBQU8sS0FBS1YsS0FBTCxDQUFXQyxJQURuQjtBQUVDLGdCQUFVLEtBQUtHLFdBRmhCLEdBREQ7QUFLQztBQUNFLFlBQU0sS0FBS0osS0FBTCxDQUFXQyxJQURuQjtBQUVFLFdBQU8sS0FBS0MsZ0JBRmQ7QUFMRCxLQUREO0FBWUE7Ozs7OzttQkFHYVMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDeENOO0FBQ1AsV0FDQztBQUFBO0FBQUE7QUFFQyw4Q0FGRDtBQUdDO0FBQUE7QUFBQTtBQUFJLFdBQUtiLEtBQUwsQ0FBV0c7QUFBZixNQUhEO0FBSUM7QUFBQTtBQUFBO0FBQ0MsZ0JBQVMsS0FBS0gsS0FBTCxDQUFXYyxHQURyQjtBQUFBO0FBQUE7QUFKRCxLQUREO0FBV0E7Ozs7OzttQkFJYUMsWSIsImZpbGUiOiIwLjJjYjhkZmZkYmU3ZTIwZWY3YTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRGlzcGxheUlucHV0IGZyb20gJy4vRGlzcGxheUlucHV0LmpzeCc7XG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KXtcblx0XHRzdXBlcihwcm9wcywgY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6IFwiUm9tYW4gQWxzaGVocmlcIlxuXHRcdH1cblx0XHR0aGlzLmRlbGV0ZUxhc3RMZXR0ZXIgPSB0aGlzLmRlbGV0ZUxhc3RMZXR0ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNoYW5nZUlucHV0ID0gdGhpcy5jaGFuZ2VJbnB1dC5iaW5kKHRoaXMpO1xuXHR9O1xuXHRcblx0Y2hhbmdlSW5wdXQoZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRuYW1lOiBlLnRhcmdldC52YWx1ZVxuXHRcdFx0fSlcblx0fVxuXG5cdGRlbGV0ZUxhc3RMZXR0ZXIoKXtcblx0XHRcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdG5hbWU6IHRoaXMuc3RhdGUubmFtZS5zbGljZSgwLCB0aGlzLnN0YXRlLm5hbWUubGVuZ3RoIC0gMSlcblx0XHRcdH0pXG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuY2hhbmdlSW5wdXR9IC8+XG5cblx0XHRcdFx0PERpc3BsYXlJbnB1dCBcblx0XHRcdFx0ICBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdCAgZGVsID0ge3RoaXMuZGVsZXRlTGFzdExldHRlcn0gLz5cblx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbnRlbnQvVGV4dElucHV0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIERpc3BhbHlJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5uYW1lfTwvcD5cblx0XHRcdFx0PGJ1dHRvbiBcblx0XHRcdFx0IG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVsfT5cblx0XHRcdFx0IERlbGV0ZSBsYXN0IGxldHRlclxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEaXNwYWx5SW5wdXQ7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbnRlbnQvRGlzcGxheUlucHV0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=