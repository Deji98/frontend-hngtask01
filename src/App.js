import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';
import Sharedlayout from './Pages/Sharedlayout';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Sharedlayout />}>
    <Route index element={<Home />} />
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="*" element={<Error />} />
    </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
