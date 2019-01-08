namespace ScreenSwitch {

    export function makeScreens(canvas: HTMLCanvasElement) {
        this.canvas = new Canvas(canvas)
        this.startScreen = new StartScreen()
        this.europeScreen = new EuropeScreen(canvas)
        this.countryScreen = new CountryScreen(canvas)
        this.saveScreen = new SaveScreen(canvas)
        this.shopScreen = new ShopScreen()
        this.optionsScreen = new OptionsScreen()
        this.trophyScreen = new TrophyScreen(canvas)
    }

    export function draw(currentScreen: string) {
        this.canvas.clearScreen()
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
        if (currentScreen == 'optionsScreen') {
            this.optionsScreen.draw();
        }
        if (currentScreen == 'saveScreen') {
            this.saveScreen.draw();
        }
        if (currentScreen == 'trophyScreen') {
            this.trophyScreen.draw();
        }
    }

    export function screenMemory(currentScreen: string) {
        this.lastScreen = currentScreen
    }

    export function drawPrevious() {
        this.canvas.clearScreen()
        if (this.lastScreen == 'startScreen') {
            this.startScreen.draw();
        }
        if (this.lastScreen == 'europeScreen') {
            this.europeScreen.draw();
        }
        if (this.lastScreen == 'countryScreen') {
            this.countryScreen.draw();
        }
        if (this.lastScreen == 'shopScreen') {
            this.shopScreen.draw();
        }
        if (this.lastScreen == 'optionsScreen') {
            this.optionsScreen.draw();
        }
        if (this.lastScreen == 'saveScreen') {
            this.saveScreen.draw();
        }
        if (this.lastScreen == 'trophyScreen') {
            this.trophyScreen.draw();
        }
    }
}


if (this.saveStatus == 'overwrite') {
            
}