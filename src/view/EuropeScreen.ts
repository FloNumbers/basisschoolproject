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
}