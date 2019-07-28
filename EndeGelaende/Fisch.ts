namespace EndeGelaende {

    export class Fisch extends MovingObject {
        dx: number;
        dy: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
        } // Ende constructor
 
        update(): void {
            this.moving();
            this.return();
            this.draw();
        } // Ende update

        moving(): void {
            
            this.x += Math.random() * 5 + 10;
            this.y += Math.random() * 0;
        } // Ende moving

        return(): void {
            if (this.x > 1000) { // Endpunkt
                this.x = 0;  // Startpunkt
            }
        } // Ende return

        // Fische zeichnen
        draw(): void {
            // Kopf
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y + 105, 27, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            // Auge
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 98, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 103, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();
            // K�rper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 70, this.y + 78, 90, 55); // Anfang, H�he, Dicke, L�nge
            crc2.closePath();
            crc2.moveTo(this.x - 110, this.y + 150);
            crc2.lineTo(this.x - 65, this.y + 100);
            crc2.lineTo(this.x - 110, this.y + 50);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 90, this.y + 150);
            crc2.lineTo(this.x - 65, this.y + 100);
            crc2.lineTo(this.x - 90, this.y + 50);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
        } // Ende draw

        // zuf�llige Farbe
        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 70%)";
        } // Ende setRandomColor


    } // Ende export class
} // Ende namespace
