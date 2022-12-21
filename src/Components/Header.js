
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {


   
    return (
  <div className='header'>
    <div className='crack'>
        <h2 className="heading">Ed-tech-field</h2>
    </div>
      <div className='topics'>
     

        <button className="btn"><Link to='/'>Home</Link></button>
<button className="btn btn-primary"><Link to='/FAQ'>FAQ</Link></button>
<button className="btn btn-secondary"><Link to='/Vlog'>Vlog</Link></button>
<button className="btn btn-accent"><Link to='/Courses'>Courses</Link></button>




    </div>
    
  </div>

 
  



      
    );
};

export default Header;