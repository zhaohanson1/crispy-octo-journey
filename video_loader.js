var video = document.getElementById("video1");
var volBar = document.getElementById("vol-bar-1");
var cc = document.getElementById("controls-container");
var isFullscreen = false;

function toggleVideo() {

	if ($("#play-button").is(':visible')) {
		playVideo();
	} else {
		pauseVideo();
	}

	$("#play-button").toggle();
	$("#pause-button").toggle();

}

function playVideo() {
	video.play();
}

function pauseVideo() {
	video.pause();
}

function setVolume(volume) {
	video.volume = volume;
}

function toggleFullscreen() {
	if (!isFullscreen) {
		video.classList.add("fullscreen");
		cc.classList.add("controls-fullscreen");
		document.getElementsByTagName("body")[0].setAttribute("style", "background-color: black")
		document.documentElement.requestFullscreen();
	} else {
		video.classList.remove("fullscreen");
		cc.classList.remove("controls-fullscreen");
		document.exitFullscreen();
	}
	isFullscreen = !isFullscreen;
}

function changeVolume() {
	setVolume(volBar.value / 100);
}

function main() {
	$("#play-button").hide();
	volBar.value = video.volume * 100;
	volBar.oninput = changeVolume;

	/* Add subtitles */
	var subtitle =
		'V0VCVlRUDSANIFNUWUxFDSA6OmN1ZSB7DSBmb250LWZhbWlseTogZmFudGFzeTsN'
		+ 'IH0NIA0gMDA6MDAuMDAwIC0tPiAwMDowNC4wMDANIFthbWJpZW50IG5vaXNlXSAN'
		+ 'IDAwOjA0LjIwMCAtLT4gMDA6MDQuNzUwDSBbc2xpZGUgd2hpc3RsZV0gDSAwMDow'
		+ 'NC44NTAgLS0+IDAwOjA1LjI1MA0gTm9wZS4K';
	subtitle = window.atob(subtitle);
	var subBlob = new Blob([subtitle]);
	var subURL = URL.createObjectURL(subBlob);
	document.getElementById("subtitle").setAttribute("src", subURL);

	console.log("Done");
}

window.addEventListener('load', main);