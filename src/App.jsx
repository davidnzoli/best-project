import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from "./pagesComponent/Accueil";

import Reserv from "./pagesComponent/Reserv";
import Navbar from './Navbar';
import Footer from './Footer';
import { tabChemin } from './components/chemin';
import Program from './pagesComponent/Program';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/program' element={<Program />} />
          <Route path='/reservation' element={<Reserv />} />
          
      </Routes>
      <Footer table={tabChemin}/>
    </BrowserRouter>
    </>
  )
}

export default App;
