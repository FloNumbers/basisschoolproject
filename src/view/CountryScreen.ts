class CountryScreen extends Mapview {
    private questionImage: HTMLImageElement;
    private shopButton: HTMLImageElement;
    private shopScreen: ShopScreen;
    private question: Question;
    private selectedProvince: string;
    private player: Player;
    constructor(canvas: HTMLCanvasElement) {

        super(canvas);
        this.questionImage = new Image();
        this.shopButton = new Image();
        this.shopButton.src = "./assets/images/oldButton.png"
        this.questionImage.src = "./assets/images/questionpaper.png"
        this.shopScreen = new ShopScreen;
        this.question = new Question();
        this.player = new Player();

    }

    public draw() {
        console.log(this.question.getQuestion(2).question)
        console.log(this.question.getQuestion(2).answer)
        this.canvas.colorClickNederland(this.question.getQuestion(2).question, this.question.getQuestion(2).answer)
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X / 4, this.canvas.getCenter().Y / 2.7, this.canvas.getWidth() / 2.5, this.canvas.getHeight() / 1.25)
        // this.canvas.writeImageToCanvas(this.questionImage.src, this.canvas.getWidth() / 1.43, 90, this.canvas.getWidth() / 4, this.canvas.getHeight() / 1.1)
        // this.canvas.writeTextToCanvas(`${this.player.getName()}`, 30, this.canvas.getWidth() / 6, this.canvas.getHeight() / 4, 'black', 'center', 'Pristina')
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 1.4, this.canvas.getHeight() / 1.35, "Winkel", 35, this.canvas.getWidth() / 1.28, this.canvas.getHeight() / 1.18, "black", "center", "Old English Text MT");
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.7, 'black', 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion2}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.2, 'black', 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion3}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.8, 'black', 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion4}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.5, 'black', 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion5}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.2, 'black', 'center', 'Pristina')
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).question}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 1.9, 'black', 'center', 'Pristina')

        window.addEventListener("click", (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 1.4 && event.x < this.canvas.getWidth() / 1.4 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 1.3 && event.y < this.canvas.getHeight() / 1.4 + this.shopButton.height) {
                    this.canvas.clearScreen();
                    this.shopScreen.draw();
                    //hier functie voor de pagina.
                }
            }
        });

    }
}