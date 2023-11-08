class Disco {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.imagen = new Image();
    }

    makeCopy(){
        return new Disco(0, 0, this.radius, this.color); //copia la instancia creada
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

    getImage() {
        return this.imagen;
    }

    draw(ctx) {
        this.imagen.src = "./4inLine/imgs/ficha-minamoto.png";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); //construye el circulo con su radio

        //console.log("Posiciones de la ficha: " + this.x, this.y);

        const self = this;

        this.imagen.onload = async function () {
            //console.log("Posiciones de la ficha async: " + self.getPosition().x, self.getPosition().y);
            self.drawImage(ctx, this);
        }

        //ctx.drawImage(imagen, 0, 0);
        //ctx.fillStyle = this.color;
        //ctx.fill();
        ctx.closePath();
    }

    drawImage(ctx, img) {
        const diametro = this.getRadius() * 2;
        const posX = this.getPosition().x - (diametro / 2);
        const posY = this.getPosition().y - (diametro / 2);

        ctx.drawImage(img, posX, posY, diametro, diametro);
    }
}

export default Disco;