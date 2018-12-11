class Canvas {
private canvas:HTMLCanvasElement;
private ctx:CanvasRenderingContext2D;

constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
}
public writeTextToCanvas(
    text: string,
    fontSize: number,
    xCoordinate: number,
    yCoordinate: number,
    color: string = "white",
    alignment: CanvasTextAlign = "center"
) {
    this.ctx.font = `${fontSize}px Arial`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
}

/**
 * Function to write the image to the canvas
 * @param {string} src 
 * @param {number} xCoordinate 
 * @param {number} yCoordinate  
 */

 //schrijft een afbeelding weg
public writeImageToCanvas(
    src: string,
    xCoordinate: number,
    yCoordinate: number,
) {

    const image = new Image();
    image.src = src;
    image.onload = () => {
        this.ctx.drawImage(image, xCoordinate, yCoordinate);
    }
}
    //geeft de canvas breedte door
    public getWidth(): number {
        return this.canvas.width;
    }
    //geeft de canvas hoogte door
    public getHeight(): number {
        return this.canvas.height;
    }
    //geeft het midden van het canvas door
    public getCenter(): { X: number, Y: number } {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    // maakt het canvas leeg
    public clearScreen() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    public writeButtonToCanvas() {
        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";

        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, this.getCenter().X , this.getCenter().Y );
            this.writeTextToCanvas("Play", 20, this.getCenter().X, this.getCenter().Y, "black", "center");
        });

        this.canvas.addEventListener("click", (event: MouseEvent) => {
            if (event.x > this.getCenter().X  && event.x < this.getCenter().X ) {
                if (event.y > this.getCenter().Y  && event.y < this.getCenter().Y) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    //hier functie voor de pagina.
                }
            }
        });
    }
}