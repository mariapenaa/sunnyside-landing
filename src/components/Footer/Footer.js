import React from 'react'
import './Footer.scss';
import logo from '../../images/logo.svg'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} />
      <ul className="link-list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className="icon-list">
        <li><InstagramIcon className="icon" /></li>
        <li><FacebookIcon className="icon"/></li>
        <li><TwitterIcon className="icon"/></li>
        <li><PinterestIcon className="icon"/></li>
      </ul>
    </div>
  );
}

export default Footer;
