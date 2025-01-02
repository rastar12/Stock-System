import React, { useEffect, useState } from 'react';

export default function ResetButton() {
  const [remainingChemical, setRemainingChemical] = useState([]);
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleResetChange = () => {
    const newRemainingChemical = stock.map((item) => ({
      [item.name]: item.Add - item.used,
    }));

    // Add "Add" properties with 0 values
    const addProperties = stock.map((item) => ({
      [`Add${item.name}`]: 0,
    }));

    setRemainingChemical([...newRemainingChemical, ...addProperties]);
  };

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await fetch('/api/stock/ShowStock');
        if (!response.ok) {
          throw new Error('Failed to fetch stock');
        }
        const data = await response.json();
        setStock(data);
        handleResetChange();
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStock();
  }, []);

  const handleReset = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/stock/dailyUpdate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(remainingChemical),
      });
      const data = await res.json();
      console.log(data);
    
      alert("Table reseted successfully updated");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      
      console.error(error.message);
    }
  };


  return (
    <div className='w-full text-center bg-red-700 text-white font-xl' onClick={handleReset}>
      ResetButton
    </div>
  );
}
/*

{AddUngeral:0},
{AddUfacid: 0},
{AddIndustrialSalt:0},
{AddCaustic: 0},
{AddCMC: 0},
{AddCDE:0},
{AddColor:0},
{AddPerfume: 0},
{AddMagadi:0},
{AddChlorine:0},
{AddUndillutedKerrol: 0},
{AddFineSalt: 0},
{AddGlycerine: 0},
{AddPearlizer: 0},
{AddHCL:0},
{AddDOD: 0},
{AddNP9: 0},
{AddPINE: 0},
{AddDowny: 0},
{AddBioDigester: 0},
{AddToiletBalls:0},




useEffect(() => {
  if (stock) {
    const calculatedRemainingChemical = [
      { AddUngeral: stock.AddUngeral - stock.Ungeral },
      { AddUfacid: stock.AddUfacid - stock.Ufacid },
      { AddIndustrialSalt: stock.AddIndustrialSalt - stock.IndustrialSalt },
      { AddCaustic: stock.AddCaustic - stock.Caustic },
      { AddCMC: stock.AddCMC - stock.CMC },
      { AddCDE: stock.AddCDE - stock.CDE },
      { AddColor: stock.AddColor - stock.Color },
      { AddPerfume: stock.AddPerfume - stock.Perfume },
      { AddMagadi: stock.AddMagadi - stock.Magadi },
      { AddChlorine: stock.AddChlorine - stock.Chlorine },
      { AddUndillutedKerrol: stock.AddUndillutedKerrol - stock.UndillutedKerrol },
      { AddFineSalt: stock.AddFineSalt - stock.FineSalt },
      { AddGlycerine: stock.AddGlycerine - stock.Glycerine },
      { AddPearlizer: stock.AddPearlizer - stock.Pearlizer },
      { AddHCL: stock.AddHCL - stock.HCL },
      { AddDOD: stock.AddDOD - stock.DOD },
      { AddNP9: stock.AddNP9 - stock.NP9 },
      { AddPINE: stock.AddPINE - stock.PINE },
      { AddDowny: stock.AddDowny - stock.Downy },
      { AddBioDigester: stock.AddBioDigester - stock.BioDigester },
      { AddToiletBalls: stock.AddToiletBalls - stock.ToiletBalls },
             {Ungeral:0},
      {AddUfacid: 0},
      {AddIndustrialSalt:0},
      {Caustic: 0},
      {CMC: 0},
      {CDE:0},
      {Color:0},
      {Perfume: 0},
      {Magadi:0},
      {Chlorine:0},
      {UndillutedKerrol: 0},
      {FineSalt: 0},
      {Glycerine: 0},
      {Pearlizer: 0},
      {HCL:0},
      {DOD: 0},
      {NP9: 0},
      {PINE: 0},
      {Downy: 0},
      {BioDigester: 0},
      {ToiletBalls:0},
    ];
    setRemainingChemical(calculatedRemainingChemical);
  }
*/
