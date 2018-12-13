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
        window.addEventListener("click", (event: MouseEvent) => {
            if (this.buttonPressed == false) {
                if (event.x > 1000 - 111 && event.x < 1000 + 111) {
                    if (event.y > this.canvas.getCenter().Y + 100 && event.y < this.canvas.getCenter().Y + 139) {
                        if (this.canvas.getSelectedCountry() == 'Nederland') {
                        this.canvas.clearScreen();
                        this.countryScreen.draw();
                        this.buttonPressed = true;
                        this.canvas.resetSelectedCountry()
                        }
                    }
                }
            }
        });
    }

    public draw() {
        this.canvas.writeImageToCanvasPreload(this.europeMap, 55, 80, this.canvas.getHeight() - 80, this.canvas.getHeight() - 80)
        this.canvas.getSelectedCountry()
        console.log(this.canvas.getSelectedCountry())
        this.canvas.writeTextToCanvas('Kies een land om te beginnen!', 30, 1000, 200, 'black', 'center', 'Old English Text MT')

        this.canvas.writeButtonToCanvas("../assets/images/buttonYellow.png", 889, this.canvas.getCenter().Y + 100, "Start", 35, 1000, this.canvas.getCenter().Y + 130, "black", "center", "Old English Text MT");
        this.buttonPressed = false;

    }
}