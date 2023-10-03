        const ratingInput = document.getElementById("rating");
        const ratingOutput = document.getElementById("rating_output");

        ratingInput.addEventListener("input", function () {
            // Update the output element's text to display the current value
            ratingOutput.textContent = this.value;
        });