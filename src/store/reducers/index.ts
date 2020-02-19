import { combineReducers } from 'redux'

import todoForm from './todo-form'
import todoList from './todo-list'


export default combineReducers({
  todoForm,
  todoList,
})
