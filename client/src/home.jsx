import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/1.png'

export default function Home() {
  const[loading,setLoading]=useState(false);
  console.log(loading);


  return (
    <div className='w-full h-full p-3 '>
      
      <img src={logo} className='w-15 h-10 self-center'/>
      <h1 className='text-xl font-bold text-center uppercase mb-3'> Mbale Detergents stock inventory system</h1>
     
      <Link to={'/addStockHome'}>
      <div className='p-3 rounded-lg bg-green-600 items-center text-white'>
        
        Add stock</div>
      </Link>

      <Link to={'/changePrice'}>
      <div className='p-3 rounded-lg bg-slate-500 text-white font-bold mt-3'>
        Change price 
        </div>
        </Link>

       <Link to={'/sellStockHome'}>
       <div className='p-3 bg-blue-700 rounded-lg text-white mt-3'>
       sell chemical </div>
       </Link>

       <Link to={'/viewSales'}>
       <div className='p-3 bg-red-600 rounded-lg text-white mt-3'>
       view stock records </div>
       </Link>

       <Link to={'/Mpesa'}>
       <div className='p-3 bg-green-500 rounded-lg text-white mt-3'>
       Accounts</div>
       </Link>
    </div>
  )
}
