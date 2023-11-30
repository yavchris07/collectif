import React, { useContext, useState } from 'react';
import BannerShort from '../components/banner-short';
import Card from '../components/card';
import '../styles/about.scss'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
 

export default function About() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [on] = useState<boolean>(false);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        // path='• Home • about'
        title={translate('who')} 
        summary="" />

      <div className='about-card-list'>
        <Card 
          title="Qui sommes nous !" 
          // resume={translate('who-text')}
          resume="Le collectif des jeunes est une association sans but lucratif composé des jeunes du Kivu et de Kinshasa, en RDC qui ont eu l’idée de se mettre en harmonie avec les personnes vulnérables, femmes, filles (déplacées de guerre), enfants de la rue et les personnes vivant avec handicap dans le but de les rendre autonomes financièrement et les aider des plusieurs manières Nous apportons du soutiens et des formations gratuites avec pour but de rendre les personnes en difficultés autonomes et en mesure de ses prendre en charge. La guerre a un impact économique dévastateur sur les femmes et les jeunes filles au Nord-Kivu, en République démocratique du Congo. Le conflit a entraîné un déplacement massif de population, la destruction des infrastructures et l'effondrement de l'économie. Les femmes et les jeunes filles sont particulièrement vulnérables aux effets économiques de la guerre. Elles sont souvent les principales pourvoyeuses de soins dans leur famille et elles sont souvent victimes de violences sexuelles et de genre, ce qui les empêche de travailler ou de poursuivre leurs études. " 
          clas='p'
        />
        <Card 
          title= "Objectif global"
          resume= "Contribuer à l’autonomisation économique des jeunes filles et femmes déplacées de guerre, enfants et personne vivant avec handicap à travers l’apprentissage des métiers et des formations."
          clas='p' 
        />
        <Card 
          title= "Objectifs spécifiques "
          resume= "• Soutenir les femmes et jeunes filles à être financièrement autonomes. • Contribuer à réduire la pauvreté, à promouvoir l'égalité des sexes et à créer une paix durable. • Aider les femmes et les jeunes filles déplacées au Nord-Kivu à améliorer leur situation économique, coopérer à l’épanouissement des enfants de la rue et des personnes vivant avec handicap. "
          clas='p'
        />
      </div>
      
      <Footer button={on}/>
    </>
  )
}
