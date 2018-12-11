class Game {
    private canvas:Canvas;
    private mathHelper:MathHelper;
    private question:Question;
    private player:Player;
    private highscore:Highscore;
    private introText:IntroText;
    private startScreen:StartScreen;
    private europeScreen:EuropeScreen;
    private countryScreen:CountryScreen;
    private shopScreen:ShopScreen;


    constructor(){
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas")
        this.canvas = new Canvas(canvasElement);
        this.mathHelper = new MathHelper;
        this.question = new Question;
        this.player = new Player;
        this.highscore = new Highscore;
        this.introText = new IntroText;
        this.startScreen = new StartScreen;
        this.europeScreen = new EuropeScreen;
        this.countryScreen = new CountryScreen;
        this.shopScreen = new ShopScreen;
    }
     public draw(){
        this.startScreen.draw();
        this.europeScreen.draw();
        this.countryScreen.draw();
        this.shopScreen.draw();
    }
    public gameLoop() {
        window.setInterval(() => this.draw(), 1000 / 60);
    }
}
window.addEventListener("load", init);
function init(): void {
    const spelletje = new Game();
    spelletje.gameLoop();

}