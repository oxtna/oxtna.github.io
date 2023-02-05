"use strict";

const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-button");
const terminal = document.querySelector(".terminal");
const terminalButtons = document.querySelectorAll(".button[data-index]");
const terminalTabs = document.querySelectorAll(".terminal-tab");
const terminalOutputs = document.querySelectorAll(".terminal-output");
const terminalPrompt = document.querySelector(".terminal-prompt");
const fadingInElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		nav.dataset.scrolled = "true";
	} else {
		nav.dataset.scrolled = "false";
	}
});

menuButton.addEventListener("click", () => {
	if (menuButton.dataset.open === "false") {
		menuButton.dataset.open = "true";
	} else {
		menuButton.dataset.open = "false";
	}
});

menuButton.addEventListener("blur", () => {
	menuButton.dataset.open = "false";
});

const selectTerminalTabAndOutput = (index) => {
	for (const terminalTab of terminalTabs) {
		if (terminalTab.dataset.index === index) {
			terminalTab.dataset.selected = "true";
		} else {
			terminalTab.removeAttribute("data-selected");
		}
	}

	for (const terminalOutput of terminalOutputs) {
		if (terminalOutput.dataset.index === index) {
			// Reset output animation
			terminalOutput.removeAttribute("data-selected");
			void terminalOutput.offsetWidth;
			terminalOutput.dataset.selected = "true";
		} else {
			terminalOutput.removeAttribute("data-selected");
		}
	}

	// Reset typing animation
	terminalPrompt.dataset.typing = "false";
	void terminalPrompt.offsetWidth;
	terminalPrompt.dataset.typing = "true";
};

for (const terminalTab of terminalTabs) {
	terminalTab.addEventListener("click", () => {
		if (window.innerWidth <= 768) {
			return;
		}

		selectTerminalTabAndOutput(terminalTab.dataset.index);
	});
}

for (const terminalButton of terminalButtons) {
	terminalButton.addEventListener("click", () => {
		selectTerminalTabAndOutput(terminalButton.dataset.index);
	});
}

// Make IntersectionObserver responsible for managing content that will fade in after scrolling down to it.
const observerOptions = {
	root: null,
	rootMargin: "0px 0px -20% 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		}

		entry.target.dataset.appear = "true";
		observer.unobserve(entry.target);
	});
}, observerOptions);

for (const fadingInElement of fadingInElements) {
	observer.observe(fadingInElement);
}
