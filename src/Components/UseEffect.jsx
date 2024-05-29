import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [width,setWidth]=useState(window.screen.width);

    const actualWidth = ()=>{
        setWidth(window.innerWidth);
    }

    // window.addEventListener('resize',actualWidth);
    // window.removeEventListener('resize',actualWidth);

    useEffect(() => {
      
        window.addEventListener('resize',actualWidth);
    
      return () => {
        window.removeEventListener('resize',actualWidth);
      }
    }, [])
    

  return (
    <div>
      <p>sceen width is {width}</p>
    </div>
  )
}
