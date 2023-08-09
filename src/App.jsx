import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from "./pagesComponent/Accueil";
import Bus from "./pagesComponent/Bus";
import Reserv from "./pagesComponent/Reserv";
import Navbar from './Navbar';
import Footer from './Footer';
import { tabChemin } from './components/chemin';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/reservation' element={<Reserv />} />
          <Route path='/bus' element={<Bus />} />
      </Routes>
      <Footer table={tabChemin}/>
    </BrowserRouter>
    </>
  )
}

export default App;
