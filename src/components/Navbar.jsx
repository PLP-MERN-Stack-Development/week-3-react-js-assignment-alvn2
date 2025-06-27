import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-primary dark:bg-dark-bg shadow-lg">
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Task Manager</h1>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-secondary transition-colors duration-200">Home</Link>
          <Link to="/task-insights" className="text-white hover:text-secondary transition-colors duration-200">Task Insights</Link>
          <button
            onClick={toggleTheme}
            className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-200"
          >
            <div className={`w-4 h-4 bg-white rounded-full transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-200`}></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;