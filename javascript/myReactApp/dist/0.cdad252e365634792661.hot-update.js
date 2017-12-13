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
	
			case "COMPLETED_TODO":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHV4L3JlZHVjZXIuanN4P2U5ZjUiXSwibmFtZXMiOlsiZ2V0SWQiLCJzdGF0ZSIsInRvZG9zIiwicmVkdWNlIiwibWF4SWQiLCJ0b2RvIiwiTWF0aCIsIm1heCIsImlkIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0IiwiY29tcGxldGVkIiwibWFwIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsVUFBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDMUMsVUFBT0MsS0FBS0MsR0FBTCxDQUFTRixLQUFLRyxFQUFkLEVBQWtCSixLQUFsQixDQUFQO0FBQ0EsR0FGTSxFQUVKLENBQUMsQ0FGRyxJQUVFLENBRlQ7QUFHQTs7QUFFRCxLQUFJSyxVQUFVLFNBQVZBLE9BQVUsQ0FBU1IsS0FBVCxFQUFnQlMsTUFBaEIsRUFBd0I7QUFDckMsVUFBT0EsT0FBT0MsSUFBZDtBQUNDLFFBQUssVUFBTDtBQUNDLFdBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixLQUFsQixFQUF5QjtBQUMvQkMsYUFBUTtBQUNQTSxVQUFJUixNQUFNQyxLQUFOLENBREc7QUFFUGEsWUFBTUosT0FBT0ksSUFGTjtBQUdQQyxpQkFBVzs7QUFISixNQUFSLDRCQUtNZCxNQUFNQyxLQUxaO0FBRCtCLEtBQXpCLENBQVA7O0FBU0QsUUFBSyxnQkFBTDtBQUNDLFdBQU9VLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixLQUFsQixFQUF5QjtBQUMvQkMsWUFBT0QsTUFBTUMsS0FBTixDQUFZYyxHQUFaLENBQWdCLFVBQUNYLElBQUQsRUFBVTtBQUNoQyxhQUFPQSxLQUFLRyxFQUFMLEtBQVlFLE9BQU9GLEVBQW5CLEdBQ05JLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUixJQUFsQixFQUNDLEVBQUVVLFdBQVcsQ0FBQ1YsS0FBS1UsU0FBbkIsRUFERCxDQURNLEdBRTZCVixJQUZwQztBQUdDLE1BSks7QUFEd0IsS0FBekIsQ0FBUDs7QUFRRCxRQUFLLGFBQUw7QUFDQyxXQUFPTyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlosS0FBbEIsRUFBeUI7QUFDL0JDLFlBQU9ELE1BQU1DLEtBQU4sQ0FBWWUsTUFBWixDQUFtQixVQUFDWixJQUFELEVBQVU7QUFDbkMsYUFBT0EsS0FBS0csRUFBTCxLQUFZRSxPQUFPRixFQUExQjtBQUNBLE1BRk07QUFEd0IsS0FBekIsQ0FBUDs7QUFRRDtBQUNDLFdBQU9QLEtBQVA7QUE5QkY7QUFnQ0EsRUFqQ0Q7O21CQW1DZVEsTyIsImZpbGUiOiIwLmNkYWQyNTJlMzY1NjM0NzkyNjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRJZChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUudG9kb3MucmVkdWNlKChtYXhJZCwgdG9kbykgPT4ge1xuXHRcdHJldHVybiBNYXRoLm1heCh0b2RvLmlkLCBtYXhJZClcblx0fSwgLTEpICsgMVxufVxuXG5sZXQgcmVkdWNlciA9IGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoKGFjdGlvbi50eXBlKXtcblx0XHRjYXNlIFwiQUREX1RPRE9cIjpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0b2RvczogW3tcblx0XHRcdFx0XHRpZDogZ2V0SWQoc3RhdGUpLFxuXHRcdFx0XHRcdHRleHQ6IGFjdGlvbi50ZXh0LFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogZmFsc2VcblxuXHRcdFx0XHR9LCAuLi5zdGF0ZS50b2Rvc11cblx0XHRcdH0pXG5cblx0XHRjYXNlIFwiQ09NUExFVEVEX1RPRE9cIjpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0b2Rvczogc3RhdGUudG9kb3MubWFwKCh0b2RvKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRvZG8uaWQgPT09IGFjdGlvbi5pZCA/XG5cdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHt9LCB0b2RvLCBcblx0XHRcdFx0XHRcdFx0eyBjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZCB9KSA6IHRvZG9cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXG5cdFx0Y2FzZSBcIkRFTEVURV9UT0RPXCI6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0dG9kb3M6IHN0YXRlLnRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0b2RvLmlkICE9PSBhY3Rpb24uaWRcblx0XHRcdFx0fSlcblx0XHRcdH0pXHRcblxuXG5cblx0XHRkZWZhdWx0OiBcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVkdXgvcmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9