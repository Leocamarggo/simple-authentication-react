export interface IAuthContext {
  Logout(): Promise<void>;
  signed: boolean;
  user: string | null;
  Login(user: object): Promise<void>;
}

export interface IUserData {
  email: string
  password: string
}