let leftBtn = document.querySelector(".slider__arrow_prev");
let rightBtn = document.querySelector(".slider__arrow_next");
let imgList = Array.from(document.querySelectorAll(".slider__item"));
let dotList = Array.from(document.querySelectorAll(".slider__dot"));

let clearActiveClass = () => {
    imgList.forEach((element) => element.classList.remove("slider__item_active"));
    dotList.forEach((element) => element.classList.remove("slider__dot_active"));
};

let addActiveClass = (j) => {
    imgList[j].classList.add("slider__item_active");
    dotList[j].classList.add("slider__dot_active");
};

rightBtn.onclick = () => {
    let i = imgList.findIndex((element) =>
      element.classList.contains("slider__item_active")
    );
    if (i >= imgList.length - 1) {
        i = -1;
    }
    clearActiveClass();
    addActiveClass(i + 1);
};

leftBtn.onclick = () => {
    let i = imgList.findIndex((element) =>
      element.classList.contains("slider__item_active")
    );
    if (i <= 0) {
        i = imgList.length;
    }
    clearActiveClass();
    addActiveClass(i - 1);
};

dotList.forEach((element, index) => {
  element.onclick = () => {
    clearActiveClass();
    addActiveClass(index);
  };
});



