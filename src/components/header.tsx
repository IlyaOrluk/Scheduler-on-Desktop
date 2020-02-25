import React from 'react'
import styled from 'styled-components'
import {SpanTime, SpanDate, Clock} from './time'
import ProgressBar from './progress-bar'

const Header: React.FC = () => {

  return (
      <Wrapper>

        <div className='navigation'>
        <h1 className='title'>Scheduler</h1>
          <SpanTime/>
          <SpanDate/>
          <ProgressBar todos={[]}/>
        </div>
      </Wrapper>
  );
}

export default Header

const Wrapper = styled.div`
  position: relative;
  background: url('https://miro.medium.com/max/4200/0*cGDKbUrA_8vJC4d3') no-repeat center / cover;
  height: 20vh;
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  color: white;

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
    @media screen and (max-width:800px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    .time, .date {
      margin: 15px;
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
