declare global {
  namespace NodeJS{
    interface ProcessEnv{
      REACT_APP_BASE_URL_AUTH: string
    }
  }
}
export {}