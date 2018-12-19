class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private selectedCountry: string = '';
    private selectedProvince: string;
    private questionNumber:number = 0;
    private question:Question;
    private countries: Array<any> = [
        { country: 'Nederland', red: 255, green: 106, blue: 0 },
        { country: 'België', red: 140, green: 255, blue: 172 },
        { country: 'Luxemburg', red: 255, green: 191, blue: 0 },
        { country: 'Frankrijk', red: 20, green: 51, blue: 255 },
        { country: 'Spanje', red: 255, green: 0, blue: 25 },
        { country: 'Portugal', red: 255, green: 221, blue: 0 },
        { country: 'Italië', red: 0, green: 255, blue: 59 },
        { country: 'Zwitserland', red: 255, green: 40, blue: 115 },
        { country: 'Duitsland', red: 81, green: 165, blue: 255 },
        { country: 'Oostenrijk', red: 255, green: 151, blue: 25 },
        { country: 'Polen', red: 210, green: 255, blue: 96 },
        { country: 'Noorwegen', red: 255, green: 91, blue: 181 },
        { country: 'Zweden', red: 255, green: 57, blue: 22 },
        { country: 'Finland', red: 114, green: 255, blue: 198 },
        { country: 'Estland', red: 163, green: 255, blue: 25 },
        { country: 'Letland', red: 255, green: 169, blue: 40 },
        { country: 'Litouwen', red: 178, green: 182, blue: 255 },
        { country: 'Tsjechië', red: 255, green: 152, blue: 142 },
        { country: 'Denemarken', red: 55, green: 0, blue: 255 },
        { country: 'Engeland', red: 116, green: 89, blue: 255 },
        { country: 'Ierland', red: 189, green: 84, blue: 255 },
        { country: 'Noord-Ierland', red: 205, green: 178, blue: 255 },
        { country: 'Ijsland', red: 137, green: 243, blue: 255 },
        { country: 'Rusland', red: 255, green: 131, blue: 119 },
        { country: 'Wit-Rusland', red: 124, green: 144, blue: 255 },
        { country: 'Kaliningrad', red: 2, green: 255, blue: 255 },
        { country: 'Oekraïne', red: 20, green: 255, blue: 196 },
        { country: 'Moldavië', red: 231, green: 255, blue: 99 },
        { country: 'Roemenië', red: 114, green: 112, blue: 255 },
        { country: 'Slowakije', red: 255, green: 21, blue: 0 },
        { country: 'Hongarije', red: 255, green: 0, blue: 255 },
        { country: 'Kroatië', red: 48, green: 213, blue: 255 },
        { country: 'Bosnië', red: 255, green: 181, blue: 215 },
        { country: 'Servië', red: 193, green: 255, blue: 223 },
        { country: 'Montenegro', red: 255, green: 94, blue: 110 },
        { country: 'Slovenië', red: 229, green: 255, blue: 63 },
        { country: 'Bulgarije', red: 255, green: 0, blue: 102 },
        { country: 'Turkije', red: 206, green: 73, blue: 255 },
        { country: 'Macedonië', red: 255, green: 196, blue: 248 },
        { country: 'Albanië', red: 152, green: 114, blue: 255 },
        { country: 'Griekenland', red: 255, green: 246, blue: 2 },
        { country: 'Corsica', red: 255, green: 197, blue: 96 }
    ]
    private netherlandsProvince: Array<any> = [
        {province:'Zeeland', red:0, green:102, blue:204},
        {province:'Noord-Brabant', red:255, green:204, blue:0},
        {province:'Limburg', red:183, green:75, blue:42},
        {province:'Zuid-Holland', red:166, green:161, blue:20},
        {province:'Noord-Holland', red:255, green:130, blue:9},
        {province:'Flevoland', red:255, green:140, blue:167},
        {province:'Utrecht', red:0, green:105, blue:120},
        {province:'Gelderland', red:0, green:145, blue:215},
        {province:'Overijssel', red:192, green:213, blue:0},
        {province:'Drenthe', red:102, green:153, blue:51},
        {province:'Groningen', red:200, green:63, blue:105},
        {province:'Friesland', red:73, green:222, blue:232}
    ]

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.question = new Question;
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
    public returnCtx() {
        return this.ctx;
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
            
            for (let index = 0; index < this.countries.length; index++) {
                if (clickEventColor[0] == this.countries[index].red &&
                    clickEventColor[1] == this.countries[index].green &&
                    clickEventColor[2] == this.countries[index].blue) {
                    console.log(this.countries[index].country)
                    this.selectedCountry = this.countries[index].country
                }
            }
            if (this.selectedCountry !== '') {
                this.clearArea(this.getCenter().X, 150, 450, 400)
                this.writeTextToCanvas(this.selectedCountry, 35, this.getCenter().X + 211, 200, "black", "center", "Old English Text MT")
                if (this.selectedCountry == 'Nederland') {
                    this.writeCountryButton("./assets/images/oldButton.png", this.getCenter().X + 85, this.getCenter().Y + 45, "Start", 35, this.getCenter().X + 211, this.getCenter().Y + 130, "black", "center", "Old English Text MT");
                }
            }
        });
    }
    public getSelectedCountry() {
        if (this.selectedCountry !== '') {
            return this.selectedCountry
        } else { return null }
    }

    public resetSelectedCountry() {
        this.selectedCountry = ''
    }

    public colorClickNederland(question:string, answer:string) {
        this.canvas.addEventListener("click", (event: MouseEvent) => {
            
            
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 1, 1).data
            // console.log(event.x, event.y)
            // console.log(this.ctx.getImageData(event.x, event.y, 1, 1).data)
            for (let index = 0; index < this.netherlandsProvince.length; index++) {
                if (clickEventColor[0] == this.netherlandsProvince[index].red &&
                    clickEventColor[1] == this.netherlandsProvince[index].green &&
                    clickEventColor[2] == this.netherlandsProvince[index].blue) {
                    console.log(this.netherlandsProvince[index].province)
                    this.selectedProvince = this.netherlandsProvince[index].province
                }

                
                    if (this.getSelectedProvince() === this.question.getQuestion(this.questionNumber).answer) {
                        alert("GOED");
                        this.questionNumber++
                        if (this.questionNumber > 6){
                            this.clearArea(this.getWidth()/1.9, 0,this.getWidth()/2 , this.getHeight()/1.8);
                            this.writeTextToCanvas(`Je hebt alle vragen goed beantwoord!!`, 40, this.getWidth() / 1.35, this.getHeight() / 2.8, 'black', 'center', 'Pristina')
                        }
                        else{
                        this.resetSelectedProvince();
                        this.clearArea(this.getWidth()/1.9, 0,this.getWidth()/2 , this.getHeight()/1.8);
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion}`, 30, this.getWidth() / 1.35, this.getHeight() / 3.7, 'black', 'center', 'Pristina')
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion2}`, 30, this.getWidth() / 1.35, this.getHeight() / 3.2, 'black', 'center', 'Pristina')
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion3}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.8, 'black', 'center', 'Pristina')
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion4}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.5, 'black', 'center', 'Pristina')
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion5}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.2, 'black', 'center', 'Pristina')
                        this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).question}`, 30, this.getWidth() / 1.35, this.getHeight() / 1.9, 'black', 'center', 'Pristina')
                        }
                        

                }
                // else if(this.getSelectedProvince() !== this.question.getQuestion(this.questionNumber).answer){
                //     alert('helaas probeer het nog eens');
                // }
            
        }
    });
    }

    public getSelectedProvince(): string {
        return this.selectedProvince;
    }
    public resetSelectedProvince() {
        this.selectedProvince = ''
    }

    public clearArea(x: number, y: number, width: number, height: number) {
        this.ctx.clearRect(x, y, width, height)


    }
    public writeCountryButton(imageSource: string, imageX: number, imageY: number, imageText: string, imageTextSize: number, imageTextX: number, imageTextY: number, imageTextColor: string, imageTextAlignment: CanvasTextAlign, imageTextFont: string) {
        let buttonElement = document.createElement("img");
        buttonElement.src = imageSource;

        this.ctx.drawImage(buttonElement, imageX, imageY);
        this.writeTextToCanvas(imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont);
    }
    public getquestionNumber():number{
        return this.questionNumber;
    }
}