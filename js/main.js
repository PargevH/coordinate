var info = document.getElementById('main');

function f1 (p){
//p = position object
//pageX pageY u x y i tarberutyunner@
info.innerHTML = 'Cordinat X : ' + p.x + '<br />Cordinat Y : ' + p.y;
console.log(p);
info.style.marginLeft = p.x + "px";
info.style.marginTop = p.y + "px"; 
}
addEventListener('mousemove', f1);
//stexcuma mkniki sharjman@ lsox aysinqn kanchuma f1