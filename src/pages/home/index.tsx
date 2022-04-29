import { useAuth } from '../../contexts/auth';

const Home = () => {
  const { Logout } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <button onClick={Logout}>Logout</button>
    </>
  );
 };
 
 export default Home;