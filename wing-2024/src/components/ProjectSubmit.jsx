import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
function ProjectSubmit() {

  return (
    <>
      <div className='SubmitForm'>
        <TextField className='child inputField' id="projId" label="Project ID" variant="outlined" sx={{ width: '95%' }} />
        <TextField className='child inputField' id="projName" label="Project Name" variant="outlined" sx={{ width: '95%' }} />
        <TextField className='child inputField' id="leadName" label="Lead Name" variant="outlined" sx={{ width: '95%' }} />
        <TextField className='child inputField' id="teamMem" label="Team Members" variant="outlined" sx={{ width: '95%' }} />
        <TextField className='child inputField' id="projDesc" label="Project Description" variant="outlined" sx={{ width: '95%' }} />
        <TextField className='child inputField' id="clg" label="College" variant="outlined" sx={{ width: '95%' }} />
        <TextField className='child inputField' id="super" label="Supervisor" variant="outlined" sx={{ width: '95%' }} />
        {/* <Button variant="outlined">Select File</Button> */}
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <Button className='child' component="label" variant="outlined" sx={{ width: '45%', height: '3.5rem', fontSize: '1.5rem' }}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button className='child' variant="contained" color='success' sx={{ width: '45%', height: '3.5rem', fontSize: '1.5rem' }}>Submit</Button>
        </div>
      </div>
    </>
  )
}
export default ProjectSubmit