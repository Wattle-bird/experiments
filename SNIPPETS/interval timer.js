// interval timer
if (window.intervalTimer)
 clearInterval(window.intervalTimer);
window.intervalTimer = 
 setInterval(intervalFunc, 2000)


function intervalFunc() { console.log('hello') }