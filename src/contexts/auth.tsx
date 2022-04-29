import {api} from '../services/api'
import { IAuthContext, IUserData } from '../interface/auth'
import { ChildrenPropsType } from '../interface/children'
import { createContext, useState, useEffect, useContext } from 'react'
import { eraseCookie, GetCookie, SetCookie } from '../utils/FCookies'
 
const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: ChildrenPropsType) => {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const storagedToken = GetCookie('@App:token')

    storagedToken && setUser(storagedToken)
  }, [])
  
  async function login(userData: IUserData) {
    try {
      const response = await api.post('/Login', userData)

      setUser(response.data.token)
      SetCookie('@App:token', response.data.token, 7)
    } catch (error){
      setUser(null)
    }
  }

  async function logout() {
    setUser(null)
    eraseCookie('@App:token')
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user,  login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
 }