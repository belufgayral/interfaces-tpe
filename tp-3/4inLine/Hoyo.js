class Hoyo {
    constructor(x, y, size, img) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.image = img;
        this.disk = null;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    getState() {
        return this.state;
    }

    getDisk() {
        return this.disk;
    }

    draw(ctx) {
        // Create an Image object and set its source to the background image URL
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; //setea el color alrededor del hoyo, no del hoyo instanciado
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.save(); //guarda el estado del contexto dibujado
        this.generateHole(ctx);
        ctx.clearRect(this.x, this.y, this.size, this.size);
        ctx.restore(); //esto restaura el estado guardado
        //ctx.drawImage(this.image, this.x, this.y, 50, 50) 
    }

    generateHole(ctx) { //esto arma el hoyo con su forma circular
        ctx.beginPath();
        ctx.arc(this.x + this.size / 2, this.y + this.size / 2, this.size / 3, 0, 2 * Math.PI);
        ctx.closePath(); //el metodo path es para dibujar formas, empezarlas y cerrarlas, en este caso dibujamos un circulo
        ctx.clip(); //el metodo clip recorta una parte de n tamanio del ctx original, y para el futuro cualquier drawing queda circunscrito a esta parte recortada
    }

    async putDisk(ctx, disk, speed) { //cuando pongo el disco en la columna a caer
        this.disk = disk;
        await this.animateFall(ctx, disk, speed, false)
    }

    async animateFall(ctx, disk, speed, full) { //esto ejecuta la secuencia asincrona de caida del disco en la columna
        ctx.save();
        let dy = 0;
        let i = 0;
        let limit = full ? this.size + disk.getRadius() : this.size / 2;
        this.generateHole(ctx);
        while (dy <= limit) {
            dy = i * speed;
            ctx.clearRect(this.x, this.y, this.size, this.size);
            disk.move(this.x + this.size / 2, this.y + dy);
            disk.draw(ctx);
            i++;
            await new Promise((resolve) => setTimeout(resolve, 10));
        }
        if (!full) {
            ctx.clearRect(this.x, this.y, this.size, this.size);
            disk.move(this.x + this.size / 2, this.y + this.size / 2);
            disk.draw(ctx);
        }
        ctx.restore();
    }
}

export default Hoyo;