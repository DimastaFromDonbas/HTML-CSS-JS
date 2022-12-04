clickBlock = document.querySelector(".botton4");
closeBlockEnd = document.querySelector(".modal_close2");

modalEnd = document.querySelector(".modal_end");
modalBlur = document.querySelector(".modal-blur");

if(clickBlock){
clickBlock.onclick = function () {
  modalBlur.style.display = "block";
  modalEnd.style.display = "block";
}
}
if(closeBlockEnd){
closeBlockEnd.onclick = function () {
  modalBlur.style.display = "none";
  modalEnd.style.display = "none";
}
}



blok3 = document.querySelector(".blok3");
blok4 = document.querySelector(".blok4");
blok5 = document.querySelector(".blok5");

clickcays1 = document.querySelector(".blok2 .cays1");
clickcays2 = document.querySelector(".blok2 .cays2");
clickcays3 = document.querySelector(".blok2 .cays3");
if(clickcays1){
clickcays1.onclick = function () {
  blok3.style.display = "flex";
  blok4.style.display = "none";
  blok5.style.display = "none";
  clickcays1.style.color = "#713E8B"
  clickcays1.style.borderColor = "#713E8B"
  clickcays2.style.color = "#4F4F4F"
  clickcays2.style.borderColor = "#4F4F4F"
  clickcays3.style.color = "#4F4F4F"
  clickcays3.style.borderColor = "#4F4F4F"
}
}
if(clickcays2){
clickcays2.onclick = function () {
  blok3.style.display = "none";
  blok4.style.display = "flex";
  blok5.style.display = "none";
  clickcays1.style.color = "#4F4F4F"
  clickcays1.style.borderColor = "#4F4F4F"
  clickcays2.style.color = "#713E8B"
  clickcays2.style.borderColor = "#713E8B"
  clickcays3.style.color = "#4F4F4F"
  clickcays3.style.borderColor = "#4F4F4F"
}
}
if(clickcays3){
clickcays3.onclick = function () {
  blok3.style.display = "none";
  blok4.style.display = "none";
  blok5.style.display = "block";
  clickcays1.style.color = "#4F4F4F"
  clickcays1.style.borderColor = "#4F4F4F"
  clickcays2.style.color = "#4F4F4F"
  clickcays2.style.borderColor = "#4F4F4F"
  clickcays3.style.color = "#713E8B"
  clickcays3.style.borderColor = "#713E8B"
}
}

function hideContent(box,click) {
   box.map((item,index) =>{
    item.style.display = "none";
    click[index].children[1].style.display = "block";
    click[index].style.background = "white";
  });
}
function hideCareContent(box,click,index,item) {
    box.map((el, index1) => {
  if (index != index1){
    el.style.display = "none";
    click[index1].children[1].style.display = "block";
    click[index1].style.background = "white";
} else {
     item.children[1].style.display = "none";
     item.style.background = "#F7F7F7";
     el.style.display = "flex";
}
  })
}
var click1 = document.getElementsByClassName("box_headlines_case2");
var box1 = document.getElementsByClassName("none_window1");
var click2 = document.getElementsByClassName("box_headlines_case3");
var box2 = document.getElementsByClassName("none_window2");
var click3 = document.getElementsByClassName("box_headlines_case4");
var box3 = document.getElementsByClassName("none_window3");
var closeContent = document.getElementsByClassName("box_but");
closeContent.__proto__.map = Array.prototype.map;
click1.__proto__.map = Array.prototype.map;
box1.__proto__.map = Array.prototype.map;
click2.__proto__.map = Array.prototype.map;
box2.__proto__.map = Array.prototype.map;
click3.__proto__.map = Array.prototype.map;
box3.__proto__.map = Array.prototype.map;
closeContent = closeContent.map(item => item);
box1 = box1.map(item => item);
click1 = click1.map(item => item);
closeContent.map((item, index) => {
 item.children[0].onclick = function () {
  switch (true) {
    case index < 3 : 
    index = 0; 
    break;
    case index < 6 : 
    index = 1; 
    break;
    case index < 9 : 
    index = 2; 
    break;
    default: 
    index = 3; 
  } 
 hideContent(box3,click3);
 hideContent(box2,click2);
 hideContent(box1,click1);
  box1[index].style.display = "none";
  box2[index].style.display = "none";
  box3[index].style.display = "none";
 }
})
click1.map((item, index) => {
item.onclick = function() {
 hideContent(box3,click3);
 hideContent(box2,click2);
 hideCareContent(box1,click1,index,item);
  }
 })

box2 = box2.map(item => item);
click2 = click2.map(item => item);
click2.map((item, index) => {
item.onclick = function() {
hideContent(box3,click3);
hideContent(box1,click1);
hideCareContent(box2,click2,index,item);
  }
 })

box3 = box3.map(item => item);
click3 = click3.map(item => item);
click3.map((item, index) => {
item.onclick = function() {
 hideContent(box2,click2);
 hideContent(box1,click1);
hideCareContent(box3,click3,index,item);
  }
 })

var dataClick = document.getElementsByClassName("date_box");
dataClick.__proto__.map = Array.prototype.map;
dataClick = dataClick.map(item => item);
dataClick.map((item, index) => {
  item.onclick = function () {
    if (item.classList.contains("color_back")){
    item.classList.remove("color_back");
 } else {
    item.classList.add("color_back");
 }
  }

})




var profActiv = document.getElementsByClassName("mainUnit_case");
hideCont = document.querySelector(".mainUnit_stobl2");
var hideBox = document.getElementsByClassName("hidenBlock");

hideBox.__proto__.map = Array.prototype.map;
hideBox = hideBox.map(item => item);
profActiv.__proto__.map = Array.prototype.map;
profActiv = profActiv.map(item => item);
profActiv.map((item, index) => {
  item.onclick = function () {
  profActiv.map((el, index1) => {
  if (index != index1){
    el.classList.remove("borderNew");
    hideBox[index1].classList.remove("visibleBlock");
}else{
    item.classList.add("borderNew");
    hideBox[index1].classList.add("visibleBlock");
}
  })

  }

})


var buttonActiv = document.getElementsByClassName("case");
var hidencontent = document.getElementsByClassName("hidenContent");
hidencontent = [hideBox[0], ...hidencontent];
buttonActiv.__proto__.map = Array.prototype.map;
buttonActiv = buttonActiv.map(item => item);
hidencontent.__proto__.map = Array.prototype.map;
hidencontent = hidencontent.map(item => item);
buttonActiv.map((item, index) => {
  item.onclick = function () {
  buttonActiv.map((el, index1) => {
  if (index != index1){
    el.classList.remove("backColor");
    hidencontent[index1].classList.remove("visibleBlock");
}else {
    item.classList.add("backColor");
    hidencontent[index1].classList.add("visibleBlock");
 }
  })
  }

})



