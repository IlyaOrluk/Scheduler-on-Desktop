import {
  TOGGLE_ON,
  TITLE_HANDLER,
  ADD_TODO_ITEM,
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
  type: typeof TITLE_HANDLER,
  payload: string
}
export const handleTodo = (title: string): setHandleTodoActionType => ({
  type: TITLE_HANDLER,
  payload: title
})


type setAddTodoItemActionType = {
  type: typeof ADD_TODO_ITEM,
  payload: string
}
export const addTodoItem = (title: string): setAddTodoItemActionType => ({
  type: ADD_TODO_ITEM,
  payload: title
})


