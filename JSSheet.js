reloadButton = document.getElementById("reload");
reloadedImage = document.getElementById("randomcatpicture");

reloadButton.addEventListener("click", reloadImage);

function reloadImage() {
    reloadedImage.src = "https://loremflickr.com/320/240";
}