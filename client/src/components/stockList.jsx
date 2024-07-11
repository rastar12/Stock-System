import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const StockList = () => {
  const [stock, setStock] = useState(null);

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
        console.error('Error fetching stock:', error);
      }
    };

    fetchStock();
  }, []); 

  if (!stock) {
    return <LoadingSpinner />;
  }

  const UngeralBuyingPrice = stock.Ungeral * 185;
  const UngeralSellingPrice = stock.Ungeral * 300;
  const UngeralProfit = UngeralSellingPrice - UngeralBuyingPrice;

  const UfacidBuyingPrice = stock.Ufacid * 310;
  const UfacidSellingPrice = stock.Ufacid * 400;
  const UfacidProfit = UfacidSellingPrice - UfacidBuyingPrice;

  const IndustrialSaltBuyingPrice = stock.IndustrialSalt * 19;
  const IndustrialSaltSellingPrice = stock.IndustrialSalt * 40;
  const IndustrialSaltProfit = IndustrialSaltSellingPrice - IndustrialSaltBuyingPrice;

  const CausticBuyingPrice = stock.Caustic * 152;
  const CausticSellingPrice = stock.Caustic * 300;
  const CausticProfit = CausticSellingPrice - CausticBuyingPrice;

  const CMCBuyingPrice = stock.CMC * 146;
  const CMCSellingPrice = stock.CMC * 1000;
  const CMCProfit = CMCSellingPrice - CMCBuyingPrice;

  const CDEBuyingPrice = stock.CDE * 400;
  const CDESellingPrice = stock.CDE * 1500;
  const CDEProfit = CDESellingPrice - CDEBuyingPrice;

  const ColorBuyingPrice = stock.Color * 300;
  const ColorSellingPrice = stock.Color*2000;
  const ColorProfit = ColorSellingPrice - ColorBuyingPrice;

  const PerfumeBuyingPrice = stock.Perfume * 600;
  const PerfumeSellingPrice = stock.Perfume * 2000;
  const PerfumeProfit = PerfumeSellingPrice - PerfumeBuyingPrice;

  const MagadiBuyingPrice = stock.Magadi * 60;
  const MagadiSellingPrice = stock.Magadi * 500;
  const MagadiProfit = MagadiSellingPrice - MagadiBuyingPrice;

  const ChlorineBuyingPrice = stock.Chlorine * 430;
  const ChlorineSellingPrice = stock.Chlorine * 480;
  const ChlorineProfit = ChlorineSellingPrice - ChlorineBuyingPrice;

  const BioDigesterBuyingPrice = stock.BioDigester * 650;
  const BioDigesterSellingPrice = stock.BioDigester * 1100;
  const BioDigesterProfit = BioDigesterSellingPrice - BioDigesterBuyingPrice;

  const DownyBuyingPrice = stock.Downy * 550;
  const DownySellingPrice = stock.Downy * 650;
  const DownyProfit = DownySellingPrice - DownyBuyingPrice;

  const KerolBuyingPrice = stock.UndilutedKerrol * 1000;
  const KerolSellingPrice = stock.UndilutedKerrol * 1400;
  const KerolProfit = KerolSellingPrice - KerolBuyingPrice;

  const FineSaltBuyingPrice = stock.Finesalt * 24;
  const FineSaltSellingPrice = stock.Finesalt * 60;
  const FineSaltProfit = FineSaltSellingPrice - FineSaltBuyingPrice;

  const GlycerineBuyingPrice = stock.Glycerine * 900;
  const GlycerineSellingPrice = stock.Glycerine * 2000;
  const GlycerineProfit = GlycerineSellingPrice - GlycerineBuyingPrice;

  const PearlizerBuyingPrice = stock.Pearlizer * 900;
  const PearlizerSellingPrice = stock.Pearlizer * 2000;
  const PearlizerProfit = PearlizerSellingPrice - PearlizerBuyingPrice;

  const DODBuyingPrice = stock.DOD * 700;
  const DODSellingPrice = stock.DOD * 1000;
  const DODProfit = DODSellingPrice - DODBuyingPrice;

  const NP9BuyingPrice = stock.NP9 * 500;
  const NP9SellingPrice = stock.NP9 * 780;
  const NP9Profit = NP9SellingPrice - NP9BuyingPrice;

  const PINEBuyingPrice = stock.PINE * 1400;
  const PINESellingPrice = stock.PINE * 2000;
  const PINEProfit = PINESellingPrice - PINEBuyingPrice;

  const ToiletBallsBuyingPrice = stock.ToiletBalls * 130;
  const ToiletBallsSellingPrice = stock.ToiletBalls * 250;
  const ToiletBallsProfit = ToiletBallsSellingPrice - ToiletBallsBuyingPrice;

  const HCLBuyingPrice = stock.HCL * 136;
  const HCLSellingPrice = stock.HCL * 250;
  const HCLProfit = HCLSellingPrice - HCLBuyingPrice;

  const TotalBuyingPrice = 
    UngeralBuyingPrice + UfacidBuyingPrice + IndustrialSaltBuyingPrice + CausticBuyingPrice + CMCBuyingPrice + CDEBuyingPrice +
    ColorBuyingPrice + PerfumeBuyingPrice + MagadiBuyingPrice + ChlorineBuyingPrice + BioDigesterBuyingPrice + DownyBuyingPrice +
    KerolBuyingPrice + FineSaltBuyingPrice + GlycerineBuyingPrice + PearlizerBuyingPrice + DODBuyingPrice + NP9BuyingPrice +
    PINEBuyingPrice + ToiletBallsBuyingPrice + HCLBuyingPrice;

  const TotalSellingPrice = 
    UngeralSellingPrice + UfacidSellingPrice + IndustrialSaltSellingPrice + CausticSellingPrice + CMCSellingPrice + CDESellingPrice +
    ColorSellingPrice + PerfumeSellingPrice + MagadiSellingPrice + ChlorineSellingPrice + BioDigesterSellingPrice + DownySellingPrice +
    KerolSellingPrice + FineSaltSellingPrice + GlycerineSellingPrice + PearlizerSellingPrice + DODSellingPrice + NP9SellingPrice +
    PINESellingPrice + ToiletBallsSellingPrice + HCLSellingPrice;

  const TotalProfits = TotalSellingPrice - TotalBuyingPrice;
