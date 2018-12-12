class StartScreen {
    private canvas:Canvas; 
    public buttonPressed: boolean;


    constructor(){
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement)
    }
    
    public draw(){
        this.canvas.writeButtonToCanvas();
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 100, this.canvas.getWidth()/ 2, this.canvas.getHeight()/ 6, 'black', 'center');
    }
}