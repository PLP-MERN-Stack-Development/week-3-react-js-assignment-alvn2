import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TaskInsights from './pages/TaskInsights';
import { ThemeContext } from './components/ThemeContext';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-dark-bg text-dark-text' : 'bg-background text-text'} transition-colors duration-300`}>
      <Navbar />
      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-insights" element={<TaskInsights />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;