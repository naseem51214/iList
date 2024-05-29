import React, { useState, useEffect }  from 'react'



export default function Example() {

  const incremnet = ()=>{
    
  }
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count*2} times`;
        
        console.log("clicked");
      },);
      
  return (
    <div>
      <div id='id'>Hi</div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <button onClick={()=>{document.getElementById('id').innerHTML='Hello'}}>press</button>
  </div>
  )
}
