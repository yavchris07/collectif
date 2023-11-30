import React, { ReactNode } from 'react'

interface articleProps{
    title : string,
    dt: string,
    photo : string,
}

export const Article = ({title,dt,photo}:articleProps) => {
  return (
    <div className='art'>
        <img src={photo} alt="" />
        <div className='cover'>
            <p>{dt}</p>
            <h4>{title}</h4>
        </div>
    </div>
  )
}
