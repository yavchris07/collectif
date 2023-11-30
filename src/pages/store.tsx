import React, { useContext, useState } from 'react';
import BannerShort from '../components/banner-short';
import { MdOutlineDownloading } from 'react-icons/md';
import Card from '../components/card';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { LangContext } from '../context/lang';


export default function Store() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [on] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <BannerShort 
       title={translate('store')}
        summary=''
      />
      <br />
      <MdOutlineDownloading style={{fontSize:40}}/>
        
      <Card 
        title='' 
        resume={translate('site')}   
        clas='store-card'
      />
     
      <Footer button={on}/>
    </>
  )
}
