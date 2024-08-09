import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AccountStatus() {
  const [payments, setPayments] = useState([]);
  const [withdraws, setWithdraws] = useState([]);
  const [totalPayments, setTotalPayments] = useState(0);
  const [totalWithdraws, setTotalWithdraws] = useState(0);
  const [balance, setBalance] = useState(0);
  const [view, setView] = useState('payments'); // To toggle between payments and withdraws
  const [showCount, setShowCount] = useState(5); // Number of records to show initially

  useEffect(() => {
    const getPaymentsAndWithdraws = async () => {
      try {
        // Fetch payments
        const paymentRes = await fetch('/api/payment/show');
        const paymentData = await paymentRes.json();

        // Fetch withdraws
        const withdrawRes = await fetch('/api/withdraw/showwithdraw');
        const withdrawData = await withdrawRes.json();

        // Sort payments and withdraws by date in descending order
        paymentData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        withdrawData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Calculate total payments
        const totalPayments = paymentData.reduce((sum, payment) => {
          const amount = parseFloat(payment.amount);
          return sum + (isNaN(amount) ? 0 : amount);
        }, 0);

        // Calculate total withdraws
        const totalWithdraws = withdrawData.reduce((sum, withdraw) => {
          const amount = parseFloat(withdraw.amount);
          return sum + (isNaN(amount) ? 0 : amount);
        }, 0);

        // Update state with totals
        setPayments(paymentData);
        setWithdraws(withdrawData);
        setTotalPayments(totalPayments);
        setTotalWithdraws(totalWithdraws);
        setBalance(totalPayments - totalWithdraws);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getPaymentsAndWithdraws();
  }, []);

  const handleShowMore = () => {
    setShowCount(showCount + 5); // Increase the number of records shown
  };

  const renderTable = (data, isWithdraws) => (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border border-gray-200 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b bg-gray-100 text-left">Date</th>
            <th className="px-4 py-2 border-b bg-gray-100 text-left">
              {isWithdraws ? 'Reason for Withdraw' : 'Payment For'}
            </th>
            <th className="px-4 py-2 border-b bg-gray-100 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, showCount).map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2">{item.createdAt}</td>
              <td className="px-4 py-2">{isWithdraws ? item.ReasonforWithdraw : item.paymentFor}</td>
              <td className="px-4 py-2">{item.amount}</td>
            </tr>
          ))}
          {data.length > showCount && (
            <tr>
              <td colSpan="3" className="px-4 py-2 text-center">
                <button
                  onClick={handleShowMore}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Show More
                </button>
              </td>
            </tr>
          )}
          {/* Total Row */}
          <tr className="font-bold bg-gray-100">
            <td colSpan="2" className="px-4 py-2 text-right">
              {isWithdraws ? 'Total Withdraws' : 'Total Payments'}
            </td>
            <td className="px-4 py-2">{isWithdraws ? totalWithdraws.toFixed(2) : totalPayments.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center uppercase">Account Records</h2>

      <h3 className="text-xl font-semibold mb-4 text-center">Balance: {balance.toFixed(2)}</h3>

      <div className="text-center mb-8">
        <button
          onClick={() => setView('payments')}
          className={`px-4 py-2 mr-2 rounded ${view === 'payments' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View Payments
        </button>
        <button
          onClick={() => setView('withdraws')}
          className={`px-4 py-2 ml-2 rounded ${view === 'withdraws' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View Withdraws
        </button>
      </div>

      {view === 'payments' ? renderTable(payments, false) : renderTable(withdraws, true)}

      <Link to="/Home" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Back to Dashboard
      </Link>
    </div>
  );
}
