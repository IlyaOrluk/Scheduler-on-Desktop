import { 
  ADD_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  DELETE_TODO_ITEM,
   } from '../types'
import { 
  TodoList
 } from '../../interfaces'


const initialState: TodoList = {
	todos: []
}

export default (state = initialState, action: any): TodoList  => {
	switch (action.type) {
		case ADD_TODO_ITEM:
			return {
        todos: [ ...state.todos, { title: action.payload.title, complete: action.payload.complete }]
			}
    case COMPLETE_TODO_ITEM:
      return {
        todos: [...state.todos.slice(0,action.payload.id),{
          title: state.todos[action.payload.id].title,
          complete: action.payload.complete
        },...state.todos.slice(action.payload.id+1)]
      }
    case DELETE_TODO_ITEM:
      return {
        todos: [...state.todos.slice(0,action.payload),...state.todos.slice(action.payload+1)]
      }
		default:
			return state
	}
}


