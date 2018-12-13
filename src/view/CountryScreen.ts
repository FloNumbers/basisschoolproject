class CountryScreen extends Mapview {
    private questionImage: HTMLImageElement;
    private shopButton: HTMLImageElement;
    private shopScreen: ShopScreen;
    constructor(canvas: HTMLCanvasElement) {

        super(canvas);
        this.questionImage = new Image();
        this.shopButton = new Image();
        this.shopButton.src = "./assets/images/buttonYellow.png"
        this.questionImage.src = "./assets/images/questionpaper.png"
        this.canvas.colorClickNederland()
        this.shopScreen = new ShopScreen;

    }

    public draw() {
        console.log(this.questionImage.width)
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X / 4, this.canvas.getCenter().Y / 2.7, this.canvas.getWidth() / 2.5, this.canvas.getHeight() / 1.25)
        this.canvas.writeImageToCanvas(this.questionImage.src, this.canvas.getWidth() / 1.43, 90, this.canvas.getWidth() / 4, this.canvas.getHeight() / 1.1)
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth()/1.3, this.canvas.getHeight()/1.2, "Winkel", 35, this.canvas.getWidth()/1.18, this.canvas.getHeight() / 1.14, "black", "center", "Old English Text MT");
        window.addEventListener("click", (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth()/1.3 && event.x < this.canvas.getWidth()/1.3 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight()/1.2 && event.y < this.canvas.getHeight()/1.2 + this.shopButton.height) {
                    this.canvas.clearScreen();
                    this.shopScreen.draw();
                    //hier functie voor de pagina.

                }
            }
        });
    }
}