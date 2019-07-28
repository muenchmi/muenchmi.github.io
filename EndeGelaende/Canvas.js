var EndeGelaende;
(function (EndeGelaende) {
    EndeGelaende.object = [];
    let image;
    let zeit = 60;
    EndeGelaende.point = 0;
    EndeGelaende.spielLaueft = true;
    // Initialisierung
    function init() {
        alert("AAA");
        console.log("Test");
        //refresh();
        let canvas = document.getElementsByTagName("canvas")[0];
        EndeGelaende.crc2 = canvas.getContext("2d");
        document.getElementById("Endbildschirm").hidden = true;
        window.setTimeout(timer, 60000); // ~ 1 Min
        
        // Bewegte Objekte
        //Schleife Spielerfisch
        for (let i = 0; i < 1; i++) {
            let s = new EndeGelaende.Mainfish(0.5 * canvas.width, 1); // Startpunkt
            EndeGelaende.object.push(s);
        } // Ende for Schleife
        //Schleife Fisch
        for (let i = 0; i < 5; i++) {
            let s = new EndeGelaende.Fisch(Math.random() * canvas.width - 0.1, Math.random() * 0.7 * canvas.height + 50); // Startpunkt
            EndeGelaende.object.push(s);
        } // Ende for Schleife
        //Schleife Fisch2
        for (let i = 0; i < 10; i++) {
            let s = new EndeGelaende.Fisch2(Math.random() * canvas.width - 0.1, Math.random() * canvas.height - 75); // Startpunkt
            EndeGelaende.object.push(s);
        } // Ende for Schleife
        //Schleife Blasen 
        for (let i = 0; i < 15; i++) {
            let s = new EndeGelaende.Bubbles(Math.random() * canvas.width - 0.1, Math.random() * canvas.height);
            EndeGelaende.object.push(s);
        } // Ende for Schleife
        // Hintergrund
        let grd = EndeGelaende.crc2.createLinearGradient(10, 600, 0, 0);
        grd.addColorStop(0, "#224CF7");
        grd.addColorStop(0.9, "white");
        EndeGelaende.crc2.fillStyle = grd;
        EndeGelaende.crc2.fillRect(0, 0, 900, 500);
        // Sand
        drawSand(0, 400);
        function drawSand(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
            EndeGelaende.crc2.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
            EndeGelaende.crc2.quadraticCurveTo(_x + 900, _y + 90, _x + 1220, _y - 25);
            EndeGelaende.crc2.lineTo(_x, _y + 950);
            EndeGelaende.crc2.lineTo(_x, _y);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = "#A3A175";
            EndeGelaende.crc2.fill();
        } // Ende function drawSand
        // Kiesel
        drawKiesel(100, 500);
        function drawKiesel(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(_x + 23, _y + 245, 10, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#737575";
            EndeGelaende.crc2.fill();
        } // Ende function drawKiesel1
        // Kiesel zuf�llig hinstellen
        for (let i = 0; i < 70; i++) {
            let randomX = (Math.random() * (900 - 1)) + 1;
            let randomY = (Math.random() * (400 - 200)) + 220;
            let randomKiesel = Math.floor((Math.random() * 2)) + 1;
            if (randomKiesel == 1) {
                drawKiesel(randomX, randomY);
            } // Ende if Bedingung
        } // Ende for Schleife
        // Stein1
        drawStein1(50, 400);
        function drawStein1(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(_x + 110, _y + 10);
            EndeGelaende.crc2.lineTo(_x - 70, _y + 90);
            EndeGelaende.crc2.lineTo(_x - 70, _y - 50);
            EndeGelaende.crc2.lineTo(_x + 20, _y - 50);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = "#78755A";
            EndeGelaende.crc2.fill();
        } // Ende function drawStein1
        // Stein2
        drawStein2(750, 450);
        function drawStein2(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(_x + 110, _y + 50);
            EndeGelaende.crc2.lineTo(_x - 70, _y + 70);
            EndeGelaende.crc2.lineTo(_x - 70, _y - 10);
            EndeGelaende.crc2.lineTo(_x + 20, _y - 150);
            EndeGelaende.crc2.lineTo(_x + 170, _y - 10);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = "#78755A";
            EndeGelaende.crc2.fill();
        } // Ende function drawStein2
        // Pflanzen
        drawPflanze1(200, 600);
        function drawPflanze1(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(_x, _y);
            EndeGelaende.crc2.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
            EndeGelaende.crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            EndeGelaende.crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            EndeGelaende.crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            EndeGelaende.crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
            EndeGelaende.crc2.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = "green";
            EndeGelaende.crc2.fill();
        } // Ende function drawPflanze1
        drawPflanze2(300, 600);
        function drawPflanze2(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(_x, _y);
            EndeGelaende.crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            EndeGelaende.crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            EndeGelaende.crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            EndeGelaende.crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = "green";
            EndeGelaende.crc2.fill();
        } // Ende function drawPflanze2
        drawPflanze3(700, 600);
        function drawPflanze3(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.moveTo(_x, _y);
            EndeGelaende.crc2.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
            EndeGelaende.crc2.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
            EndeGelaende.crc2.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
            EndeGelaende.crc2.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
            EndeGelaende.crc2.closePath();
            EndeGelaende.crc2.fillStyle = "green";
            EndeGelaende.crc2.fill();
        } // Ende function drawPflanze3
        // Schatztruhe
        drawTruhe(400, 400);
        function drawTruhe(_x, _y) {
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(_x + 145, _y + 25, 74, 3.1, 2 * Math.PI); // x, y, size
            EndeGelaende.crc2.fillStyle = "#FAFB9D";
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.fillStyle = "#F4F74B";
            EndeGelaende.crc2.fillRect(_x + 70, _y + 18, 150, 105);
            EndeGelaende.crc2.fill();
            EndeGelaende.crc2.beginPath();
            EndeGelaende.crc2.arc(_x + 145, _y + 25, 7, 0, 2 * Math.PI);
            EndeGelaende.crc2.fillStyle = "#000000";
            EndeGelaende.crc2.fill();
        } // Ende function drawTruhe
        // Ende des Spiels
        function timer() {
            let canvas = document.getElementsByTagName("canvas")[0];
            //canvas.hidden = true;
            //document.getElementById("Endbildschirm").hidden = false;
            document.getElementById("endscore").innerText = EndeGelaende.point.toString();
            EndeGelaende.crc2 = canvas.getContext("2d");
        } // Ende Game
        //Hintergrund speichern
        image = EndeGelaende.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende der Init-Funktion
    // Animation
    function animate() {
        // Zurücksetzen und neu erstellen
        EndeGelaende.crc2.clearRect(0, 0, 900, 600);
        EndeGelaende.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < EndeGelaende.object.length; i++) {
            let s = EndeGelaende.object[i];
            s.update();
        } // Ende for Schleife
        // Geschwindigkeit
        window.setTimeout(animate, 100);
    } // Ende function animate
    EndeGelaende.rightKey = false;
    EndeGelaende.leftKey = false;
    EndeGelaende.upKey = false;
    EndeGelaende.downKey = false;
    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyRelease, false);
    document.addEventListener("keyright", handleKeyPress, false);
    document.addEventListener("keyleft", handleKeyRelease, false);
    document.addEventListener("DOMContentLoaded", function () {
    });
    function handleKeyPress(_event) {
        if (_event.keyCode == 39) { //right
            EndeGelaende.rightKey = true;
            //            console.log("rightKey: " + rightKey);
            EndeGelaende.object[0].moving();
        }
        else if (_event.keyCode == 37) { //left
            EndeGelaende.leftKey = true;
            //            console.log("leftKey: " + leftKey);
            EndeGelaende.object[0].moving();
        }
        else if (_event.keyCode == 38) { //up
            EndeGelaende.upKey = true;
            //            console.log("leftKey: " + leftKey);
            EndeGelaende.object[0].moving();
        }
        else if (_event.keyCode == 40) { //down
            EndeGelaende.downKey = true;
            //            console.log("leftKey: " + leftKey);
            EndeGelaende.object[0].moving();
        }
    } //handleDownkey
    //Key is released
    function handleKeyRelease(_event) {
        if (_event.keyCode == 39) { //right
            EndeGelaende.rightKey = false;
        }
        else if (_event.keyCode == 37) { //left
            EndeGelaende.leftKey = false;
        }
        else if (_event.keyCode == 38) { //up
            EndeGelaende.upKey = false;
        }
        else if (_event.keyCode == 40) { //down
            EndeGelaende.downKey = false;
        }
    } //handleKeyRelease
    let serverAddress = "https://eia2ws.herokuapp.com/";
    function insert() {
        var name;
        name = prompt("Dein Name bitte", "Anonym");
        console.log("Name:", name);
        let query = "command=insert";
        query += "&spieler=" + name;
        query += "&punktzahl=" + EndeGelaende.point;
        console.log(query);
        console.log(name);
        sendRequest(query, handleInsertResponse);
    }
    EndeGelaende.insert = insert;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    EndeGelaende.refresh = refresh;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let bestenlisteArray = JSON.parse(xhr.response);
            for (let i = 0; i < bestenlisteArray.length; i++) {
                bestenlisteArray.sort(spielerSortieren);
            }
            document.getElementById("bestenliste").innerHTML = "";
            for (let i = 0; i < 10; i++) { //Div Erstellung der Bestenliste
                let neuerEintrag = document.createElement("div");
                document.getElementById("bestenliste").appendChild(neuerEintrag);
                neuerEintrag.setAttribute("id", i.toString());
                neuerEintrag.innerHTML = `${i + 1}.Platz ${bestenlisteArray[i].spielerName} : ${bestenlisteArray[i].punkte}`;
            }
        }
    }
    function spielerSortieren(_1, _2) {
        if (_1.punkte < _2.punkte) {
            return 1;
        }
        if (_1.punkte > _2.punkte) {
            return -1;
        }
        return 0;
    }
})(EndeGelaende || (EndeGelaende = {})); // Namespace
//# sourceMappingURL=Canvas.js.map
