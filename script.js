window.onload = function ()
{
    var sec = 00;
    var minisec = 00;
    var min = 00;
    var appendSec = document.getElementById("sec");
    var appendMinisec = document.getElementById("minisec");
    var appendMin = document.getElementById("min");
    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");
    var interval;

    btnStart.onclick = function ()
    {
        clearInterval(interval);
        interval = setInterval(start, 10)
    }

    btnStop.onclick = function ()
    {
        clearInterval(interval);
    }

    btnReset.onclick = function ()
    {
        clearInterval(interval);
        appendMinisec.innerHTML = "00";
        appendSec.innerHTML = "00";
        appendMin.innerHTML = "00";
    }

    function start()
    {
        minisec++;

        if (minisec<9)
        {
            appendMinisec.innerHTML = "0" + minisec;
        }
        if (minisec>9)
        {
            appendMinisec.innerHTML = minisec;
        }
        if (minisec>90)
        {
            sec++;
            appendSec.innerHTML = "0" +sec;
            minisec = 0;
            appendMinisec.innerHTML = "0" + minisec;
        }
        if (sec>9)
        {
            appendSec.innerHTML = sec;
        }
        if (min<9)
        {
            appendMin.innerHTML = "0" + min;
        }
        if (sec>59)
        {
            min++;
            sec = 0;
            appendSec.innerHTML = "0" + sec;
            appendMin.innerHTML = min;
        }
        if (min>9)
        {
            appendMin.innerHTML = min;
        }

    }
}



