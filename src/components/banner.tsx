import React, { useContext } from 'react'
import '../styles/banner.scss'
import { LangContext } from '../context/lang';
import { FaInstagram } from "react-icons/fa";

function Banner() {
  
  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <section className='banner'>
      <h1>les nouvelles les plus recentes</h1>
      <FaInstagram />
    </section>
  )
}

export default Banner