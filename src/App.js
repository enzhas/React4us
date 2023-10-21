// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;