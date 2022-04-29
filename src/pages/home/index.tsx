import { useAuth } from '../../contexts/auth';

const Home = () => {
  const { Logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  );
 };
 
 export default Home;