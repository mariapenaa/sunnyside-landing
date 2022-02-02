import React, {useState} from 'react'
import './Header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/logo.svg'

const Header = () => {
    const headerList = [
        'About',
        'Services',
        'Projects',
        'Contact'
    ]
    const [open, setOpen] = useState(false)
    return (
        <div className="headerContainer d-flex justify-content-between align-items-center">
            <a href="#top"><img src={logo}/></a>
            <MenuIcon className="burgerIcon" onClick={()=>setOpen(!open)}/>
            <ul className="dList">
                {headerList.map(e=>(
                    <li className={e=='Contact' ? 'contactWhite' : ''}>{e}</li>
                ))}
            </ul>
            <div className={open ? 'popup display' : 'popup displayNone'}>
                {headerList.map(e=>(
                    <p className={e=='Contact' ? 'contact' : ''}>{e}</p>
                ))}
            </div>
        </div>
    );
}

export default Header;
