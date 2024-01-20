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
  <h1>SUBMIT PROJECTS</h1>    
  <div className='SubmitForm'>
        <TextField id="projId" label="Project ID" variant="outlined" />
        <TextField id="projName" label="Project Name" variant="outlined" />
        <TextField id="leadName" label="Lead Name" variant="outlined" />
        <TextField id="teamMem" label="Team Members" variant="outlined" />
        <TextField id="projDesc" label="Project Description" variant="outlined" />
        <TextField id="clg" label="College" variant="outlined" />
        <TextField id="super" label="Supervisor" variant="outlined" />
        {/* <Button variant="outlined">Select File</Button> */}
        <Button component="label" variant="contained" >
  Upload file
  <VisuallyHiddenInput type="file" />
</Button>
        <Button variant="outlined">Submit</Button>
    </div>
  </>
  )
}
export default ProjectSubmit