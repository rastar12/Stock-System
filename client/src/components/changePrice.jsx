import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner';

const chemicalOptions=[
  {
		"_id": "676f9579d9f83b9e8f712116",
		"Name": "CDE",
	},
	{
		"_id": "676f9580d9f83b9e8f712118",
		"Name": "CMC",

	},
	{
		"_id": "676f9586d9f83b9e8f71211a",
		"Name": "Caustic",

	},
	{
		"_id": "676f958cd9f83b9e8f71211c",
		"Name": "Chlorine",

	},
	{
		"_id": "676f9593d9f83b9e8f71211e",
		"Name": "Color",

	},
	{
		"_id": "676f959ad9f83b9e8f712120",
		"Name": "DOD",

	},
	{
		"_id": "676f95a0d9f83b9e8f712122",
		"Name": "Finesalt",

	},
	{
		"_id": "676f95a6d9f83b9e8f712124",
		"Name": "Glycerine",

	},
	{
		"_id": "676f95add9f83b9e8f712126",
		"Name": "HCL",

	},
	{
		"_id": "676f95b3d9f83b9e8f712128",
		"Name": "IndustrialSalt",

	},
	{
		"_id": "676f95bad9f83b9e8f71212a",
		"Name": "Magadi",

	},
	{
		"_id": "676f95c0d9f83b9e8f71212c",
		"Name": "NP9",

	},
	{
		"_id": "676f95c7d9f83b9e8f71212e",
		"Name": "PINE",

	},
	{
		"_id": "676f95ced9f83b9e8f712130",
		"Name": "Pearlizer",
	
	},
	{
		"_id": "676f95d5d9f83b9e8f712132",
		"Name": "Pearls",
	},
	{
		"_id": "676f95ddd9f83b9e8f712134",
		"Name": "Perfume",

	},
	{
		"_id": "676f95e1d9f83b9e8f712136",
		"Name": "Perfume",

	},
	{
		"_id": "676f95e9d9f83b9e8f712138",
		"Name": "Ufacid",

	},
	{
		"_id": "676f95f1d9f83b9e8f71213a",
		"Name": "UndilutedKerrol",

	},
	{
		"_id": "676f95f7d9f83b9e8f71213c",
		"Name": "Ungeral",

	},
	{
		"_id": "676f95fed9f83b9e8f71213e",
		"Name": "Tolietballs",

	},
	{
		"_id": "676f9605d9f83b9e8f712140",
		"Name": "Downy",

	}
]

export default function ChangePrice() {

  const [chemical,setChemical]=useState(null);
  const [loading,setLoading]=useState(false);
  const [formData,setFormData]=useState([]);
  const [error,setError]=useState()


  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id] : e.target.value});
    }

    console.log(formData);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("I was called");
      try {
        setLoading(true);
        const res = await fetch(`/api/prices/update/${chemical._id}`, { // Use chemical._id
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        alert("Price updated Succesfully");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    };
    
    const handleChemicalChange = (e) => {
      const selectedChemical = chemicalOptions.find(
        (option) => option.Name === e.target.value
        
      );
      setChemical(selectedChemical); 
      setFormData({ ...formData, Name: selectedChemical.Name ,Id:selectedChemical._id }); 
    }
  
   /*
  const chemicalOptions = [
    'CDE', 'CMC', 'Caustic', 'Chlorine', 'Color', 'DOD', 'Finesalt', 
    'Glycerine', 'HCL', 'IndustrialSalt', 'Magadi', 'NP9', 'PINE', 
    'Pearlizer', 'Pearls', 'Perfume', 'Ufacid', 'UndilutedKerrol', 'Ungeral','Tolietballs','Downy'
  ];
  */
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chemical">
        Chemical
      </label>
      <select
        id="Name"
        value={chemical?.Name || ''} 
        onChange={handleChemicalChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select a chemical</option>
        {chemicalOptions.map((option) => (
          <option key={option._id} value={option.Name}>
            {option.Name}
          </option>
        ))}
      </select>

      <div className='flex flex-col w-full sm:flex-row '>
        <div className=''>
          <label>Buying Price</label>
          <input
              id="buyingPrice"
              type="number"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               />
        </div>
        <div>
          <label>Selling price</label>
          <input
              id="sellingPrice"
              type="number"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
   />         
        </div>

      </div>



      {loading ? (
        <LoadingSpinner /> // Display the loading spinner when loading
      ) : (
        <button
        disabled={loading}
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transform transition-transform hover:scale-105"
        >
        Change Price
        </button>
      )}
    </div>
  )
}
