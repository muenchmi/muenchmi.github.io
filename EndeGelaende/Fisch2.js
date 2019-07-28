var EndeGelaende;
(function (EndeGelaende) {
    class Fisch2 extends EndeGelaende.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        } // Ende constructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() {
            this.x += Math.random() * 10 - 10;
            this.y += Math.random() * 0;
        } // Ende moving
        return() {
            if (this.y < 900) {
            }
            if (this.x < -100) {
                this.x = 1000;
            }
        } // Ende return
        // Fische zeichnen
        draw() {
            // Kopf
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 23, this.y + 105, 18, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = this.color;
            EndeGelaende.crc2.fill();
            // Auge
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 20, this.y + 98, 6, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#ffffff";
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 15, this.y + 100, 3, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#000000";
            EndeGelaende.crc2.fill();
            // K�rper
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.fillStyle = this.color;
            EndeGelaende.crc2.fillRect(this.x + 30, this.y + 87, 50, 35); // Anfang, H�he, Dicke, L�nge
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(this.x + 110, this.y + 130);
            EndeGelaende.crc2.lineTo(this.x + 85, this.y + 105);
            EndeGelaende.crc2.lineTo(this.x + 110, this.y + 80);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = this.color;
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(this.x + 70, this.y + 140);
            EndeGelaende.crc2.lineTo(this.x + 25, this.y + 90);
            EndeGelaende.crc2.lineTo(this.x + 70, this.y + 70);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = this.color;
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 77, this.y + 105, 18, 4.5, 0.6 * Math.PI);
            EndeGelaende.crc2.fillStyle = this.color;
            EndeGelaende.crc2.fill();
        } // Ende draw
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 90%, 50%)";
        } // Ende setRandomColor
    }
    EndeGelaende.Fisch2 = Fisch2; // Ende export class
})(EndeGelaende || (EndeGelaende = {})); // Ende namespace
//# sourceMappingURL=Fisch2.js.map