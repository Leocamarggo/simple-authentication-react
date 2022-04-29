import { useContext } from 'react';
import AuthContext from '../contexts/auth';

import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoutes';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;