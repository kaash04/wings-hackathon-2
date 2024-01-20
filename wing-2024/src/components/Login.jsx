import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() { 
  return (
  <>
  <h1>Login</h1>    
  <div className='Login'>
        <TextField id="projId" label="Project ID" variant="outlined" />
        <TextField id="projName" label="Project Name" variant="outlined" />
        
        <Button variant="outlined">Submit</Button>
    </div>
  </>
  )
}
export default Login