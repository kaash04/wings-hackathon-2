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
        <TextField className='child inputField' id="projId" label="Project ID" variant="outlined" />
        <TextField className='child inputField' id="projName" label="Project Name" variant="outlined" />
        <TextField className='child inputField' id="leadName" label="Lead Name" variant="outlined" />
        <TextField className='child inputField' id="teamMem" label="Team Members" variant="outlined" />
        <TextField className='child inputField' id="projDesc" label="Project Description" variant="outlined" />
        <TextField className='child inputField' id="clg" label="College" variant="outlined" />
        <TextField className='child inputField' id="super" label="Supervisor" variant="outlined" />
        {/* <Button variant="outlined">Select File</Button> */}
        <Button className='child' component="label" variant="outlined" >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button className='child' variant="contained" color='success'>Submit</Button>
      </div>
    </>
  )
}
export default ProjectSubmit