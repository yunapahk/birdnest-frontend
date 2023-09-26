import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';
import { Outlet } from 'react-router-dom';
import { AppProvider } from './AppContext.js';


function App() {

  
  return (
    <AppProvider>
      <div className="App">
        <ResponsiveAppBar />
        <Outlet />
      </div>
    </AppProvider>
  );
}

export default App;
