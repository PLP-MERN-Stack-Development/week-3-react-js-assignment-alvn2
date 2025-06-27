import TaskManager from '../components/TaskManager';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text dark:text-dark-text mb-6">Welcome to Task Manager</h2>
        <TaskManager />
      </div>
    </div>
  );
};

export default Home;