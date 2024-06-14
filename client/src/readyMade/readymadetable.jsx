import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';


export default function ReadyMadeTable() {

      const [ReadyProduct,setReadyProduct] = useState(null);

      useEffect(() => {
        const fetchReadyProduct = async () => {
          try {
            const response = await fetch('/api/products/ShowReadyProduct');

            if (!response.ok) {
              throw new Error('Failed to fetch Sold Products');
            }
            const data = await response.json();
            setReadyProduct(data);

          } catch (error) {
            console.error('Error fetching stock:', error);
          }
        };
        fetchReadyProduct();
      }, []);


      // logic to deal with the remaining stock
      const LiquidDetergentRemaining= ReadyProduct.AddLiquidDetergent-ReadyProduct.LiquidDetergent;
      const HandWashRemaining= ReadyProduct.AddHandWash-ReadyProduct.HandWash;
      const LiquidAntisepticRemaining= ReadyProduct.AddLiquidAntiseptic-ReadyProduct.LiquidAntiseptic;
      const DownyRemaining= ReadyProduct.AddDowny-ReadyProduct.Downy;
      const ToiletCleanerRemaining= ReadyProduct.AddToiletCleaner-ReadyProduct.ToiletCleaner;
      const JikRemaining= ReadyProduct.AddJik-ReadyProduct.Jik;
      const ShampooRemaining= ReadyProduct.AddShampoo-ReadyProduct.Shampoo;

     //logic to deal with price of sold stock
     const  PriceOfLiquidDetergent=ReadyProduct.LiquidDetergent*20;
     const PriceOfToiletCleaner=ReadyProduct.ToiletCleaner*17;
     const PriceOfLiquidAnticeptic=ReadyProduct.LiquidAntiseptic*34;
     const PriceOfDowny=ReadyProduct.Downy*69;
     const PriceOfHandWash=ReadyProduct.HandWash*27;
     const PriceOfShampoo=ReadyProduct.Shampoo*26;
     const PriceOfJik=ReadyProduct.Jik*16;

     // logic to calculate the sales made
     const SalesOfLiquidDetergent=20*ReadyProduct.LiquidDetergent
     const SalesOfToiletCleaner=200*ReadyProduct.ToiletCleaner
     const SalesOfLiquidAnticeptic=200*ReadyProduct.LiquidAntiseptic
     const SalesOfDowny=200*ReadyProduct.Downy
     const SalesOfHandwash=120*ReadyProduct.HandWash
     const SalesOfShampoo=150*ReadyProduct.Shampoo
     const SalesOfJik=150*ReadyProduct.Jik

     // logic to deal with the profits made
     const ProfitOfLiquidDetergent=SalesOfLiquidDetergent-PriceOfLiquidDetergent;
     const ProfitOfToiletCleaner=SalesOfToiletCleaner-PriceOfToiletCleaner;
     const ProfitOfLiquidAnticeptic=SalesOfLiquidAnticeptic-PriceOfLiquidAnticeptic;
     const ProfitOfDowny=SalesOfDowny-PriceOfDowny;
     const ProfitOfHandwash=SalesOfHandwash-PriceOfHandWash;
     const ProfitOfShampoo=SalesOfShampoo-PriceOfShampoo;
     const ProfitOfJik=SalesOfJik-PriceOfJik;

     // logic  to deal with the total sales made 
     const TotalSalesMade=SalesOfDowny+SalesOfHandwash+SalesOfJik+SalesOfLiquidAnticeptic+SalesOfLiquidDetergent
     +SalesOfShampoo+SalesOfToiletCleaner;
     // logic to deal withthe total profits made 
     const TotalProfitMade=
     ProfitOfDowny+ProfitOfHandwash+ProfitOfJik+ProfitOfShampoo+ProfitOfLiquidDetergent+PriceOfToiletCleaner
     +ProfitOfLiquidAnticeptic
 // Logic to deal with price of chemical used
 const TotalBuyingPrice=
 PriceOfDowny+PriceOfHandWash+PriceOfJik+PriceOfLiquidAnticeptic+PriceOfLiquidDetergent+
 PriceOfShampoo+PriceOfToiletCleaner;

 if(!ReadyProduct){
  return <LoadingSpinner/>
 };

  return (
<div className="p-4">
 
    <h2 className="text-2xl font-semibold mb-4">Ready made stock</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Product</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Remaining Stock</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Sold stock</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Price of Chemicals used</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Sales made</th>
              <th className="px-4 py-2 border-b bg-gray-100 text-left">Profit made</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Liquid detergent</td>
              <td className="px-4 py-2">{LiquidDetergentRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.LiquidDetergent}</td>
              <td className="px-4 py-2">{PriceOfLiquidDetergent}</td>
              <td className="px-4 py-2">{SalesOfLiquidDetergent}</td>
              <td className="px-4 py-2">{ProfitOfLiquidDetergent}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Handwash</td>
              <td className="px-4 py-2">{HandWashRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.HandWash}</td>
              <td className="px-4 py-2">{PriceOfHandWash}</td>
              <td className="px-4 py-2">{SalesOfHandwash}</td>
              <td className="px-4 py-2">{ProfitOfHandwash}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Liquid Antiseptic</td>
              <td className="px-4 py-2">{LiquidAntisepticRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.LiquidAntiseptic}</td>
              <td className="px-4 py-2">{PriceOfLiquidAnticeptic}</td>
              <td className="px-4 py-2">{SalesOfLiquidAnticeptic}</td>
              <td className="px-4 py-2">{ProfitOfLiquidAnticeptic}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Shampoo</td>
              <td className="px-4 py-2">{ShampooRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.Shampoo}</td>
              <td className="px-4 py-2">{PriceOfShampoo}</td>
              <td className="px-4 py-2">{SalesOfShampoo}</td>
              <td className="px-4 py-2">{ProfitOfShampoo}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Downy</td>
              <td className="px-4 py-2">{DownyRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.Downy}</td>
              <td className="px-4 py-2">{PriceOfDowny}</td>
              <td className="px-4 py-2">{SalesOfDowny}</td>
              <td className="px-4 py-2">{ProfitOfDowny}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Toilet cleaner</td>
              <td className="px-4 py-2">{ToiletCleanerRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.ToiletCleaner}</td>
              <td className="px-4 py-2">{PriceOfToiletCleaner}</td>
              <td className="px-4 py-2">{SalesOfToiletCleaner}</td>
              <td className="px-4 py-2">{ProfitOfToiletCleaner}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Jik</td>
              <td className="px-4 py-2">{JikRemaining}</td>
              <td className="px-4 py-2">{ReadyProduct.Jik}</td>
              <td className="px-4 py-2">{PriceOfJik}</td>
              <td className="px-4 py-2">{SalesOfJik}</td>
              <td className="px-4 py-2">{ProfitOfJik}</td>
            </tr>

            <tr>
              <td className="px-4 py-2 font-bold">Total</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 font-bold">{TotalBuyingPrice}</td>
              <td className="px-4 py-2 font-bold">{TotalSalesMade}</td>
              <td className="px-4 py-2 font-bold">{TotalProfitMade}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-semibold">Updated At</td>
              <td className="px-4 py-2 text-red-500">{new Date(stock.updatedAt).toLocaleString()}</td>
              </tr>
          </tbody>
        </table>
      </div>

  </div>
  )
}
