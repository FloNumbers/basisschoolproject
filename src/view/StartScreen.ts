class StartScreen {
    private canvas: Canvas; 
    public buttonPressed: boolean;
    private game: Game;
    private europeScreen:EuropeScreen;

    constructor(){
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.europeScreen = new EuropeScreen(canvasElement);
    }

    public draw(){
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 100, this.canvas.getWidth()/ 2, this.canvas.getHeight()/ 6, 'black', 'center');
        this.canvas.writeButtonToCanvas("../assets/images/buttonYellow.png",this.canvas.getCenter().X -111, this.canvas.getCenter().Y -30,"Start",35,this.canvas.getCenter().X,this.canvas.getCenter().Y,"black","center");
        window.addEventListener("click", (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X -111  && event.x < this.canvas.getCenter().X + 111) {
                if (event.y > this.canvas.getCenter().Y -30 && event.y < this.canvas.getCenter().Y +30) {
                    this.canvas.clearScreen();
                    this.europeScreen.draw();
                    //hier functie voor de pagina.
                    
                }
            }
        });
    }

    
}