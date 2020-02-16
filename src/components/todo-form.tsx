import React, { useState } from 'react'
import styled from 'styled-components'
import { connect, ConnectedProps  } from 'react-redux'
import {
    toggleOn
} from '../store/actions'

interface TodoFormProps {
    todoHandler(title: string): void
    toggleOn(toggle: boolean): void
    light: boolean
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')
    const lightColor: string = props.light? 'yellow': 'transparent'
  return (
      <Wrapper color={lightColor}>
        <form className="todo-form" onSubmit={e =>{
            e.preventDefault()
            props.todoHandler(title)
            setTitle('')
        }}>
            <input
                className='todo-form-input'
                type='text'
                placeholder='Add new Todo my boy...'
                value={title}
                onChange={e => setTitle((e.target as HTMLInputElement).value)}
                />
            <input className='todo-form-submit' type='submit' value='Add'/>
        </form>
        <button onClick={() => {
            props.toggleOn(!props.light)
            console.log(props.light)
            }}>PUSH ME</button>
      </Wrapper>
  )
}

interface RootState {
    toggle: any
  }

const mapState = (state: RootState) => ({
    light: state.toggle.light
  })
  
const mapDispatch = {
    toggleOn: (light: boolean) => toggleOn(light)
}

export default connect(
    mapState,
    mapDispatch
)(TodoForm)


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${props => props.color};
    .todo-form {
        margin: 30px;

        &-input {
            border: 0;
            border-bottom: 2px solid #5f554f;
            font-size: 30px;
            color: #5f554f;
        }
        &-submit {
            border: 2px solid #5f554f;
            font-size: 30px;
            color: #5f554f;
            background: transparent;
        }
    }
`