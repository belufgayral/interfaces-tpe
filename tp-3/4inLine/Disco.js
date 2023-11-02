class Disco {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    makeCopy(){
        return new Disk(0, 0, this.radius, this.color); //copia la instancia creada
    }

    move(x, y) {
        this.x = x; //setea nueva posicion en x
        this.y = y; //setea nueva posicion en y
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); //construye el circulo con su radio
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Disco;