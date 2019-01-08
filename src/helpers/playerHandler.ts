namespace PlayerHandler {

    export function makePlayer(): void {
        this.player = new Player
        this.saveStatus = 'dontsave'
        console.log(this.player.player)
    }

    export function SavePlayer() {
        if (this.saveStatus == 'save') {
            localStorage.setItem(`Player${this.saveFile}`, JSON.stringify(this.player.player))
            alert(`De save voor ${this.player.player.name} is opgeslagen op plek ${this.saveFile}`)
        }
    }

    export function createSaveFile(saveFile: number) {
        if (this.saveFile != saveFile) {
            if (localStorage.getItem(`Player${saveFile}`)) {
                let confirmation = confirm(`Weet je zeker dat je de save van ${JSON.parse(localStorage.getItem(`Player${saveFile}`)).name} wilt verwijderen en de save van ${this.player.player.name} hier wilt opslaan?`)
                if (confirmation == true) {
                    this.saveFile = saveFile
                    localStorage.setItem(`Player${this.saveFile}`, JSON.stringify(this.player.player))
                    alert(`De save voor ${this.player.player.name} is opgeslagen op plek ${saveFile}`)
                    this.saveStatus = 'save'
                }
            } else {
                this.saveFile = saveFile
                localStorage.setItem(`Player${this.saveFile}`, JSON.stringify(this.player.player))
                alert(`De save voor ${this.player.player.name} is opgeslagen op plek ${saveFile}`)
                this.saveStatus = 'save'
            }
        } else if (this.saveFile == saveFile) {
            localStorage.setItem(`Player${this.saveFile}`, JSON.stringify(this.player.player))
                alert(`De save voor ${this.player.player.name} is opgeslagen op plek ${saveFile}`)
                this.saveStatus = 'save'
        }
    }

    export function loadPlayer(saveFile: number): void {
        this.saveFile = saveFile
        this.saveStatus = 'save'
        this.player.player = JSON.parse(localStorage.getItem(`Player${saveFile}`))
        alert(`De save voor ${this.player.player.name} is geladen`)
    }

    export function getSaveStatus() {
        return this.saveStatus
    }

    export function setSaveStatus(saveStatus: string) {
        this.saveStatus = saveStatus
    }

    export function setName(name: string) {
        this.player.player.name = name
    }

    export function getScore(): number {
        return this.player.player.score
    }

    export function getName(): string {
        return this.player.player.name
    }

    export function scoreMinus(minusAmount: number) {
        this.player.player.score -= minusAmount
    }

    export function scorePlus(plusAmount: number) {
        this.player.player.score += plusAmount
    }

    export function getHints(): number {
        return this.player.player.hints
    }

    export function addHint() {
        this.player.player.hints++
    }

    export function minusHint() {
        this.player.player.hints--
    }

    export function setFontStyle(fontStyle: string): void {
        this.player.player.fontStyle = fontStyle
    }

    export function getFontStyle() {
        return this.player.player.fontStyle
    }

    export function setFontColor(fontColor: string): void {
        this.player.player.fontColor = fontColor
    }

    export function getFontColor() {
        return this.player.player.fontColor
    }
}