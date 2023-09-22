const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const cards = document.getElementsByClassName(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☾")) {
        body.style.background = "#3e3e3e";
        // for (let i = 0; i < cards.length; i++) {
        //     cards[i].style.backgroundColor = "blue";
        // };
        body.style.color = "#fff";
		modeButton.textContent = "☼";
	} else {
		body.style.background = "#fff";
		body.style.color = "#000";
		modeButton.textContent = "☾";
	}
});