import { createContext } from 'react';

const AuthContext = createContext({});

type AuthPropsType = {
  children: JSX.Element
}
export const AuthProvider = ({ children }: AuthPropsType) => {
 return (
   <AuthContext.Provider value={{ signed: true }}>
     {children}
   </AuthContext.Provider>
 );
};

export default AuthContext;