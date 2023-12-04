import React, { useContext } from 'react'
import '../styles/banner.scss'
import { LangContext } from '../context/lang';
import { FaInstagram } from "react-icons/fa";

interface bannerProps {
  title: string
}

function Banner({title}:bannerProps) {
  
  // const { dispatch: { translate }} = useContext(LangContext);

  return (
    <section className='banner'>
      <h1>{title}</h1>
      <FaInstagram />
    </section>
  )
}

export default Banner