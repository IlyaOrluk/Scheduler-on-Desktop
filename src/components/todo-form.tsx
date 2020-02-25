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
                placeholder='Type new Todo my boy...'
                value={title}
                onChange={e => handleTodo((e.target as HTMLInputElement).value)}
                />
            <input className='todo-form-submit' type='submit' value='Add'/>
        </form>
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
    width: 100%;
    height: 9vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a5e9ef;
    border: 2px solid white;
    border-left: 0;
    border-right: 0;
    box-shadow: 0px 12px 18px -6px rgba(0,0,0,0.5);
    
    .todo-form {
        margin: 30px;
        border: 3px solid #dadada;
        border-radius: 6px;
        background: white;
        &-input {
            border: 0;
            padding: 6px;
            margin: 0;
            font-size: 30px;
            color: #5f554f;
            background: transparent;
        }
        &-submit {
            border: 2px solid #dadada;
            margin: 0;
            padding: 5px;
            font-size: 30px;
            color: #000000ba;
            background: #dadada;
        }
    }
`