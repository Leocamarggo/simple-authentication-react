import { useAuth } from '../../contexts/auth'

const Home = () => {
  const { logout } = useAuth()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
 }
 
 export default Home