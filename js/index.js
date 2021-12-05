"use strict";

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) =>
	card.addEventListener("click", () => {
		if (card.classList.contains("reversed")) {
			card.classList.remove("reversed");
		} else {
			card.classList.add("reversed");
		}
	})
);

const terminalTabs = document.querySelectorAll(".terminal-tab");
terminalTabs.forEach((terminalTab) =>
	terminalTab.addEventListener("click", () => {
		if (terminalTab.classList.contains("selected")) {
			terminalTab.classList.remove("selected");
			return;
		} else {
			terminalTabs.forEach((otherTerminalTab) =>
				otherTerminalTab.classList.remove("selected"));
			terminalTab.classList.add("selected");
		}
	})
);