// jQuery lite
window.S = document.querySelector.bind(document);

// Random shorthand
function rand(x) {
  return Math.random() * x
}

S('body').innerHTML = "<span id='test'>Working!</span>";