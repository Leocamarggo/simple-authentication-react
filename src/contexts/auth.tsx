import {api} from '../services/api';
import { createContext, useState, useEffect, useContext } from 'react';

type AuthPropsType = {
  children: JSX.Element
}
interface AuthContextData {
  Logout(): Promise<void>;
  signed: boolean;
  user: string | null;
  Login(user: object): Promise<void>;
 }
 
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthPropsType) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken) {
      setUser(storagedToken);
    }
  }, []);
  
  async function Login(userData: object) {
    try {
      const response = await api.post('/login', userData);
      setUser(response.data.token);
      localStorage.setItem('@App:token', response.data.token);
    } catch (error){
      setUser(null);
    }
  }

  async function Logout() {
    setUser(null);
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