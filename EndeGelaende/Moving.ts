namespace EndeGelaende {

    export class MovingObject {
        x: number;
        y: number;
        size: number;
        color: string;
        dx: number;
        dy: number;
        exists: boolean = true;

        constructor(_x: number, _y: number) {
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        } // Ende constructor

        update(): void {
            this.moving();
            this.return();
            this.draw();
        } // Ende update

        moving(): void {/* vorher definiert */ };
        return(): void {/* vorher definiert */ };
        draw(): void {/* vorher definiert */ };
        setRandomColor(): void {/* vorher definiert */ };



    } // exportiert
} // Namespace