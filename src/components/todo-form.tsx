import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    handleTodo,
    addTodoItem
} from '../store/actions'
import { ITodo, ITodoList } from '../interfaces'

interface PropsFromState {
    title: string
    todos: ITodo[]
}

interface PropsFromDispatch {
    handleTodo: typeof handleTodo
    addTodoItem: typeof addTodoItem
}

type AllProps = PropsFromState & PropsFromDispatch


const TodoForm: React.FC<AllProps> = ({ todos, title, handleTodo, addTodoItem }) => {
    const todoMaxId = () => {
        let idArray: number[] = []
        for (var id in todos) idArray = [...idArray, todos[id].id]

        return Math.max.apply(null, idArray)
    }
    const todoId = () => todos.length < 1 ? 0 : todoMaxId() + 1
  return (
      <Wrapper>
        <form className="todo-form" onSubmit={e => {
            e.preventDefault()
            addTodoItem(todoId(), title, false)
            handleTodo('')
        }}>
            <input
                className='todo-form-input'
                type='text'
                placeholder='Type new Todo...'
                value={title}
                onChange={e => handleTodo((e.target as HTMLInputElement).value)}
                />
            <input className='todo-form-submit' type='submit' value='Add'/>
        </form>
        <div style={{color: 'black', width: '10%'}}>
            <i className="fas fa-running"> - go to</i>
            <i className="fas fa-quidditch"> - sport</i>
            <i className="fas fa-code"> - code</i>
            <i className="fas fa-briefcase"> - work</i>
            <i className="fas fa-globe"> - network</i>
            <i className="fas fa-book-reader"> - learn</i>
            <i className="fas fa-book"> - read</i>
            <i className="fas fa-drumstick-bite"> - cooking</i>
            <i className="far fa-handshake"> - meeting</i>
          </div>
      </Wrapper>
  )
}
interface ITodoForm {
    title: string
}

interface RootState {
    todoForm: ITodoForm
    todoList: ITodoList
}

const mapState = (state: RootState) => ({
    title: state.todoForm.title,
    todos: state.todoList.todos
})
  
const mapDispatch = {
    handleTodo,
    addTodoItem 
}

export default connect(
    mapState,
    mapDispatch
)(TodoForm)


const Wrapper = styled.div`

    .todo-form {
        margin: 30px;
        border: 3px solid #dadada;
        border-radius: 6px;
        background: white;
        display: flex;
        justify-content: space-between;
        height: 40px;
        width: 400px;
        &-input {
            width: 100%;
            padding: 5px;
            border: 0;
            font-size: 20px;
            color: #5f554f;
            background: transparent;
        }
        &-submit {
            border: 2px solid #dadada;
            font-size: 20px;
            color: #000000ba;
            background: #dadada;
        }
    }
`