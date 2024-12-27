import React, { useState } from 'react'

export default function ChangePrice() {

  const [chemical,setChemical]=useState(null);
  const [buyingPrice,setBuyingPrice]=useState(null);
  const [sellingPrice,setSellingPrice]=useState(null);
  const [loading,setLoading]=useState(false);

  const handleChemicalChange = (e) => {
    setChemical(e.target.value);
  };
  const handleClick=()=>{
    console.log("cliked")
  }

  

  const chemicalOptions = [
    'CDE', 'CMC', 'Caustic', 'Chlorine', 'Color', 'DOD', 'Finesalt', 
    'Glycerine', 'HCL', 'IndustrialSalt', 'Magadi', 'NP9', 'PINE', 
    'Pearlizer', 'Pearls', 'Perfume', 'Ufacid', 'UndilutedKerrol', 'Ungeral','Tolietballs','Downy'
  ];
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chemical">
        Chemical
      </label>
      <select
        id="chemical"
        value={chemical}
        onChange={handleChemicalChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select a chemical</option>
        {chemicalOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className='flex flex-col w-full sm:flex-row '>
        <div className=''>
          <label>Buying Price</label>
          <input
     
              id="buyingPrice"
              type="number"
              value={buyingPrice}
              onChange={(e)=>setBuyingPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               />
        </div>
        <div>
          <label>Selling price</label>
          <input
     
     id="sellingPrice"
     type="number"
     value={sellingPrice}
     onChange={(e)=>setSellingPrice(e.target.value)}
     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
   />         
          
        </div>

      </div>



      {loading ? (
        <LoadingSpinner /> // Display the loading spinner when loading
      ) : (
        <button
        disabled={loading}
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transform transition-transform hover:scale-105"
        >
        Change Price
        </button>
      )}
    </div>
  )
}
