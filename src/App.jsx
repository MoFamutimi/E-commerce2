import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landinpage from './components/landinpage/Landinpage';
import SignUp from "./components/Auth/SignUp";
import Login from './components/Auth/Login';
import Cart from './components/Cart/Cart';
import Authenticate from './components/landinpage/Context/Authenticate';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
           <Route path="/" element={<Authenticate />}>
            <Route path="/" element={<Landinpage />} />
            
            <Route path="/cartpage" element={<Cart />} />
          </Route>
          <Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
