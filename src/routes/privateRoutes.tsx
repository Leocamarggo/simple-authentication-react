import Home from '../pages/home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;