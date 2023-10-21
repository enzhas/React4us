// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import Category from './components/Category';

import { Outlet, Route, BrowserRouter, Link, Routes } from 'react-router-dom';
function App() {
  return (
      <div>
        <Header />
        <Sidebar />
        <BrowserRouter>
        <nav>
          <Link to="category/gaming">Game</Link>
        </nav>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
        </BrowserRouter>
        <Section1 />
        <Section2 />
        <Footer />
      </div>
  );
}

export default App;