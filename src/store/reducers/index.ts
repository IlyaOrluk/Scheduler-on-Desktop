import { combineReducers } from 'redux'

import toggle from './toggle'
import todoForm from './todo-form'
import todoList from './todo-list'


export default combineReducers({
  toggle,
  todoForm,
  todoList,

})
