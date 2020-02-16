import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './header'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import { ITodo } from '../interfaces'

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      title: 'Learn TypeScript!',
      complete: false
    },
    {
      title: 'Learn English!',
      complete: false
    },
    {
      title: 'Dont be afraid',
      complete: false
    },
  ])

  const todoHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      complete: false
    }

    setTodos(prev => [ ...prev, newTodo])
  }

  return (
    <Wrapper>
      <Header/>
      <div className='container'>
        <TodoForm todoHandler={todoHandler}/>
        <TodoList todos={todos}/>
      </div>
    </Wrapper>

  )
}

export default App


const Wrapper = styled.div`
  .container {
    margin: 0 auto;
    max-width: 75%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    jastify-content: center;
    align-items: center;
  }
`
