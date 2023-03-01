var sec = 00;
var ten = 00;
var timer = false;

function start() {
    timer = true;
    stWatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    sec = 00;
    ten = 00;

    document.getElementById("second").innerHTML = "00";
    document.getElementById("tens").innerHTML = "00";
}

function stWatch() {
    if (timer) {
        ten++;
        if (ten == 100) {
            sec++;
            ten = 0;
        }

        let secString = sec;
        let tenString = ten;

        if (tenString < 10) {
            tenString = "0" + tenString;
        }

        if (secString < 10) {
            secString = "0" + secString;
        }

        document.getElementById("second").innerHTML = secString;
        document.getElementById("tens").innerHTML = tenString;
        setTimeout(stWatch, 10);


    }
}