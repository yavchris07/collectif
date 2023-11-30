import React, { useState } from 'react';
import '../styles/trans-list.scss'
// import Transport from '../models/trans';
// import TRANSPORT from '../models/trans-data';

function CardList() {

//   var [transport]=useState<Transport[]>(TRANSPORT);
  return (
    <div className='transport-list'>
      {/* {
        transport.map((trans,index)=>(
          <div className='trans' key={index}>
            <div className='cover'>
              <img src={trans.photo} alt="pictur" />
            </div>
            <div className='detail'>
              <h4>Depart:  {trans.depart}</h4>
              <h5>Destination: {trans.destination}</h5>
              <h6>durée: {trans.duration}</h6>
            </div>
          </div>
        ))
      } */}
    </div>
  );
}

export default CardList;