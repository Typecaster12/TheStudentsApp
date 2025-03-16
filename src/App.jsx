import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Features from './Components/Features/Features';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import FlashCardsApp from './Components/FlashCards/FlashCardsApp';
import WorkTimer from './Components/Pomodoro/PomodoAppStr/WorkTimer';
import ShortBreak from './Components/Pomodoro/PomodoAppStr/ShortBreak';
import LongBreak from './Components/Pomodoro/PomodoAppStr/LongBreak';
import PomodoroLayout from './Components/Pomodoro/Layout/PomodoroLayout';
import Notes from './Components/NotesApp/Notes';
import TimePlaner from './Components/TimePlaner/TimePlaner';

const App = () => {
  const location = useLocation();

  // Hide Navbar when on the flashcards route
  const hideNavbar =
    location.pathname.startsWith('/flashcards') ||
    location.pathname.startsWith('/pomodoro') ||
    location.pathname.startsWith('/notes');

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
        <Route path="/flashcards" element={<FlashCardsApp />} />

        {/* Nested Pomodoro Routes */}
        <Route path="/pomodoro" element={<PomodoroLayout />}>
          <Route index element={<WorkTimer />} /> {/* Default Route */}
          <Route path="work" element={<WorkTimer />} />
          <Route path="short" element={<ShortBreak />} />
          <Route path="long" element={<LongBreak />} />
        </Route>

        <Route path='/notes' element={<Notes />} />

        <Route path='/timeplaner' element={<TimePlaner/>} />
      </Routes>
    </div>
  );
};

export default App;