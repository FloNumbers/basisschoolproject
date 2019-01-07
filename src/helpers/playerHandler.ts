namespace PlayerHandler {

    export function makePlayer(): void {
        this.player = new Player
        console.log(this.player.player)
    }

    export function SavePlayer() {
        localStorage.setItem(`Player${this.saveFile}`, JSON.stringify(this.player.player))
        alert(`The save file for ${this.player.player.name} was saved`)
    }

    export function createSaveFile(saveFile: number) {
        this.saveFile = saveFile
        localStorage.setItem(`Player${this.saveFile}`, JSON.stringify(this.player.player))
        alert(`A new save file for was created in slot ${saveFile}`)
    }

    export function loadPlayer(saveFile: number): void {
        this.saveFile = saveFile
        this.player.player = JSON.parse(localStorage.getItem(`Player${saveFile}`))
        alert(`The save file for ${this.player.player.name} was loaded`)
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