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
    alignment: CanvasTextAlign = "center",
    font:string
) {
    this.ctx.font = `${fontSize}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
}

        /**
     * Function to write the image to the canvas
     * @param {string} src 
     * @param {number} xCoordinate 
     * @param {number} yCoordinate  
     * @param {number} width
     * @param {number} height
     */
    //schrijft een afbeelding weg
    public writeImageToCanvas(
        src: string,
        xCoordinate: number,
        yCoordinate: number,
        width: number,
        height: number
    ) {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
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
    public writeButtonToCanvas(imageSource:string, imageX:number, imageY:number, imageText:string, imageTextSize:number, imageTextX:number, imageTextY:number, imageTextColor:string, imageTextAlignment:CanvasTextAlign, imageTextFont:string ) {
        let buttonElement = document.createElement("img");
        buttonElement.src = imageSource;

        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, imageX, imageY);
            this.writeTextToCanvas(imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont);
        });

    }
   public drawShopBox(x: number, y: number) {
        this.ctx.fillRect(x, y, 100, 100);
        this.ctx.stroke();
        this.ctx.clearRect(x +10, y +10, 80, 80);
        this.ctx.stroke();
    }
    public writeImageToCanvasPreload(image: HTMLImageElement, xCoordinate: number, yCoordinate: number, width: number, height: number):void {
        this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
    }
}