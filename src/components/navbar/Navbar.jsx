import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav>
        <img src="images/fs-logo.png" alt="" id='img1'/>
        <div className='navCOnt' id={show ? 'hidde' : ''}>
        <div class="left">
                <ul>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">FSmart Club</a></li>
                    <li><a href="#">Earn</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Web3 Accelerator</a></li>
                </ul>
            </div>
            <div class="right">
                <button>Open the app</button>
            </div>

        </div>
    
        <img src="images/Menu.png" alt="" id='img2' onClick={()=> setShow(!show)}/>
    </nav>

  )
}

export default Navbar
