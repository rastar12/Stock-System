import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import Home from './components/homePage.jsx';
import UpdateStock from './components/ChangeStock.jsx';
import StockList from './components/stockList.jsx';
import IndividualStockUpdateButton from './components/IndividualStock.jsx';
import ProductUpdate from './readyMade/update.jsx';
import AddReadyMade from './readyMade/addproduct.jsx';
import ReadyMadeTable from './readyMade/readymadetable.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/update-stock' element={<UpdateStock/>}/>
        <Route path='/view-stock' element={<StockList/>}/>
        <Route path="/individual-update" element={<IndividualStockUpdateButton/>}/>
        <Route path='/SellreadyMade' element={<ProductUpdate/>}/>
        <Route path='/AddreadyMade' element={<AddReadyMade/>}/>
        <Route path='/readymadetable' element={<ReadyMadeTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

