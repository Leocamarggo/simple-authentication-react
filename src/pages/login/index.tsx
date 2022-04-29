import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

const Login = () => {
  const { Login } = useAuth()
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
		try {
			await Login({ email: "eve.holt@reqres.in", password: "cityslicka" });
			navigate('/home');
		} catch (error) {
			alert('Error')
		}
	};

  return (
    <div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;