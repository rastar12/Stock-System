import React from 'react'
import logo from "../assets/1.png"

export default function Header() {


  return (

    <div>
      <header className='flex gap-7 p-4'>
        <img src={logo} alt='Logo' className='w-20 h-15 self-center'/>
        <h1 className='text-xl font-bold mb-0'>Mbale Detergents stock inventory system</h1>
      </header>
    </div>
  )
}
