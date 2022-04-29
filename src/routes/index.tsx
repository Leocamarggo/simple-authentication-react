import Home from '../pages/home';
import Login from '../pages/login';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={  
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