import { Route, Routes } from 'react-router-dom';
import './App.css';
import One from './pages/One';
import Five from './pages/Five';
import Four from './pages/Four';
import Three from './pages/Three';
import Two from './pages/Two';
import Home from './pages/Home';
import MaterialUI from './pages/MaterialUI';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/PriceGreaterThan10000" element={<Two/>}></Route>
        <Route path="/StartsWithM" element={<Three />}></Route>
        <Route path="/emailDoesNotIncludeAnyDigit" element={<Four/>}></Route>
        <Route path="/DataofTop10Cities" element={<Five/>}></Route>
        <Route path="/lowerThan5" element={<One/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
