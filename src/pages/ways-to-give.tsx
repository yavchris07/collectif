import React, { useContext, useState } from 'react'
import BannerShort from '../components/banner-short'
import Card from '../components/card';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/way.scss';

const mobilep = [
  {
    title:"Airtel money",
    clas:"mobile-payement"
  },
  {
    title:"Orange money",
    clas:"mobile-payemento"
  },
  {
    title:"Frimoney",
    clas:"mobile-payementq"
  },
  {
    title:"M Pesa",
    clas:"mobile-payementv"
  }
]


export default function WaysToGive() {

  const { dispatch: { translate }} = useContext(LangContext);  
  const [button] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <BannerShort title={translate('way')} summary=''/>
 
      <div className='pays'>
         <div className='form'>
          <h1>Identifiez vous</h1>
          <form action="" method="post">
            <div className='control'>
              <label htmlFor="">Nom</label>
              <input type="text" placeholder='Votre nom'/>
            </div>
            <div className='control'>
              <label htmlFor="">Postnom</label>
              <input type="text" placeholder='Votre postnom'/>
            </div>
            <div className='control'>
              <label htmlFor="">Prenom</label>
              <input type="text" placeholder='Votre prenom'/>
            </div>
            <div className='control'>
              <label htmlFor="">Adresse mail</label>
              <input type="text" placeholder='Votre adresse mail'/>
            </div>
            <div className='control'>
              <label htmlFor="">Numéro de téléphone</label>
              <input type="text" placeholder='Votre numéro de téléphone'/>
            </div>
            <br />
            <button>Soumettez</button>
          </form>
         </div>

         <div className='money'>
          <h1>Via le payement mobile</h1>
          {
            mobilep.map((item,index) => (
              <Card title={item.title} resume='' clas={item.clas} key={index}/>
            ))
          }
         </div>
      </div>
   
      <Footer button={button}/>
    </>
  )
}
