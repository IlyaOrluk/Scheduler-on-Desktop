import { 
    TITLE_HANDLER
   } from '../types'

interface TodoForm {
	title: string
  }
const initialState: TodoForm = {
	title: ''
}

export default (state = initialState, action: any): TodoForm  => {
	switch (action.type) {
		case TITLE_HANDLER:
			return {
				title: action.payload
			}

		default:
			return state
	}
}


