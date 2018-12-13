class Player {
    private name:string;
    private score:number = 100;

    constructor(){
        
    }

    public getScore():number {
        return this.score
    }

    public scoreMinus(minusAmout: number) {
        this.score -= minusAmout
    }

    public scorePlus(plusAmount: number) {
        this.score += plusAmount
    }

    public setName(name: string) {
        this.name = name
    }
}