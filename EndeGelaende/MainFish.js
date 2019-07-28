var EndeGelaende;
(function (EndeGelaende) {
    class Mainfish extends EndeGelaende.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
            this.size = 10;
        } // Ende c onstructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() {
            if (EndeGelaende.rightKey == true && EndeGelaende.object[0].x < EndeGelaende.crc2.canvas.width) {
                this.x += 10;
            }
            else if (EndeGelaende.leftKey == true && EndeGelaende.object[0].x > 0) {
                this.x -= 10;
            }
            else if (EndeGelaende.upKey == true && EndeGelaende.object[0].y > 0) {
                this.y -= 10;
            }
            else if (EndeGelaende.downKey == true && EndeGelaende.object[0].y - 8 < EndeGelaende.crc2.canvas.height) {
                this.y += 10;
            }
            this.collision();
        } // Ende moving
        collision() {
            EndeGelaende.object.forEach(function (element) {
                if (element instanceof EndeGelaende.Fisch2) {
                    if ((Math.abs(element.x - EndeGelaende.object[0].x) < 80) && (Math.abs(element.y - EndeGelaende.object[0].y) < 80)) {
                        element.exists = false;
                        EndeGelaende.object.splice(EndeGelaende.object.indexOf(element), 1);
                        EndeGelaende.object[0].size += 1;
                        EndeGelaende.point += 10;
                        console.log(EndeGelaende.point);
                        document.getElementById("endscore").innerHTML = EndeGelaende.point.toString();
                        return;
                    }
                } // Ende if Bedingung
                if (element instanceof EndeGelaende.Fisch) {
                    if ((Math.abs(element.x - EndeGelaende.object[0].x) < 70) && (Math.abs(element.y - EndeGelaende.object[0].y) < 70) && EndeGelaende.spielLaueft == true) {
                        //alert("AAA");
                        //this.removeAll();
                        document.getElementById("Endbildschirm").hidden = false;
                        document.getElementById("myCanvas").hidden = true;
                        EndeGelaende.insert();
                        EndeGelaende.refresh();
                        EndeGelaende.spielLaueft = false;
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
        return() {
            if (this.y < 90) {
            }
            if (this.x < -10) {
                this.x = 100;
            }
        } // Ende return
        // Fische zeichnen
        draw() {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 53, this.y + 45, 4 * this.size, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#AC0603";
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(30, 20);
            //Auge
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 25, this.y + 38, 1 * this.size, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#ffffff";
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(this.x + 23, this.y + 40, 0.7 * this.size, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#000000";
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(this.x + 60 + this.size * 5, this.y + 70); //unten
            EndeGelaende.crc2.lineTo(this.x + 45 + this.size * 4, this.y + 45); // links
            EndeGelaende.crc2.lineTo(this.x + 60 + this.size * 5, this.y + 10); //oben 
            EndeGelaende.crc2.fillStyle = "#AC0603";
            EndeGelaende.crc2.fill();
            // Text
            EndeGelaende.crc2.font = "20px Arial";
            EndeGelaende.crc2.fillStyle = "white";
            EndeGelaende.crc2.fillText("Du", this.x + 50, this.y + 50);
        } // Ende draw
    }
    EndeGelaende.Mainfish = Mainfish; // Ende export class
})(EndeGelaende || (EndeGelaende = {})); // Ende namespace
//# sourceMappingURL=MainFish.js.map