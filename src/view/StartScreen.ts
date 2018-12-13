class StartScreen {
    private canvas: Canvas;
    public buttonPressed: boolean;
    private game: Game;
    private europeScreen: EuropeScreen;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.europeScreen = new EuropeScreen(canvasElement);
    }

    public draw() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.3, 'black', 'center', "Old English Text MT");
        this.canvas.writeButtonToCanvas("../assets/images/buttonYellow.png", this.canvas.getCenter().X - 111, this.canvas.getCenter().Y + 100, "Start", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y + 130, "black", "center", "Old English Text MT");
        this.buttonPressed = false;
        window.addEventListener("click", (event: MouseEvent) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X - 111 && event.x < this.canvas.getCenter().X + 111) {
                    if (event.y > this.canvas.getCenter().Y + 100 && event.y < this.canvas.getCenter().Y + 139) {
                        let names = (<HTMLInputElement>document.getElementById('name'));
                        console.log(names.value)
                        names.type = "hidden"
                        this.canvas.clearScreen();
                        this.europeScreen.draw();
                        //hier functie voor de pagina.
                        this.buttonPressed = true;

                    }
                }
            }
        });
    }

}