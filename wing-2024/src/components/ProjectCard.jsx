import React from 'react';
import Divider from '@mui/material/Divider';
// id name lead mem clg supervisor desc  
function ProjectCard(props) {
    return (
        <div style={{
            backgroundColor: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            paddingTop: '1rem',
            marginBottom: 10,
            borderRadius: '1rem',
            boxShadow: '9px 9px 15px #c1c1c1,inset 3px 3px 15px #c1c1c1 ',
            width: '60vw',
            height: '50vh',
            marginLeft: '3vw',
            marginRight: '3vw'
        }}>
            <span style={{
                fontWeight: '900', fontSize: '3.1rem', margin: '1.5rem 2.5rem 0.3rem 2.5rem', fontFamily: "'Ubuntu', sans-serif !important", textAlign: 'center'
            }}>
                {props.id}  •  {props.name}
            </span>
            <Divider sx={{ width: '80%', margin: '0.1rem 0', alignSelf: 'center' }} />
            <span style={{ fontSize: '1.6rem', color: '#666', margin: '2rem 3rem 1.5rem 5rem' }}>
                Project Lead Name: {props.lead}
            </span>
            <span style={{ fontSize: '1.6rem', color: '#666', margin: '2rem 3rem 1.5rem 5rem' }}>
                Project Members: {props.mem}
            </span>
            <span style={{ fontSize: '1.6rem', color: '#666', margin: '2rem 3rem 1.5rem 5rem' }}>
                College: {props.clg}
            </span>
            <span style={{ fontSize: '1.6rem', color: '#666', margin: '2rem 3rem 1.5rem 5rem' }}>
                Project Supervisor: {props.supervisor}
            </span>
            <span style={{ fontSize: '1.6rem', color: '#666', margin: '2rem 3rem 1.5rem 5rem' }}>
                Project Description: {props.desc}
            </span>
        </div>
    )
}

ProjectCard.defaultProps = {
    id: -1,
    name: "NULL",
    lead: "NA",
    mem: "NA",
    clg: "NA",
    supervisor: "NA",
    desc: "NA"
}

export default ProjectCard;