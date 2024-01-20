import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RegisterForm() {
    return (
        <>
            <TextField id="id" label="USERNAME" variant="outlined" sx={{ width: '70%', border: 'none !important', backgroundColor: 'rgba(100, 101, 101, 0.130)', marginTop: '3rem' }} />
            <TextField id="pass" label="PASSWORD" variant="outlined" sx={{ width: '70%', border: 'none !important', backgroundColor: 'rgba(100, 101, 101, 0.130)' }} />
            <TextField id="id" label="CONFIRM PASSWORD" variant="outlined" sx={{width: '70%', border: 'none !important', backgroundColor: 'rgba(100, 101, 101, 0.130)'}} />
            <TextField id="pass" label="COLLEGE ID" variant="outlined" sx={{width: '70%', border: 'none !important', backgroundColor: 'rgba(100, 101, 101, 0.130)'}} />
            <Button variant="contained" color='success' sx={{ width: '50%', height: '4rem', fontSize: '1.5rem' }}>Submit</Button>
        </>
    )
}
export default RegisterForm