import { Link } from 'react-scroll';
import resume from '../../assets/JakariahHossainSani-Resume.pdf';
import './Header.css'


const Header = () => {
    const navItem = <>
    <li><Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
    <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
    <li><Link to="skill" spy={true} smooth={true} offset={50} duration={500}>Skill</Link></li>
    <li><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
    <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
    </>

    return (
        <div className="navbar primary-background-color">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="nav-item menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
                {navItem}
            </ul>
            </div>           
              <a className="btn btn-ghost normal-case text-xl primary-text-color">S A N I</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu nav-item2 menu-horizontal px-1 primary-text-color text-lg">
                {navItem}
            </ul>
        </div>
        <div className="navbar-end">
            <a href={resume} download className="btn">My Resume</a>
        </div>
        </div>
    );
};

export default Header;