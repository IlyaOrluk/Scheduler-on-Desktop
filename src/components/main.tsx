import React from 'react'
import styled from 'styled-components'
import Header from './header'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import {IndexPage} from '../pages/index-page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Main: React.FunctionComponent = () => {
  
  return (
    <BrowserRouter>
        <Wrapper>
      <Header/>
      <Switch>
        <Route component={TodoList} path='/all' exact/>
        <Route component={TodoForm} path='/todo-form' exact/>
        <Route component={IndexPage} path='/' exact/>
      </Switch>
    </Wrapper>
    </BrowserRouter>


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
