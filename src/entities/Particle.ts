class Particle {
    private canvas: Canvas
    private W: number = window.innerWidth;
    private H: number = window.innerHeight;
    private ctx: CanvasRenderingContext2D;
    public maxConfettis = 150;
    public particles: Array<any> = [];
    private possibleColors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Gold", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
    public x: number;
    public y: number;
    public r: number;
    public d: number;
    private color: string;
    public tilt: number;
    private tiltAngleIncremental: number;
    private tiltAngle: number;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = new Canvas(canvas)
        this.ctx = this.canvas.returnCtx();
       
    }

    public draw(): void {
        this.x = Math.random() * this.W; // x
        this.y = Math.random() * this.H - this.H; // y
        this.r = this.randomFromTo(11, 33); // radius
        this.d = Math.random() * this.maxConfettis + 11;
        this.color = this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;
        console.log("test");
        this.ctx.beginPath();
        this.ctx.lineWidth = this.r / 2;
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(this.x + this.tilt + this.r / 3, this.y);
        this.ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return this.ctx.stroke();
    }

    public randomFromTo(from: number, to: number) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    public getTiltAngle(): number {
        return this.tiltAngle
    }

    public setTiltAngle(d: number): void {
        this.tiltAngle = d;
    }

    public getTiltAngleIncremental(): number {
        return this.tiltAngleIncremental
    }


}   
