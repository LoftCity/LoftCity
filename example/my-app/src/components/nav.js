import React, { Component } from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Nav extends Component{

  render(){

  const navStyle = {
    backgroundColor: "#fafafa", 
    width: '100%' , 
    minHeight: '100%',
  };



  
  return (
    <nav className = "nav">
       <h3 id="logo">LoftCity</h3>
        <ul>
            <Link to={'./vse_kv'}>
            <li>Квартиры</li>
            </Link>
            <Link to ={'./kv'}>
            <li>Информация о квартире</li>
            </Link>
            <Link to={'./'}>
            <li>Главная</li>
            </Link>
        </ul>
    </nav>
  )
}
}

export default Nav;
