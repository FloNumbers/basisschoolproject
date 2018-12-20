namespace PlayerHandler {

    export function makePlayer(): void {
        this.player = new Player
    }

    export function setName(name: string) {
        this.player.name = name
    }

    export function getScore(): number {
        return this.player.score
    }

    export function getName(): string {
        return this.player.name
    }

    export function scoreMinus(minusAmount: number) {
        this.player.score -= minusAmount
    }

    export function scorePlus(plusAmount: number) {
        this.player.score += plusAmount
    }

    export function getHints(): number {
        return this.player.hints
    }

    export function addHint() {
        this.player.hints ++
    }

    export function minusHint() {
        this.player.hints --
    }
}