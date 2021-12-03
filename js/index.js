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
Array.from(cards).forEach((card) =>
	card.addEventListener("click", () => {
		if (card.classList.contains("reversed")) {
			card.classList.remove("reversed");
		} else {
			card.classList.add("reversed");
		}
	})
);

const terminalTabs = document.getElementsByClassName("terminal-tab");
Array.from(terminalTabs).forEach((terminalTab) =>
	terminalTab.addEventListener("click", () => {
		if (terminalTab.classList.contains("selected")) {
			terminalTab.classList.remove("selected");
			return;
		}
		Array.from(terminalTabs).forEach((otherTerminalTab) =>
			otherTerminalTab.classList.remove("selected"));
		terminalTab.classList.add("selected");
	})
);