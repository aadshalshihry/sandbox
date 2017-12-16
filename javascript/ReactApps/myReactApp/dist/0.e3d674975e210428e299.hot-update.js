webpackHotUpdate(0,{

/***/ 151:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function getId(state) {
		return state.todos.reduce(function (maxId, todo) {
			return Math.max(todo.id, maxId);
		}, -1) + 1;
	}
	
	var reducer = function reducer(state, action) {
		switch (action.type) {
			case "ADD_TODO":
				return Object.assign({}, state, {
					todos: [{
						id: getId(state),
						text: action.text,
						completed: false
	
					}].concat(_toConsumableArray(state.todos))
				});
	
			case "COMPLETE_TODO":
				return Object.assign({}, state, {
					todos: state.todos.map(function (todo) {
						return todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
					})
				});
	
			case "DELETE_TODO":
				return Object.assign({}, state, {
					todos: state.todos.filter(function (todo) {
						return todo.id !== action.id;
					})
				});
	
			default:
				return state;
		}
	};
	
	exports.default = reducer;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHV4L3JlZHVjZXIuanN4P2U5ZjUiXSwibmFtZXMiOlsiZ2V0SWQiLCJzdGF0ZSIsInRvZG9zIiwicmVkdWNlIiwibWF4SWQiLCJ0b2RvIiwiTWF0aCIsIm1heCIsImlkIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0IiwiY29tcGxldGVkIiwibWFwIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsVUFBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDMUMsVUFBT0MsS0FBS0MsR0FBTCxDQUFTRixLQUFLRyxFQUFkLEVBQWtCSixLQUFsQixDQUFQO0FBQ0EsR0FGTSxFQUVKLENBQUMsQ0FGRyxJQUVFLENBRlQ7QUFHQTs7QUFFRCxLQUFJSyxVQUFVLFNBQVZBLE9BQVUsQ0FBU1IsS0FBVCxFQUFnQlMsTUFBaEIsRUFBd0I7QUFDckMsVUFBT0EsT0FBT0MsSUFBZDtBQUNDLFFBQUssVUFBTDtBQUNDLFdBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixLQUFsQixFQUF5QjtBQUMvQkMsYUFBUTtBQUNQTSxVQUFJUixNQUFNQyxLQUFOLENBREc7QUFFUGEsWUFBTUosT0FBT0ksSUFGTjtBQUdQQyxpQkFBVzs7QUFISixNQUFSLDRCQUtNZCxNQUFNQyxLQUxaO0FBRCtCLEtBQXpCLENBQVA7O0FBU0QsUUFBSyxlQUFMO0FBQ0MsV0FBT1UsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JaLEtBQWxCLEVBQXlCO0FBQy9CQyxZQUFPRCxNQUFNQyxLQUFOLENBQVljLEdBQVosQ0FBZ0IsVUFBQ1gsSUFBRCxFQUFVO0FBQ2hDLGFBQU9BLEtBQUtHLEVBQUwsS0FBWUUsT0FBT0YsRUFBbkIsR0FDTkksT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLElBQWxCLEVBQ0MsRUFBRVUsV0FBVyxDQUFDVixLQUFLVSxTQUFuQixFQURELENBRE0sR0FFNkJWLElBRnBDO0FBR0MsTUFKSztBQUR3QixLQUF6QixDQUFQOztBQVFELFFBQUssYUFBTDtBQUNDLFdBQU9PLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixLQUFsQixFQUF5QjtBQUMvQkMsWUFBT0QsTUFBTUMsS0FBTixDQUFZZSxNQUFaLENBQW1CLFVBQUNaLElBQUQsRUFBVTtBQUNuQyxhQUFPQSxLQUFLRyxFQUFMLEtBQVlFLE9BQU9GLEVBQTFCO0FBQ0EsTUFGTTtBQUR3QixLQUF6QixDQUFQOztBQVFEO0FBQ0MsV0FBT1AsS0FBUDtBQTlCRjtBQWdDQSxFQWpDRDs7bUJBbUNlUSxPIiwiZmlsZSI6IjAuZTNkNjc0OTc1ZTIxMDQyOGUyOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldElkKHN0YXRlKSB7XG5cdHJldHVybiBzdGF0ZS50b2Rvcy5yZWR1Y2UoKG1heElkLCB0b2RvKSA9PiB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KHRvZG8uaWQsIG1heElkKVxuXHR9LCAtMSkgKyAxXG59XG5cbmxldCByZWR1Y2VyID0gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xuXHRcdGNhc2UgXCJBRERfVE9ET1wiOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdHRvZG9zOiBbe1xuXHRcdFx0XHRcdGlkOiBnZXRJZChzdGF0ZSksXG5cdFx0XHRcdFx0dGV4dDogYWN0aW9uLnRleHQsXG5cdFx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxuXG5cdFx0XHRcdH0sIC4uLnN0YXRlLnRvZG9zXVxuXHRcdFx0fSlcblxuXHRcdGNhc2UgXCJDT01QTEVURV9UT0RPXCI6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0dG9kb3M6IHN0YXRlLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0b2RvLmlkID09PSBhY3Rpb24uaWQgP1xuXHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih7fSwgdG9kbywgXG5cdFx0XHRcdFx0XHRcdHsgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfSkgOiB0b2RvXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblxuXHRcdGNhc2UgXCJERUxFVEVfVE9ET1wiOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdHRvZG9zOiBzdGF0ZS50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gdG9kby5pZCAhPT0gYWN0aW9uLmlkXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVx0XG5cblxuXG5cdFx0ZGVmYXVsdDogXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlZHV4L3JlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==