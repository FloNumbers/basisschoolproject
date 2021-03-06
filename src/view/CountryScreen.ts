class CountryScreen extends Mapview {
    private questionImage: HTMLImageElement;
    private shopButton: HTMLImageElement;
    private question: Question;
    private selectedProvince: string;
    private player: Player;
    private listeners: Array<(event: MouseEvent) => void>;

    constructor(canvas: HTMLCanvasElement) {

        super(canvas);
        this.questionImage = new Image();
        this.shopButton = new Image();
        this.shopButton.src = "./assets/images/oldButton.png"
        this.questionImage.src = "./assets/images/questionpaper.png"
        this.question = new Question();
        this.player = new Player();
        this.listeners = [];
        this.canvas.colorClickNederland(this.question.getQuestion(2).question, this.question.getQuestion(2).answer)
    }

    public draw() {

        
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X / 4, this.canvas.getCenter().Y / 2.7, this.canvas.getWidth() / 2.5, this.canvas.getHeight() / 1.25)
        // this.canvas.writeImageToCanvas(this.questionImage.src, this.canvas.getWidth() / 1.43, 90, this.canvas.getWidth() / 4, this.canvas.getHeight() / 1.1)
        // this.canvas.writeTextToCanvas(`${this.player.getName()}`, 30, this.canvas.getWidth() / 6, this.canvas.getHeight() / 4, 'black', 'center', 'Pristina')
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 1.4, this.canvas.getHeight() / 1.35, "Winkel", 35, this.canvas.getWidth() / 1.28, this.canvas.getHeight() / 1.18, "black", "center", "Old English Text MT");
        this.toShopHandler()
        this.canvas.writeTextToCanvas(`${PlayerHandler.getName()} je score is: ${PlayerHandler.getScore()}`, 40, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 6, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.7, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion2}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.2, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion3}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.8, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion4}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.5, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion5}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.2, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).question}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 1.9, PlayerHandler.getFontColor(), 'center', 'Pristina')
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 1.8, this.canvas.getHeight() / 1.35, "Terug", 35, this.canvas.getWidth() / 1.62, this.canvas.getHeight() / 1.18, "black", "center", "Old English Text MT");
        this.backToEuropeHandler()
        this.canvas.writeTextToCanvas(`je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getWidth() / 6, this.canvas.getHeight() / 6, PlayerHandler.getFontColor(), "center", "Old English Text MT")
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 10, this.canvas.getHeight() / 5, "Gebruik hint", 35, this.canvas.getWidth() / 6, this.canvas.getHeight() / 3.5, "black", "center", "Old English Text MT");
        this.hintHandler()
        this.canvas.writeButtonToCanvas('./assets/images/settings-button.png', this.canvas.getWidth() / 1.15, this.canvas.getCenter().Y + 300, " ", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y, 'black', 'center', 'ariel');
        ScreenSwitch.screenMemory('countryScreen')
        this.optionButton()
    }

    public backToEuropeHandler() {
        let listenerBackToEurope = (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 1.8 && event.x < this.canvas.getWidth() / 1.8 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 1.3 && event.y < this.canvas.getHeight() / 1.4 + this.shopButton.height) {
                    ScreenSwitch.draw('europeScreen')
                    this.removeButtons();
                }
            }
        }
        this.listeners.push(listenerBackToEurope)
        window.addEventListener('click', listenerBackToEurope)
    }

    public toShopHandler() {
        let listenerToShop = (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 1.4 && event.x < this.canvas.getWidth() / 1.4 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 1.3 && event.y < this.canvas.getHeight() / 1.4 + this.shopButton.height) {
                    ScreenSwitch.draw('shopScreen')
                    this.removeButtons()
                    //hier functie voor de pagina.
                }
            }
        }
        this.listeners.push(listenerToShop)
        window.addEventListener('click', listenerToShop)
    }

    public hintHandler() {
        let hintListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 10 && event.x < this.canvas.getWidth() / 10 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 5 && event.y < this.canvas.getHeight() / 5 + this.shopButton.height) {
                    if (PlayerHandler.getHints() > 0){
                    PlayerHandler.minusHint()
                    this.canvas.clearArea(this.canvas.getWidth() / 10.5, this.canvas.getHeight() / 10, this.canvas.getWidth() / 6, this.canvas.getHeight() / 12)
                    this.canvas.writeTextToCanvas(`je hebt ${PlayerHandler.getHints()} hints`, 50, this.canvas.getWidth() / 6, this.canvas.getHeight() / 6, PlayerHandler.getFontColor(), "center", "Old English Text MT")
                    this.canvas.clearArea(this.canvas.getWidth() / 1.9, this.canvas.getHeight() / 1.8, 500, 100)
                    this.canvas.writeTextToCanvas(`${this.question.getHint(this.canvas.getquestionNumber()).hint}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 1.7, PlayerHandler.getFontColor(), 'center', 'Pristina')
                PlayerHandler.SavePlayer()    
                }
                }
            }
        }
        this.listeners.push(hintListener)
        window.addEventListener('click', hintListener)
    }

    private optionButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 1.15 && event.x < this.canvas.getWidth() / 1.1) {
                if (event.y > this.canvas.getCenter().Y + 300 && event.y < this.canvas.getCenter().Y + 375) {
                    
                    ScreenSwitch.draw('optionsScreen');
                    this.removeButtons();
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }

    private removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }

}