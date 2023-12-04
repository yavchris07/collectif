import IT from "./article-data";

export default class Article{
    id:number;
    title:string;
    resume:string;
    photo:string;
    dt:string;


    constructor(id:number,title:string,photo:string,resume:string,dt:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.photo=photo
        this.resume=resume,
        this.dt=dt
    }
}