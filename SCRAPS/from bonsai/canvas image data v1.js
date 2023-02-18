$('#display').innerHTML = '<canvas id=c class=contain width=128 height=128>'

let x = $('#c').getContext('2d');
let id = x.getImageData(0,0,128,128)
let data = new Uint32Array(id.data.buffer)

data.forEach((_,i) => {

let r = i%256;
let g = i%32;
let b = i**3%254;

data[i] = 0xff*2**24 + r*2**16 + g*2**8 + b;

});

x.putImageData(id, 0, 0);
