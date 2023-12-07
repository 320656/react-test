import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 导入Navbar组件
import HomePage from './pages/HomePage'; // 假设您已经创建了HomePage组件
import AboutPage from './pages/AboutPage'; // 假设您已经创建了AboutPage组件

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
