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


const TodoForm: React.FC<AllProps> = (props) => {
    const todoMaxId = () => {
        let idArray: number[] = []
        for (var id in props.todos) idArray = [...idArray, props.todos[id].id]

        return Math.max.apply(null, idArray)
    }
    const todoId = () => props.todos.length < 1 ? 0 : todoMaxId() + 1
  return (
      <Wrapper>
        <form className="todo-form" onSubmit={e => {
            e.preventDefault()
            props.addTodoItem(todoId(), props.title, false)
            props.handleTodo('')
        }}>
            <input
                className='todo-form-input'
                type='text'
                placeholder='Type new Todo my boy...'
                value={props.title}
                onChange={e => props.handleTodo((e.target as HTMLInputElement).value)}
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
    width: 70vw;
    max-width: 800px;
    height: 70px;
    padding: 20px 20px 20px 30px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #cacaca70;
    border-bottom: 0;
    background-color: #dae2ef;
    box-shadow: 0px 8px 7px -6px rgba(0,0,0,0.5);

    .todo-form {
        margin: 30px;

        &-input {
            border: 0;
        /*    border: 2px solid #5f554f54; */
            padding: 5px;
            font-size: 30px;
            color: #5f554f;
            background: #f9f3ee;
        }
        &-submit {
            border: 2px solid #5f554f;
            margin: 1px;
            padding: 5px;
            font-size: 30px;
            color: #5f554f;
            background: transparent;
        }
    }
`