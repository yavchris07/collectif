import React from 'react'

type titleProps={
    title:string
}
export default function Title({title}:titleProps) {
  return (
    <div className='ti'>
        <p>{title}</p>
        <h3>COLLECTIF DE JEUNE ENGAGE</h3>
    </div>
  )
}
