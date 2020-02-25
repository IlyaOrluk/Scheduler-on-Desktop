import {
  TodoActionTypes,
} from './types'

type setHandleTodoActionType = {
  type: typeof TodoActionTypes.HANDLER_TITLE,
  payload: string
}
export const handleTodo = (title: string): setHandleTodoActionType => ({
  type: TodoActionTypes.HANDLER_TITLE,
  payload: title
})


type setAddTodoItemActionPayloadType = {
  id: number
  title: string
  complete: boolean
}
type setAddTodoItemActionType = {
  type: typeof TodoActionTypes.ADD_ITEM,
  payload: setAddTodoItemActionPayloadType
}
export const addTodoItem = (id: number, title: string, complete: boolean): setAddTodoItemActionType => ({
  type: TodoActionTypes.ADD_ITEM,
  payload: { id, title, complete }
})


type setTodoCompleteActionPayloadType = {
  complete: boolean
  id: number
}
type setTodoCompleteActionType = {
  type: typeof TodoActionTypes.COMPLETE_ITEM,
  payload: setTodoCompleteActionPayloadType
}
export const todoCompleteItem = (complete: boolean, id: number): setTodoCompleteActionType => ({
  type: TodoActionTypes.COMPLETE_ITEM,
  payload: {complete, id}
})


type setTodoDeleteActionPayloadType = {
  id: number
}

type setTodoDeleteActionType = {
  type: typeof TodoActionTypes.DELETE_ITEM,
  payload: setTodoDeleteActionPayloadType
}
export const todoDeleteItem = (id: number): setTodoDeleteActionType => ({
  type: TodoActionTypes.DELETE_ITEM,
  payload: {id}
})
type setHandlerNewTodoTitleActionPayloadType = {
  title: string
}
type setHandlerNewTodoTitleActionType = {
  type: typeof TodoActionTypes.HANDLER_NEW_TITLE,
  payload: setHandlerNewTodoTitleActionPayloadType
}
export const handleNewTodoTitle = (title: string): setHandlerNewTodoTitleActionType => ({
  type: TodoActionTypes.HANDLER_NEW_TITLE,
  payload: {title}
})

type setChangeTodoTitleActionPayloadType = {
  id: number,
  title: string
}

type setChangeTodoTitleActionType = {
  type: typeof TodoActionTypes.CHANGE_TITLE,
  payload: setChangeTodoTitleActionPayloadType
}
export const changeTodoTitle = (id: number, title: string): setChangeTodoTitleActionType => ({
  type: TodoActionTypes.CHANGE_TITLE,
  payload: {id, title}
})

