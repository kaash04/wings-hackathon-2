import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import { HashLink } from 'react-router-hash-link';

function Login() {
  return (
    <>
      <div className='Login'>
        <div className='upperButton'>
          <HashLink to='/login'><Button variant='outlined' sx={{ width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none', borderColor: 'rgba(127, 121, 121, 0.5)', color: '#000', borderLeft: 'none' }}>Login</Button></HashLink>
          <HashLink to='/register'><Button variant='outlined' sx={{ width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none', borderColor: 'rgba(127, 121, 121, 0.5)', color: '#000' }}>Register</Button></HashLink>
        </div>
        <div className="loginField">
          <LoginForm/>
        </div>

      </div>
    </>
  )
}
export default Login