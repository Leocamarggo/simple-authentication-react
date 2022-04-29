import { useAuth } from '../contexts/auth';
import { Navigate } from 'react-router-dom';

type RoutesPropsType = {
  children: JSX.Element
}

const PublicRoutes = ({children}: RoutesPropsType) => {
	const {signed} = useAuth();
	return signed ? <Navigate to='/home' /> : children;
};

export default PublicRoutes