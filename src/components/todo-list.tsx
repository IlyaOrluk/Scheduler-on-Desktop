import React from 'react'
import styled from 'styled-components'
import { ITodo } from '../interfaces'

interface TodoListProps {
    todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

  return (
      <Wrapper>
          <ul className='todo-list'>
            {todos.map((item, id) => {
                return (
                    <li className='todo-list-item' key={id}>
                        <span>{id+1}.</span>
                        <span>{item.title}</span>
                        <input type='checkbox' checked={item.complete} onChange={() => {}}/>
                    </li>
                )
            })}
          </ul>
      </Wrapper>
  )
}

export default TodoList


const Wrapper = styled.div`
    width: 100%;

    .todo-list {
        display: flex;
        flex-direction: column;
        justifly-content: center;
        align-items: center;
        &-item {
            width: 100%;
            border: 0;
            border-bottom: 2px solid #5f554f;
            font-size: 30px;
            color: #5f554f;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;


        }
    }
`