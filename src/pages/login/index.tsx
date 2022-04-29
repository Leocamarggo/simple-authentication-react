import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { Login } = useAuth()

  return (
    <div>
      <button onClick={Login}>Login</button>
    </div>
  );
};

export default Login;