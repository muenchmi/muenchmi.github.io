var EndeGelaende;
(function (EndeGelaende) {
    class MovingObject {
        constructor(_x, _y) {
            this.exists = true;
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        } // Ende constructor
        update() {
            this.moving();
            this.return();
            this.draw();
        } // Ende update
        moving() { }
        ;
        return() { }
        ;
        draw() { }
        ;
        setRandomColor() { }
        ;
    }
    EndeGelaende.MovingObject = MovingObject; // exportiert
})(EndeGelaende || (EndeGelaende = {})); // Namespace
//# sourceMappingURL=Moving.js.map