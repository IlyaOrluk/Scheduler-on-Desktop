import { 
  ADD_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  DELETE_TODO_ITEM,
   } from '../types'
import { 
  ITodoList
 } from '../../interfaces'


const initialState: ITodoList = {
	todos: []
}

export default (state = initialState, action: any): ITodoList  => {
	switch (action.type) {
		case ADD_TODO_ITEM:
			return {
        todos: [ 
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            complete: action.payload.complete 
          }
        ]
			}
    case COMPLETE_TODO_ITEM:
      return {
        todos: [...state.todos.slice(0,action.payload.id),{
          id: state.todos.filter(item => item.id === action.payload.id)[0].id,
          title: state.todos.filter(item => item.id === action.payload.id)[0].title,
          complete: action.payload.complete
        },...state.todos.slice(action.payload.id+1)]
      }
    case DELETE_TODO_ITEM:
      return {
        todos: [...state.todos.filter(item => item.id !== action.payload)]
      }
		default:
			return state
	}
}


