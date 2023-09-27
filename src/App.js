import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';
import { AppProvider } from './AppContext.js';
import LoadingPage from './components/LoadingPage.js'; 
import { Outlet } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500); 

    return () => clearTimeout(timer);
  }, []); 
  
  return (
    <AppProvider>
      <div className="App">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <ResponsiveAppBar />
            <Outlet/>
          </>
        )}
      </div>
    </AppProvider>
  );
}

export default App;

