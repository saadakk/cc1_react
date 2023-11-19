import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { themeContext } from '../context'


export default function NavResp(props) {
    const {dark,setdark}= useContext(themeContext)
    const toggle= ()=>{
          setdark(!dark)
          console.log(dark)
    }
    if(dark){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
}

  return (
    <>
    
    <nav className='bg-primary'>
        <ul className="row mr-auto mt-2 mt-lg-0 d-flex justify-content-center">
            <li className='col-2'>
                <Link to="/" >Home</Link>
            </li>
            <li  className='col-2'>
                <Link to="/calculatrice">calculator</Link>
            </li>
            <li className="col-2">
                <Link to="/slide">Slider</Link>
            </li>
            <li className="col-2">
                <Link to="/todolist">todo</Link>
            </li>
            <li className="col-2">
                <Link to="/api">Api</Link>
            </li>
            <li className="col-2">
                <Link to="/multilang">multilang</Link>
            </li>
            <li className="col-2">
                <button onClick={toggle}>dark</button>
            </li>
        </ul>
    </nav>
    <br/>
    </>
  )
}