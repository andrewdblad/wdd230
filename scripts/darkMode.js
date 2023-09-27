const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const cards = document.getElementsByClassName(".card");
const templeOverlay = document.querySelector(".overlay")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☾")) {
        body.style.background = "#3e3e3e";
        // for (let i = 0; i < cards.length; i++) {
        //     cards[i].style.backgroundColor = "blue";
        // };
		body.style.color = "#fff";
		templeOverlay.style.background = "rgba(91, 91, 91, 0.35)";
		modeButton.textContent = "☼";
	} else {
		body.style.background = "#fff";
		body.style.color = "#000";
		templeOverlay.style.background = "rgba(255, 255, 255, 0.7)"
		modeButton.textContent = "☾";
	}
});