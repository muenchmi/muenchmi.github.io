namespace EndeGelaende {

    export class Mainfish extends MovingObject {
        dx: number;
        dy: number;
        size: number = 10;
        fischElement: Fisch;
        constructor(_x: number, _y: number) {
            super(_x, _y);
        } // Ende c onstructor

        update(): void {
            this.moving();
            this.return();
            this.draw();
        } // Ende update

        moving(): void {
            if (rightKey == true && object[0].x < crc2.canvas.width) {
                this.x += 10;
            }
            else if (leftKey == true && object[0].x > 0) {
                this.x -= 10;
            }
            else if (upKey == true && object[0].y > 0) { // GRENZEN FUNKTIONIEREN NOCH NCHT
                this.y -= 10;
            }
            else if (downKey == true && object[0].y - 8 < crc2.canvas.height) {
                this.y += 10;
            }
            this.collision();

        } // Ende moving

        collision(): void { // Testet ob eine Kolision vorliegt und vergrößert den Fisch oder Bricht das Spiel ab 
            object.forEach(function(element: MovingObject): void {


                if (element instanceof Fisch2) {
                    if ((Math.abs(element.x - object[0].x) < 80) && (Math.abs(element.y - object[0].y) < 80)) {
                        element.exists = false;
                        object.splice(object.indexOf(element), 1);
                        object[0].size += 1;
                        point += 10;
                        console.log(point);

                        document.getElementById("endscore").innerHTML = point.toString();
                        return;
                    }
                } // Ende if Bedingung
 
                if (element instanceof Fisch) {
                    if ((Math.abs(element.x - object[0].x) < 70) && (Math.abs(element.y - object[0].y) < 70)&&spielLaueft==true) {
                        //alert("AAA");
                        //this.removeAll();
                        document.getElementById("Endbildschirm").hidden = false;
                        document.getElementById("myCanvas").hidden = true;
                        insert();
                        refresh();
                        spielLaueft=false;
                        return;
                    }
                } // Ende if Bedingung
            });
            return;
        }

//        removeAll(): void {
//            //            alert("CCC");
//            object.forEach(function(element: MovingObject) {
//                if (!(element instanceof Bubbles)) {
//                    alert(element.exists);
//                    object.splice(object.indexOf(element), 1);
//                }
//            });
//            return;
//        }
        return(): void {
            if (this.y < 90) { // Endpunkt
            }
            if (this.x < -10) {
                this.x = 100;
            }
        } // Ende return

        // Fische zeichnen
        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 53, this.y + 45, 4 * this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "#AC0603";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(30, 20);
            //Auge
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y + 38, 1 * this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y + 40, 0.7 * this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 60 + this.size * 5, this.y + 70); //unten
            crc2.lineTo(this.x + 45 + this.size * 4, this.y + 45); // links
            crc2.lineTo(this.x + 60 + this.size * 5, this.y + 10); //oben 
            crc2.fillStyle = "#AC0603";
            crc2.fill();

            // Text
            crc2.font = "20px Arial";
            crc2.fillStyle = "white";
            crc2.fillText("Du", this.x + 50, this.y + 50);

        } // Ende draw


    } // Ende export class
} // Ende namespace
