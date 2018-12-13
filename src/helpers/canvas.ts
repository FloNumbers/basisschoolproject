class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private selectedCountry: string = '';
    private selectedProvince: string;


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
        font: string
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
    public writeButtonToCanvas(imageSource: string, imageX: number, imageY: number, imageText: string, imageTextSize: number, imageTextX: number, imageTextY: number, imageTextColor: string, imageTextAlignment: CanvasTextAlign, imageTextFont: string) {
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
        this.ctx.clearRect(x + 10, y + 10, 80, 80);
        this.ctx.stroke();
    }
    public writeImageToCanvasPreload(image: HTMLImageElement, xCoordinate: number, yCoordinate: number, width: number, height: number): void {
        // image.onload = () => {
        this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
        // }
    }
    public colorClick() {
        this.canvas.addEventListener("click", (event: MouseEvent) => {
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 1, 1).data
            // console.log(event.x, event.y)
            // console.log(this.ctx.getImageData(event.x, event.y, 1, 1).data)
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 106 &&
                clickEventColor[2] == 0) {
                console.log('Nederland')
                this.selectedCountry = 'Nederland'
            }
            if (clickEventColor[0] == 140 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 172) {
                console.log('België')
                this.selectedCountry = 'België'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 191 &&
                clickEventColor[2] == 0) {
                console.log('Luxemburg')
                this.selectedCountry = 'Luxemburg'
            }
            if (clickEventColor[0] == 20 &&
                clickEventColor[1] == 51 &&
                clickEventColor[2] == 255) {
                console.log('Frankrijk')
                this.selectedCountry = 'Frankrijk'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 25) {
                console.log('Spanje')
                this.selectedCountry = 'Spanje'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 221 &&
                clickEventColor[2] == 0) {
                console.log('Portugal')
                this.selectedCountry = 'Portugal'
            }
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 59) {
                console.log('Italië')
                this.selectedCountry = 'Italië'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 40 &&
                clickEventColor[2] == 115) {
                console.log('Zwitserland')
                this.selectedCountry = 'Zwitserland'
            }
            if (clickEventColor[0] == 81 &&
                clickEventColor[1] == 165 &&
                clickEventColor[2] == 255) {
                console.log('Duitsland')
                this.selectedCountry = 'Duitsland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 151 &&
                clickEventColor[2] == 25) {
                console.log('Oostenrijk')
                this.selectedCountry = 'Duitsland'
            }
            if (clickEventColor[0] == 210 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 96) {
                console.log('Polen')
                this.selectedCountry = 'Polen'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 91 &&
                clickEventColor[2] == 181) {
                console.log('Noorwegen')
                this.selectedCountry = 'Noorwegen'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 57 &&
                clickEventColor[2] == 22) {
                console.log('Zweden')
                this.selectedCountry = 'Zweden'
            }
            if (clickEventColor[0] == 114 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 198) {
                console.log('Finland')
                this.selectedCountry = 'Finland'
            }
            if (clickEventColor[0] == 163 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 25) {
                console.log('Estland')
                this.selectedCountry = 'Estland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 169 &&
                clickEventColor[2] == 40) {
                console.log('Letland')
                this.selectedCountry = 'Letland'
            }
            if (clickEventColor[0] == 178 &&
                clickEventColor[1] == 182 &&
                clickEventColor[2] == 255) {
                console.log('Litouwen')
                this.selectedCountry = 'Litouwen'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 152 &&
                clickEventColor[2] == 142) {
                console.log('Tsjechië')
                this.selectedCountry = 'Tsjechië'
            }
            if (clickEventColor[0] == 55 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 255) {
                console.log('Denemarken')
                this.selectedCountry = 'Denemarken'
            }
            if (clickEventColor[0] == 116 &&
                clickEventColor[1] == 89 &&
                clickEventColor[2] == 255) {
                console.log('Engeland')
                this.selectedCountry = 'Engeland'
            }
            if (clickEventColor[0] == 189 &&
                clickEventColor[1] == 84 &&
                clickEventColor[2] == 255) {
                console.log('Ierland')
                this.selectedCountry = 'Ierland'
            }
            if (clickEventColor[0] == 205 &&
                clickEventColor[1] == 178 &&
                clickEventColor[2] == 255) {
                console.log('Noord-Ierland')
                this.selectedCountry = 'Noord-Ierland'
            }
            if (clickEventColor[0] == 137 &&
                clickEventColor[1] == 243 &&
                clickEventColor[2] == 255) {
                console.log('Ijsland')
                this.selectedCountry = 'Ijsland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 131 &&
                clickEventColor[2] == 119) {
                console.log('Rusland')
                this.selectedCountry = 'Rusland'
            }
            if (clickEventColor[0] == 124 &&
                clickEventColor[1] == 144 &&
                clickEventColor[2] == 255) {
                console.log('Wit-Rusland')
                this.selectedCountry = 'Wit-Rusland'
            }
            if (clickEventColor[0] == 2 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 255) {
                console.log('Kaliningrad')
                this.selectedCountry = 'Kaliningrad'
            }
            if (clickEventColor[0] == 20 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 196) {
                console.log('Oekraïne')
                this.selectedCountry = 'Oekraïne'
            }
            if (clickEventColor[0] == 231 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 99) {
                console.log('Moldavië')
                this.selectedCountry = 'Moldavië'
            }
            if (clickEventColor[0] == 114 &&
                clickEventColor[1] == 112 &&
                clickEventColor[2] == 255) {
                console.log('Roemenië')
                this.selectedCountry = 'Roemenië'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 21 &&
                clickEventColor[2] == 0) {
                console.log('Slowakije')
                this.selectedCountry = 'Slowakije'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 255) {
                console.log('Hongarije')
                this.selectedCountry = 'Hongarije'
            }
            if (clickEventColor[0] == 48 &&
                clickEventColor[1] == 213 &&
                clickEventColor[2] == 255) {
                console.log('Kroatië')
                this.selectedCountry = 'Kroatië'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 181 &&
                clickEventColor[2] == 215) {
                console.log('Bosnië')
                this.selectedCountry = 'Bosnië'
            }
            if (clickEventColor[0] == 193 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 223) {
                console.log('Servië')
                this.selectedCountry = 'Servië'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 94 &&
                clickEventColor[2] == 110) {
                console.log('Montenegro')
                this.selectedCountry = 'Montenegro'
            }
            if (clickEventColor[0] == 229 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 63) {
                console.log('Slovenië')
                this.selectedCountry = 'Slovenië'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 102) {
                console.log('Bulgarije')
                this.selectedCountry = 'Bulgarije'
            }
            if (clickEventColor[0] == 206 &&
                clickEventColor[1] == 73 &&
                clickEventColor[2] == 255) {
                console.log('Turkije')
                this.selectedCountry = 'Turkije'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 196 &&
                clickEventColor[2] == 248) {
                console.log('Macedonië')
                this.selectedCountry = 'Macedonië'
            }
            if (clickEventColor[0] == 152 &&
                clickEventColor[1] == 114 &&
                clickEventColor[2] == 255) {
                console.log('Albanië')
                this.selectedCountry = 'Albanië'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 246 &&
                clickEventColor[2] == 2) {
                console.log('Griekenland')
                this.selectedCountry = 'Griekenland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 197 &&
                clickEventColor[2] == 96) {
                console.log('Corsica')
                this.selectedCountry = 'Corsica'
            }
            if (this.selectedCountry !== '') {
                this.clearArea(800, 100, 400, 300)
                this.writeTextToCanvas(this.selectedCountry, 30, 1000, 200, 'black', 'center', 'Old English Text MT')
            }
        });
    }
    public getSelectedCountry() {
        if (this.selectedCountry !== '') {
            return this.selectedCountry
        } else {return null}
    }

    public resetSelectedCountry() {
        this.selectedCountry = ''
    }

    public colorClickNederland() {
        this.canvas.addEventListener("click", (event: MouseEvent) => {
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 1, 1).data
            // console.log(event.x, event.y)
            // console.log(this.ctx.getImageData(event.x, event.y, 1, 1).data)
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 102 &&
                clickEventColor[2] == 204
            ) {
                console.log('Zeeland')
                this.selectedProvince = 'Zeeland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 204 &&
                clickEventColor[2] == 0
            ) {
                console.log('Noord-Brabant')
                this.selectedProvince = 'Noord-Brabant'
            }
            if (clickEventColor[0] == 183 &&
                clickEventColor[1] == 75 &&
                clickEventColor[2] == 42
            ) {
                console.log('Limburg')
                this.selectedProvince = 'Limburg'
            }
            if (clickEventColor[0] == 166 &&
                clickEventColor[1] == 161 &&
                clickEventColor[2] == 20
            ) {
                console.log('Zuid-Holland')
                this.selectedProvince = 'Zuid-Holland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 130 &&
                clickEventColor[2] == 9
            ) {
                console.log('Noord-Holland')
                this.selectedProvince = 'Noord-Holland'
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 140 &&
                clickEventColor[2] == 167
            ) {
                console.log('Flevoland')
                this.selectedProvince = 'Flevoland'
            }
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 105 &&
                clickEventColor[2] == 120
            ) {
                console.log('Utrecht')
                this.selectedProvince = 'Utrecht'
            }
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 145 &&
                clickEventColor[2] == 215
            ) {
                console.log('Gelderland')
                this.selectedProvince = 'Gelderland'
            }
            if (clickEventColor[0] == 192 &&
                clickEventColor[1] == 213 &&
                clickEventColor[2] == 0
            ) {
                console.log('Overijsel')
                this.selectedProvince = 'Overijsel'
            }
            if (clickEventColor[0] == 102 &&
                clickEventColor[1] == 153 &&
                clickEventColor[2] == 51
            ) {
                console.log('Drenthe')
                this.selectedProvince = 'Drenthe'
            }
            if (clickEventColor[0] == 200 &&
                clickEventColor[1] == 63 &&
                clickEventColor[2] == 105
            ) {
                console.log('Groningen')
                this.selectedProvince = 'Groningen'
            }
            if (clickEventColor[0] == 73 &&
                clickEventColor[1] == 222 &&
                clickEventColor[2] == 232
            ) {
                console.log('Friesland')
                this.selectedProvince = 'Friesland'
            }
        });
    }

    public getClickedProvince():string{
        return this.selectedProvince;
    }

    public clearArea(x: number, y: number, width: number, height: number) {
        this.ctx.clearRect(x, y, width, height)
    }
}