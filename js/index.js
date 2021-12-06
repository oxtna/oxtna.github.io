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

const terminal = document.querySelector(".terminal");
const terminalTabs = document.querySelectorAll(".terminal-tab");
terminalTabs.forEach((terminalTab) =>
	terminalTab.addEventListener("click", () => {
		if (!terminalTab.classList.toggle("selected")) {
			terminal.classList.remove("animation-play");
			return;
		} else {
			// Restart animation
			if (!terminal.classList.toggle("animation-play")) {
				terminal.classList.toggle("animation-play");
			}
			terminalTabs.forEach((otherTerminalTab) => {
				if (otherTerminalTab !== terminalTab) {
					otherTerminalTab.classList.remove("selected");
				}
			});
		}
	})
);

const contentObserverOptions = {
	root: null,
	rootMargin: "0px 0px -10% 0px"
};

const contentObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.classList.add("appear");
		observer.unobserve(entry.target);
	});
}, contentObserverOptions);

const contentWrappers = document.querySelectorAll(".fade-in");
contentWrappers.forEach((contentWrapper) => contentObserver.observe(contentWrapper));