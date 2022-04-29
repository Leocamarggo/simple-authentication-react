import Home from '../pages/home';
import Login from '../pages/login';
import {PrivateRoutes, PublicRoutes} from './typesRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={  
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } 
      />
      <Route 
        path="/home" 
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        } 
      />
    </Routes>
  </BrowserRouter>
);

export default Routers;