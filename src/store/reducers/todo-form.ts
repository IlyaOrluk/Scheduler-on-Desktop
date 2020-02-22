import { 
    TodoActionTypes
   } from '../types'

interface TodoForm {
	title: string
  }
const initialState: TodoForm = {
	title: ''
}

interface todoFormReducerActionType {
	type: any
	payload: string
}

export default (state = initialState, action: todoFormReducerActionType): TodoForm  => {
	switch (action.type) {
		case TodoActionTypes.HANDLER_TITLE:
			return {
				title: action.payload
			}

		default:
			return state
	}
}


