class StartScreen {
    private canvas: Canvas;
    private listeners: Array<(event: MouseEvent) => void> = [];

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
    }

    public draw() {
        this.drawCompassAndButtonAndTextToCanvas();
        this.drawNameBox();
        this.drawWorld();
        this.startButton();
        this.optionButton();
        this.loadButton();
        ScreenSwitch.screenMemory('startScreen');
    }

    public drawNameBox() {
        document.getElementById("name").setAttribute('style', 'position: absolute;left: 642px;top: 500px;width: 310px;height: 70px;font-size: 50px');
        document.getElementById('name').style.top = '70%';
        document.getElementById('name').style.left = '38%';
        document.getElementById('name').style.width = '24%';
        document.getElementById('name').style.height = '8%';
    }
    public drawWorld() {
        document.getElementById("wereld").setAttribute('style', 'position: absolute;left: 650px;top: 200px;width: 300px;height: 300px');
        document.getElementById("wereld").style.top = '23%';
        document.getElementById('wereld').style.left = '40%';
        document.getElementById('wereld').style.width = '20%';
        document.getElementById('wereld').style.height = '40%';
    }
    public drawCompassAndButtonAndTextToCanvas() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.2, PlayerHandler.getFontColor(), 'center', "Old English Text MT");
        this.canvas.writeTextToCanvas('Vul hier je naam in:', 70, this.canvas.getWidth() / 2, this.canvas.getHeight() / 1.55, PlayerHandler.getFontColor(), 'center', PlayerHandler.getFontStyle());
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X - 270, this.canvas.getCenter().Y + 250, "Start", 35, this.canvas.getCenter().X -145, this.canvas.getCenter().Y + 340, 'black', "center", "Old English Text MT");
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X - 5, this.canvas.getCenter().Y + 250, "Laden", 35, this.canvas.getCenter().X + 120, this.canvas.getCenter().Y + 340, 'black', "center", "Old English Text MT");
        this.canvas.writeImageToCanvas('./assets/images/emblem-with-a-wind-rose-old-compass-and-sailboat-vector-20874003.png', this.canvas.getWidth() / 15, this.canvas.getHeight() / 1.8, 350, 350);
        this.canvas.writeButtonToCanvas('./assets/images/settings-button.png', this.canvas.getCenter().X + 610, this.canvas.getCenter().Y + 300, " ", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y, 'black', 'center', 'ariel');
    }

    private removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }
    public startButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 260 && event.x < this.canvas.getCenter().X -30) {
                if (event.y > this.canvas.getCenter().Y + 270 && event.y < this.canvas.getCenter().Y + 385){
                    let names = (<HTMLInputElement>document.getElementById('name'));
                    document.getElementById("name").setAttribute('style', 'hidden');
                    // this.player.setName(names.value);
                    PlayerHandler.setName(names.value);
                    console.log(names.value);

                    document.getElementById("wereld").setAttribute('style', 'hidden');
                    ScreenSwitch.draw('europeScreen');
                    // this.player.setName(names.value);

                    this.removeButtons();
                }
            }
        }
        this.listeners.push(startListener);
        window.addEventListener('click', startListener);
    }
    public loadButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 3 && event.x < this.canvas.getCenter().X + 240) {
                if (event.y > this.canvas.getCenter().Y + 270 && event.y < this.canvas.getCenter().Y + 385){
                    let names = (<HTMLInputElement>document.getElementById('name'));
                    document.getElementById("name").setAttribute('style', 'hidden');
                    PlayerHandler.setName(names.value);
                    console.log(names.value);

                    document.getElementById("wereld").setAttribute('style', 'hidden');
                    ScreenSwitch.draw('saveScreen');
                    this.removeButtons();
                }
            }
        }
        this.listeners.push(startListener);
        window.addEventListener('click', startListener);
    }
    public optionButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 610 && event.x < this.canvas.getCenter().X + 685) {
                if (event.y > this.canvas.getCenter().Y + 300 && event.y < this.canvas.getCenter().Y + 375) {
                    document.getElementById("name").setAttribute('style', 'hidden');
                    document.getElementById("wereld").setAttribute('style', 'hidden');
                    ScreenSwitch.draw('optionsScreen');
                    this.removeButtons();
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener);
    }
}