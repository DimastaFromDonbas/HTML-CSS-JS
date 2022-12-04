uslug_flex1btn = document.querySelector("#uslugFlex1");
top_block_flexbtn = document.querySelector(".top_block_uclug");
uslug_flex1btn.onclick = function() {
	if (uslug_flex1btn.classList.contains("active") == true) {
		top_block_flexbtn.style.overflow = "hidden";
		top_block_flexbtn.style.maxHeight = "0px";
		uslug_flex1btn.classList.remove("active");
	} else {
		top_block_flexbtn.style.overflow = "visible";
		top_block_flexbtn.style.maxHeight = "300px";
		uslug_flex1btn.classList.add("active");	
	}
}

var accordionCont = document.getElementsByClassName("accordion-item-content");
var acc = document.getElementsByClassName("accordion-item");
accordionCont.__proto__.map = Array.prototype.map;
acc.__proto__.map = Array.prototype.map;
accordionCont = accordionCont.map(item => item);
acc = acc.map(item => item);
acc.map((item, index) => {
item.onclick = function() {
	accordionCont.map((el, index1) => {
	if (index != index1){
    el.style.overflow = "hidden";
    el.style.maxHeight = "0px";
    acc[index1].classList.remove("show");

}else {
		if (item.classList.contains("show")) {
  accordionCont[index].style.overflow = "hidden";
  accordionCont[index].style.maxHeight = "0px";
  item.classList.remove("show");
 } else {
  accordionCont[index].style.overflow = "visible";
  accordionCont[index].style.maxHeight = "500px";
  item.classList.add("show");
}
 }
	})

}

})

//block_reg_but1btn = document.querySelector(".block_reg_but1");
//block_reg_i_executorbtn = document.querySelector(".block_reg_i_executor");
//block_reg_but2btn = document.querySelector(".block_reg_but2");
//block_reg_i_userbtn = document.querySelector(".block_reg_i_user");
//block_regbtn = document.querySelector(".block_reg");

perfomBtn = document.querySelector(".block_reg_but1");
perfomBlock = document.querySelector(".block_reg_i_executor");

userBtn = document.querySelector(".block_reg_but2");
userBlock = document.querySelector(".block_reg_i_user");

regBlock = document.querySelector(".block_reg");

// Первый блок клик
if(perfomBtn){
	perfomBtn.onclick = function() {

	// Если у второго блока есть класс активен - убрать у него и его кнопки
	if(userBlock.classList.contains("active")) {
		userBlock.classList.remove("active");
		userBtn.classList.remove("active_btn2");
	} 

	// Toggle = Если есть класс - убрать и наоборот
	perfomBtn.classList.toggle("active_btn1");
	perfomBlock.classList.toggle("active");
}
}
// Второй блок клик
 if(userBtn){
 	userBtn.onclick = function() {

	// Если у первого блока есть класс активен - убрать у него и его кнопки
	if(perfomBlock.classList.contains("active")) {
		perfomBlock.classList.remove("active");
		perfomBtn.classList.remove("active_btn1");
	}

	// Toggle = Если есть класс - убрать и наоборот
	userBtn.classList.toggle("active_btn2");
	userBlock.classList.toggle("active");
}
} 

activModul = document.querySelector(".profile_top");
hidenBlock = document.querySelector(".dropdown_box");

activModul.onclick = function () {
 if(hidenBlock.classList.contains("maxHeight")){
 	hidenBlock.classList.remove("maxHeight");
 	console.log(hidenBlock.style.maxHeight);
 } else {
 	console.log(hidenBlock.style.maxHeight);
 	hidenBlock.classList.add("maxHeight");
 }
}