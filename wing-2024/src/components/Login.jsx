import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Login() {
  return (
    <>
      <div className='Login'>
        <div className='upperButton'>
          <Button variant='outlined' color='error' sx={{width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none', borderLeft: 'none'}}>Login</Button>
          <Button variant='outlined' color='error' sx={{width: '50%', borderRadius: 0, height: '5rem', fontSize: '1.5rem', borderTop: 'none', borderRight: 'none'}}>Register</Button>
        </div>
        <div className="loginField">
          {/* <LoginForm/> */}
          <RegisterForm/>
        </div>
        
      </div>
    </>
  )
}
export default Login