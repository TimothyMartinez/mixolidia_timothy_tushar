import React from 'react';
import '../../App.css';
import Menu from './Menu'

const DropDown = (props) => {
  let menu = null

  if(props.show){
    menu = <Menu/>
  }

  return (
  <div>
    <div className="navwraper" onClick={props.toggleNav}>
      <img className="navbutton" src="images/newspaper.png" alt="button"></img>
      {menu}
    </div>
  </div>
  )
}

export default DropDown;




