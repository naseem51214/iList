import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex justify-around bg-slate-700 text-white py-2'>

      <div className='logo'>
        <span className='font-bold text-xl mx-8'>iList</span>
      </div>

      <ul className="flex gap-8 mx-16">
        <li className='cursor-pointer hover:font-bold transition-all duration-50 ' >Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-50 ' >Your List</li>
        
      </ul>
      
    </nav>
  )
}
