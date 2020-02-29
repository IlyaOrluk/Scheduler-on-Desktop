import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { GlobalStyle } from './styles/global-styles'
import Header from './components/header'
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import {IndexPage} from './pages/index-page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from './components/layout/Container'

const Main: React.FunctionComponent = () => {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Wrapper>
            <Header/>
            <Switch>
              <Container>
                <Route component={TodoList} path='/all' exact/>
                <Route component={TodoForm} path='/new' exact/>
                <Route component={IndexPage} path='/' exact/>
              </Container>
            </Switch>
        </Wrapper>
      </ThemeProvider>
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
