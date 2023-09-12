import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home/page/HomePage';
import Navbar from './shared/components/navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
