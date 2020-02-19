import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ITodo } from '../interfaces'

import { todoCompleteItem, todoDeleteItem } from '../store/actions'

interface TodoListProps {
    todos: ITodo[]
    todoCompleteItem(complete: boolean, id: number): void
    todoDeleteItem(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, todoCompleteItem, todoDeleteItem }) => {
    const todoCompleteClass = (complete: boolean) => complete ? 'complete' : ''
  return (
      <Wrapper>
          <ul className='todo-list'>
            {todos.map((item, id) => {
                return (
                    <li className='todo-list-item' key={id}>
                        <span>{id+1}.</span>
                        <span className={todoCompleteClass(item.complete)}>{item.title}</span>
                        <span className='delete' onClick={() => todoDeleteItem(id)}>DELETE</span>
                        <input type='checkbox' checked={item.complete} onChange={() => {
                            console.log(id)
                            todoCompleteItem(!item.complete,id)
                        }}/>
                    </li>
                )
            })}
          </ul>
      </Wrapper>
  )
}

interface ITodoList {
    todos: ITodo[]
}

interface RootState {
    todoList: ITodoList
}

const mapState = ({ todoList }: RootState) => ({
    todos: todoList.todos
})
  
const mapDispatch = {
    todoCompleteItem: (complete: boolean, id: number) => todoCompleteItem(complete, id),
    todoDeleteItem: (id: number) => todoDeleteItem(id)
}

export default connect(
    mapState,
    mapDispatch
)(TodoList)


const Wrapper = styled.div`
    width: 100%;

    .todo-list {
        display: flex;
        flex-direction: column;
        justifly-content: center;
        align-items: center;
        &-item {
            width: 100%;
            margin: 5px;
            border: 0;
            border-bottom: 2px solid #5f554f;
            font-size: 30px;
            color: #5f554f;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .delete {
                color: red;
                cursor: pointer;
            }
            .complete {
                text-decoration: line-through;
            }
            .complete:before {
                content: '';
                width: 100%;
                height: 3px;
            }
        }
    }
`