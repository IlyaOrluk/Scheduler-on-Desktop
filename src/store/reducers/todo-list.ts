import { 
  TodoActionTypes
   } from '../types'
import { 
  ITodoList,
  ITodo
 } from '../../interfaces'


const initialState: ITodoList = {
	todos: []
}

export interface todoListReducerActionType {
  type: any
  payload: ITodo
}

export default (state = initialState, action: todoListReducerActionType ): ITodoList  => {
	switch (action.type) {
		case TodoActionTypes.ADD_ITEM:
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
    case TodoActionTypes.COMPLETE_ITEM:
      return {
        todos: [...state.todos.filter(item => item.id < action.payload.id),{
          id: state.todos.filter(item => item.id === action.payload.id)[0].id,
          title: state.todos.filter(item => item.id === action.payload.id)[0].title,
          complete: action.payload.complete
        },...state.todos.filter(item => item.id > action.payload.id)]
      }
    case TodoActionTypes.DELETE_ITEM:
      return {
        todos: [...state.todos.filter(item => item.id !== action.payload.id)]
      }
		default:
			return state
	}
}


