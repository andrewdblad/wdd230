document.addEventListener("DOMContentLoaded", function () {
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate.toDateString();
});