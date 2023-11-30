import { NavLink } from "react-router-dom"
import Navbar from "../components/navbar"
import { LangContext } from "../context/lang";
import {useContext} from 'react';
import '../styles/app.scss'


export default function Appbar(){
    const { dispatch: { translate }} = useContext(LangContext);
    
    return(
        <>
            <Navbar />
            <div className='app-bar'>
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
        </>
    )
}