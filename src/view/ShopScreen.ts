class ShopScreen {
    private canvas: Canvas;
    private listeners: Array<(event: MouseEvent) => void>;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement)
        this.listeners = [];
    }
    public draw() {
        this.canvas.writeTextToCanvas('Winkel', 150, this.canvas.getCenter().X, this.canvas.getCenter().Y - 260, "black", "center", "Old English Text MT")
        this.canvas.writeTextToCanvas('Hints :', 100, this.canvas.getCenter().X - 424, this.canvas.getCenter().Y - 100, "white", 'center', "Old English Text MT")
        this.drawShopBoxes(225, 175)
        this.hintShopHandler(225, 175)
        this.canvas.writeTextToCanvas('Achtergrond :', 100, this.canvas.getCenter().X - 550, this.canvas.getCenter().Y + 100, "white", 'center', "Old English Text MT")
        this.drawShopBoxes(225, -25)
        this.canvas.writeTextToCanvas('Muziek :', 100, this.canvas.getCenter().X - 455, this.canvas.getCenter().Y + 300, "white", "center", "Old English Text MT")
        this.drawShopBoxes(225, -225)
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X + 325, this.canvas.getCenter().Y + 175, "terug", 35, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y + 260, "black", "center", "Old English Text MT");
        this.canvas.writeTextToCanvas('Hints = 10 punten', 30, this.canvas.getWidth() / 1.4, this.canvas.getHeight() / 5, "black", 'center', "Pristina")
        this.canvas.writeTextToCanvas('Achtergrond = nog niet verkrijgbaar', 30, this.canvas.getWidth() / 1.315, this.canvas.getHeight() / 4.25, "black", 'center', "Pristina")
        this.canvas.writeTextToCanvas('Muziek = nog niet verkrijgbaar', 30, this.canvas.getWidth() / 1.34, this.canvas.getHeight() / 3.75, "black", 'center', "Pristina")
        this.shopOutHandler()


    }

    public drawShopBoxes(xBox: number, yBox: number) {
        for (let index = 0; index < 4; index++) {
            this.canvas.writeTextToCanvas("Koop", 50, this.canvas.getCenter().X - xBox + 50 + (index * 130), this.canvas.getCenter().Y - yBox - 20, "black", "center", "Old English Text MT")
            this.canvas.drawShopBox(this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox)
            let listenerShopBoxesCheckMark = (event: MouseEvent) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        this.canvas.writeImageToCanvas("assets/images/checkmark.png", this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox, 100, 100)
                    }
                }
            }
            this.listeners.push(listenerShopBoxesCheckMark)
            window.addEventListener('click', listenerShopBoxesCheckMark)
        }
    }

    public hintShopHandler(xBox: number, yBox: number) {
        for (let index = 0; index < 4; index++) {
            let isClicked = 0;
            this.canvas.writeTextToCanvas(`Je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT")
            this.canvas.writeTextToCanvas(`${PlayerHandler.getScore()} punten`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT")
            let listenerHintShop = (event: MouseEvent) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        if (PlayerHandler.getScore() >= 10 && isClicked == 0) {
                            this.canvas.clearArea(this.canvas.getCenter().X + 275, this.canvas.getCenter().Y - 140, 400, 100)
                            this.canvas.clearArea(this.canvas.getCenter().X - 550, this.canvas.getCenter().Y - 300, 300, 100)
                            isClicked = 1
                            if (PlayerHandler.getHints() < 4) {
                                PlayerHandler.scoreMinus(10)
                                PlayerHandler.addHint()
                            }
                            this.canvas.writeTextToCanvas(`Je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT")
                            this.canvas.writeTextToCanvas(`${PlayerHandler.getScore()} punten`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT")
                            console.log(PlayerHandler.getHints())
                        }
                    }
                }
            }
            this.listeners.push(listenerHintShop)
            window.addEventListener('click', listenerHintShop)

        }
    }
    private removeButtons() {
        this.listeners.forEach(e =>{
            window.removeEventListener('click', e);
        });
    }
 
    public shopOutHandler() {
        let shopOutListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 325 && event.x < this.canvas.getCenter().X + 575) {
                if (event.y > this.canvas.getCenter().Y + 200 && event.y < this.canvas.getCenter().Y + 370) {
                    this.removeButtons()
                    ScreenSwitch.draw('countryScreen')
                }
            }
        }
        this.listeners.push(shopOutListener)
        window.addEventListener('click', shopOutListener)
    }
} 