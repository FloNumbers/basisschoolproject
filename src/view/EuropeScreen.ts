class EuropeScreen extends Mapview {

    private europeMap: HTMLImageElement
    private buttonPressed: boolean;
    private listeners: Array<(event: MouseEvent) => void> = [];

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.canvas.colorClick()
        this.europeMap = new Image()
        this.europeMap.src = './assets/images/mapEurope.png'
    }

    public draw() {
        this.canvas.writeImageToCanvasPreload(this.europeMap, this.canvas.getWidth() / 28, this.canvas.getWidth() / 19, this.canvas.getHeight() - this.canvas.getHeight() / 9.3, this.canvas.getHeight() - this.canvas.getHeight() / 9.3)
        this.canvas.getSelectedCountry()
        console.log(this.canvas.getSelectedCountry())
        this.canvas.writeTextToCanvas('Kies een land om te beginnen!', 35, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 4, "black", "center", "Old English Text MT")
        this.clickCountry()
        this.canvas.writeButtonToCanvas('./assets/images/settings-button.png', this.canvas.getCenter().X + 610, this.canvas.getCenter().Y + 300, " ", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y, 'black', 'center', 'ariel');
        this.optionButton();
        ScreenSwitch.screenMemory('europeScreen')
    }

    private removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }

    private clickCountry() {
        let listenerToCountry = (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 1.35 - 125 && event.x < this.canvas.getWidth() / 1.35 + 125) {
                if (event.y > this.canvas.getCenter().Y && event.y < this.canvas.getCenter().Y + 170) {
                    if (this.canvas.getSelectedCountry() == 'Nederland') {
                        this.canvas.resetSelectedCountry()
                        ScreenSwitch.draw('countryScreen')
                        this.removeButtons()
                    }
                }
            }
        }
        this.listeners.push(listenerToCountry)
        window.addEventListener('click', listenerToCountry)
    }

    public optionButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 610 && event.x < this.canvas.getCenter().X + 685) {
                if (event.y > this.canvas.getCenter().Y + 300 && event.y < this.canvas.getCenter().Y + 375) {
                    ScreenSwitch.draw('optionsScreen');
                    this.removeButtons();
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
}