import {api} from '../services/api';
import { createContext, useState, useEffect, useContext } from 'react';


type AuthPropsType = {
  children: JSX.Element
}
interface AuthContextData {
  Logout(): void;
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
 }
 
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthPropsType) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser({teste: storagedUser});
      api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
    }
  }, []);
  
  async function Login(userData: object) {
    const response = await api.post('/login', userData);
    setUser({teste: response.data.id});

    localStorage.setItem('@App:user', response.data.token);
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

export function useAuth(){
  const context = useContext(AuthContext);
 
  return context;
 }