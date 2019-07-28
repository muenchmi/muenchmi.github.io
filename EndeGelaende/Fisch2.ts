namespace EndeGelaende {

    export class Fisch2 extends MovingObject {
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
            this.x += Math.random() * 10 - 10;
            this.y += Math.random() * 0;
        } // Ende moving

        return(): void {
            if (this.y < 900) { // Endpunkt
            }
            if (this.x < -100) {
                this.x = 1000;
            }

        } // Ende return

        // Fische zeichnen
        draw(): void {
            // Kopf
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y + 105, 18, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            // Auge
            
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y + 98, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 15, this.y + 100, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();
            
            // K�rper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x + 30, this.y + 87, 50, 35); // Anfang, H�he, Dicke, L�nge
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 110, this.y + 130);
            crc2.lineTo(this.x + 85, this.y + 105);
            crc2.lineTo(this.x + 110, this.y + 80);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x + 70, this.y + 140);
            crc2.lineTo(this.x + 25, this.y + 90);
            crc2.lineTo(this.x + 70, this.y + 70);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();           
            crc2.beginPath();
            crc2.arc(this.x + 77, this.y + 105, 18, 4.5, 0.6 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        } // Ende draw

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 90%, 50%)";
        } // Ende setRandomColor

    } // Ende export class
} // Ende namespace