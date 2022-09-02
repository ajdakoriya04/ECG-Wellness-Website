reloadButton = document.getElementById("reload");
reloadedImage = document.getElementById("randomcatpicture");

reloadButton.addEventListener("click", reloadImage);

function reloadImage() {
    reloadedImage.src = "https://loremflickr.com/320/240";
}

map = document.getElementById("mapembed");
mapbuttonchild = document.getElementById("seechild");
mapbuttonadult = document.getElementById("seeadult");
headingshowingtherapy = document.getElementById("showingtherapy");

mapbuttonchild.addEventListener("click", onClickToChild);
mapbuttonadult.addEventListener("click", onClickToAdult);

function onClickToAdult() {
    map.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12897.357020905594!2d-79.88567145277031!3d36.08521724512666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sadult%20therapist%20near%20me!5e0!3m2!1sen!2sus!4v1661971349102!5m2!1sen!2sus";
    headingshowingtherapy.innerHTML = "Showing: Adult Therapists"
}

function onClickToChild() {
    map.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12897.553559218377!2d-79.88567150277036!3d36.08401924566371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schild%20therapist%20near%20me!5e0!3m2!1sen!2sus!4v1661889715861!5m2!1sen!2sus";
    headingshowingtherapy.innerHTML = "Showing: Child Therapists"
}