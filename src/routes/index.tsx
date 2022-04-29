import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import {PrivateRoutes, PublicRoutes} from './privateRoutes';

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