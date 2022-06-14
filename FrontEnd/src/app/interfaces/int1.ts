export interface Int1 {
    id:number;
    title:string;
    price:number;

    _links:{
        self: {
        href: string;
        },
        sport: {
        href: string;
        }
    }
}