import { useAuth } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  
  const handleSubmit = async () => {
		try {
			await login({ email: "eve.holt@reqres.in", password: "cityslicka" })
			navigate('/home')
		} catch (error) {
			alert('Error')
		}
	}

  return <button onClick={handleSubmit}>Login</button>
}

export default Login