import Home from '../pages/home'
import Login from '../pages/login'
import theme from '../styles/theme'
import PublicRoute from './publicRoute'
import PrivateRoute from './privateRoute'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routers = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
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
  </ThemeProvider>
)

export default Routers