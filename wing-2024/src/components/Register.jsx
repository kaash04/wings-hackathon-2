import Button from '@mui/material/Button';
import RegisterForm from './RegisterForm';
import { HashLink } from 'react-router-hash-link';

function Register() {
  return (
    <>
      <div className='Login'>
        <div className='upperButton'>
          <HashLink to='/login'><Button variant='outlined' sx={{ width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none', borderColor: 'rgba(127, 121, 121, 0.5)', borderLeft: 'none', color: '#000'}}>Login</Button></HashLink>
          <HashLink to='/register'><Button variant='outlined' sx={{ width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderColor: 'rgba(127, 121, 121, 0.5)', borderRight: 'none', color: '#000'}}>Register</Button></HashLink>
        </div>
        <div className="loginField">
          <RegisterForm/>
        </div>

      </div>
    </>
  )
}
export default Register