namespace ScreenSwitch {

    export function makeScreens(canvas: HTMLCanvasElement) {
        this.canvas = new Canvas(canvas)
        this.startScreen = new StartScreen()
        this.europeScreen = new EuropeScreen(canvas)
        this.countryScreen = new CountryScreen(canvas)
        this.saveScreen = new SaveScreen(canvas)
        this.shopScreen = new ShopScreen()
        this.optionsScreen = new OptionsScreen()
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
    }
}