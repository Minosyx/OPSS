function zegar(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var x = document.getElementById("zegar");
    x.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(zegar, 1000);
}

function checkTime(n){
    if (n < 10) {n = "0" + n};
    return n;
}