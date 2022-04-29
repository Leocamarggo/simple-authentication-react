import { useAuth } from '../contexts/auth';
import { Navigate } from 'react-router-dom';

type PrivateRoutesPropsType = {
  children: JSX.Element
}

const PrivateRoute = ({children}: PrivateRoutesPropsType) => {
	const {signed} = useAuth();
	return signed ? children : <Navigate to='/' />;
};

export default PrivateRoute;