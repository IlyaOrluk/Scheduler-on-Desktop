import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ITodo, ITodoList } from '../interfaces'

import {
    addTodoItem,
    todoCompleteItem,
    todoDeleteItem
} from '../store/actions'

interface PropsFromState {
    todos: ITodo[]
}

interface PropsFromDispatch {
    todoCompleteItem: typeof todoCompleteItem
    todoDeleteItem: typeof todoDeleteItem
    addTodoItem: typeof addTodoItem
}

type AllProps = PropsFromState & PropsFromDispatch

const TodoList: React.FC<AllProps> = ({ todos, todoCompleteItem, todoDeleteItem, addTodoItem }) => {
    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
            localTodos.map(item => {
                addTodoItem(item.id, item.title, item.complete)
            })
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        // console.log(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo)
    }, [todos])

    const todoCompleteClass = (complete: boolean) => complete ? 'complete' : ''
    let todosComplete = todos.filter((item) => (item.complete))
    let todosInbox = todos.filter((item) => (!item.complete))
    const rootRender = () => {
        const todoListRender = (array: ITodo[]) => {
            return (
                array.map((item, id) => {
                    return (
                        <li className='todo-list-item' key={id}>
                            <span>#{item.id+1}</span>
                            <span className={`title ${todoCompleteClass(item.complete)}`}>{item.title}</span>
                            <div>
                                {item.complete ? <i onClick={() => {
                                    todoCompleteItem(!item.complete,item.id)
                                }} className="far fa-check-circle green"></i> : <i onClick={() => {
                                    todoCompleteItem(!item.complete,item.id)
                                }} className="far fa-circle"></i>}
                                <span className='delete' onClick={() => todoDeleteItem(item.id)}><i className="far fa-times-circle"></i></span>
                            </div>
                        </li>
                    )
                })
            )
        }
        return (
            <ul className='todo-list'>
            <h2>ALL - {todos.length}</h2>
            {todoListRender(todos)}
            <h2>INBOX - {todosInbox.length}</h2>
            {todoListRender(todosInbox)}
            <h2>COMPLETE - {todosComplete.length}</h2>
            {todoListRender(todosComplete)}
          </ul>
        )
    }
  return (
      <Wrapper>
          {rootRender()}
      </Wrapper>
  )
}


interface RootState {
    todoList: ITodoList
}

const mapState = ({ todoList }: RootState) => ({
    todos: todoList.todos
})
  
const mapDispatch = {
    addTodoItem,
    todoCompleteItem,
    todoDeleteItem
}

export default connect(
    mapState,
    mapDispatch
)(TodoList)


const Wrapper = styled.div`
    background: #fdfdfd94;
    height: 60vh;
    width: 70vw;
    max-width: 800px;
    padding: 20px 20px 20px 30px;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: baseline;
    .green {
        color: green;
    }
    .todo-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-inline-start: 0;
        &-item {
            width: 100%;
            margin: 5px;
            border: 0;
            border-bottom: 2px solid #5f554f54;
            font-size: 25px;
            color: #5f554f;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                width: 80%;
            }
            .delete {
                color: red;
                cursor: pointer;
            }
            .fa-check-circle, .fa-circle {
                cursor: pointer;
                margin: 6px;
            }
            .complete {
                text-decoration: line-through;
                color: #00000052;
            }   
        }
    }
`