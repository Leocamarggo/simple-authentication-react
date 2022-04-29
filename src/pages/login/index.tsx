import {useContext, FC} from 'react';
import AuthContext from '../../contexts/auth';

const Login: FC = () => {
 function handleLogin() {}
 const context = useContext(AuthContext);

 return (
   <div>
     <button onClick={handleLogin}>Login</button>
   </div>
 );
};

export default Login;