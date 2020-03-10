import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Crown} from '../Asstes/logo.svg'
import './Header.Style.scss'


const Header =()=>(

    <div className="header">
        <Link className='logo-container' to='/'>
            <Crown className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
        </div>
    </div>
)
export default Header