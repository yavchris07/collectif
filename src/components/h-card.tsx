import {BiBookBookmark} from 'react-icons/bi'
interface CardProps{
    title?:string;
    type?: string;
    photo:string

}
export default function Hcard({title,type,photo}:CardProps){
    return(
        <div className="h-card">
            <div className="h-pic">
                <img src={photo} alt="" />
            </div>
            <div className='not'>
                <div>
                    <h1>{title}</h1>
                    <p>{type}</p>
                </div>
                {/* <BiBookBookmark /> */}
            </div>
        </div>
    )
}