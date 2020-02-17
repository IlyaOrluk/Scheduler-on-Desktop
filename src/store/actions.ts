import {
  TOGGLE_ON,
  TITLE_HANDLER,
} from './types'


type setToggleOnActionType = {
  type: typeof TOGGLE_ON,
  payload: boolean
}
export const toggleOn = (light: boolean): setToggleOnActionType => ({
        type: TOGGLE_ON,
        payload: light
})


type setHandleTodoActionType = {
  type: typeof TOGGLE_ON,
  payload: string
}
export const handleTodo = (title: string): setHandleTodoActionType => ({
  type: TITLE_HANDLER,
  payload: title
})



