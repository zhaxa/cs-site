import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Main';
import News from './pages/News';
import Players from './pages/Players';
import Experience from './pages/Experience';
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Имитируем загрузку на 2 секунды
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<News />} />
            <Route path="/players" element={<Players />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
