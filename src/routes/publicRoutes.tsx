import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/login';

const PublicRoutes: React.FC = () => {
 return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
   </BrowserRouter>
 );
};

export default PublicRoutes;