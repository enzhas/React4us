// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Sections from './components/Sections';
import Footer from './components/Footer';
import Category from './components/Category';

import { Outlet, Route, BrowserRouter, Link, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        {/* <Sidebar /> */}
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="category/gaming">Gaming</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Sections />} />
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>

        {/* <Sections /> */}
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;