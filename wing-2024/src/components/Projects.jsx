import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <div className="projMain">
        <div className='projDiv'>
          <TextField id="projId" label="Project ID" variant="outlined" />
          <Button className='child' variant="contained" color='warning' sx={{ width: '18rem', height: '4.2rem', fontSize: '1.5rem' }}>Search</Button>
        </div>

        <ProjectCard/>
      </div>
    </>
  )
}

export default Projects
