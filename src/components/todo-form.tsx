import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    handleTodo,
    addTodoItem
} from '../store/actions'

interface TodoFormProps {
    handleTodo(title: string): void
    addTodoItem(title: string, complete: boolean): void
    title: string
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  return (
      <Wrapper>
        <form className="todo-form" onSubmit={e =>{
            e.preventDefault()
            props.addTodoItem(props.title, false)
            props.handleTodo('')
        }}>
            <input
                className='todo-form-input'
                type='text'
                placeholder='Add new Todo my boy...'
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
}

const mapState = (state: RootState) => ({
    title: state.todoForm.title
})
  
const mapDispatch = {
    handleTodo: (title: string) => handleTodo(title),
    addTodoItem: (title: string, complete: boolean) => addTodoItem(title, complete)
}

export default connect(
    mapState,
    mapDispatch
)(TodoForm)


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .todo-form {
        margin: 30px;

        &-input {
            border: 0;
            border-bottom: 2px solid #5f554f;
            font-size: 30px;
            color: #5f554f;
        }
        &-submit {
            border: 2px solid #5f554f;
            font-size: 30px;
            color: #5f554f;
            background: transparent;
        }
    }
`