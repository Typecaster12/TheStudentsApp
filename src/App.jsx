import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Features from './Components/Features/Features';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Pomodoro from './Components/Pomodoro/Pomodoro';
import FlashCardsApp from './Components/FlashCards/FlashCardsApp';

const App = () => {
  const location = useLocation();

  // Hide Navbar when on the flashcards route
  const hideNavbar = location.pathname.startsWith('/flashcards');

  return (
    <div className="app_container">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/flashcards" element={<FlashCardsApp />} />
      </Routes>
    </div>
  );
};

export default App;
