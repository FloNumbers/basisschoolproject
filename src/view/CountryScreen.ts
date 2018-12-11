class CountryScreen extends Mapview {
    constructor(canvas:HTMLCanvasElement){
        super(canvas);
        
    }

    public draw(){
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X , this.canvas.getCenter().Y);
    }
}