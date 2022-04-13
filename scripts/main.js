var Modalbtn = document.querySelector(".Modal-btn");
var modalbg = document.querySelector(".modal-bg");
var modalclose = document.querySelector(".modal-close");
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_card");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", function () {
	moveToNextSlide();
});
document.getElementById("previous").addEventListener("click", function () {
	moveToPreviousSlide();
});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove("carousel_card--visible");
		slide.classList.add("carousel_card--hidden");
	}
	slides[slidePosition].classList.add("carousel_card--visible");
}

function moveToNextSlide() {
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	updateSlidePosition();
}

function moveToPreviousSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}
	updateSlidePosition();
}

Modalbtn.addEventListener("click", function () {
	modalbg.classList.add("bg-active");
});
modalclose.addEventListener("click", function () {
	modalbg.classList.remove("bg-active");
});
const navslide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav_links");
	const nav_links = document.querySelectorAll(".nav_links li");
	//Toggle Nav
	burger.addEventListener("click", function () {
		nav.classList.toggle("nav-active");
	});
	//Animation Links
	nav_links.forEach((link, index) => {
		link.style.animation = "navLinkFade 0.5s ease forwards ${index /7s}";
		console.log(index / 7);
	});
};
navslide();
