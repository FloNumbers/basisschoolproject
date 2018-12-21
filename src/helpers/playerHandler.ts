namespace PlayerHandler {

    export function makePlayer(): void {
        this.player = new Player
        console.log(this.player.player1)
    }

    export function SavePlayer() {
        localStorage.setItem('Player1', JSON.stringify(this.player.player1))
        alert(`The save file for ${this.player.player1.name} was saved`)
        }

    export function loadPlayer(): void {
        this.player.player1 = JSON.parse(localStorage.getItem('Player1'))
        alert(`The save file for ${this.player.player1.name} was loaded`)
    }

    export function setName(name: string) {
        this.player.player1.name = name
    }

    export function getScore(): number {
        return this.player.player1.score
    }

    export function getName(): string {
        return this.player.player1.name
    }

    export function scoreMinus(minusAmount: number) { 
        this.player.player1.score -= minusAmount
    }

    export function scorePlus(plusAmount: number) {
        this.player.player1.score += plusAmount
    }

    export function getHints(): number {
        return this.player.player1.hints
    }

    export function addHint() {
        this.player.player1.hints ++
    }

    export function minusHint() {
        this.player.player1.hints --
    }
}