import { ReactNode } from "react"

interface cardProps{
    title : string,
    resume: string,
    icon? : ReactNode,
    logo?:string,
    clas:string
}

export default function Card({title,resume,clas,logo}:cardProps){
    return(
        <div className={clas}>
            <div className="pic">
              <img src={logo} alt="" />  
            </div>
            <div className="note">
                <h2>{title}</h2>
                <p>{resume}</p>
            </div>
        </div>
    )
}