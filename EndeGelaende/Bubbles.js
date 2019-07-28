var EndeGelaende;
(function (EndeGelaende) {
    class Bubbles extends EndeGelaende.MovingObject {
        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x, _y) {
            super(_x, _y); // Superklasse
        } // Ende constructor
        // Verweisung auf Eigenschaften der Objekte
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        // Geschwindigkeit
        moving() {
            this.y += Math.random() * -2 - 2;
        } // Ende moving
        // tauchen wieder auf
        return() {
            if (this.y < -50) {
                this.y = 650;
            } // Ende if Bedingung
        } // Ende return
        // Bubbles
        draw() {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 23, this.y + 25, 15, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "rgba(255, 255, 255, 0.5";
            EndeGelaende.crc2.strokeStyle = "#ffffff";
            EndeGelaende.crc2.stroke();
            EndeGelaende.crc2.fill();
        } // Ende draw()
    }
    EndeGelaende.Bubbles = Bubbles; // Ende export class
})(EndeGelaende || (EndeGelaende = {})); // Ende Namespace
//# sourceMappingURL=Bubbles.js.map