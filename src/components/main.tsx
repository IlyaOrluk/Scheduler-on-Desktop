import React from 'react'
import styled from 'styled-components'
import Header from './header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

const Main: React.FunctionComponent = () => {
  
  return (
    <Wrapper>
      <Header/>
        <TodoForm />
        <TodoList />
    </Wrapper>

  )
}

export default Main


const Wrapper = styled.div`
  width: 100%;
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
