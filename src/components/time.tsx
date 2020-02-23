import React, { useEffect, useState } from 'react'




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
    const [time, setTime] = useState<any>(new Date())
    useEffect(() => {
        setInterval(()=> {
            setTime(new Date())
        }, 10000)
    }, [])
    if(time){
        return (
            <React.Fragment>
                <span className='date'>
                    {time.getDate()}.
                    {time.getMonth()+1}.
                    {time.getFullYear()}
                </span>
            </React.Fragment>
  
        )
    } else {
        return <span>{'ERR1!'}</span>
    }  
  }