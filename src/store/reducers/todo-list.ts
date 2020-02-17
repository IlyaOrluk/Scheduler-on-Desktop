import { 
  ADD_TODO_ITEM
   } from '../types'
import { 
  TodoList
 } from '../../interfaces'


const initialState: TodoList = {
	todos: [
        {
          title: 'Learn TypeScript!',
          complete: false
        },
        {
          title: 'Learn English!',
          complete: false
        },
        {
          title: 'Dont be afraid',
          complete: false
        },
      ]
}

export default (state = initialState, action: any): TodoList  => {
	switch (action.type) {
		case ADD_TODO_ITEM:
			return {
        todos: [ ...state.todos, { title: action.payload, complete: false }]
			}

		default:
			return state
	}
}


