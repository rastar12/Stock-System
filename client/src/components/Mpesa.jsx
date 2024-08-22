import React, { useState } from 'react'

export default function Mpesa() {

  const [formData, setFormData] = useState({});
  const [withdrawData, setWithdrawData] = useState({});
  const [page,setPage]=useState('home');
  const [loading,setLoading]=useState(false)
 
  const handleAddPayment = async (e) => {
    e.preventDefault(); // Prevent form from submitting the default way
    try {
      setLoading(true)
      const res = await fetch('/api/payment/addPayment', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); // Handle response data as needed
      setLoading(false);
      alert("data recorded successfully");
    } catch (error) {
      alert("Failed to record",error);
      setLoading(false);
    }
  };
 


  const handleWithdrawPayment = async (e) => {
    e.preventDefault(); // Prevent form from submitting the default way
    try {
      setLoading(true);
      const res = await fetch('/api/withdraw/addwithdraw', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(withdrawData),
      });
      setLoading(false);
      const data = await res.json();
      alert("data recorded succesfully");
    } catch (error) {
      alert("failed to record",error);
      setLoading(false);
    }
  };

  const handleWithdrawChange = (e) => {
    setWithdrawData({
      ...withdrawData,
      [e.target.id]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  return (
    <div>
      <h1 className='font-bold text-xl text-center text-blue-600'>Mbale Detergents Payment System</h1>
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='p-3 rounded-lg bg-green-500 cursor-pointer mb-3 text-white font-extrabold w-full active:bg-green-400'
        onClick={()=>setPage("lipaNaMpesa")}
        >
          Lipa na Mpesa
        </div >
        <div className='p-3 rounded-lg bg-blue-600 mb-3 text-white font-extrabold cursor-pointer active:bg-blue-400 w-full'
         onClick={()=>setPage("MoneyIn")}
        >
          Record Money in
        </div>
        <div className='p-3 rounded-lg bg-red-600 mb-3 text-white font-extrabold cursor-pointer active:bg-red-400 w-full'
         onClick={()=>setPage("MoneyOut")}
        >
          record Money out
        </div>
      </div>

      { page==="lipaNaMpesa" && 
      (
        <div className='w-full h-full mt-9'>
        <form className='w-auto ml-5'>
          <h1 className='text-green-700 font-extrabold uppercase text-center'>Lipa na Mpesa</h1>
          
          <div>
            <span className='text-black font-bold'>Payment for?:</span>
            <input 
              onChange={handleChange} 
              id='paymentFor' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none text-green-500 font-bold'
            />
          </div>
          <div>
            <span className='text-black font-bold'>Enter Phone Number:</span>
            <input 
              onChange={handleChange} 
              id='phoneNumber' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none text-green-500 font-bold'
            />
          </div>
          <div>
            <span className='text-black font-bold'>Enter Amount:</span>
            <input 
              onChange={handleChange} 
              id='amount' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none'
            />
          </div>
          <button 
          
            type='submit' 
            className='self-center rounded-lg font-bold bg-green-700 text-white p-3'
          >
            Initialize Payment
          </button>
        </form>    
      </div>
      )  }
      {page==="MoneyIn" && 
      (
        <div className='w-full h-full mt-9'>
        <form className='w-auto ml-5' onSubmit={handleAddPayment}>
          <h1 className='text-green-700 font-extrabold uppercase text-center'>Other Payments Made / Deposited to the Bank</h1>
          
          <div>
            <span className='text-black font-bold'>Payment for?</span>
            <input 
              onChange={handleChange} 
              id='paymentFor' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none text-green-500 font-bold'
            />
          </div>
          <div>
            <span className='text-black font-bold'>Amount</span>
            <input 
              onChange={handleChange} 
              id='amount' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none text-green-500 font-bold'
            />
          </div>

          <button 
            disabled={loading}
            type='submit' 
            className='self-center rounded-lg font-bold bg-green-700 text-white p-3'
          >
          {loading ? "recording..." : "record"}
          </button>
        </form>    
      </div>
      )}
      {page==="MoneyOut" && 
      (
        <div className='w-full h-full mt-9 border-blue-700'>
        <form className='w-auto ml-5' onSubmit={handleWithdrawPayment}>
          <h1 className='text-green-700 font-extrabold uppercase text-center'>Withdraw from Bank</h1>
          
          <div>
            <span className='text-black font-bold'>Reason for Withdraw:</span>
            <input 
              onChange={handleWithdrawChange} 
              id='ReasonforWithdraw' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none text-green-500 font-bold'
            />
          </div>
          <div>
            <span className='text-black font-bold'>Amount</span>
            <input 
              onChange={handleWithdrawChange} 
              id='amount' 
              required 
              className='w-auto bg-slate-100 rounded-lg ml-1 border-none focus:ring-2 focus:ring-green-500 mb-4 focus:outline-none text-green-500 font-bold'
            />
          </div>

          <button 
          disabled={loading}
            type='submit' 
            className='justify-center rounded-lg font-bold bg-green-700 text-white p-3'
          >
            {loading ? "recording..." : "record"}
          </button>
        </form>    
      </div>
      )}

    </div>
  )
}
