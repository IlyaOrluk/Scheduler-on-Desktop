import React from 'react'
import styled from 'styled-components'
import {SpanTime, SpanDate, Clock} from './time'
import ProgressBar from './progress-bar'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

  return (
      <Wrapper>
        <div className='navigation'>
        <h1 className='title'>Scheduler</h1>
          <SpanTime/>
          <SpanDate/>
          <ProgressBar todos={[]}/>
        </div>
        <div className='panel'>
          <Link to='/'>INFO</Link>
          <Link to='/all'>ALL</Link>
          <Link to='/todo-form'>+</Link>
        </div>
      </Wrapper>
  );
}

export default Header

const Wrapper = styled.div`
  position: relative;
  background: url('https://miro.medium.com/max/4200/0*cGDKbUrA_8vJC4d3') no-repeat center / cover;
  height: 23vh;
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  color: white;

  .panel {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4.6vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444540;
    border: 4px solid #3e3e3e;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    box-shadow: 0px 12px 18px -6px rgba(0,0,0,0.5);
    a {
      margin: 10px;
      text-decoration: none;
      cursor: pointer;
      color: grey;
    }
  }

  .navigation {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    background: #ffffff80;
    z-index: 1;
    @media screen and (max-width:800px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    .time, .date {
      margin: 10px;
      color: #000000ba;
      font-size: 20px;
      font-weight: 600;
      @media screen and (max-width:800px) {
        margin: 7px;
    }
    }
    .title {
      position: absolute;
      top: 5%;
      margin: 0 auto;
      color: #000000ba;
      font-size: 5vw;
    }


  }




@media (prefers-reduced-motion: no-preference) {
  .App-logo {

  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg) scale(1,1);
  }
  to {
    transform: rotate(360deg) scale(.8,.8);
  }
}

`
