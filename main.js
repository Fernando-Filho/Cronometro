window.onload = function () {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var milissegundos = 00;
    var appendmilissegundos = document.getElementById("milissegundos")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutos = document.getElementById("minutos")
    var appendHoras = document.getElementById("horas")
    var buttonStart = document.getElementById('button-start')
    var buttonStop = document.getElementById('button-stop')
    var buttonReset = document.getElementById('button-reset')
    var Interval;

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        milissegundos = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        appendmilissegundos.innerHTML = milissegundos;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer() {
        milissegundos++;

        if (milissegundos <= 9) {
            appendmilissegundos.innerHTML = "0" + milissegundos;
        }

        if (milissegundos > 9) {
            appendmilissegundos.innerHTML = milissegundos;

        }

        if (milissegundos > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milissegundos = 0;
            appendmilissegundos.innerHTML = "0" + milissegundos;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            console.log("minutos");
            minutes++;
            appendMinutos.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds; 
        }

        if (minutes > 9) {
            appendMinutos.innerHTML = minutes;
        }

        if (minutes > 59) {
            console.log("horas");
            hours++;
            appendSeconds.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutos.innerHTML = "0" + minutes; 
        }

        if (minutes > 9) {
            appendHoras.innerHTML = hours;
        }
    }


}