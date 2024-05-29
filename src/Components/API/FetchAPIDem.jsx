import React, { useState,useEffect } from 'react'

export default function FetchAPIDem() {

    const[card,setCard]=useState([]);

    const fetchData = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await a.json()

        // console.log(data)

        setCard(data)
    }

    useEffect(() => {
       
        fetchData();
    
    },[])
    

  return (
    <>
    <div className='flex flex-wrap'>

      {card.map((car)=>{

        return<div  key={car.id} className=" gap-7 border-solid border-2 border-indigo-600 m-4 p-5 rounded-3xl w-96">
        <h1 className='bg-slate-400 text-center font-bold  ' >{car.title}</h1>
        <p className='bg-green-700 text-center text-white' >{car.body}</p>
        <span className='font-serif'>By: userId: {car.userId}
        </span>
        </div>

      }
      )}

      
    </div>
    </>
  )
}
