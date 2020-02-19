import {
  ADD_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  DELETE_TODO_ITEM,
  HANDLER_TODO_TITLE,
} from './types'





type setHandleTodoActionType = {
  type: typeof HANDLER_TODO_TITLE,
  payload: string
}
export const handleTodo = (title: string): setHandleTodoActionType => ({
  type: HANDLER_TODO_TITLE,
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

type setTodoCompleteActionPayloadType = {
  complete: boolean
  id: number
}
type setTodoCompleteActionType = {
  type: typeof COMPLETE_TODO_ITEM,
  payload: setTodoCompleteActionPayloadType
}
export const todoCompleteItem = (complete: boolean, id: number): setTodoCompleteActionType => ({
  type: COMPLETE_TODO_ITEM,
  payload: {complete, id}
})

type setTodoDeleteActionType = {
  type: typeof DELETE_TODO_ITEM,
  payload: number
}
export const todoDeleteItem = (id: number): setTodoDeleteActionType => ({
  type: DELETE_TODO_ITEM,
  payload: id
})

