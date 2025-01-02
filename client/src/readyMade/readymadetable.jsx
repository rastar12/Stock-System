import React, { useState, useEffect, useRef } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const CombinedStockAndReadyMade = () => {
  const [stock, setStock] = useState(null);
  const [readyProducts, setReadyProducts] = useState(null);
  const [error, setError] = useState(null);
  const [CHEMICALS, setPrices] = useState({});
  const [remainingChemical,setRemainingChemical]=useState(null);
  const [loading,setLoading]=useState(false);
  const formRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  //console.log("before submiting ",remainingChemical);
  console.log(stock);
  useEffect(() => {
    if (stock) {
      const calculatedRemainingChemical = 
        {
       AddUngeral: stock.AddUngeral - stock.Ungeral ,
       AddUfacid: stock.AddUfacid - stock.Ufacid ,
       AddIndustrialSalt: stock.AddIndustrialSalt - stock.IndustrialSalt,
         AddCaustic: stock.AddCaustic - stock.Caustic ,
         AddCMC: stock.AddCMC - stock.CMC ,
         AddCDE: stock.AddCDE - stock.CDE ,
         AddColor: stock.AddColor - stock.Color ,
         AddPerfume: stock.AddPerfume - stock.Perfume ,
         AddMagadi: stock.AddMagadi - stock.Magadi ,
         AddChlorine: stock.AddChlorine - stock.Chlorine ,
         AddUndilutedKerrol: stock.AddUndilutedKerrol - stock.UndilutedKerrol ,
         AddFineSalt: stock.AddFineSalt - stock.FineSalt ,
         AddGlycerine: stock.AddGlycerine - stock.Glycerine ,
         AddPearlizer: stock.AddPearlizer - stock.Pearlizer ,
         AddHCL: stock.AddHCL - stock.HCL ,
         AddDOD: stock.AddDOD - stock.DOD ,
         AddNP9: stock.AddNP9 - stock.NP9 ,
         AddPINE: stock.AddPINE - stock.PINE ,
         AddDowny: stock.AddDowny - stock.Downy ,
         AddBioDigester: stock.AddBioDigester - stock.BioDigester ,
         AddToiletBalls: stock.AddToiletBalls - stock.ToiletBalls ,
         Ungeral:0,
        Ufacid: 0,
        IndustrialSalt:0,
        Caustic: 0,
        CMC: 0,
        CDE:0,
        Color:0,
        Perfume: 0,
        Magadi:0,
        Chlorine:0,
        FineSalt: 0,
        Glycerine: 0,
        Pearlizer: 0,
        HCL:0,
        DOD: 0,
        NP9: 0,
        PINE: 0,
        Downy: 0,
        BioDigester: 0,
        ToiletBalls:0,
        Finesalt:0,
        UndilutedKerrol:0,
        }
      ;
      setRemainingChemical(calculatedRemainingChemical);
    }
  }, [stock]);

  const handleReset = async () => {
    try {
      console.log("I reached here");
      setLoading(true); 
  
     
      const res = await fetch(`/api/stock/dailyUpdate`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(remainingChemical), 
      });
  
      if (!res.ok) {
        throw new Error("Failed to reset data");
      }
  
      const data = await res.json();
      console.log("Backend data:", data);
  
      alert("Table reset successfully updated");
  
      setLoading(false); 
    } catch (error) {
      setLoading(false); 
      console.error(error.message);
      alert("An error occurred. Please try again.");
    }
  };
  
  


  console.log()
  
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await fetch('/api/stock/ShowStock');
        if (!response.ok) {
          throw new Error('Failed to fetch stock');
        }
        const data = await response.json();
        setStock(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchReadyProducts = async () => {
      try {
        const response = await fetch('/api/products/ShowReadyProducts');
        if (!response.ok) {
          const text = await response.text();
          console.error('Failed to fetch Ready Products:', text);
          throw new Error('Failed to fetch Ready Products');
        }
        const data = await response.json();
        setReadyProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    const fetchPrices=()=>{
      fetch('/api/prices/ShowPrices')
      .then(res=>res.json())
      .then(data=>setPrices(data))
      .catch(err=>console.log(err))
     }

     fetchPrices();
    fetchStock();
    fetchReadyProducts();
  }, []);

  if (!stock || !readyProducts ) {
    return <LoadingSpinner />;
  }

  // ReadyMadeTable calculations
  const {
    LiquidDetergent,
    HandWash,
    LiquidAntiseptic,
    Downy,
    ToiletCleaner,
    Jik,
    Shampoo,
    AddLiquidDetergent,
    AddHandWash,
    AddLiquidAntiseptic,
    AddDowny,
    AddToiletCleaner,
    AddJik,
    AddShampoo
  } = readyProducts;

  const remainingStock = {
    LiquidDetergent: AddLiquidDetergent - LiquidDetergent,
    HandWash: AddHandWash - HandWash,
    LiquidAntiseptic: AddLiquidAntiseptic - LiquidAntiseptic,
    Downy: AddDowny - Downy,
    ToiletCleaner: AddToiletCleaner - ToiletCleaner,
    Jik: AddJik - Jik,
    Shampoo: AddShampoo - Shampoo
  };

  const prices = {
    LiquidDetergent: LiquidDetergent * 20,
    ToiletCleaner: ToiletCleaner * 17,
    LiquidAntiseptic: LiquidAntiseptic * 34,
    Downy: Downy * 69,
    HandWash: HandWash * 27,
    Shampoo: Shampoo * 26,
    Jik: Jik * 16
  };

  const sales = {
    LiquidDetergent: 50 * LiquidDetergent,
    ToiletCleaner: 200 * ToiletCleaner,
    LiquidAntiseptic: 200 * LiquidAntiseptic,
    Downy: 200 * Downy,
    HandWash: 120 * HandWash,
    Shampoo: 150 * Shampoo,
    Jik: 150 * Jik
  };

  const profits = {
    LiquidDetergent: sales.LiquidDetergent - prices.LiquidDetergent,
    ToiletCleaner: sales.ToiletCleaner - prices.ToiletCleaner,
    LiquidAntiseptic: sales.LiquidAntiseptic - prices.LiquidAntiseptic,
    Downy: sales.Downy - prices.Downy,
    HandWash: sales.HandWash - prices.HandWash,
    Shampoo: sales.Shampoo - prices.Shampoo,
    Jik: sales.Jik - prices.Jik
  };

  const ReadyMadeSales = Object.values(sales).reduce((acc, val) => acc + val, 0);
  const ReadyMadeBuyingPrice = Object.values(prices).reduce((acc, val) => acc + val, 0);
  const ReadymadeProfit = Object.values(profits).reduce((acc, val) => acc + val, 0);

  const chemicalSales = 1000; // Hardcoded example value
  const chemicalBuyingPrice = 800; // Hardcoded example value
  const TotalSales = ReadyMadeSales + chemicalSales;
  const TotalBuyingPrice = ReadyMadeBuyingPrice + chemicalBuyingPrice;
  const TotalProfit = TotalSales - TotalBuyingPrice;



  const calculatePrices = (quantity, buyingPrice, sellingPrice) => {
    const buyingTotal = quantity * buyingPrice;
    const sellingTotal = quantity * sellingPrice;
    return { buyingTotal, sellingTotal, profit: sellingTotal - buyingTotal };
  };

  let totalBuyingPrice = 0;
  let totalSellingPrice = 0;

  CHEMICALS.forEach(({ Name, buyingPrice, sellingPrice }) => {
    const usedQuantity = stock[Name] || 0;
    const addedQuantity = stock[`Add${Name}`] || 0;
    const { buyingTotal, sellingTotal, profit } = calculatePrices(usedQuantity, buyingPrice, sellingPrice);

    totalBuyingPrice += buyingTotal;
    totalSellingPrice += sellingTotal;
  });

  const TotalsBuyingPrice = totalBuyingPrice + ReadyMadeBuyingPrice;
  const TotalsSellingPrice = totalSellingPrice + ReadyMadeSales;
  const TotalsProfit = TotalsSellingPrice - TotalsBuyingPrice;

  return (
    <div className="p-4">
         <div className="flex justify-end gap-4 mb-4">
        <button
          className="text-white bg-green-500 p-2 rounded"
          onClick={handlePrint}
        >
          Print Data
        </button>
        <button
          className="text-white bg-red-500 p-2 rounded"
          onClick={handleReset}
        >
          Reset Data
        </button>
      </div>
      {/* ReadyMadeTable section */}
      <div ref={formRef}>
      <h2 className="text-2xl font-semibold mb-4">Ready Made Stock</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Product</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Remaining Stock</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Sold Stock</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Price of Chemicals Used</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Sales Made</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Profit Made</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(remainingStock).map((product) => (
              <tr key={product} className="border-b">
                <td className="px-4 py-2">{product}</td>
                <td className="px-4 py-2">{remainingStock[product]}</td>
                <td className="px-4 py-2">{readyProducts[product]}</td>
                <td className="px-4 py-2">{prices[product]}</td>
                <td className="px-4 py-2">{sales[product]}</td>
                <td className="px-4 py-2">{profits[product]}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="px-4 py-2">Total</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">{ReadyMadeBuyingPrice}</td>
              <td className="px-4 py-2">{ReadyMadeSales}</td>
              <td className="px-4 py-2">{ReadymadeProfit}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* StockList section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Chemicals Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Chemical</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Quantity Used</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Quantity Remaining</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Buying Price</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Selling Price</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Profit</th>
            </tr>
          </thead>
          <tbody>
            {CHEMICALS.map(({ Name, buyingPrice, sellingPrice }, index) => {
              const usedQuantity = stock[Name] || 0;
              const addedQuantity = stock[`Add${Name}`] || 0;
              const { buyingTotal, sellingTotal, profit } = calculatePrices(usedQuantity, buyingPrice, sellingPrice);

              return (
                <tr key={index} className={`border-b ${index % 2 ? 'bg-gray-50' : ''}`}>
                  <td className="px-4 py-2">{Name}</td>
                  <td className="px-4 py-2">{usedQuantity}</td>
                  <td className="px-4 py-2">{addedQuantity - usedQuantity}</td>
                  <td className="px-4 py-2">{buyingTotal}</td>
                  <td className="px-4 py-2">{sellingTotal}</td>
                  <td className="px-4 py-2">{profit}</td>
                </tr>
              );
            })}
            <tr>
              <td className="px-4 py-2 font-bold">Total</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 font-bold">{totalBuyingPrice.toFixed(2)}</td>
              <td className="px-4 py-2 font-bold">{totalSellingPrice.toFixed(2)}</td>
              <td className="px-4 py-2 font-bold">{totalSellingPrice.toFixed(2) - totalBuyingPrice.toFixed(2)}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-semibold">Updated At</td>
              <td className="px-4 py-2 text-red-500">{new Date(stock.updatedAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Combined Totals section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Combined Totals</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Category</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Total Buying Price</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Total Selling Price</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Total Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-bold">Ready Made Products</td>
              <td className="px-4 py-2">{`KSh ${ReadyMadeBuyingPrice.toFixed(2)}`}</td>
              <td className="px-4 py-2">{`KSh ${ReadyMadeSales.toFixed(2)}`}</td>
              <td className="px-4 py-2">{`KSh ${ReadymadeProfit.toFixed(2)}`}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-bold">Chemicals</td>
              <td className="px-4 py-2">{`KSh ${totalBuyingPrice.toFixed(2)}`}</td>
              <td className="px-4 py-2">{`KSh ${totalSellingPrice.toFixed(2)}`}</td>
              <td className="px-4 py-2">{`KSh ${totalSellingPrice.toFixed(2) - totalBuyingPrice.toFixed(2)}`}</td>
            </tr>
            <tr className="font-bold">
              <td className="px-4 py-2">Total Combined</td>
              <td className="px-4 py-2">{`KSh ${TotalsBuyingPrice.toFixed(2)}`}</td>
              <td className="px-4 py-2">{`KSh ${TotalsSellingPrice.toFixed(2)}`}</td>
              <td className="px-4 py-2">{`KSh ${TotalsProfit.toFixed(2)}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

    </div>
  );
};

export default CombinedStockAndReadyMade;
