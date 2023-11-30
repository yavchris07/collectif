import React from 'react';
import '../styles/banner1.scss';
import { FaArrowDown } from "react-icons/fa";

interface titleProps{
  title:string;
  summary: string;
  path?:string,
  bg?:string;
}

function BannerShort({title,summary}:titleProps) {
  return (
    <div className='banner1'>
        {/* <p>{path}</p> */}
        <h1>{title}</h1>
        <span> <FaArrowDown style={{color:'green', fontSize:15, padding:6}}/> </span>
        
    </div>
  );
}

export default BannerShort;
