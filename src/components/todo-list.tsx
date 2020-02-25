import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ITodo, ITodoList } from '../interfaces'

import {
    addTodoItem,
    todoCompleteItem,
    todoDeleteItem
} from '../store/actions'


type todoItemProps = {
    item: ITodo
    todoCompleteItem: typeof todoCompleteItem
    todoDeleteItem: typeof todoDeleteItem
}

const TodoListItem: React.FC<todoItemProps> = ({ item, todoCompleteItem, todoDeleteItem }) => {
    const [checkTodoChange, setCheckTodoChange] = useState(false) // The state of a todo change

    const todoCompleteClass = (complete: boolean) => complete ? 'complete' : '' // added class complete if todo copmlete === true 
    const changeTodoForm = <input className='change-todo' type='text' placeholder='type new title...' value={item.title} onBlur={()=>setCheckTodoChange(false)}/>
    const todoTitle = checkTodoChange ? changeTodoForm : <span className={`title ${todoCompleteClass(item.complete)}`}>{item.title}</span>

    useEffect(() => {
        if(checkTodoChange){
            (document.querySelector('.change-todo') as any).focus()
        }
    }, [checkTodoChange])

    return (
        <TodoItemWrapper key={item.id}>
                {todoTitle}
                <div>
                    <span style={{color: checkTodoChange ? 'orange' : ''}} onClick={async () => {
                    setCheckTodoChange(!checkTodoChange)
                    }
    
                        }><i className="fas fa-pencil-alt"></i></span>
                    {item.complete ? <i onClick={() => {
                        todoCompleteItem(!item.complete,item.id)
                    }} className="far fa-check-circle green"></i> : <i onClick={() => {
                        todoCompleteItem(!item.complete,item.id)
                    }} className="far fa-circle"></i>}
                    <span className='delete' onClick={() => todoDeleteItem(item.id)}><i className="far fa-times-circle"></i></span>
                    
                </div>
        </TodoItemWrapper>
    )
}

const TodoItemWrapper = styled.li`
        width: 100%;
        height: 70px;
        margin: 5px;
        padding: 15px;
        border: 2px solid #5f554f0d;
        font-size: 27px;
        font-weight: 600;
        color: #000000ba;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 7px 18px -10px rgba(0,0,0,0.7);
        .title {
            width: 80%;
        }
        .change-todo {
            width: 80%;
            border: 0;
            font-size: 27px;
            font-weight: 600;
            color: #000000ba;
            margin: 0;
        }
        .green {
            color: #1ed21e;
        }
        .delete {
            color: #ff00009c;
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
`

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

    
    let todosComplete = todos.filter((item) => item.complete)
    let todosInbox = todos.filter((item) => !item.complete)

    const rootRender = () => {
        const todoListRender = (array: ITodo[]) => {
            return (
                array.map((item) => {
                    return (
                        <TodoListItem
                            item={item}
                            todoCompleteItem={todoCompleteItem}
                            todoDeleteItem={todoDeleteItem}
                        />
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
    height: 67.5vh;
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: baseline;

    .todo-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75%;
        padding-inline-start: 0;
    }
`


