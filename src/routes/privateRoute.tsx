import { useAuth } from '../contexts/auth'
import { Navigate } from 'react-router-dom'
import { ChildrenPropsType } from '../interface/children'

const PrivateRoute = ({children}: ChildrenPropsType) => {
	const {signed} = useAuth()
	return signed ? children : <Navigate to='/' />
}

export default PrivateRoute