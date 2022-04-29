import Home from '../pages/home';
import Login from '../pages/login';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route 
        path="/" 
        element={  
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />
      <Route 
        path="/home" 
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } 
      />
    </Routes>
  </BrowserRouter>
);

export default Routers;