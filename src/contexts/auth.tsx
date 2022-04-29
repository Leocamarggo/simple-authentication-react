import api from '../services/api';
import { createContext, useState } from 'react';


type AuthPropsType = {
  children: JSX.Element
}
interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
 }
 
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthPropsType) => {
  const [user, setUser] = useState<object | null>(null);
  
  async function Login() {
    const response = await api.post('/login', {
      email: 'example@email.com',
      password: '123456',
    });
    setUser(response.data.user);
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user,  Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;