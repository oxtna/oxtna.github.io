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
		card.classList.toggle("reversed");
	})
);

const terminalTabs = document.querySelectorAll(".terminal-tab");
terminalTabs.forEach((terminalTab) =>
	terminalTab.addEventListener("click", () => {
		if (!terminalTab.classList.toggle("selected")) {
			return;
		} else {
			terminalTabs.forEach((otherTerminalTab) => {
				if (otherTerminalTab !== terminalTab) {
					otherTerminalTab.classList.remove("selected");
				}
			});
		}
	})
);