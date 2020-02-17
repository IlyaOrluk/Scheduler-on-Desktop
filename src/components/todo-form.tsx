import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    toggleOn,
    handleTodo,
    addTodoItem
} from '../store/actions'

interface TodoFormProps {
    handleTodo(title: string): void
    toggleOn(toggle: boolean): void
    addTodoItem(title: string): void
    title: string
    light: boolean
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  return (
      <Wrapper>
        <form className="todo-form" onSubmit={e =>{
            e.preventDefault()
            props.addTodoItem(props.title)
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
        <button onClick={() => {props.toggleOn(!props.light)}}>PUSH ME</button>
      </Wrapper>
  )
}

interface RootState {
    toggle: any
    todoForm: any
  }

const mapState = (state: RootState) => ({
    light: state.toggle.light,
    title: state.todoForm.title
  })
  
const mapDispatch = {
    toggleOn: (light: boolean) => toggleOn(light),
    handleTodo: (title: string) => handleTodo(title),
    addTodoItem: (title: string) => addTodoItem(title)
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