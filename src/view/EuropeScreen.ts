class EuropeScreen extends Mapview {

    private europeMap: HTMLImageElement

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.canvas.colorClick()
        this.europeMap = new Image()
        this.europeMap.src = './assets/images/mapEurope.png'
    }

    public draw() {
        this.canvas.clearScreen()
        this.canvas.writeImageToCanvasPreload(this.europeMap, 55, 80, this.canvas.getHeight() - 80, this.canvas.getHeight() - 80)
        this.canvas.writeTextToCanvas(this.canvas.getSelectedCountry(), 30, 1000, 200, 'white', 'center', 'Minecraft')
        console.log(this.canvas.getSelectedCountry())
    }


}