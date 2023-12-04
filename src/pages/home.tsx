import React, { useContext, useState } from 'react';
import Banner from '../components/banner';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { News } from '../components/news';
import Title from '../components/title';
import { Article } from '../components/article';
import Articles from '../models/articles';
import IT from '../models/article-data';



// const articles = [
//   {
//       id:1,
//       title:"La formation de femmes déplacées de guerre du camps de kanyaruchinya en tissage de sacs en plastique <<kikapo>>",
//       dt:"le 14 nov 2023",
//       photo:"/img/p1.jpg"
//   },
//   {
//       id:2,
//     title:"formation de femme déplacées de guerre en tissage de sacs en perle au camps de kinyaruchinya Goma nord-kivu",
//     dt:"le 14 nov 2023",
//     photo:"/img/p2.jpg"
//   },
//   {
//       id:3,
//     title:"les femmes déplacées de guerre sont formées en savonnerie à Goma nord-kivu",
//     dt:"le 14 nov 2023",
//     photo:"/img/p3.jpg"
//   },
//   {
//       id:4,
//     title:"bonne nouvelles la formation en art et en savonnerie en faveur des femmes et filles se tiendra au camp,du 08 au 22 novembre 2023",
//     dt:"le 14 nov 2023",
//     photo:"/img/p4.jpg"
//   }, 
//   {
//       id:5,
//     title:"une marche de santé à Goma le 22 octobre 2023 avec comme thème pamoja tuko nguvu vijana wa goma",
//     dt:"le 22 oct 2023",
//     photo:"/img/p5.jpg"
//   },
//   {
//       id:6,
//     title:"un paix a été partagé par l'asbl avec plusieurs dizaines d'enfants deminus et déplacés de guerre, temoins de massacre",
//     dt:"le 5 nov 2023",
//     photo:"/img/p2.jpg"
//   },
//   {
//       id:7,
//     title:"l'asbl collectif des jeunes engagés apporte  son soutien aux personnes de troisième age à kitambo / kinshasa",
//     dt:"le 14 dec 2022",
//     photo:"/img/p4.jpg"
//   }, 
//   {
//       id:8,
//     title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
//     dt:"le 14 nov 2023",
//     photo:"/img/p6.jpg"
//   }
// ]

export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  // const [button] = useState<boolean>(false);
  const [articles] = useState<Articles[]>(IT);

  
  return (
    <>
      <Navbar />
      <Banner title='les nouvelles les plus recentes'/> 
      <News />

      <Title title='Lire plus' />

      <div className='in'>
        {
          articles.map((item) => (
            <Article
              key={item.id}
              title={item.title}
              dt={item.dt}
              photo={item.photo} 
              id={item.id} 
              resume={''} 
            />
          ))
        }
      </div>
         
      <Footer />
    </>
  )
}

