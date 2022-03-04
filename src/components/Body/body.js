import React from 'react';
import beach from '../../images/beach.jpg';

function Body() {
    return (
     <div style={{ backgroundImage: `url(${beach})`, backgroundSize: 'cover' }} />
    )
  }
  
  export default Body;