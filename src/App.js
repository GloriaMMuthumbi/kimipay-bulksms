import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/services' element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
