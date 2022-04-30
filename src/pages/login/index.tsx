import * as S from './styles'
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

  return (
		<S.Box>
			<S.Container>
				<S.Label htmlFor='email'>E-MAIL</S.Label>
				<S.Input
					id='email'
					autoComplete='off'
					required 
					type='text'
				/>

				<S.Label htmlFor='password'>SENHA</S.Label>
				<S.Input
					id='password'
					autoComplete='off'
					required
					type='password'
				/>
				<S.Button onClick={handleSubmit}>ENTRAR</S.Button>
			</S.Container>
		</S.Box>
	)
}

export default Login