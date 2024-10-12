import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import UpdateStock from './components/ChangeStock.jsx';
import IndividualStockUpdateButton from './components/IndividualStock.jsx';
import ProductUpdate from './readyMade/update.jsx';
import AddReadyMade from './readyMade/addproduct.jsx';
import CombinedStockAndReadyMade from './readyMade/readymadetable.jsx';
import AddChemicals from './components/AddChemicals.jsx';
import Home from './home.jsx';
import SellStockHome from './components/homePage.jsx';
import AddStockHome from './components/AddStockHome.jsx';
import ViewSales from './components/ViewSales.jsx';
import Mpesa from './components/Mpesa.jsx';
import AccountStatus from './components/AccountStatus.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/viewSales' element={<ViewSales/>}/>
        <Route path='/sellStockHome' element={<SellStockHome/>}/>
        <Route path='/addStockHome' element={<AddStockHome/>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/update-stock' element={<UpdateStock/>}/>
        <Route path="/individual-update" element={<IndividualStockUpdateButton/>}/>
        <Route path='/SellreadyMade' element={<ProductUpdate/>}/>
        <Route path='/AddreadyMade' element={<AddReadyMade/>}/>
        <Route path='/readymadetable' element={<CombinedStockAndReadyMade/>}/>
        <Route path='/Addchemicals' element={<AddChemicals/>}/>
        <Route path='/Mpesa' element={<Mpesa/>}/>
        <Route path='/account-status' element={<AccountStatus/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

