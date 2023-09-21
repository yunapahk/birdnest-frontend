import {Outlet} from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Outlet/>
    </div>
  );
}

export default App;