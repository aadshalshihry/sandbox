webpackHotUpdate(0,{

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(109);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _store = __webpack_require__(152);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(132);
	
	var _App = __webpack_require__(143);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
		todos: [{
			id: 0,
			text: "Initial todo for deom",
			completed: false
		}]
	};
	
	var store = (0, _store2.default)(initialState);
	
	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(_App2.default, null)
	), document.getElementById('app'));

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJzdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsS0FBSUEsZUFBZTtBQUNsQkMsU0FBTyxDQUFDO0FBQ1BDLE9BQUksQ0FERztBQUVQQyxTQUFNLHVCQUZDO0FBR1BDLGNBQVc7QUFISixHQUFEO0FBRFcsRUFBbkI7O0FBUUEsS0FBSUMsUUFBUSxxQkFBZUwsWUFBZixDQUFaOztBQUVBLG9CQUFTTSxNQUFULENBQ0M7QUFBQTtBQUFBLElBQVUsT0FBT0QsS0FBakI7QUFDQztBQURELEVBREQsRUFJR0UsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUpILEUiLCJmaWxlIjoiMC5jNDU1ZTAzNWEzYjU5NGFjMGE4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29tcG9uZW50cy9yZWR1eC9zdG9yZS5qc3gnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnO1xuXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xuXHR0b2RvczogW3tcblx0XHRpZDogMCxcblx0XHR0ZXh0OiBcIkluaXRpYWwgdG9kbyBmb3IgZGVvbVwiLFxuXHRcdGNvbXBsZXRlZDogZmFsc2Vcblx0fV1cbn1cblxubGV0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKTtcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8QXBwIC8+XG5cdDwvUHJvdmlkZXI+XG5cdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9