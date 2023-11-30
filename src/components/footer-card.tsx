interface footerCardProps{
    title:string;
    summary:string;
}
const FooterCard = ({title,summary}:footerCardProps) =>{
    return(
        <div className='card'>
            <h4>{title}</h4>
            <p>{summary}</p>
        </div>
    )
}

export default FooterCard;