import React from 'react';
import Hcard from './h-card';
import '../styles/home.scss';
// import {AiOutlineArrowRight} from 'react-icons/ai';
interface rigthCard{
    img:string
}
export default function RightCard({img}:rigthCard) {
  return (
    <div className='rigth-card'>
        
        <div className='notes'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <hr />
            <p>Sed eius consequatur natus, assumenda quisquam maxime! Ex nam provident consequuntur quis adipisci, voluptate quas aut aspernatur autem rerum ea temporibus corrupti!</p>
            <p>Sed eius consequatur natus, assumenda quisquam maxime! Ex nam provident consequuntur quis adipisci, voluptate quas aut aspernatur autem rerum ea temporibus corrupti!</p>
            <p>Sed eius consequatur natus, assumenda quisquam maxime! Ex nam provident consequuntur quis adipisci, voluptate quas aut aspernatur autem rerum ea temporibus corrupti!</p>
            <button> 
                More
            </button>
        </div>
        <div className='picture'>
            {/* <Hcard photo={c1} /> */}
            <img src={img} alt="" />
        </div>
    </div>
  )
}