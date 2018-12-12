class CountryScreen extends Mapview {
    private questionImage:HTMLImageElement;
    constructor(canvas:HTMLCanvasElement){

        super(canvas);
        this.questionImage = new Image();
        this.questionImage.src = "./assets/images/questionpaper.png"
    }

    public draw(){
        console.log(this.questionImage.width)
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X /4 , this.canvas.getCenter().Y/2.7,this.canvas.getWidth()/2.5, this.canvas.getHeight()/1.25)
        this.canvas.writeImageToCanvas(this.questionImage.src,this.canvas.getWidth()/1.43, 90, this.canvas.getWidth()/4,this.canvas.getHeight()/1.1)
    }
}