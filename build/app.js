class Game {
    constructor(canvas) {
        const canvasElement = document.getElementById("canvas");
        this.canvas = new Canvas(canvasElement);
        this.mathHelper = new MathHelper;
        this.question = new Question;
        this.player = new Player;
        this.highscore = new Highscore;
        this.introText = new IntroText;
        ScreenSwitch.makeScreens(canvas);
        PlayerHandler.makePlayer();
    }
    draw() {
        ScreenSwitch.draw('startScreen');
    }
    gameLoop() {
        this.draw();
    }
}
window.addEventListener("load", init);
function init() {
    const spelletje = new Game(document.getElementById('canvas'));
    spelletje.gameLoop();
}
class Mapview {
    constructor(canvas) {
        this.canvas = new Canvas(canvas);
    }
}
class Highscore {
}
class IntroText {
}
class Player {
    constructor() {
        this.score = 100;
    }
    getScore() {
        return this.score;
    }
    scoreMinus(minusAmout) {
        this.score -= minusAmout;
    }
    scorePlus(plusAmount) {
        this.score += plusAmount;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Question {
    constructor() {
    }
    getQuestion(index) {
        let quiz = [
            {
                introToQuestion: "Anne Frank is een Joods meisje.",
                introToQuestion2: " Ze is bekend geworden omdat ze een dagboek heeft geschreven over ",
                introToQuestion3: "de Tweede Wereld oorlog, toen ze ondergedoken was. Ze is gestorven aan uitputting ",
                introToQuestion4: "in het concentratiekamp Bergen-Belsen. Haar dagboek is na de oorlog",
                introToQuestion5: " gepubliceerd en is 1 van de meest gelezen boeken ter wereld.",
                question: " Waar staat het huis waar Anne Frank was ondergedoken?",
                answer: "Noord-Holland"
            },
            {
                introToQuestion: "De hunebedden zijn de bekendste archeologische monumenten in Nederland.",
                introToQuestion2: "Deze grafmonumenten werden gebouwd door de trechterbekercultuur.",
                introToQuestion3: "De hunebedden zijn gemaakt tussen circa 3.400 en 3.050 voor Christus.",
                introToQuestion4: "Hunebedden zijn volgens de gangbare theorie resten van prehistorische grafkamers.",
                introToQuestion5: "",
                question: "Waar staan de bekendste hunebedden in Nederland?",
                answer: "Drenthe"
            },
            {
                introToQuestion: "De VOC staat voor de Verenigde Oostindische Compagnie en is opgericht in 1602.",
                introToQuestion2: "De VOC was het eerste bedrijf met vrij verhandelbare aandelen.",
                introToQuestion3: "De VOC wordt vaak genoemd als het",
                introToQuestion4: "eerste bedrijf dat in meerdere landen vestigingen had",
                introToQuestion5: "en richtte een handelsnetwerk op tussen de diverse handelsposten in de Aziatische regio.",
                question: "Waar is de VOC opgericht?",
                answer: "Noord-Holland"
            },
            {
                introToQuestion: "De Levalloistechniek hield in dat gewerkt werd met een voorbereide kernsteen ",
                introToQuestion2: "waarvan de zijnen waren afgeslagen. Met gerichte slagen werden",
                introToQuestion3: "er schilfers afgeslagen die als werktuig werden gebruikt.",
                introToQuestion4: "Het resultaat was een vlak stuk steen met aan alle zijden sherpe randen.",
                introToQuestion5: "",
                question: "Waar zijn de eerste stenen werktuigen gevonden?",
                answer: "Utrecht"
            },
            {
                introToQuestion: "De kerk werd vanaf 1254 gebouwd als voorzetting van de romaanse kathedraal",
                introToQuestion2: "van het rooms-katholieke bisdom en was gewijd aan Sint-Maarten.",
                introToQuestion3: "De Domtoren  is 112.32 meter hoog en is hiermee de hoogste kerktoren van Nederland.",
                introToQuestion4: "De naam ‘Dom’ komt van het Latijnse woord ‘Domus Dei’,",
                introToQuestion5: " dat betekent ‘Huis van god’ zo werd de kerk vroeger genoemd.",
                question: "Waar staat de Domtoren?",
                answer: "Utrecht"
            },
            {
                introToQuestion: "De Deltawerken zijn een verdedigingssysteem ter bescherming ",
                introToQuestion2: "tegen hoogwater van de zee. Er is decennia lang gebouwd aan de Deltawerken.",
                introToQuestion3: "Het Deltaplan was voor de Tweede Wereldoorlog bedacht,",
                introToQuestion4: "Na de Watersnoodramp van 1953 besloot",
                introToQuestion5: " de Nederlandse regering om dit plan sneller uit te voeren.",
                question: "In welke provincie staan de meeste Deltawerken? ",
                answer: "Zeeland"
            },
            {
                introToQuestion: "Willem van Oranje, ook wel de ‘Vader des vaderlands’,",
                introToQuestion2: "is geboren op 24 april 1533 op sol Dillenburg in Duitsland.",
                introToQuestion3: "Toen hij 11 jaar oud was, erfde hij het prinsdom Oranje in Frankrijk.",
                introToQuestion4: "De koninklijke familie heeft nu nog steeds Oranje-Nassau.",
                introToQuestion5: "Op 10 juli 1584 is de prins vermoord door Balthasar Gerards.",
                question: "Waar is Willem van Oranje vermoord?",
                answer: "Zuid-Holland"
            },
        ];
        return { introToQuestion: quiz[index].introToQuestion, introToQuestion2: quiz[index].introToQuestion2, introToQuestion3: quiz[index].introToQuestion3, introToQuestion4: quiz[index].introToQuestion4, introToQuestion5: quiz[index].introToQuestion5, question: quiz[index].question, answer: quiz[index].answer, };
    }
}
class MathHelper {
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
var ScreenSwitch;
(function (ScreenSwitch) {
    function makeScreens(canvas) {
        this.canvas = new Canvas(canvas);
        this.startScreen = new StartScreen();
        this.europeScreen = new EuropeScreen(canvas);
        this.countryScreen = new CountryScreen(canvas);
        this.shopScreen = new ShopScreen();
    }
    ScreenSwitch.makeScreens = makeScreens;
    function draw(currentScreen) {
        this.canvas.clearScreen();
        if (currentScreen == 'startScreen') {
            this.startScreen.draw();
        }
        if (currentScreen == 'europeScreen') {
            this.europeScreen.draw();
        }
        if (currentScreen == 'countryScreen') {
            this.countryScreen.draw();
        }
        if (currentScreen == 'shopScreen') {
            this.shopScreen.draw();
        }
    }
    ScreenSwitch.draw = draw;
})(ScreenSwitch || (ScreenSwitch = {}));
class Canvas {
    constructor(canvas) {
        this.selectedCountry = '';
        this.questionNumber = 0;
        this.canvas = canvas;
        this.question = new Question;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
    }
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "white", alignment = "center", font) {
        this.ctx.font = `${fontSize}px ${font}`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    returnCtx() {
        return this.ctx;
    }
    writeImageToCanvas(src, xCoordinate, yCoordinate, width, height) {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
        };
    }
    getWidth() {
        return this.canvas.width;
    }
    getHeight() {
        return this.canvas.height;
    }
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    writeButtonToCanvas(imageSource, imageX, imageY, imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont) {
        let buttonElement = document.createElement("img");
        buttonElement.src = imageSource;
        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, imageX, imageY);
            this.writeTextToCanvas(imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont);
        });
    }
    drawShopBox(x, y) {
        this.ctx.fillRect(x, y, 100, 100);
        this.ctx.stroke();
        this.ctx.clearRect(x + 10, y + 10, 80, 80);
        this.ctx.stroke();
    }
    writeImageToCanvasPreload(image, xCoordinate, yCoordinate, width, height) {
        this.ctx.drawImage(image, xCoordinate, yCoordinate, width, height);
    }
    colorClick() {
        this.canvas.addEventListener("click", (event) => {
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 1, 1).data;
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 106 &&
                clickEventColor[2] == 0) {
                console.log('Nederland');
                this.selectedCountry = 'Nederland';
            }
            if (clickEventColor[0] == 140 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 172) {
                console.log('België');
                this.selectedCountry = 'België';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 191 &&
                clickEventColor[2] == 0) {
                console.log('Luxemburg');
                this.selectedCountry = 'Luxemburg';
            }
            if (clickEventColor[0] == 20 &&
                clickEventColor[1] == 51 &&
                clickEventColor[2] == 255) {
                console.log('Frankrijk');
                this.selectedCountry = 'Frankrijk';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 25) {
                console.log('Spanje');
                this.selectedCountry = 'Spanje';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 221 &&
                clickEventColor[2] == 0) {
                console.log('Portugal');
                this.selectedCountry = 'Portugal';
            }
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 59) {
                console.log('Italië');
                this.selectedCountry = 'Italië';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 40 &&
                clickEventColor[2] == 115) {
                console.log('Zwitserland');
                this.selectedCountry = 'Zwitserland';
            }
            if (clickEventColor[0] == 81 &&
                clickEventColor[1] == 165 &&
                clickEventColor[2] == 255) {
                console.log('Duitsland');
                this.selectedCountry = 'Duitsland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 151 &&
                clickEventColor[2] == 25) {
                console.log('Oostenrijk');
                this.selectedCountry = 'Duitsland';
            }
            if (clickEventColor[0] == 210 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 96) {
                console.log('Polen');
                this.selectedCountry = 'Polen';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 91 &&
                clickEventColor[2] == 181) {
                console.log('Noorwegen');
                this.selectedCountry = 'Noorwegen';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 57 &&
                clickEventColor[2] == 22) {
                console.log('Zweden');
                this.selectedCountry = 'Zweden';
            }
            if (clickEventColor[0] == 114 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 198) {
                console.log('Finland');
                this.selectedCountry = 'Finland';
            }
            if (clickEventColor[0] == 163 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 25) {
                console.log('Estland');
                this.selectedCountry = 'Estland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 169 &&
                clickEventColor[2] == 40) {
                console.log('Letland');
                this.selectedCountry = 'Letland';
            }
            if (clickEventColor[0] == 178 &&
                clickEventColor[1] == 182 &&
                clickEventColor[2] == 255) {
                console.log('Litouwen');
                this.selectedCountry = 'Litouwen';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 152 &&
                clickEventColor[2] == 142) {
                console.log('Tsjechië');
                this.selectedCountry = 'Tsjechië';
            }
            if (clickEventColor[0] == 55 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 255) {
                console.log('Denemarken');
                this.selectedCountry = 'Denemarken';
            }
            if (clickEventColor[0] == 116 &&
                clickEventColor[1] == 89 &&
                clickEventColor[2] == 255) {
                console.log('Engeland');
                this.selectedCountry = 'Engeland';
            }
            if (clickEventColor[0] == 189 &&
                clickEventColor[1] == 84 &&
                clickEventColor[2] == 255) {
                console.log('Ierland');
                this.selectedCountry = 'Ierland';
            }
            if (clickEventColor[0] == 205 &&
                clickEventColor[1] == 178 &&
                clickEventColor[2] == 255) {
                console.log('Noord-Ierland');
                this.selectedCountry = 'Noord-Ierland';
            }
            if (clickEventColor[0] == 137 &&
                clickEventColor[1] == 243 &&
                clickEventColor[2] == 255) {
                console.log('Ijsland');
                this.selectedCountry = 'Ijsland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 131 &&
                clickEventColor[2] == 119) {
                console.log('Rusland');
                this.selectedCountry = 'Rusland';
            }
            if (clickEventColor[0] == 124 &&
                clickEventColor[1] == 144 &&
                clickEventColor[2] == 255) {
                console.log('Wit-Rusland');
                this.selectedCountry = 'Wit-Rusland';
            }
            if (clickEventColor[0] == 2 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 255) {
                console.log('Kaliningrad');
                this.selectedCountry = 'Kaliningrad';
            }
            if (clickEventColor[0] == 20 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 196) {
                console.log('Oekraïne');
                this.selectedCountry = 'Oekraïne';
            }
            if (clickEventColor[0] == 231 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 99) {
                console.log('Moldavië');
                this.selectedCountry = 'Moldavië';
            }
            if (clickEventColor[0] == 114 &&
                clickEventColor[1] == 112 &&
                clickEventColor[2] == 255) {
                console.log('Roemenië');
                this.selectedCountry = 'Roemenië';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 21 &&
                clickEventColor[2] == 0) {
                console.log('Slowakije');
                this.selectedCountry = 'Slowakije';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 255) {
                console.log('Hongarije');
                this.selectedCountry = 'Hongarije';
            }
            if (clickEventColor[0] == 48 &&
                clickEventColor[1] == 213 &&
                clickEventColor[2] == 255) {
                console.log('Kroatië');
                this.selectedCountry = 'Kroatië';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 181 &&
                clickEventColor[2] == 215) {
                console.log('Bosnië');
                this.selectedCountry = 'Bosnië';
            }
            if (clickEventColor[0] == 193 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 223) {
                console.log('Servië');
                this.selectedCountry = 'Servië';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 94 &&
                clickEventColor[2] == 110) {
                console.log('Montenegro');
                this.selectedCountry = 'Montenegro';
            }
            if (clickEventColor[0] == 229 &&
                clickEventColor[1] == 255 &&
                clickEventColor[2] == 63) {
                console.log('Slovenië');
                this.selectedCountry = 'Slovenië';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 0 &&
                clickEventColor[2] == 102) {
                console.log('Bulgarije');
                this.selectedCountry = 'Bulgarije';
            }
            if (clickEventColor[0] == 206 &&
                clickEventColor[1] == 73 &&
                clickEventColor[2] == 255) {
                console.log('Turkije');
                this.selectedCountry = 'Turkije';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 196 &&
                clickEventColor[2] == 248) {
                console.log('Macedonië');
                this.selectedCountry = 'Macedonië';
            }
            if (clickEventColor[0] == 152 &&
                clickEventColor[1] == 114 &&
                clickEventColor[2] == 255) {
                console.log('Albanië');
                this.selectedCountry = 'Albanië';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 246 &&
                clickEventColor[2] == 2) {
                console.log('Griekenland');
                this.selectedCountry = 'Griekenland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 197 &&
                clickEventColor[2] == 96) {
                console.log('Corsica');
                this.selectedCountry = 'Corsica';
            }
            if (this.selectedCountry !== '') {
                this.clearArea(this.getCenter().X, 150, 450, 400);
                this.writeTextToCanvas(this.selectedCountry, 35, this.getCenter().X + 211, 200, "black", "center", "Old English Text MT");
                if (this.selectedCountry == 'Nederland') {
                    this.writeCountryButton("./assets/images/oldButton.png", this.getCenter().X + 85, this.getCenter().Y + 45, "Start", 35, this.getCenter().X + 211, this.getCenter().Y + 130, "black", "center", "Old English Text MT");
                }
            }
        });
    }
    getSelectedCountry() {
        if (this.selectedCountry !== '') {
            return this.selectedCountry;
        }
        else {
            return null;
        }
    }
    resetSelectedCountry() {
        this.selectedCountry = '';
    }
    colorClickNederland(question, answer) {
        this.canvas.addEventListener("click", (event) => {
            let clickEventColor = this.ctx.getImageData(event.x, event.y, 2, 1).data;
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 102 &&
                clickEventColor[2] == 204) {
                console.log('Zeeland');
                this.selectedProvince = 'Zeeland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 204 &&
                clickEventColor[2] == 0) {
                console.log('Noord-Brabant');
                this.selectedProvince = 'Noord-Brabant';
            }
            if (clickEventColor[0] == 183 &&
                clickEventColor[1] == 75 &&
                clickEventColor[2] == 42) {
                console.log('Limburg');
                this.selectedProvince = 'Limburg';
            }
            if (clickEventColor[0] == 166 &&
                clickEventColor[1] == 161 &&
                clickEventColor[2] == 20) {
                console.log('Zuid-Holland');
                this.selectedProvince = 'Zuid-Holland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 130 &&
                clickEventColor[2] == 9) {
                console.log('Noord-Holland');
                this.selectedProvince = 'Noord-Holland';
            }
            if (clickEventColor[0] == 255 &&
                clickEventColor[1] == 140 &&
                clickEventColor[2] == 167) {
                console.log('Flevoland');
                this.selectedProvince = 'Flevoland';
            }
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 105 &&
                clickEventColor[2] == 120) {
                console.log('Utrecht');
                this.selectedProvince = 'Utrecht';
            }
            if (clickEventColor[0] == 0 &&
                clickEventColor[1] == 145 &&
                clickEventColor[2] == 215) {
                console.log('Gelderland');
                this.selectedProvince = 'Gelderland';
            }
            if (clickEventColor[0] == 192 &&
                clickEventColor[1] == 213 &&
                clickEventColor[2] == 0) {
                console.log('Overijsel');
                this.selectedProvince = 'Overijsel';
            }
            if (clickEventColor[0] == 102 &&
                clickEventColor[1] == 153 &&
                clickEventColor[2] == 51) {
                console.log('Drenthe');
                this.selectedProvince = 'Drenthe';
            }
            if (clickEventColor[0] == 200 &&
                clickEventColor[1] == 63 &&
                clickEventColor[2] == 105) {
                console.log('Groningen');
                this.selectedProvince = 'Groningen';
            }
            if (clickEventColor[0] == 73 &&
                clickEventColor[1] == 222 &&
                clickEventColor[2] == 232) {
                console.log('Friesland');
                this.selectedProvince = 'Friesland';
            }
            if (this.getSelectedProvince() === this.question.getQuestion(this.questionNumber).answer) {
                alert("GOED");
                this.questionNumber++;
                if (this.questionNumber > 6) {
                    this.clearArea(this.getWidth() / 1.9, 0, this.getWidth() / 2, this.getHeight() / 1.8);
                    this.writeTextToCanvas(`Je hebt alle vragen goed beantwoord!!`, 40, this.getWidth() / 1.35, this.getHeight() / 2.8, 'black', 'center', 'Pristina');
                }
                else {
                    this.resetSelectedProvince();
                    this.clearArea(this.getWidth() / 1.9, 0, this.getWidth() / 2, this.getHeight() / 1.8);
                    this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion}`, 30, this.getWidth() / 1.35, this.getHeight() / 3.7, 'black', 'center', 'Pristina');
                    this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion2}`, 30, this.getWidth() / 1.35, this.getHeight() / 3.2, 'black', 'center', 'Pristina');
                    this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion3}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.8, 'black', 'center', 'Pristina');
                    this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion4}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.5, 'black', 'center', 'Pristina');
                    this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).introToQuestion5}`, 30, this.getWidth() / 1.35, this.getHeight() / 2.2, 'black', 'center', 'Pristina');
                    this.writeTextToCanvas(`${this.question.getQuestion(this.getquestionNumber()).question}`, 30, this.getWidth() / 1.35, this.getHeight() / 1.9, 'black', 'center', 'Pristina');
                }
            }
        });
    }
    getSelectedProvince() {
        return this.selectedProvince;
    }
    resetSelectedProvince() {
        this.selectedProvince = '';
    }
    clearArea(x, y, width, height) {
        this.ctx.clearRect(x, y, width, height);
    }
    writeCountryButton(imageSource, imageX, imageY, imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont) {
        let buttonElement = document.createElement("img");
        buttonElement.src = imageSource;
        this.ctx.drawImage(buttonElement, imageX, imageY);
        this.writeTextToCanvas(imageText, imageTextSize, imageTextX, imageTextY, imageTextColor, imageTextAlignment, imageTextFont);
    }
    getquestionNumber() {
        return this.questionNumber;
    }
}
var PlayerHandler;
(function (PlayerHandler) {
    function makePlayer() {
        this.player = new Player;
    }
    PlayerHandler.makePlayer = makePlayer;
    function setName(name) {
        this.player.name = name;
    }
    PlayerHandler.setName = setName;
    function getScore() {
        this.player.score;
    }
    PlayerHandler.getScore = getScore;
    function getName() {
        this.player.name;
    }
    PlayerHandler.getName = getName;
    function scoreMinus(minusAmount) {
        this.player.score -= minusAmount;
    }
    PlayerHandler.scoreMinus = scoreMinus;
    function scorePlus(plusAmount) {
        this.player.score += plusAmount;
    }
    PlayerHandler.scorePlus = scorePlus;
})(PlayerHandler || (PlayerHandler = {}));
class CountryScreen extends Mapview {
    constructor(canvas) {
        super(canvas);
        this.countries = [
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
        ];
        this.netherlandsProvince = [
            { province: 'Zeeland', red: 0, green: 102, blue: 204 },
            { province: 'Noord-Brabant', red: 255, green: 204, blue: 0 },
            { province: 'Limburg', red: 183, green: 75, blue: 42 },
            { province: 'Zuid-Holland', red: 166, green: 161, blue: 20 },
            { province: 'Noord-Holland', red: 255, green: 130, blue: 9 },
            { province: 'Flevoland', red: 255, green: 140, blue: 167 },
            { province: 'Utrecht', red: 0, green: 105, blue: 120 },
            { province: 'Gelderland', red: 0, green: 145, blue: 215 },
            { province: 'Overijssel', red: 192, green: 213, blue: 0 },
            { province: 'Drenthe', red: 102, green: 153, blue: 51 },
            { province: 'Groningen', red: 200, green: 63, blue: 105 },
            { province: 'Friesland', red: 73, green: 222, blue: 232 }
        ];
        this.questionImage = new Image();
        this.shopButton = new Image();
        this.shopButton.src = "./assets/images/oldButton.png";
        this.questionImage.src = "./assets/images/questionpaper.png";
        this.shopScreen = new ShopScreen;
        this.question = new Question();
        this.player = new Player();
    }
    draw() {
        console.log(this.question.getQuestion(2).question);
        console.log(this.question.getQuestion(2).answer);
        this.canvas.colorClickNederland(this.question.getQuestion(2).question, this.question.getQuestion(2).answer);
        this.canvas.writeImageToCanvas('./assets/images/nederland.png', this.canvas.getCenter().X / 4, this.canvas.getCenter().Y / 2.7, this.canvas.getWidth() / 2.5, this.canvas.getHeight() / 1.25);
        this.canvas.writeButtonToCanvas(this.shopButton.src, this.canvas.getWidth() / 1.4, this.canvas.getHeight() / 1.35, "Winkel", 35, this.canvas.getWidth() / 1.28, this.canvas.getHeight() / 1.18, "black", "center", "Old English Text MT");
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.7, 'black', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion2}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 3.2, 'black', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion3}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.8, 'black', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion4}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.5, 'black', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).introToQuestion5}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 2.2, 'black', 'center', 'Pristina');
        this.canvas.writeTextToCanvas(`${this.question.getQuestion(this.canvas.getquestionNumber()).question}`, 30, this.canvas.getWidth() / 1.35, this.canvas.getHeight() / 1.9, 'black', 'center', 'Pristina');
        window.addEventListener("click", (event) => {
            if (event.x > this.canvas.getWidth() / 1.4 && event.x < this.canvas.getWidth() / 1.4 + this.shopButton.width) {
                if (event.y > this.canvas.getHeight() / 1.3 && event.y < this.canvas.getHeight() / 1.4 + this.shopButton.height) {
                    this.canvas.clearScreen();
                    this.shopScreen.draw();
                }
            }
        });
    }
}
class EuropeScreen extends Mapview {
    constructor(canvas) {
        super(canvas);
        this.canvas.colorClick();
        this.europeMap = new Image();
        this.europeMap.src = './assets/images/mapEurope.png';
        this.clickCountry();
    }
    draw() {
        this.canvas.writeImageToCanvasPreload(this.europeMap, 55, 80, this.canvas.getHeight() - 80, this.canvas.getHeight() - 80);
        this.canvas.getSelectedCountry();
        console.log(this.canvas.getSelectedCountry());
        this.canvas.writeTextToCanvas('Kies een land om te beginnen!', 35, this.canvas.getCenter().X + 211, 200, "black", "center", "Old English Text MT");
        this.buttonPressed = false;
    }
    clickCountry() {
        window.addEventListener("click", (event) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X + 85 && event.x < (this.canvas.getCenter().X + 85) + 250) {
                    if (event.y > this.canvas.getCenter().Y + 45 && event.y < this.canvas.getCenter().Y + 215) {
                        if (this.canvas.getSelectedCountry() == 'Nederland') {
                            this.buttonPressed = true;
                            this.canvas.resetSelectedCountry();
                            ScreenSwitch.draw('countryScreen');
                        }
                    }
                }
            }
        });
    }
}
class ShopScreen {
    constructor() {
        this.hints = 0;
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.player = new Player();
        this.listeners = [];
    }
    draw() {
        this.canvas.writeTextToCanvas('Winkel', 150, this.canvas.getCenter().X, this.canvas.getCenter().Y - 260, "black", "center", "Old English Text MT");
        this.canvas.writeTextToCanvas('Hints :', 100, this.canvas.getCenter().X - 399, this.canvas.getCenter().Y - 100, "black", 'center', "Old English Text MT");
        this.drawShopBoxes(200, 175);
        this.hintShopHandler(200, 175);
        this.canvas.writeTextToCanvas('Background :', 100, this.canvas.getCenter().X - 527, this.canvas.getCenter().Y + 100, "black", 'center', "Old English Text MT");
        this.drawShopBoxes(200, -25);
        this.canvas.writeTextToCanvas('Music :', 100, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y + 300, "black", "center", "Old English Text MT");
        this.drawShopBoxes(200, -225);
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X + 325, this.canvas.getCenter().Y + 175, "terug", 35, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y + 260, "black", "center", "Old English Text MT");
        this.shopOutHandler();
    }
    drawShopBoxes(xBox, yBox) {
        for (let index = 0; index < 3; index++) {
            this.canvas.drawShopBox(this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox);
            this.canvas.writeTextToCanvas("Koop", 50, this.canvas.getCenter().X - xBox + 50 + (index * 130), this.canvas.getCenter().Y - yBox - 20, "black", "center", "Old English Text MT");
            let listenerShopBoxesCheckMark = (event) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        this.canvas.writeImageToCanvas("assets/images/checkmark.png", this.canvas.getCenter().X - xBox + (index * 130), this.canvas.getCenter().Y - yBox, 100, 100);
                    }
                }
            };
            this.listeners.push(listenerShopBoxesCheckMark);
            window.addEventListener('click', listenerShopBoxesCheckMark);
        }
    }
    hintShopHandler(xBox, yBox) {
        let points = this.player.getScore();
        for (let index = 0; index < 3; index++) {
            this.canvas.writeTextToCanvas(`You have ${this.hints} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT");
            this.canvas.writeTextToCanvas(`${this.player.getScore()} points`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT");
            let listenerHintShop = (event) => {
                if (event.x > this.canvas.getCenter().X - xBox + (index * 130) && event.x < this.canvas.getCenter().X - xBox + 100 + (index * 130)) {
                    if (event.y > this.canvas.getCenter().Y - yBox && event.y < this.canvas.getCenter().Y - yBox + 100) {
                        if (this.player.getScore() >= 10) {
                            this.canvas.clearArea(this.canvas.getCenter().X + 250, this.canvas.getCenter().Y - 140, 400, 100);
                            this.canvas.clearArea(this.canvas.getCenter().X - 550, this.canvas.getCenter().Y - 300, 300, 100);
                            if (this.hints < 3) {
                                this.player.scoreMinus(10);
                                this.hints++;
                            }
                            this.canvas.writeTextToCanvas(`You have ${this.hints} hints`, 50, this.canvas.getCenter().X + 450, this.canvas.getCenter().Y - 100, "black", "center", "Old English Text MT");
                            this.canvas.writeTextToCanvas(`${this.player.getScore()} points`, 50, this.canvas.getCenter().X - 410, this.canvas.getCenter().Y - 250, "black", "center", "Old English Text MT");
                            console.log(this.hints);
                        }
                    }
                }
            };
            this.listeners.push(listenerHintShop);
            window.addEventListener('click', listenerHintShop);
        }
    }
    removeShopButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }
    shopOutHandler() {
        window.addEventListener("click", (event) => {
            if (event.x > this.canvas.getCenter().X + 325 && event.x < this.canvas.getCenter().X + 575) {
                if (event.y > this.canvas.getCenter().Y + 200 && event.y < this.canvas.getCenter().Y + 370) {
                    ScreenSwitch.draw('countryScreen');
                    this.removeShopButtons();
                }
            }
        });
    }
}
class StartScreen {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.player = new Player();
    }
    draw() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.2, 'black', 'center', "Old English Text MT");
        this.canvas.writeButtonToCanvas("./assets/images/oldButton.png", this.canvas.getCenter().X - 125, this.canvas.getCenter().Y + 250, "Start", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y + 340, "black", "center", "Old English Text MT");
        this.canvas.writeImageToCanvas('./assets/images/emblem-with-a-wind-rose-old-compass-and-sailboat-vector-20874003.png', this.canvas.getWidth() / 15, this.canvas.getHeight() / 1.8, 350, 350);
        this.buttonPressed = false;
        document.getElementById("wereld").style.top = '25%';
        document.getElementById('wereld').style.left = '40%';
        document.getElementById('wereld').style.width = '20%';
        document.getElementById('wereld').style.height = '40%';
        document.getElementById('name').style.top = '65%';
        document.getElementById('name').style.left = '38%';
        document.getElementById('name').style.width = '24%';
        document.getElementById('name').style.height = '8%';
        window.addEventListener("click", (event) => {
            if (this.buttonPressed == false) {
                if (event.x > this.canvas.getCenter().X - 125 && event.x < this.canvas.getCenter().X + 125) {
                    if (event.y > this.canvas.getCenter().Y + 250 && event.y < this.canvas.getCenter().Y + 420) {
                        let names = document.getElementById('name');
                        names.type = "hidden";
                        this.player.setName(names.value);
                        console.log(names.value);
                        document.getElementById("wereld").setAttribute('style', 'hidden');
                        this.canvas.clearScreen();
                        ScreenSwitch.draw('europeScreen');
                        this.player.setName(names.value);
                        this.buttonPressed = true;
                    }
                }
            }
        });
    }
}
//# sourceMappingURL=app.js.map