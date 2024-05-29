import React,{useState} from 'react'

export default function Counter() {

    const [count, setCont] = useState(0);

    const increament = () => {
      setCont(count + 1);
    };
  
    const decrement = () => {
      setCont(count - 1);
    };
  
    const reset = () => {
      setCont(0);
    };

  return (
    <>
      <div className="flex  my-40 py-10 bg-cyan-950 text-white  align-middle justify-around mx-40 rounded-3xl">
        
        <h1 className="text-3xl my-10">{count}</h1>
        <div className="my-10 ">
        <button onClick={increament} className="hover:bg-white hover:text-cyan-950 rounded-2xl w-28">Increment</button>
        <br />
        <br />
        <button onClick={decrement} className="hover:bg-white hover:text-cyan-950 rounded-2xl w-28">Decrement</button>
        </div>
        <button onClick={reset} className="hover:bg-white hover:text-cyan-950 rounded-2xl w-28 h-10 my-14">Reset</button>
        
      </div>
    </>
  )
}
