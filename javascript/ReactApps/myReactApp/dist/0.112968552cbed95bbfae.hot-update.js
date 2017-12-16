webpackHotUpdate(0,{

/***/ 149:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function getId(state) {
		return state.todos.reduce(function (maxId, todo) {
			return Math.max(todo.id, maxId);
		} - 1) + 1;
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
			default:
				return state;
		}
	};
	
	exports.default = reducer;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHV4L3JlZHVjZXIuanN4P2U5ZjUiXSwibmFtZXMiOlsiZ2V0SWQiLCJzdGF0ZSIsInRvZG9zIiwicmVkdWNlIiwibWF4SWQiLCJ0b2RvIiwiTWF0aCIsIm1heCIsImlkIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0IiwiY29tcGxldGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsVUFBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDMUMsVUFBT0MsS0FBS0MsR0FBTCxDQUFTRixLQUFLRyxFQUFkLEVBQWtCSixLQUFsQixDQUFQO0FBQ0EsR0FGeUIsR0FFdkIsQ0FGSSxJQUVDLENBRlI7QUFHQTs7QUFFRCxLQUFJSyxVQUFVLFNBQVZBLE9BQVUsQ0FBU1IsS0FBVCxFQUFnQlMsTUFBaEIsRUFBd0I7QUFDckMsVUFBT0EsT0FBT0MsSUFBZDtBQUNDLFFBQUssVUFBTDtBQUNDLFdBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixLQUFsQixFQUF5QjtBQUMvQkMsYUFBUTtBQUNQTSxVQUFJUixNQUFNQyxLQUFOLENBREc7QUFFUGEsWUFBTUosT0FBT0ksSUFGTjtBQUdQQyxpQkFBVzs7QUFISixNQUFSLDRCQUtNZCxNQUFNQyxLQUxaO0FBRCtCLEtBQXpCLENBQVA7QUFRRDtBQUNDLFdBQU9ELEtBQVA7QUFYRjtBQWFBLEVBZEQ7O21CQWdCZVEsTyIsImZpbGUiOiIwLjExMjk2ODU1MmNiZWQ5NWJiZmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRJZChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUudG9kb3MucmVkdWNlKChtYXhJZCwgdG9kbykgPT4ge1xuXHRcdHJldHVybiBNYXRoLm1heCh0b2RvLmlkLCBtYXhJZClcblx0fSAtMSkgKyAxXG59XG5cbmxldCByZWR1Y2VyID0gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xuXHRcdGNhc2UgXCJBRERfVE9ET1wiOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdHRvZG9zOiBbe1xuXHRcdFx0XHRcdGlkOiBnZXRJZChzdGF0ZSksXG5cdFx0XHRcdFx0dGV4dDogYWN0aW9uLnRleHQsXG5cdFx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxuXG5cdFx0XHRcdH0sIC4uLnN0YXRlLnRvZG9zXVxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OiBcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVkdXgvcmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9