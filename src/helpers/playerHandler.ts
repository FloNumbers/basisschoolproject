namespace PlayerHandler {

    export function makePlayer(): void {
        this.player = new Player
    }

    export function setName(name: string) {
        this.player.name = name
    }

    export function getScore() {
        this.player.score
    }

    export function getName() {
        this.player.name
    }

    export function scoreMinus(minusAmount: number) {
        this.player.score -= minusAmount
    }

    export function scorePlus(plusAmount: number) {
        this.player.score += plusAmount
    }
}