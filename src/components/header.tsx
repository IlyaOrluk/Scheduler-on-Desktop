import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {

  return (
      <Wrapper>
        <img src={'https://www.pngkey.com/png/full/897-8975525_adventure-time-jake-the-dog-dancing-jake-the.png'} className="App-logo" alt="logo" />
        <h1 className='App-title'>Magic Scheduler</h1>
      </Wrapper>
  );
}

export default Header

const Wrapper = styled.div`
  background-color: #f9d9b5;
  height: 10vh;
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

.App-logo {
  height: 7vh;
  width: auto;
  pointer-events: none;
  margin: 30px;
}

.App-title {
  color: #8e7667;
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
