import React, { useContext } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { LangContext } from '../context/lang';
import '../styles/bann.scss';
import log from '../assets/IMG_3385-removebg-preview.png';

export const Banne = () => {
    const { dispatch: { translate }} = useContext(LangContext);
  return (
    <div className='bn'>
        <div className='bnn'>
            <div className='child'>
                <span>+243 852 884 862</span>{' '}<span>+243  800 000 000</span>
            </div>
            <div className='so'>
                <FaFacebook />
                <FaLinkedin />
                <FaXTwitter />
                <FaInstagram />
            </div>
        </div>

        <div className='logo'>
            <div className='icon'>
                <img src={log} alt="" />
            </div>
            <p>L'humanité a besoin de nous</p>
        </div>

    </div>
  )
}
