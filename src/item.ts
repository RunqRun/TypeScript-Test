export class Item{
    constructor(private name:string, private age:number){}

    public say(elem: HTMLElement | null) : void{
        if(elem){
            elem.innerHTML = "私は"+this.name+"です。年齢は"+this.age+"歳です。";
        }
    }
}