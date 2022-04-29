import api from '../services/api';
import { createContext, useState, useEffect } from 'react';


type AuthPropsType = {
  children: JSX.Element
}
interface AuthContextData {
  Logout(): void;
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
 }
 
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthPropsType) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
    }
  }, []);
  
  async function Login() {
    const response = await api.post('/login', {
      email: "eve.holt@reqres.in",
      password: 'cityslicka',
    });
    setUser(response.data.id);

    localStorage.setItem('@App:user', JSON.stringify(response.data.id));
    localStorage.setItem('@App:token', response.data.token);
  }

  function Logout() {
    setUser(null);

    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user,  Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;