var navId = document.getElementsByClassName("nav-div-2-common");
var myCartId = document.querySelector(".myCart");
var dropDownId = document.querySelector(".dropdown-content");
var optionsId = document.getElementsByClassName("options-here");



document.getElementById("help").addEventListener("mouseover", function () {
  document.getElementById("text-help").style.display = "block";
})


document.getElementById("help").addEventListener("mouseout", function () {
  document.getElementById("text-help").style.display = "none";
})


function arrowClicked(id) {
  console.log(id);

  var nowId = document.getElementById(id);

  var listId = document.getElementById(nowId.getAttribute('name'));

  var show = nowId.getAttribute('show');

  if (show == '1') {
    listId.style.display = "none";
    nowId.setAttribute('show', "0");
  }
  else {
    listId.style.display = "inline";
    nowId.setAttribute('show', "1");
  }

  let query = "#" + id + " i";

  let spani = document.querySelectorAll(query);

  for (let i = 0; i < spani.length; i++) {

    console.log(spani[0].getAttribute('style'));

  }

}

myCartId.addEventListener("mouseover", function () {
  dropDownId.style.display = "block";
  myCartId.style.cursor = "pointer";
});

myCartId.addEventListener("mouseout", function () {
  dropDownId.style.display = "none"
});

for (let i = 0; i < navId.length; i++) {

  navId[i].addEventListener("mouseover", function () {
    navId[i].style.color = "blue";
    navId[i].style.cursor = "pointer";
  });

  navId[i].addEventListener("mouseout", function () {
    navId[i].style.color = "black";
  });
}

let arr = ["Olive", "Green", "Gold", "Silver"];

let currOptionsId = document.getElementsByClassName("img");

for (let i = 0; i < currOptionsId.length; i++) {

  currOptionsId[i].addEventListener("click", function () {

    let imgloc = currOptionsId[i].getAttribute("name");
    let imgDivId = document.getElementById(imgloc);
    let textId = document.getElementById("text-" + imgloc);
    console.log("text", textId);
    imgloc = "Images/" + currOptionsId[i].getAttribute("color");
    console.log(imgloc);
    imgDivId.setAttribute("src", imgloc);
    textId.innerHTML = arr[i % 4];
  })

}


let gbId = document.getElementsByClassName("GB");
console.log(gbId);

for (let i = 0; i < gbId.length; i++) {
  gbId[i].addEventListener("click", function () {
    let currImgId = document.getElementById(gbId[i].getAttribute("name"));

    if (gbId[i].getAttribute("press") == "128") {

      currImgId.setAttribute("src", "Images/mobile5.jpg");
      let currId1 = document.getElementById("div" + gbId[i].getAttribute("act") + "-128GB");
      let currId2 = document.getElementById("div" + gbId[i].getAttribute("act") + "-256GB");
      currId1.style.backgroundColor = "black";
      currId1.style.color = "white";
      currId2.style.backgroundColor = "white";
      currId2.style.color = "black";

    }
    else {

      currImgId.setAttribute("src", "Images/mobile3.jpg");
      let currId1 = document.getElementById("div" + gbId[i].getAttribute("act") + "-256GB");
      let currId2 = document.getElementById("div" + gbId[i].getAttribute("act") + "-128GB");
      currId1.style.backgroundColor = "black";
      currId1.style.color = "white";
      currId2.style.backgroundColor = "white";
      currId2.style.color = "black";
    }
  })
}


var heartList = document.getElementsByClassName("heart");
console.log("heart", heartList);

for (let i = 0; i < heartList.length; i++) {

  heartList[i].addEventListener("click", function () {
    let heart1 = document.getElementById("empty-heart-" + heartList[i].getAttribute("division"));
    let heart2 = document.getElementById("fill-heart-" + heartList[i].getAttribute("division"));
    console.log(heart1, heart2);

    if (heart1.getAttribute('ch') == '1') {
      heart1.setAttribute('ch', '0');
      heart1.style.display = "none";

      heart2.setAttribute('ch', '1');
      heart2.style.display = "inline";
    }
    else {
      heart2.setAttribute('ch', '0');
      heart2.style.display = "none";

      heart1.setAttribute('ch', '1');
      heart1.style.display = "inline";
    }
  })
}


window.onscroll = function (e) {
  if (!(this.oldScroll > this.scrollY)) {
    document.getElementById("top-arrow").style.display = "block";
  }
  else {
    document.getElementById("top-arrow").style.display = "none";
  }
  this.oldScroll = this.scrollY;
}



var itemClassName = "carousel__photo",
  items = document.getElementsByClassName(itemClassName),
  totalItems = items.length,
  slide = 0,
  moving = true;

function setInitialClasses() {
  items[totalItems - 1].classList.add("prev");
  items[0].classList.add("active");
  items[1].classList.add("next");
}

function setEventListeners() {
  var next = document.getElementsByClassName('carousel__button--next')[0],
    prev = document.getElementsByClassName('carousel__button--prev')[0];

  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
}

function disableInteraction() {
  moving = true;

  setTimeout(function () {
    moving = false
  }, 500);
}

function moveCarouselTo(slide) {

  if (!moving) {

    
    disableInteraction();

    var newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;

    
    if ((totalItems - 1) > 3) {

      if (newPrevious <= 0) {
        oldPrevious = (totalItems - 1);
      } else if (newNext >= (totalItems - 1)) {
        oldNext = 0;
      }

      if (slide === 0) {
        newPrevious = (totalItems - 1);
        oldPrevious = (totalItems - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalItems - 1)) {
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }

      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;

      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}

function moveNext() {
  if (!moving) {
    if (slide === (totalItems - 1)) {
      slide = 0;
    } else {
      slide++;
    }
    moveCarouselTo(slide);
  }
}

function movePrev() {

  if (!moving) {
    if (slide === 0) {
      slide = (totalItems - 1);
    } else {
      slide--;
    }
    moveCarouselTo(slide);
  }
}


function initCarousel() {
  setInitialClasses();
  setEventListeners();
  moving = false;
}

initCarousel();
