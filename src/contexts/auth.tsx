import { api } from '../services/api'
import { IAuthContext, IUserData } from '../interface/auth'
import { ChildrenPropsType } from '../interface/children'
import { createContext, useState, useEffect, useContext } from 'react'
import { deleteCookie, getCookie, setCookie } from '../utils/FCookies'

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: ChildrenPropsType) => {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const storagedToken = getCookie('@App:token')

    storagedToken && setUser(storagedToken)
  }, [])

  async function login(userData: IUserData) {
    try {
      const response = await api.post('/login', userData)
      setUser(response.data.token)
      setCookie('@App:token', response.data.token, 7)
    } catch (error) {
      alert('Erro ao fazer Login. Verifique se seu email e senha!')
      setUser(null)
    }
  }

  async function logout() {
    setUser(null)
    deleteCookie('@App:token')
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
