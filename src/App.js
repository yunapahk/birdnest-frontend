import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let url = 'https://birdnest-backend-bc7d.onrender.com/birdnests/';  // Replace with your actual API endpoint

      if (selectedCategory !== 'All') {
        url += `?category=${selectedCategory}`; // Assuming your API accepts this query parameter for filtering
      }

      const response = await fetch(url);
      const data = await response.json();

      setFilteredPosts(data);
    };

    fetchPosts();
  }, [selectedCategory]);

  return (
    <div className="App">
      <ResponsiveAppBar setSelectedCategory={setSelectedCategory} />
     
      <Outlet />
    </div>
  );
}

export default App;
