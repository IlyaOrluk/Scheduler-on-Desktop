import React from 'react'
import styled from 'styled-components'
import { ITodoList, ITodo } from '../interfaces'
import { connect } from 'react-redux'


interface PropsFromState {
    todos: ITodo[]
}

type AllProps = PropsFromState


const ProgressBar: React.SFC<AllProps> = ({ todos }) => {
    const completedTodosLength = todos.filter((item) => item.complete).length
    const todosPercent = Math.floor(100/todos.length)
    const progress: number = todos.length === 0 ? 0 : todosPercent * completedTodosLength
        return (
            <Wrapper progress={progress}>
                <div className='wrapper'>
                    <div className="progress"></div>
                </div>
                <span>{progress}%</span>
            </Wrapper>
        )
}

interface RootState {
    todoList: ITodoList
}


const mapState = ({ todoList }: RootState) => ({
    todos: todoList.todos
})
  
// const mapDispatch = {
//     null
// }

export default connect(
    mapState,
    null
)(ProgressBar)

type StyledPropsType = {
    progress: number
}
const Wrapper = styled.div`
display: flex;
align-items: center;
margin: 15px;

span {
    margin: 0 10px;
    color: #000000ba;
    font-size: 20px;
}
.wrapper {
    width: 100px;
    height: 10px;
    background: #ffffff00;
    padding: 0px;
    border-radius: 30px;
    border: 1px solid #000000ba; 
    box-shadow: 
      inset 0 1px 0 rgba(255,255,255,0.25),
      inset 0 0 5px rgba(0,0,0,0.3),
          0 2px 2px rgba(256,256,256,0.45),
      inset 0 10px 20px rgba(0,0,0,0.15);
    position: relative;


    .progress {
        width: ${(props: StyledPropsType) => props.progress}%;
        height: 100%;
        border-radius: 30px;
        background-color: hsla(131, 55%, 45%, 1);
        position: relative;
        box-shadow: 0 0 4px 0 rgb(0,255,20, .6), inset 0 2px 7px rgb(0,255,20, .8);
        cursor: pointer;
        margin: 0 0px;
        border-right: 1px solid #000000ba;
        transition: 1s;
      }
}


/*    width: 400px;
    border: 1px solid #000000ba;
    color: #000000ba;
    display: flex;
    margin: 15px;
    font-size: 25px;
    font-weight: 400; */

 .progress-bar {
     width: ${(props: StyledPropsType) => props.progress}%;
     color: black;
     background: #01ff018c;
     transition: 1s;
 }
`