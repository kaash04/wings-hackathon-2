import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Register() {
  return (
    <>
      <div className='Login'>
        <div className='upperButton'>
          <HashLink to='/login'><Button variant='outlined' color='error' sx={{ width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none', borderLeft: 'none' }}>Login</Button></HashLink>
          <HashLink to='/register'><Button variant='outlined' color='error' sx={{ width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none' }}>Register</Button></HashLink>
        </div>
        <div className="loginField">
          <RegisterForm/>
        </div>

      </div>
    </>
  )
}
export default Register