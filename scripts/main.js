var Modalbtn = document.querySelector(".Modal-btn");
var modalbg = document.querySelector(".modal-bg");
var modalclose = document.querySelector(".modal-close");

Modalbtn.addEventListener("click", function () {
	modalbg.classList.add("bg-active");
});
modalclose.addEventListener("click", function () {
	modalbg.classList.remove("bg-active");
});
const navslide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav_links");
	const navlinks = document.querySelectorAll(".nav_links li");
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
