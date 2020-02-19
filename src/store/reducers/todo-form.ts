import { 
    HANDLER_TODO_TITLE
   } from '../types'

interface TodoForm {
	title: string
  }
const initialState: TodoForm = {
	title: ''
}

export default (state = initialState, action: any): TodoForm  => {
	switch (action.type) {
		case HANDLER_TODO_TITLE:
			return {
				title: action.payload
			}

		default:
			return state
	}
}


