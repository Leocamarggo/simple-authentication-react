import { useAuth } from '../contexts/auth';
import { Navigate } from 'react-router-dom';

type PrivateRoutesPropsType = {
  children: JSX.Element
}


export const PrivateRoutes = ({children}: PrivateRoutesPropsType) => {
	const {signed} = useAuth();
	return signed ? children : <Navigate to='/' />;
};

export const PublicRoutes = ({children}: PrivateRoutesPropsType) => {
	const {signed} = useAuth();
	return signed ? <Navigate to='/home' /> : children;
};