// to handle the remainin stock

 const remainingUngeral =stock.AddUngeral-stock.Ungeral;
 const remainingUfacid=stock.AddUngeral-stock.Ufacid;
 const remainingIndustrailSalt=stock.AddIndustrialSalt-stock.IndustrialSalt;
 const remainingCaustic=stock.AddCaustic-stock.Caustic;
 const remainingCMC=stock.AddCMC-stock.CMC;
 const remainingCDE=stock.AddCDE-stock.CDE;
 const remainingColor=stock.AddColor-stock.Color;
 const remainingPerfume=stock.AddPerfume-stock.Perfume;
 const remainingMagadi=stock.AddMagadi-stock.Magadi;
 const remainingChlorine=stock.AddChlorine-stock.Chlorine;
 const remainingBioDigester=stock.AddBioDigester-stock.BioDigester;
 const remainingDowny=stock.AddDowny-stock.Downy;
 const remainingUndillutedKerol=stock.AddUndillutedKerrol-stock.UndillutedKerrol;
 const remainingFineSalt=stock.AddFinesalt-stock.Finesalt;
 const remainingGlycerine=stock.AddGlycerine-stock.Glycerine;
 const remainingPearlizer=stock.AddPearlizer-stock.Pearlizer;
 const remainingDOD=stock.AddDOD-stock.DOD;
 const remainingNP9=stock.AddNP9-stock.NP9;
 const remainingPINE=stock.AddPINE-stock.PINE;
 const remainingToiletBalls=stock.AddToiletBalls-stock.ToiletBalls;
 const remainingHCL=stock.AddHCL-stock.HCL;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Chemicals sold details</h2>
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
            <tr className="border-b">
              <td className="px-4 py-2">Ungeral</td>
              <td className="px-4 py-2">{stock.Ungeral}</td>
              <td className="px-4 py-2">{remainingUngeral}</td>
              <td className="px-4 py-2">{UngeralBuyingPrice}</td>
              <td className="px-4 py-2">{UngeralSellingPrice}</td>
              <td className="px-4 py-2">{UngeralProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Ufacid</td>
              <td className="px-4 py-2">{stock.Ufacid}</td>
              <td className="px-4 py-2">{remainingUfacid}</td>
              <td className="px-4 py-2">{UfacidBuyingPrice}</td>
              <td className="px-4 py-2">{UfacidSellingPrice}</td>
              <td className="px-4 py-2">{UfacidProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Industrial Salt</td>
              <td className="px-4 py-2">{stock.IndustrialSalt}</td>
              <td className="px-4 py-2">{remainingIndustrailSalt}</td>
              <td className="px-4 py-2">{IndustrialSaltBuyingPrice}</td>
              <td className="px-4 py-2">{IndustrialSaltSellingPrice}</td>
              <td className="px-4 py-2">{IndustrialSaltProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Caustic</td>
              <td className="px-4 py-2">{stock.Caustic}</td>
              <td className="px-4 py-2">{remainingCaustic}</td>
              <td className="px-4 py-2">{CausticBuyingPrice}</td>
              <td className="px-4 py-2">{CausticSellingPrice}</td>
              <td className="px-4 py-2">{CausticProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">CMC</td>
              <td className="px-4 py-2">{stock.CMC}</td>
              <td className="px-4 py-2">{remainingCMC}</td>
              <td className="px-4 py-2">{CMCBuyingPrice}</td>
              <td className="px-4 py-2">{CMCSellingPrice}</td>
              <td className="px-4 py-2">{CMCProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">CDE</td>
              <td className="px-4 py-2">{stock.CDE}</td>
              <td className="px-4 py-2">{remainingCDE}</td>
              <td className="px-4 py-2">{CDEBuyingPrice}</td>
              <td className="px-4 py-2">{CDESellingPrice}</td>
              <td className="px-4 py-2">{CDEProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Color</td>
              <td className="px-4 py-2">{stock.Color}</td>
              <td className="px-4 py-2">{remainingColor}</td>
              <td className="px-4 py-2">{ColorBuyingPrice}</td>
              <td className="px-4 py-2">{ColorSellingPrice}</td>
              <td className="px-4 py-2">{ColorProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Perfume</td>
              <td className="px-4 py-2">{stock.Perfume}</td>
              <td className="px-4 py-2">{remainingPerfume}</td>
              <td className="px-4 py-2">{PerfumeBuyingPrice}</td>
              <td className="px-4 py-2">{PerfumeSellingPrice}</td>
              <td className="px-4 py-2">{PerfumeProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Magadi</td>
              <td className="px-4 py-2">{stock.Magadi}</td>
              <td className="px-4 py-2">{remainingMagadi}</td>
              <td className="px-4 py-2">{MagadiBuyingPrice}</td>
              <td className="px-4 py-2">{MagadiSellingPrice}</td>
              <td className="px-4 py-2">{MagadiProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Chlorine</td>
              <td className="px-4 py-2">{stock.Chlorine}</td>
              <td className="px-4 py-2">{remainingChlorine}</td>
              <td className="px-4 py-2">{ChlorineBuyingPrice}</td>
              <td className="px-4 py-2">{ChlorineSellingPrice}</td>
              <td className="px-4 py-2">{ChlorineProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">BioDigester</td>
              <td className="px-4 py-2">{stock.BioDigester}</td>
              <td className="px-4 py-2">{remainingBioDigester}</td>
              <td className="px-4 py-2">{BioDigesterBuyingPrice}</td>
              <td className="px-4 py-2">{BioDigesterSellingPrice}</td>
              <td className="px-4 py-2">{BioDigesterProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Downy</td>
              <td className="px-4 py-2">{stock.Downy}</td>
              <td className="px-4 py-2">{remainingDowny}</td>
              <td className="px-4 py-2">{DownyBuyingPrice}</td>
              <td className="px-4 py-2">{DownySellingPrice}</td>
              <td className="px-4 py-2">{DownyProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Undiluted Kerol</td>
              <td className="px-4 py-2">{stock.UndilutedKerrol}</td>
              <td className="px-4 py-2">{remainingUndillutedKerol}</td>
              <td className="px-4 py-2">{KerolBuyingPrice}</td>
              <td className="px-4 py-2">{KerolSellingPrice}</td>
              <td className="px-4 py-2">{KerolProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Fine Salt</td>
              <td className="px-4 py-2">{stock.Finesalt}</td>
              <td className="px-4 py-2">{remainingFineSalt}</td>
              <td className="px-4 py-2">{FineSaltBuyingPrice}</td>
              <td className="px-4 py-2">{FineSaltSellingPrice}</td>
              <td className="px-4 py-2">{FineSaltProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Glycerine</td>
              <td className="px-4 py-2">{stock.Glycerine}</td>
              <td className="px-4 py-2">{remainingGlycerine}</td>
              <td className="px-4 py-2">{GlycerineBuyingPrice}</td>
              <td className="px-4 py-2">{GlycerineSellingPrice}</td>
              <td className="px-4 py-2">{GlycerineProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Pearlizer</td>
              <td className="px-4 py-2">{stock.Pearlizer}</td>
              <td className="px-4 py-2">{remainingPearlizer}</td>
              <td className="px-4 py-2">{PearlizerBuyingPrice}</td>
              <td className="px-4 py-2">{PearlizerSellingPrice}</td>
              <td className="px-4 py-2">{PearlizerProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">DOD</td>
              <td className="px-4 py-2">{stock.DOD}</td>
              <td className="px-4 py-2">{remainingDOD}</td>
              <td className="px-4 py-2">{DODBuyingPrice}</td>
              <td className="px-4 py-2">{DODSellingPrice}</td>
              <td className="px-4 py-2">{DODProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">NP9</td>
              <td className="px-4 py-2">{stock.NP9}</td>
              <td className="px-4 py-2">{remainingNP9}</td>
              <td className="px-4 py-2">{NP9BuyingPrice}</td>
              <td className="px-4 py-2">{NP9SellingPrice}</td>
              <td className="px-4 py-2">{NP9Profit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">PINE</td>
              <td className="px-4 py-2">{stock.PINE}</td>
              <td className="px-4 py-2">{remainingPINE}</td>
              <td className="px-4 py-2">{PINEBuyingPrice}</td>
              <td className="px-4 py-2">{PINESellingPrice}</td>
              <td className="px-4 py-2">{PINEProfit}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2">Toilet Balls</td>
              <td className="px-4 py-2">{stock.ToiletBalls}</td>
              <td className="px-4 py-2">{remainingToiletBalls}</td>
              <td className="px-4 py-2">{ToiletBallsBuyingPrice}</td>
              <td className="px-4 py-2">{ToiletBallsSellingPrice}</td>
              <td className="px-4 py-2">{ToiletBallsProfit}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">HCL</td>
              <td className="px-4 py-2">{stock.HCL}</td>
              <td className="px-4 py-2">{remainingHCL}</td>
              <td className="px-4 py-2">{HCLBuyingPrice}</td>
              <td className="px-4 py-2">{HCLSellingPrice}</td>
              <td className="px-4 py-2">{HCLProfit}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-bold">Total</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2 font-bold">{TotalBuyingPrice}</td>
              <td className="px-4 py-2 font-bold">{TotalSellingPrice}</td>
              <td className="px-4 py-2 font-bold">{TotalProfits}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-semibold">Updated At</td>
              <td className="px-4 py-2 text-red-500">{new Date(stock.updatedAt).toLocaleString()}</td>
              </tr>
          </tbody>
        </table>
      </div>
      <div>
      </div>
      <Link to="/Home" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default StockList;
