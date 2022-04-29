import Login from '../pages/login';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

const PublicRoutes = () => {
 return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   </BrowserRouter>
 );
};

export default PublicRoutes;