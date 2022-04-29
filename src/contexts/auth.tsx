import {api} from '../services/api';
import { IAuthContext, IUserData } from '../interface/auth';
import { ChildrenPropsType } from '../interface/children';
import { createContext, useState, useEffect, useContext } from 'react';
 
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: ChildrenPropsType) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storagedToken = localStorage.getItem('@App:token');

    storagedToken && setUser(JSON.parse(storagedToken));
  }, []);
  
  async function Login(userData: IUserData) {
    try {
      const response = await api.post('/login', userData);
      
      setUser(JSON.stringify(response.data.token));
      localStorage.setItem('@App:token', JSON.stringify(response.data.token));
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