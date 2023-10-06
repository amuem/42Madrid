function randomColor() {
	const click = document.getElementById('click');
	const randomColor = getrandomColor();
	click.style.backgroundColor = randomColor;
}

function getrandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters [Math.floor(Math.random()*16)];
	}
	return color;
}