import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import IT from '../models/article-data';
import Articles from '../models/articles';
import '../styles/art.scss';
import Footer from '../components/footer';
import { FaInstagram } from "react-icons/fa";

const Article = () => {

    const {id} = useParams<string>();
    const vl = parseInt(id!)
    const [articles] = useState<Articles[]>(IT);
    let art = articles[vl];
    console.log('article : ',art);

    return (
        <>
          <Navbar />

          <Banner title={art.title}/>
          <div className='xart'>
            <div className='ph'>
              <img src={art.photo} alt="photo" />
            </div>
            <div className='p'>
              <span>
                <FaInstagram />
                {art.dt}
              </span>
              <p>{art.resume}</p>
            </div>
          </div>  

          <Footer /> 
        </>
    )
}

export default Article