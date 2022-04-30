import * as S from './styles'
import { useAuth } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { IUserData } from '../../interface/auth'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
	const [ loginData, setLoginData ] = useState<IUserData>({email: '', password: ''})
  
  const handleSubmit = async () => {
		try {
			await login(loginData)
			navigate('/home')
		} catch (error) {
			alert('Error')
		}
	}

	const updateData = (
		id: 'email' | 'password', 
		event: ChangeEvent<HTMLInputElement>
	) =>{
		id === 'email' ? setLoginData({...loginData, email: event.target.value}) 
		: setLoginData({...loginData, password: event.target.value})
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
					onChange={(e)=> updateData('email', e)}
				/>

				<S.Label htmlFor='password'>SENHA</S.Label>
				<S.Input
					id='password'
					autoComplete='off'
					required
					type='password'
					onChange={(e)=> updateData('password', e)}
				/>
				<S.Button onClick={handleSubmit}>ENTRAR</S.Button>
			</S.Container>
		</S.Box>
	)
}

export default Login