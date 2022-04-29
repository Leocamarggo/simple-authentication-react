import { useAuth } from '../../contexts/auth';

const Home = () => {
  const { logout } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
 };
 
 export default Home;