import { useNavigate } from 'react-router-dom';

interface articleProps{
  id : number,  
  title : string,
  dt: string,
  photo : string,
  resume : string
}


export const Article = ({title,dt,photo,id}:articleProps) => {

  const nv = useNavigate();
  return (
    <div className='art'>
        <img src={photo} alt="" />
        <div className='cover' 
          onClick={()=> nv('/article/'+id)}
        >
          <p>{dt}</p>
          <h4>{title}</h4>
        </div>
    </div>
  )
}
