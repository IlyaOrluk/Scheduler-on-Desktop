import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



export const SpanTime: React.SFC = () => {
    const [time, setTime] = useState<any>(new Date())
    useEffect(() => {
        setInterval(()=> {
            setTime(new Date())
        }, 1000)
    }, [])
    if(time){
        return (
            <React.Fragment>
                <span className='time'>
                    {Boolean(time.getHours() < 10) ? '0'+time.getHours() : time.getHours()}:
                    {Boolean(time.getMinutes() < 10) ? '0'+time.getMinutes() : time.getMinutes()}:
                    {Boolean(time.getSeconds() < 10) ? '0'+time.getSeconds() : time.getSeconds()}
                </span>
            </React.Fragment>
  
        )
    } else {
        return <span>{'ERR1!'}</span>
    }  
  }

  export const SpanDate: React.SFC = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setInterval(()=> {
            setTime(new Date())
        }, 10000)
    }, [])

    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December']
    if(time){
        return (
            <React.Fragment>
                <span className='date'>
                    {time.getDate()} - 
                    {months[time.getMonth()]} -
                    {time.getFullYear()}
                </span>
            </React.Fragment>
  
        )
    } else {
        return <span>{'ERR1!'}</span>
    }  
  }

  export const Clock: React.SFC = () => {
    const [time, setTime] = useState<any>(new Date())
    useEffect(() => {
        setInterval(()=> {
            setTime(new Date())
        }, 1000)
    }, [])
    if(time){
        return (
            <ClockBody>
                  <article className="clock">
                    <div className="hours-container">
                        <div className="hours"></div>
                    </div>
                    <div className="minutes-container">
                        <div className="minutes"></div>
                    </div>
                    <div className="seconds-container">
                        <div className="seconds"></div>
                    </div>
                </article>
            </ClockBody>
  
        )
    } else {
        return <span>{'ERR1!'}</span>
    }  
  }

const ClockBody = styled.div`
.clock {
    border-radius: 50%;
    background: #fff url('https://cssanimation.rocks/images/posts/clocks/ios_clock.svg') no-repeat center;
    background-size: 88%;
    height: 100px;
    padding-bottom: 31%;
    position: relative;
    width: 100px;
  }
  
  .clock.simple:after {
    background: #000;
    border-radius: 50%;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 5%;
    height: 5%;
    z-index: 10;
  }
  .minutes-container, .hours-container, .seconds-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .hours {
    background: #000;
    height: 20%;
    left: 48.75%;
    position: absolute;
    top: 30%;
    transform-origin: 50% 100%;
    width: 2.5%;
  }

  .minutes {
    background: #000;
    height: 40%;
    left: 49%;
    position: absolute;
    top: 10%;
    transform-origin: 50% 100%;
    width: 2%;
  }

  .seconds {
    background: #000;
    height: 45%;
    left: 49.5%;
    position: absolute;
    top: 14%;
    transform-origin: 50% 80%;
    width: 1%;
    z-index: 8;
  }
`