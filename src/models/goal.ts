export default class Summary{
    id:number;
    title:string;
    summary:string;

    constructor(id:number,title:string,summary:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.summary=summary
    }
}