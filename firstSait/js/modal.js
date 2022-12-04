clav1 = document.querySelector(".botton2");
clav2 = document.querySelector(".modal_close");


modalGlav = document.querySelector(".modal");
modalBlur = document.querySelector(".modal-blur");

clav1.onclick = function() {
  modalGlav.style.display = "block";
  modalBlur.style.display = "block";
}
clav2.onclick = function () {
  modalGlav.style.display = "none";
  modalBlur.style.display = "none";
}



clav3 = document.querySelector(".top_glov_baner1");
closs = document.querySelector(".modal_close1");

modalNew = document.querySelector(".modal__new_announcement");
modalBlur = document.querySelector(".modal-blur");

clav3.onclick = function () {
  modalNew.style.display = "block";
  modalBlur.style.display = "block";
}
closs.onclick = function () {
  modalNew.style.display = "none";
  modalBlur.style.display = "none";
}



