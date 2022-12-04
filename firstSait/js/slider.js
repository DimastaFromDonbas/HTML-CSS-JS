sliderListBlock = document.querySelector(".slider__list");
sliderPhotoImg = document.querySelector(".slider__photo img");
sliderListBlock.onclick = function(sobitie) {
   let element = sobitie.target;
   if(element.nodeName == "IMG") {
   	console.dir(sliderPhotoImg);
 	sliderPhotoImg.src = element.dataset.src;
 	let activeImage = document.querySelector(".slider__list img.active");
 	activeImage.classList.remove("active");
 	element.classList.add("active");

   }
 }

 nextBtn = document.querySelector(".slider__photo .next");
 nextBtn.onclick = function(){
  let activeImage = document.querySelector(".slider__list img.active");
 let nextElement = activeImage.nextElementSibling;
 if(nextElement == null) {
 	nextElement = activeImage.parentNode.firstElementChild;
 }
 activeImage.classList.remove("active");
 nextElement.classList.add("active");
 sliderPhotoImg.src = nextElement.dataset.src;
 }


 prevBtn = document.querySelector(".slider__photo .prev");
 prevBtn.onclick = function(){
  let activeImage = document.querySelector(".slider__list img.active");
 let prevElement = activeImage.previousElementSibling;
 if(prevElement == null) {
 	prevElement = activeImage.parentNode.lastElementChild;
 }
 activeImage.classList.remove("active");
 prevElement.classList.add("active");
 sliderPhotoImg.src = prevElement.dataset.src;
 
 }
 