import { 
  TodoActionTypes
   } from '../types'
import { 
  ITodoList,
  ITodo
 } from '../../interfaces'


const initialState: ITodoList = {
  todos: [],
  newTodoTitle: ''
}

export interface todoListReducerActionType {
  type: any
  payload: ITodo
}

export default (state = initialState, action: todoListReducerActionType ): ITodoList  => {
	switch (action.type) {
		case TodoActionTypes.ADD_ITEM:
			return {
        ...state,
        todos: [ 
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            complete: action.payload.complete 
          }
        ]
			}
    case TodoActionTypes.COMPLETE_ITEM:
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id < action.payload.id),{
          id: state.todos.filter(item => item.id === action.payload.id)[0].id,
          title: state.todos.filter(item => item.id === action.payload.id)[0].title,
          complete: action.payload.complete
        },...state.todos.filter(item => item.id > action.payload.id)]
      }
    case TodoActionTypes.DELETE_ITEM:
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload.id)]
      }
    case TodoActionTypes.CHANGE_TITLE:
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id < action.payload.id),{
          id: state.todos.filter(item => item.id === action.payload.id)[0].id,
          title: action.payload.title,
          complete: state.todos.filter(item => item.id === action.payload.id)[0].complete
        },...state.todos.filter(item => item.id > action.payload.id)],
        newTodoTitle: ''
      }
    case TodoActionTypes.HANDLER_NEW_TITLE:
      return {
        ...state,
        newTodoTitle: action.payload.title
      }
		default:
			return state
	}
}


