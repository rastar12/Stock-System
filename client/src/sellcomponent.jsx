import React from 'react';

const SellComponent = () => {
  const sellDetergent = async () => {
    const chemicals = [
      { name: 'Ungeral', amount: 1 },
      { name: 'Ufacid', amount: 0.5 },
      { name: 'Industrial Salt', amount: 1 },
      { name: 'Caustic', amount: 0.025 },
      { name: 'CMC', amount: 0.02 },
      { name: 'CDE', amount: 0.02 },
      { name: 'Color', amount: 0.01 },
      { name: 'Perfume', amount: 0.015 },
    ];

    for (let chemical of chemicals) {
      await fetch('/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chemical),
      });
    }

    alert('20 liters of general-purpose detergent sold');
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={sellDetergent}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sell 20L General Purpose Detergent
      </button>
    </div>
  );
};

export default SellComponent;
