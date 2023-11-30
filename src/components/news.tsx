import React from 'react'
import Card from './card'
import {Carousel} from 'antd'

export const items = [
    {
        id:1,
        cover:'/img/p1.jpg',
        titre:'La formation des femmes déplacées A KANYARUCHINYA',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos,',
        date:'Le 15 Nov 2023',
        heure:'10h 30'
    },
    {
        id:2,
        cover:'/img/p2.jpg',
        titre:'La formation ..... A Goma',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos',
        date: Date.now(),
        heure:'08h 30'
    },
    {
        id:3,
        cover:'/img/p3.jpg',
        titre:'La suite de formation des femmes déplacées en tissage de perles à Goma',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos',
        date: Date.now(),
        heure:'05h 30'
    },
    {
        id:4,
        cover:'/img/p4.jpg',
        titre:'La suite de formation des femmes déplacées de fabrication de savon liquide de perles à Goma',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos',
        date: Date.now(),
        heure:'05h 30'
    },
    {
        id:5,
        cover:'/img/p5.jpg',
        titre:'La formation des femmes déplacées en tissage bikapo à Goma',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos',
        date: Date.now(),
        heure:'05h 30'
    },
    {
        id:6,
        cover:'/img/p6.jpg',
        titre:'Les jeunes entrepreneurs de Goma',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Alias aperiam rerum voluptatum sint a ad cum ratione tenetur commodi ea, soluta saepe impedit earum quisquam eos',
        date: Date.now(),
        heure:'05h 30'
    }
]

const articles = [
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/pi.png"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/pi.png"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/pi.png"
  },
  {
    title:"formatiion de femme deplace de guerre en tissage de sacs en perle a kinyaruchinya Goma nord-kivu",
    dt:"le 14 nov 2023",
    photo:"/img/pi.png"
  }
]

export const News = () => {
  return (
    <div className='news'>
      <div className='recent'>
        <Carousel autoplay >
              
          {
            items.map((it)=>
              <div className='slider' key={it.id}>
                <img src={it.cover} alt="cover" />
                <div className='pop'>
                  <p>{it.titre}</p>
                  <p>{it.date}</p>
                </div>   
              </div> 
            )
          }
        </Carousel>
      </div>
      <div className='more'>
        <h3>Lire aussi</h3>
          {
            articles.map((art,index) => (
              <Card 
                title={art.title} 
                resume={art.dt}
                logo={art.photo} 
                clas='nex'
                key={index} 
              />    
            ))
          } 
      </div>
    </div>
  )
}
