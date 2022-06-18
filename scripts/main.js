var Modalbtn = document.querySelector(".Modal-btn");
var modalbg = document.querySelector(".modal-bg");
var modalclose = document.querySelector(".modal-close");
let slidePosition = 0;
let slidePositionTech = 0;
const slides = document.getElementsByClassName("carousel-card");
const displays = document.getElementsByClassName("carousel-card-tech");
const totalSlides = slides.length;
const totalSlidesTech = displays.length;

Modalbtn.addEventListener("click", function () {
	modalbg.classList.add("bg-active");
});
modalclose.addEventListener("click", function () {
	modalbg.classList.remove("bg-active");
});
const navslide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const nav_links = document.querySelectorAll(".nav-links li");
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

document.getElementById("next").addEventListener("click", function () {
	moveToNextSlide();
});
document.getElementById("previous").addEventListener("click", function () {
	moveToPreviousSlide();
});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove("carousel-card--visible");
		slide.classList.add("carousel-card--hidden");
	}
	slides[slidePosition].classList.add("carousel-card--visible");
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

document.getElementById("next-tech").addEventListener("click", function () {
	moveToNextSlideTech();
});
document.getElementById("previous-tech").addEventListener("click", function () {
	moveToPreviousSlideTech();
});

function updateSlidePositionTech() {
	for (let display of displays) {
		display.classList.remove("carousel-card--visible-tech");
		display.classList.add("carousel-card--hidden-tech");
	}
	displays[slidePositionTech].classList.add("carousel-card--visible-tech");
}

function moveToNextSlideTech() {
	if (slidePositionTech === totalSlidesTech - 1) {
		slidePositionTech = 0;
	} else {
		slidePositionTech++;
	}
	updateSlidePositionTech();
}

function moveToPreviousSlideTech() {
	if (slidePositionTech === 0) {
		slidePositionTech = totalSlidesTech - 1;
	} else {
		slidePositionTech--;
	}
	updateSlidePositionTech();
}
