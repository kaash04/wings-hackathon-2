import React from 'react'
import {HashLink} from'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <HashLink className="navbar-brand" href="/#">Project</HashLink>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
     
      <ul className="nav navbar-nav navbar-right">
        <li><HashLink to='/home'>Home</HashLink></li>
        <li><HashLink to="/projects">Projects</HashLink></li>
        <li><HashLink to="/projectsubmit">Project Submit</HashLink></li>
        <li><HashLink to="/about">About Us</HashLink></li>
        <li><HashLink to="/login">Login</HashLink></li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
