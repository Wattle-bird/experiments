$('#display').innerHTML = `
<div id=d style="aspect-ratio:1; max-width:100%;max-height:100%;margin: auto;">

<canvas id=c style="background: red; width: 100%; height: 100%">

</div>`

$('#c').onclick = (ev) => console.log(ev.offsetX/ev.target.clientWidth);