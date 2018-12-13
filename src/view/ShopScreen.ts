class ShopScreen {
    private canvas: Canvas;
    private player: Player;
    public hints: number = 0;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement)
        this.player = new Player()
    }
    public draw() {
        this.canvas.writeTextToCanvas('Winkel', 150, this.canvas.getCenter().X, this.canvas.getCenter().Y - 260, "black", "center", "Old English Text MT")
        this.canvas.writeTextToCanvas('Hints :', 100, this.canvas.getCenter().X - 399, this.canvas.getCenter().Y - 100, "black", 'center', "Old English Text MT")
        this.drawShopBoxes(200, 175)
        this.hintShopHandler(200, 175)
        this.canvas.writeTextToCanvas('Background :', 100, this.canvas.getCenter().X - 527, this.canvas.getCenter().Y + 100, "black", 'center', "Old English Text MT")
        this.drawShopBoxes(200, -25)
        this.canvas.writeTextToCanvas('Music :', 100, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y + 300, "black", "center", "Old English Text MT")
        this.drawShopBoxes(200, -225)

    }

    public drawShopBoxes(xBox: number, yBox: number) {
        for (let index = 0; index < 3; index++) {
            this.canvas.drawShopBox(this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox)
            this.canvas.writeTextToCanvas("Koop", 50, this.canvas.getCenter().X - xBox + 50 + (index * 130), this.canvas.getCenter().Y - yBox - 20, "black", "center", "Old English Text MT")
            window.addEventListener("click", (event: MouseEvent) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        this.canvas.writeImageToCanvas("assets/images/checkmark.png", this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox, 100, 100)
                    }
                }
            })
        }
    }

    public hintShopHandler(xBox: number, yBox: number) {
        let points = this.player.getScore()
        for (let index = 0; index < 3; index++) {
            this.canvas.writeTextToCanvas(`You have ${this.hints} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT")
            this.canvas.writeTextToCanvas(`${this.player.getScore()} points`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT")
            window.addEventListener("click", (event: MouseEvent) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        if (this.player.getScore() >= 10) {
                            this.canvas.clearArea(this.canvas.getCenter().X + 250, this.canvas.getCenter().Y - 140, 400, 100)
                            this.canvas.clearArea(this.canvas.getCenter().X - 550, this.canvas.getCenter().Y - 300, 300, 100)
                            if (this.hints < 3) {
                                this.player.scoreMinus(10)
                                this.hints++
                            }
                            this.canvas.writeTextToCanvas(`You have ${this.hints} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT")
                            this.canvas.writeTextToCanvas(`${this.player.getScore()} points`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT")
                            console.log(this.hints)
                        }
                    }
                }
            })

        }
    }
} 