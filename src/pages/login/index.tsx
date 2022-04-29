import {useContext, FC} from 'react';
import AuthContext from '../../contexts/auth';

const Login: FC = () => {
  const context = useContext(AuthContext);
  function handleLogin() {context.Login()}

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;