namespace EndeGelaende {

    export class Bubbles extends MovingObject {

        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x: number, _y: number) {

            super(_x, _y); // Superklasse
        } // Ende constructor

        // Verweisung auf Eigenschaften der Objekte
        update(): void {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
 
        // Geschwindigkeit
        moving(): void {
            this.y += Math.random() * -2 - 2;
        } // Ende moving

        // tauchen wieder auf
        return(): void {
            if (this.y < -50) {
                this.y = 650;
            } // Ende if Bedingung
        } // Ende return

        // Bubbles
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y + 25, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "rgba(255, 255, 255, 0.5";
            crc2.strokeStyle = "#ffffff";
            crc2.stroke();
            crc2.fill();
        } // Ende draw()

    } // Ende export class
} // Ende Namespace