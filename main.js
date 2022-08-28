let c;
function a() {
	let d = new AudioContext();
	let f = document.querySelector('video')
		? document.querySelector('video')
		: document.querySelector('audio')
		? document.querySelector('audio')
		: alert('Media DOM not exist. Aborting.');
	if (f) {
		c = d.createGain();
		c.gain.value = 1;
		let g = d.createMediaElementSource(f);
		g.connect(c).connect(d.destination);
		let p = document.createElement('div');
		p.innerHTML = `
		<style>
		@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
		.vpc_6z {
			font-family: 'Poppins', sans-serif;
			position: fixed;
			bottom: 0%;
			padding: 20px 30px;
			z-index: 999;
			backdrop-filter: blur(30px);
			color: #fff;
			transform: translateY(0%);
			border-radius: 16px;
			margin: 10px;
			opacity: 1;
			transition-property: transform;
			transition: transform .3s ease;
		}
		.vpc_6z.hidepro {
			transform: translateY(106%);
		}
		.range {
			-webkit-appearance: none;
			width: 250px;
			height: 5px;
			outline: none;
			background: #fff;
			border-radius: 8px;
		}
		.range::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: #5720ff;
		}
		.toggle {
			position: absolute;
			top: 0;
			left: 0;
			border: none;
			border-radius: 12.8px;
			background: #5720ff;
			color: #fff;
			text-transform: uppercase;
			font-weight: 600;
			cursor: pointer;
			padding: 8px 16px;
			line-height: 1;
			font-size: 16px;
			margin: -10% 0 0 0;
		}
		.container {
			display: flex;
			flex-direction: column;
			display: grid;
			gap: 8px;
		}
		.vpi_6z {
			display: grid;
			gap: 8px;
		}
		.vpi_6z .title {
			display: flex;
			justify-content: center;
			margin: 0;
			text-transform: uppercase;
			color: #fff;
			font-size: 35px;
		}
		.containernumber {
			display: flex;
			justify-content: center;
			width: 45px;
			overflow: hidden;
			padding: 8px 12.8px;
			background: #5720ff;
			border-radius: 8px;
		}
		.containernumber span {
			font-size: 16px;
		}
		.containerV {
			display: flex;
			align-items: center;
			gap: 16px;
		}
		a {
			text-decoration: none;
			color: #fff;
			transition: all .3s ease;
		}
		a:hover {
			text-shadow: 0px 0px 5px #fff, 0px 0px 15px #fff, 0px 0px 30px #fff;
		}
		.footer {
			display: flex;
			flex-direction: row;
			justify-content: center;
			font-size: 16px;
		}
		</style>
		<div class="vpc_6z" id="vpc_6z">
			<button class="toggle">ocultar - volumen boost</button>
				<div class="container">
					<div class=vpi_6z id=vpi_6z>
						<b class="title">Volumen Boost</b>
						<div class="containerV">
							<input class="range" max=10 min=1 onmousemove='v=this.value,b(v),document.getElementById("volumeControl_e").innerHTML=v*10' onChange='v=this.value,b(v),document.getElementById("volumeControl_e").innerHTML=v*10' type=range value=0>
							<div class="containernumber">
								<span id="volumeControl_e">10</span>
								<span>&nbsp+</span>
							</div>
						</div>
					</div>
					<span class="footer" data-section="footer" data-value="text_1">Hecho Con ❤️ Por
						<a title="MarcosBonilla.ml - WebPage" href="https://www.marcosbonilla.ml/" target="_blank"
							rel="noopener noreferrer">&nbspMaxCoding</a>
					</span>
				</div>
		</div>`;
		document.body.appendChild(p);
	}
}

function b(v) {
	c.gain.value = v;
}
a(1);

let togglehs = document.querySelector('.toggle');
let main = document.querySelector('.vpc_6z');
togglehs.addEventListener('click', () => {
	main.classList.toggle('hidepro');
	if (togglehs.textContent === 'ocultar - volumen boost') {
		togglehs.innerHTML = 'mostrar - volumen boost';
	} else {
		togglehs.innerHTML = 'ocultar - volumen boost';
	}
});
