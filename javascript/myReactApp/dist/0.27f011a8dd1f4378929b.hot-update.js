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
			default:
				return state;
		}
	};
	
	exports.default = reducer;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHV4L3JlZHVjZXIuanN4P2U5ZjUiXSwibmFtZXMiOlsiZ2V0SWQiLCJzdGF0ZSIsInRvZG9zIiwicmVkdWNlIiwibWF4SWQiLCJ0b2RvIiwiTWF0aCIsIm1heCIsImlkIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0IiwiY29tcGxldGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsVUFBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDMUMsVUFBT0MsS0FBS0MsR0FBTCxDQUFTRixLQUFLRyxFQUFkLEVBQWtCSixLQUFsQixDQUFQO0FBQ0EsR0FGTSxFQUVKLENBQUMsQ0FGRyxJQUVFLENBRlQ7QUFHQTs7QUFFRCxLQUFJSyxVQUFVLFNBQVZBLE9BQVUsQ0FBU1IsS0FBVCxFQUFnQlMsTUFBaEIsRUFBd0I7QUFDckMsVUFBT0EsT0FBT0MsSUFBZDtBQUNDLFFBQUssVUFBTDtBQUNDLFdBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixLQUFsQixFQUF5QjtBQUMvQkMsYUFBUTtBQUNQTSxVQUFJUixNQUFNQyxLQUFOLENBREc7QUFFUGEsWUFBTUosT0FBT0ksSUFGTjtBQUdQQyxpQkFBVzs7QUFISixNQUFSLDRCQUtNZCxNQUFNQyxLQUxaO0FBRCtCLEtBQXpCLENBQVA7QUFRRDtBQUNDLFdBQU9ELEtBQVA7QUFYRjtBQWFBLEVBZEQ7O21CQWdCZVEsTyIsImZpbGUiOiIwLjI3ZjAxMWE4ZGQxZjQzNzg5MjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRJZChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUudG9kb3MucmVkdWNlKChtYXhJZCwgdG9kbykgPT4ge1xuXHRcdHJldHVybiBNYXRoLm1heCh0b2RvLmlkLCBtYXhJZClcblx0fSwgLTEpICsgMVxufVxuXG5sZXQgcmVkdWNlciA9IGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcblx0c3dpdGNoKGFjdGlvbi50eXBlKXtcblx0XHRjYXNlIFwiQUREX1RPRE9cIjpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0b2RvczogW3tcblx0XHRcdFx0XHRpZDogZ2V0SWQoc3RhdGUpLFxuXHRcdFx0XHRcdHRleHQ6IGFjdGlvbi50ZXh0LFxuXHRcdFx0XHRcdGNvbXBsZXRlZDogZmFsc2VcblxuXHRcdFx0XHR9LCAuLi5zdGF0ZS50b2Rvc11cblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDogXG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlZHV4L3JlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==