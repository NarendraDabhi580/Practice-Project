function updateTime(){
    var getTime = new Date();
    var hours = getTime.getHours();
    var minutes = getTime.getMinutes();
    var seconds = getTime.getSeconds();
    var am_or_pm = document.getElementById("am-or-pm");

    if(hours >= 12){
        am_or_pm.innerHTML = "PM";
    }
    else{
        am_or_pm.innerHTML = "AM";
    }

    if(hours > 12){
        hours = hours - 12 ;
    }

        var hours_string = hours;
        var minutes_string = minutes;
        var seconds_string = seconds;

    if(hours_string < 10){
        hours_string = "0" + hours_string;
    }

    if(minutes_string < 10){
        minutes_string = "0" + minutes_string;
    }

    if(seconds_string < 10){
        seconds_string = "0" + seconds_string;
    }

    document.getElementById("hours").innerHTML = hours_string;
    document.getElementById("minutes").innerHTML = minutes_string;
    document.getElementById("seconds").innerHTML = seconds_string;
}

setInterval(updateTime, 1000);