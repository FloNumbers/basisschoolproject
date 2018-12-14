class StartScreen {
    private canvas: Canvas;
    public buttonPressed: boolean;
    private europeScreen: EuropeScreen;
    private player: Player;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.europeScreen = new EuropeScreen(canvasElement);
        this.player = new Player();
    }

    public draw() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.2, 'black', 'center', "Old English Text MT");
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X - 125, this.canvas.getCenter().Y + 250, "Start", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y + 340, "black", "center", "Old English Text MT");
        this.buttonPressed = false;

        document.getElementById("wereld").style.top = '25%'; /* DIT DOEN VOOR PLAATSING */
        document.getElementById('wereld').style.left = '40.6%';

        document.getElementById('name').style.top = '65%';
        document.getElementById('name').style.left = '40.2%';

        document.getElementById('compass').style.top = '60%';
        document.getElementById('compass').style.left = '6.5%';

        window.addEventListener("click", (event: MouseEvent) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X - 125 && event.x < this.canvas.getCenter().X + 125) {
                    if (event.y > this.canvas.getCenter().Y + 250 && event.y < this.canvas.getCenter().Y + 420) {
                        let names = (<HTMLInputElement>document.getElementById('name')); 

                        console.log(names.value);
                        names.type = "hidden";  
                        document.getElementById("wereld").setAttribute('style', 'hidden');
                        document.getElementById("compass").setAttribute('style', 'hidden');
                        this.canvas.clearScreen();
                        this.europeScreen.draw();
                        this.player.setName(names.value);
                        this.buttonPressed = true;

                    }
                }
            }
        });
    }

}