document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the copyright year in the first paragraph
    document.getElementById("copyrightYear").textContent = currentYear;

    // Get the last modified date of the document
    const lastModifiedDate = new Date(document.lastModified);

    // Format the date as "Month Day, Year"
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

    // Update the last modified date in the second paragraph
    document.getElementById("lastModified").textContent = formattedDate;
});