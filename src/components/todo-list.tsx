import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ITodo, ITodoList } from '../interfaces'

import {
    addTodoItem,
    todoCompleteItem,
    todoDeleteItem,
    changeTodoTitle,
    handleNewTodoTitle
} from '../store/actions'


type todoItemProps = {
    item: ITodo
    newTodoTitle: string
    todoCompleteItem: typeof todoCompleteItem
    todoDeleteItem: typeof todoDeleteItem
    changeTodoTitle: typeof changeTodoTitle
    handleNewTodoTitle: typeof handleNewTodoTitle
}

const TodoListItem: React.FC<todoItemProps> = ({ item, todoCompleteItem, todoDeleteItem, changeTodoTitle, newTodoTitle, handleNewTodoTitle }) => {
    // The state of a todo change
    const [checkTodoChange, setCheckTodoChange] = useState(false) 
    // added class complete if todo copmlete === true 
    const todoCompleteClass = (complete: boolean) => complete ? 'complete' : '' 
    // if you click on each element, except for the current change todo ,then the form change title is deleted
    const changeTodoForm = () => {
        return (
            <div 
                className='change-todo-form'
                onBlur={(e)=>{
                    if(e.relatedTarget !== document.querySelector('.change-todo-submit')) {
                        setCheckTodoChange(false)
                        handleNewTodoTitle('')
                    }
                }}>
                <input className='change-todo' type='text' placeholder='Type new title...' value={newTodoTitle} onChange={(e) => {
                    handleNewTodoTitle(e.target.value)}}/>
                <button className='change-todo-submit' onClick={e => {
                    changeTodoTitle(item.id, newTodoTitle)
                    setCheckTodoChange(false)
                    handleNewTodoTitle('')
                   }}><i className="fas fa-check"></i></button>
            </div>
        )
    } 

    const todoTitle = checkTodoChange ? changeTodoForm() : <span className={`title ${todoCompleteClass(item.complete)}`}>{item.title}</span>
        const todoCheckComplete = item.complete ? <i onClick={() => {
            todoCompleteItem(!item.complete,item.id)
        }} className="far fa-check-circle green"></i> : <i onClick={() => {
            todoCompleteItem(!item.complete,item.id)
        }} className="far fa-circle"></i>
    useEffect(() => {
        if(checkTodoChange){
            // TODO: refactoring to ref
            (document.querySelector('.change-todo') as any).focus()
        }
    }, [checkTodoChange])

    return (
        <TodoItemWrapper key={item.id}>
                <span className='todo-type'><i className="fas fa-code"></i></span>
                {todoTitle}
                <span className='todo-date'>13 February</span>
                <div className='todo-control'>
                    <span style={{color: checkTodoChange ? 'orange' : ''}} onClick={() => {
                    handleNewTodoTitle(item.title)
                    setCheckTodoChange(true)
                    }}><i className="fas fa-pencil-alt"></i></span>
                    {todoCheckComplete}
                    <span className='delete' onClick={() => todoDeleteItem(item.id)}><i className="far fa-times-circle"></i></span> 
                </div>
        </TodoItemWrapper>
    )
}

const TodoItemWrapper = styled.li`
        position: relative;
        width: 100%;
        height: 90px;
        margin: 5px;
        padding: 15px;
        border: 2px solid #5f554f0d;
        font-size: 24px;
        font-weight: 600;
        color: #000000ba;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 7px 18px -10px rgba(0,0,0,0.7);

        .todo-date {
            position: absolute;
            font-size: 13px;
            font-weight: 400;
            bottom: 10%;
            right: 17%;
        }
        .todo-control:before {
            content: "";
            border-left: 1px solid #8c8b8c69;
            margin: 0 20px;
        }
        .todo-type {
            font-size: 33px;
            margin: 10px 20px;
        }
        .todo-type:after {
            content: "";
            border-right: 1px solid #8c8b8c69;
            margin: 0 20px;
        }
        .title {
            width: 70%;
        }
        .change-todo {
            width: 80%;
            border: 0;
            font-size: 27px;
            font-weight: 600;
            color: #000000ba;
            margin: 0;
            padding: 10px;
        }
        .change-todo-form {
            display: flex;
            margin: 5px;
        }
        .change-todo-submit {
            height: 100%;
            margin: 10px;
            font-size: 40px;
            cursor: pointer;
            color: #000000ba;
            background: transparent;
            border: 0;
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
    newTodoTitle: string
}

interface PropsFromDispatch {
    todoCompleteItem: typeof todoCompleteItem
    todoDeleteItem: typeof todoDeleteItem
    addTodoItem: typeof addTodoItem
    changeTodoTitle: typeof changeTodoTitle
    handleNewTodoTitle: typeof handleNewTodoTitle
}

type AllProps = PropsFromState & PropsFromDispatch



const TodoList: React.FC<AllProps> = ({ todos, todoCompleteItem, todoDeleteItem, addTodoItem, changeTodoTitle, newTodoTitle, handleNewTodoTitle }) => {
    
    useEffect(() => {
        const localTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')
        console.log(todos !== localTodos)
            localTodos.map(item => {
                addTodoItem(item.id, item.title, item.complete)
            })

    }, [])

    useEffect(() => {
        const localTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
            localStorage.setItem('todos', JSON.stringify(todos))

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
                            changeTodoTitle={changeTodoTitle}
                            newTodoTitle={newTodoTitle}
                            handleNewTodoTitle={handleNewTodoTitle}
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
    newTodoTitle: string
}

const mapState = ({ todoList }: RootState) => ({
    todos: todoList.todos,
    newTodoTitle: todoList.newTodoTitle
})
  
const mapDispatch = {
    addTodoItem,
    todoCompleteItem,
    todoDeleteItem,
    changeTodoTitle,
    handleNewTodoTitle
}

export default connect(
    mapState,
    mapDispatch
)(TodoList)


const Wrapper = styled.div`
    background: #fdfdfdc2;
    height: 64.1vh;
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
        max-width: 900px;
        padding-inline-start: 0;
    }
`


