export interface IAuthContext {
  logout(): Promise<void>
  signed: boolean
  user: string | null
  login(user: IUserData): Promise<void>
}

export interface IUserData {
  email: string
  password: string
}