import { useAuth } from '../contexts/auth';
import { Navigate } from 'react-router-dom';
import { ChildrenPropsType } from '../interface/children';

const PublicRoutes = ({children}: ChildrenPropsType) => {
	const {signed} = useAuth();
	return signed ? <Navigate to='/home' /> : children;
};

export default PublicRoutes