class EuropeScreen extends Mapview {

    private europeMap: HTMLImageElement

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.canvas.colorClick()
    //     this.europeMap = new Image()
    //     this.europeMap.src = './assets/images/mapEurope.png'
    }

    public draw() {
        this.canvas.writeImageToCanvas('./assets/images/mapEurope.png', 48, 73, this.canvas.getHeight() - 73, this.canvas.getHeight() - 73)
    }
    
    
}