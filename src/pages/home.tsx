import React, { useContext, useState } from 'react';
import Banner from '../components/banner';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { News } from '../components/news';
import Title from '../components/title';
import { Article } from '../components/article';



const articles = [
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p1.jpg"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p2.jpg"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p3.jpg"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p4.jpg"
  }, 
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p5.jpg"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p2.jpg"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p4.jpg"
  }, 
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/p6.jpg"
  }
]

export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [button] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <Banner /> 
      <News />

      <Title title='Lire plus' />

      <div className='in'>
        {
          articles.map((item,index) => (
            <Article
              key={index}
              title={item.title}
              dt={item.dt}
              photo={item.photo}
            />
          ))
        }
        
      </div>

      {/* <div className='out'>
       <LeftCard img={c3}/>
        <RightCard img={c2}/>
      </div> */}
      
        {/* <Popup trigger={button}>
          <h3>Subscribe</h3>
          <p>This where you'll subscribe to join us</p>
        </Popup> */}
           
    <Footer button={button}/>
    </>
  )
}

