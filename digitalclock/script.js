let hours = document.getElementById("hour-section")
let minutes = document.getElementById("minvalue")
let seconds = document.getElementById("secondvalue")

setInterval(() => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    if(h>12){
        h=h-12
    }
    h = h<10?"0"+h:h
    m = m<10?"0"+m:m
    s = s<10?"0"+s:s
    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s

}, 1000)