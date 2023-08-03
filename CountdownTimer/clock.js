const timeShow = document.getElementById("show-time");
document.getElementById("show-time").style.visibility='hidden';

var x;

let cnt=0;

function Countdown() {
    /*time data*/
    let inputHour = document.getElementById("time-insert-hour").value;
    let inputMin = document.getElementById("time-insert-min").value;
    let inputSec = document.getElementById("time-insert-sec").value;
    let sec=0;
    let min=0;
    let hour=0;
    let second = 0;

    timeShow.innerText = inputHour + " : " + inputMin + " : " + inputSec;
    
    setInterval(() => {    
        second++;

        sec < 0 && (min<=0 && hour<=0) ?  sec+=60 : sec = inputSec - second;
        min < 0 && hour >= 0 ? min+=60 : min =0 ;
        if(hour < 0) hour = 0;
        if((sec+min+hour)<0) {
            hour=0;
            min=0;
            sec=0;
            inputHour=0;
            inputMin=0;
            inputSec=0;
            stopCountdown(x);
        }
        timeShow.innerText = hour + " : " + min + " : " + sec;/*`${hour} : ${min} : ${sec}`; */
    },1000);
}

function stopCountdown() {
    clearInterval(x);
}

function clickBtns(doWhat) {
    switch (doWhat) {
        case "start" : {
            cnt++; 
            cnt==1 ? document.getElementById("show-time").style.visibility='visible' : document.getElementById("show-time").style.visibility='hidden';
            cnt==1 ? document.getElementById("show-before").style.visibility='hidden' : document.getElementById("show-before").style.visibility='visible';
            Countdown();
        }
        case "stop" : {
            cnt=0;
            stopCountdown();
        }
        case "reset" : {
            cnt=0;
            hour=0;
            min=0;
            sec=0;
            inputHour=0;
            inputMin=0;
            inputSec=0;
            stopCountdown();
        };
    }
}