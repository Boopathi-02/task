import logo from './logo.svg';
import './App.css';
import Sign_in from './component/sign_in';
import Dashboard from './component/dashboard';
import Navbar from './component/navbar';
import Inventory from './component/inventory';
import Billing from './component/billing';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Sign_in/> */}
      {/* <Dashboard /> */}
      {/* <Navbar/> */}
      {/* <Inventory/> */}

      {/* <Billing/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign_in />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Inventory' element={<Inventory />} />
          <Route path='/Billing' element={<Billing />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
