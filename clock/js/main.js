let hourArm = document.getElementById('hr')
let minuteArm = document.getElementById('mt')
let secondArm = document.getElementById('sc')
// 1
/*
setTimeout(function(){
    console.log('this is setTimeout fired')
}, 3000)
*/

// 2
setInterval(function(){
    //console.log('this is setInterval fired')
    let today = new Date()
    console.log(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds())

    let sec = today.getSeconds() * 360 / 60;
    let min = today.getMinutes() * 360 / 60 + sec / 60
    let hr = today.getHours() * 360 / 12 + min / 12

    secondArm.style.transform = 'rotateZ(' + sec + 'deg)'
    minuteArm.style.transform = 'rotateZ(' + min + 'deg)'
    hourArm.style.transform = 'rotateZ(' + hr + 'deg)'


}, 1000)


