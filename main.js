let mapa = document.getElementById('map'),
	box = document.getElementById('box');

mapa.addEventListener('click', (e) => {
	let xPos = (e.clientX - 75),
  	yPos = (e.clientY - 75);
    
  box.style.display = 'initial';
  box.style.top = `${yPos}px`;
  box.style.left = `${xPos}px`;
  box.style.backgroundPosition = `-${xPos}px -${yPos}px`;
});