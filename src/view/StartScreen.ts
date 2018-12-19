class StartScreen {
    private canvas: Canvas;
    public buttonPressed: boolean;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
    }

    public draw() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.2, 'black', 'center', "Old English Text MT");
        this.canvas.writeTextToCanvas('Vul hier je naam in:', 70, this.canvas.getWidth() / 2, this.canvas.getHeight() / 1.55, 'black', 'center', "Pristina");
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X - 125, this.canvas.getCenter().Y + 250, "Start", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y + 340, "black", "center", "Old English Text MT");
        this.canvas.writeImageToCanvas('./assets/images/emblem-with-a-wind-rose-old-compass-and-sailboat-vector-20874003.png', this.canvas.getWidth()/ 15, this.canvas.getHeight()/ 1.8, 350, 350)
        this.buttonPressed = false;

        document.getElementById("wereld").style.top = '23%'; 
        document.getElementById('wereld').style.left = '40%';
        document.getElementById('wereld').style.width = '20%';
        document.getElementById('wereld').style.height = '40%';

        document.getElementById('name').style.top = '70%';
        document.getElementById('name').style.left = '38%';
        document.getElementById('name').style.width = '24%';
        document.getElementById('name').style.height = '8%';

        window.addEventListener("click", (event: MouseEvent) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X - 125 && event.x < this.canvas.getCenter().X + 125) {
                    if (event.y > this.canvas.getCenter().Y + 250 && event.y < this.canvas.getCenter().Y + 420) {

                        let names = (<HTMLInputElement>document.getElementById('name')); 
                        names.type = "hidden";  
                        // this.player.setName(names.value);
                        PlayerHandler.setName(names.value)
                        console.log(names.value);

                        document.getElementById("wereld").setAttribute('style', 'hidden');
                        this.canvas.clearScreen();
                        ScreenSwitch.draw('europeScreen')
                        // this.player.setName(names.value);
                        this.buttonPressed = true;
                    }
                }
            }
        });
    }

}