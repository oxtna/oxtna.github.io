"use strict";

const nav = document.getElementsByClassName("nav")[0];
window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

const cards = document.getElementsByClassName("card");
Array.from(cards).forEach(card => card.addEventListener("click", () => {
	if (card.classList.contains("clicked")) {
		card.classList.remove("clicked");
	}
	else {
		card.classList.add("clicked");
	}
}));