import {api} from '../services/api';
import { IAuthContext, IUserData } from '../interface/auth';
import { ChildrenPropsType } from '../interface/children';
import { createContext, useState, useEffect, useContext } from 'react';
import { eraseCookie, getCookie, setCookie } from '../utils/functionsCookies';
 
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: ChildrenPropsType) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storagedToken = getCookie('@App:token')

    storagedToken && setUser(storagedToken);
  }, []);
  
  async function login(userData: IUserData) {
    try {
      const response = await api.post('/Login', userData);

      setUser(response.data.token);
      setCookie('@App:token', response.data.token, 7)
    } catch (error){
      setUser(null);
    }
  }

  async function logout() {
    setUser(null);
    eraseCookie('@App:token')
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user,  login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
 }