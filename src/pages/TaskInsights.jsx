import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fetchPosts } from '../api/api';
import { toast } from 'react-toastify';

const TaskInsights = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts(page);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        toast.error('Failed to load insights!', { autoClose: 2000 });
      }
    };
    loadPosts();
  }, [page]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-text dark:text-dark-text">Task Insights</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search insights..."
        className="mb-4 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-card dark:text-dark-text"
      />
      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-card dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-text dark:text-dark-text">{post.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          variant="secondary"
          className="hover:bg-secondary transition-colors duration-200"
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          variant="secondary"
          className="hover:bg-secondary transition-colors duration-200"
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default TaskInsights;