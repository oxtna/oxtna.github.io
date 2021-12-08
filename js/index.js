"use strict";

const clickEvent = new Event("click");

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
const terminalPrompt = document.querySelector(".terminal-prompt");
const terminalOutputs = document.querySelectorAll(".terminal-output");
terminalTabs.forEach((terminalTab, index) => {
	terminalTab.addEventListener("click", () => {
		if (window.innerWidth >= 768) {
			if (!terminalTab.classList.contains("selected")) {
				terminalTab.classList.add("selected");
				terminalOutputs.item(index).classList.remove("hidden");
				terminalPrompt.classList.remove("typing");
				void terminalPrompt.offsetWidth;
				terminalPrompt.classList.add("typing");
			}
			terminalTabs.forEach((otherTerminalTab, otherIndex) => {
				if (otherTerminalTab !== terminalTab) {
					otherTerminalTab.classList.remove("selected");
					terminalOutputs.item(otherIndex).classList.add("hidden");
				}
			});
		}
	})
});

const buttons = document.querySelectorAll(".button");
buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		if (!terminalTabs.item(index).classList.contains("selected")) {
			terminalTabs.item(index).classList.add("selected");
			terminalOutputs.item(index).classList.remove("hidden");
			terminalPrompt.classList.remove("typing");
			void terminalPrompt.offsetWidth;
			terminalPrompt.classList.add("typing");
		}
		terminalTabs.forEach((otherTerminalTab, tabIndex) => {
			if (index === tabIndex) {
				return;
			}
			otherTerminalTab.classList.remove("selected");
			terminalOutputs.item(tabIndex).classList.add("hidden");
		})
	});
});

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