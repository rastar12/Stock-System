import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const CombinedStockAndReadyMade = () => {
  const [stock, setStock] = useState(null);
  const [readyProducts, setReadyProducts] = useState(null);
  const [error, setError] = useState(null);

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

    fetchStock();
    fetchReadyProducts();
  }, []);

  if (!stock || !readyProducts) {
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

  // StockList calculations
  const CHEMICALS = [
    { name: 'Ungeral', buyingPrice: 300, sellingPrice: 345 },
    { name: 'Ufacid', buyingPrice: 310, sellingPrice: 400 },
    { name: 'IndustrialSalt', buyingPrice: 19, sellingPrice: 40 },
    { name: 'Caustic', buyingPrice: 152, sellingPrice: 300 },
    { name: 'CMC', buyingPrice: 146, sellingPrice: 1000 },
    { name: 'CDE', buyingPrice: 400, sellingPrice: 1500 },
    { name: 'Color', buyingPrice: 300, sellingPrice: 2000 },
    { name: 'Perfume', buyingPrice: 600, sellingPrice: 2000 },
    { name: 'Magadi', buyingPrice: 60, sellingPrice: 500 },
    { name: 'Chlorine', buyingPrice: 340, sellingPrice: 480 },
    { name: 'BioDigester', buyingPrice: 650, sellingPrice: 1100 },
    { name: 'Downy', buyingPrice: 550, sellingPrice: 650 },
    { name: 'UndilutedKerrol', buyingPrice: 1000, sellingPrice: 1400 },
    { name: 'Finesalt', buyingPrice: 24, sellingPrice: 60 },
    { name: 'Glycerine', buyingPrice: 900, sellingPrice: 2000 },
    { name: 'Pearlizer', buyingPrice: 900, sellingPrice: 2000 },
    { name: 'DOD', buyingPrice: 700, sellingPrice: 1000 },
    { name: 'NP9', buyingPrice: 500, sellingPrice: 780 },
    { name: 'PINE', buyingPrice: 1400, sellingPrice: 2000 },
    { name: 'ToiletBalls', buyingPrice: 130, sellingPrice: 250 },
    { name: 'HCL', buyingPrice: 136, sellingPrice: 250 },
  ];
  
  const calculatePrices = (quantity, buyingPrice, sellingPrice) => {
    const buyingTotal = quantity * buyingPrice;
    const sellingTotal = quantity * sellingPrice;
    return { buyingTotal, sellingTotal, profit: sellingTotal - buyingTotal };
  };

  let totalBuyingPrice = 0;
  let totalSellingPrice = 0;

  CHEMICALS.forEach(({ name, buyingPrice, sellingPrice }) => {
    const usedQuantity = stock[name] || 0;
    const addedQuantity = stock[`Add${name}`] || 0;
    const { buyingTotal, sellingTotal, profit } = calculatePrices(usedQuantity, buyingPrice, sellingPrice);

    totalBuyingPrice += buyingTotal;
    totalSellingPrice += sellingTotal;
  });

  const TotalsBuyingPrice = totalBuyingPrice + ReadyMadeBuyingPrice;
  const TotalsSellingPrice = totalSellingPrice + ReadyMadeSales;
  const TotalsProfit = TotalsSellingPrice - TotalsBuyingPrice;

  return (
    <div className="p-4">
      {/* ReadyMadeTable section */}
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
            {CHEMICALS.map(({ name, buyingPrice, sellingPrice }, index) => {
              const usedQuantity = stock[name] || 0;
              const addedQuantity = stock[`Add${name}`] || 0;
              const { buyingTotal, sellingTotal, profit } = calculatePrices(usedQuantity, buyingPrice, sellingPrice);

              return (
                <tr key={index} className={`border-b ${index % 2 ? 'bg-gray-50' : ''}`}>
                  <td className="px-4 py-2">{name}</td>
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
  );
};

export default CombinedStockAndReadyMade;
