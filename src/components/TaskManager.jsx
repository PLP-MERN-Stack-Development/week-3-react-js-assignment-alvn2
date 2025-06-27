import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { useLocalStorageTasks } from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) {
      toast.error('Please enter a task!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    addTask(newTaskText);
    setNewTaskText('');
    toast.success('Task added!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <Card className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-card dark:text-dark-text"
          />
          <Button type="submit" variant="primary" className="hover:bg-secondary transition-colors duration-200">
            Add
          </Button>
        </div>
      </form>
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter(f)}
            className="hover:bg-secondary transition-colors duration-200"
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-center text-gray-500 dark:text-gray-400 py-2">No tasks found</li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 bg-card dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 text-primary rounded focus:ring-primary"
                />
                <span className={`${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-text dark:text-dark-text'}`}>
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  deleteTask(task.id);
                  toast.success('Task deleted!', {
                    position: 'top-right',
                    autoClose: 3000,
                  });
                }}
                className="hover:bg-red-700 transition-colors duration-200"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        <p>{tasks.filter((task) => !task.completed).length} tasks remaining</p>
      </div>
    </Card>
  );
};

export default TaskManager;