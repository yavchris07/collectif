import React, { useContext, useState } from 'react';
import '../styles/footer.scss';
import { LangContext } from '../context/lang';
import FooterCard from './footer-card';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";

export default function Footer() {

  // const [sum] = useState<Summary[]>(SUM);
  const { dispatch: { translate }} = useContext(LangContext);

  return (
    <div className='f'> 

      <div className='container'> 

        <div className='card'>
          <h4>Contacts</h4>
          <p><FaPhoneAlt /> +243 852 884 862</p>
          <p><MdOutlineLocalPhone /> +243 800 000 000</p>
          <p><FaPhoneAlt /> +243 900 000 000</p>
        </div>

        <div className='card'>
          <h4>Addresses</h4>
          <p><BsGeoAltFill /> Goma - North kivu</p>
          <p>Commune de Goma</p>
          <p>Quartier</p>
          <p><BsGeoAltFill /> Kinshasa - RDC</p>
          <p>Commune de Limités funa</p>
          <p>Avenue maçon 3036</p>
        </div>

         <FooterCard
            // title={translate('vision')}
            title='E-mails'
            summary='infos@asblcollectidesjeunes.org  asblcollectidesjeunes@gmail.com'
          />
      </div>

      <div className='foot'>
        <span>{translate('copyright')}</span>
        <div className='so'>
          <FaFacebook />
          <FaLinkedin />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>

    </div>
  )
}
