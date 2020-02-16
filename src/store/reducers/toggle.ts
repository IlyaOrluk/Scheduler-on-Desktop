import { 
    TOGGLE_ON,
   } from '../types'

interface ToggleState {
	light: boolean
  }
const initialState: ToggleState = {
	light: false
}

export default (state = initialState, action: any): ToggleState  => {
	switch (action.type) {
		case TOGGLE_ON:
			return {
				light: action.payload
			}

		default:
			return state
	}
}


