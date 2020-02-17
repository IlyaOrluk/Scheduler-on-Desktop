import { 
    TITLE_HANDLER
   } from '../types'
import { ITodo } from '../../interfaces'

interface TodoList {
	todos: ITodo[]
  }
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
		case TITLE_HANDLER:
			return {
				todos: action.payload
			}

		default:
			return state
	}
}


