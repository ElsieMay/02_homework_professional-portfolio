var Modalbtn = document.querySelector(".Modal-btn");
var modalbg = document.querySelector(".modal-bg");
var modalclose = document.querySelector(".modal-close");

Modalbtn.addEventListener("click", function () {
	modalbg.classList.add("bg-active");
});
modalclose.addEventListener("click", function () {
	modalbg.classList.remove("bg-active");
});
