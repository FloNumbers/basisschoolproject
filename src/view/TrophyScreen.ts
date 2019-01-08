class TrophyScreen {
    private canvas: Canvas
    private ctx: CanvasRenderingContext2D;
    private particle: Particle
    private netherlandsComplete: boolean = false
    private W: number = window.innerWidth;
    private H: number = window.innerHeight;
    private remainingFlakes: number = 0;
    private trophyScreenOn: boolean = false

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = new Canvas(canvas)
        this.ctx = this.canvas.returnCtx()
        // this.particle = new Particle(canvas)

        // for (let i = 0; i < this.particle.maxConfettis; i++) {
        //     this.particle.particles.push(new Particle(canvas));
        // }
        // if (this.trophyScreenOn == true) {
        // this.trophyLoop();
        // }
    }

    public draw() {
        // this.trophyScreenOn = true;
        if (this.netherlandsComplete == true) {
            this.canvas.writeImageToCanvas('./assets/images/trophy.png', this.canvas.getWidth() / 2 - 250, this.canvas.getHeight() / 2 - 250, 500, 500)
        }
        if (this.netherlandsComplete == false) {
            this.canvas.writeImageToCanvas('./assets/images/trophyEmpty.png', this.canvas.getWidth() / 2 - 250, this.canvas.getHeight() / 2 - 250, 500, 500)
        }
        this.canvas.writeTextToCanvas('Nederland', 100, this.canvas.getWidth() / 2, this.canvas.getHeight() / 5, 'black', 'center', "Pristina")
        // this.confettiDraw();
    }

    // public confettiDraw() {
    //     const results = [];

    //     console.log(this);

    //     // Magical recursive functional love
    //     requestAnimationFrame(() => this.confettiDraw);
    //     // setInterval(this.confettiDraw, 100)

    //     this.ctx.clearRect(0, 0, this.W, window.innerHeight);

    //     for (let i = 0; i < this.particle.maxConfettis; i++) {
    //         results.push(this.particle.particles[i].draw());
    //     }

    //     for (let i = 0; i < this.particle.maxConfettis; i++) {
    //         this.particle.setTiltAngle(this.particle.getTiltAngle() + this.particle.getTiltAngleIncremental());
    //         this.particle.y += (Math.cos(this.particle.d) + 3 + this.particle.r / 2) / 2;
    //         this.particle.tilt = Math.sin(this.particle.getTiltAngle() - i / 3)

    //         if (this.particle.y <= this.H) this.remainingFlakes++;

    //         if (this.particle.x > this.W + 30 || this.particle.x < -30 || this.particle.y > this.H) {
    //             this.particle.x = Math.random() * this.W;
    //             this.particle.y = -30;
    //             this.particle.tilt = Math.floor(Math.random() * 10) - 20;
    //         }
    //     }

    //     return results;
    // }

    // public trophyLoop() {
    //     // this.draw();
    //     window.setInterval(() => this.draw(), 1000);
    // }
}