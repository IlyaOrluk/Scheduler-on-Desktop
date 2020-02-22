import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    handleTodo,
    addTodoItem
} from '../store/actions'
import { ITodo, ITodoList } from '../interfaces'

interface TodoFormProps {
    handleTodo(title: string): void
    addTodoItem(id: number, title: string, complete: boolean): void
    title: string
    todos: ITodo[]

}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    console.log(...props.todos)
    console.log(props.todos.filter((item) => item.id === 4))
    console.log(Math.max.apply(null, [1,2,3,4,6,7,8,11,69]))
  return (
      <Wrapper>
        <form className="todo-form" onSubmit={e =>{
            e.preventDefault()
            props.addTodoItem(props.todos.length, props.title, false)
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
    handleTodo: (title: string) => handleTodo(title),
    addTodoItem: (id: number, title: string, complete: boolean) => addTodoItem(id, title, complete)
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
            border-bottom: 2px solid #5f554f54;
            padding: 5px;
            font-size: 30px;
            color: #5f554f;
            background: #fdfdfd94;
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