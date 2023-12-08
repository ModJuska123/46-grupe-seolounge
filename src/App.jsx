import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListingPage } from "./pages/ListingPage";
import { ServicesPage } from "./pages/ServicesPage";
import { HomePage } from "./pages/HomePage";
import { NoPage } from "./pages/NoPage";
import { RegisterPage } from './pages/RegisterPage';
import { TosPage } from './pages/TosPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/listing' element={<ListingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tos' element={<TosPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;