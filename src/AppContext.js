import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    const url = 'https://birdnest-backend-bc7d.onrender.com/birdnests/';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(
      selectedCategory === 'All'
        ? allPosts
        : allPosts.filter((post) => post.category === selectedCategory)
    );
  }, [selectedCategory, allPosts]);

  console.log("Context", { loading, selectedCategory, filteredPosts, fetchPosts })
  return (
    <AppContext.Provider value={{ loading, selectedCategory, setSelectedCategory, filteredPosts, fetchPosts }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
