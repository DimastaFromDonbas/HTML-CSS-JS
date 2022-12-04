blok3 = document.querySelector(".blok3");
blok4 = document.querySelector(".blok4");

clickcays1 = document.querySelector(".blok2 .cays1");
clickcays2 = document.querySelector(".blok2 .cays2");

clickcays1.onclick = function () {
  blok3.style.display = "flex";
  blok4.style.display = "none";
}
clickcays2.onclick = function () {
  blok3.style.display = "none";
  blok4.style.display = "flex";
}