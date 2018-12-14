class EuropeScreen extends Mapview {

    private europeMap: HTMLImageElement
    private countryScreen: CountryScreen;
    private buttonPressed: boolean;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.canvas.colorClick()
        this.europeMap = new Image()
        this.europeMap.src = './assets/images/mapEurope.png'
        this.countryScreen = new CountryScreen(canvas);
        this.clickCountry()
    }

    public draw() {
        this.canvas.writeImageToCanvasPreload(this.europeMap, 55, 80, this.canvas.getHeight() - 80, this.canvas.getHeight() - 80)
        this.canvas.getSelectedCountry()
        console.log(this.canvas.getSelectedCountry())
        this.canvas.writeTextToCanvas('Kies een land om te beginnen!', 35, this.canvas.getCenter().X + 211, 200, "black", "center", "Old English Text MT")

        // if (this.canvas.getSelectedCountry() == 'Nederland') {
        // this.canvas.writeButtonToCanvas("./assets/images/buttonYellow.png", this.canvas.getCenter().X + 100, this.canvas.getCenter().Y + 100, "Start", 35, this.canvas.getCenter().X + 211, this.canvas.getCenter().Y + 130, "black", "center", "Old English Text MT");
        // }
        this.buttonPressed = false;

    }

    private clickCountry() {
        window.addEventListener("click", (event: MouseEvent) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X + 100 && event.x < (this.canvas.getCenter().X + 100) + 222) {
                    if (event.y > this.canvas.getCenter().Y + 100 && event.y < this.canvas.getCenter().Y + 139) {
                        if (this.canvas.getSelectedCountry() == 'Nederland') {
                            this.buttonPressed = true;
                            this.canvas.resetSelectedCountry()
                            this.canvas.clearScreen();
                            this.countryScreen.draw()
                        }
                    }
                }
            }
        });
    }
}