import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';
import log from '../assets/IMG_3385-removebg-preview.png';
import {CgMenuRightAlt} from 'react-icons/cg'
import Header from './header';
import { useContext } from 'react';
import { LangContext } from '../context/lang';
import { Banne } from './banne';


// interface NavbarProps {
//   translate: (key: string) => string;
// }

export default function Navbar() {

  const { dispatch: { translate }} = useContext(LangContext);

  return (
    <>
    <Banne />
    <nav>
    {/* <div className='icon'>
      <img src={log} alt="" />
    </div> */}
    <div className='items'>
      <ul>
        <li>
          <NavLink 
            to={'/'} 
            className='link'
          >
            {translate('home')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/about'} 
            className='link'
          >
            {translate('about')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/our-programs'} 
            className='link'
          >
            {translate('programs')}
          </NavLink>
        </li>
       
        <li>
          <NavLink 
            to={'/get-involved'} 
            className='link'
          >
            {translate('get-involved')}
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to={'/store'} 
            className='link'
          >
            {translate('store')}
          </NavLink>
        </li> */}

        <li>
          <NavLink 
            to={'/way-to-give'} 
            className='link'
          >
            {translate('way-to-give')}
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to={'/donate'} 
            className='link'
          >
            {translate('donate')}
          </NavLink>
        </li> */}
      </ul>
    </div>

    {/* <div className='langs'>
      <span>
        <IoLanguage />
      </span>
    </div> */}
    {/* <Header /> */}

    <div className='option'>
      <NavLink 
        to={'/app-bar'}
      >
        <CgMenuRightAlt style={{color:'white'}} />
      </NavLink>
    </div>
  </nav>
  </>
  )
}
