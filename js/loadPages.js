
function loadSection(sectionId, file) {
    fetch(file) 
        .then(response => response.text()) 
        .then(data => document.getElementById(sectionId).innerHTML = data) 
        .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadSection("banner_4", "./pages/banner_4.html");
});
