const sliderImgs = document.querySelectorAll(".header-slider ul img");
const sliderPrevButton = document.querySelector(".control-prev");
const sliderNextButton = document.querySelector(".control-next");

let sliderIndex = 0;
function changeSlider() {
  for (let i = 0; i < sliderImgs.length; i++) {
    sliderImgs[i].style.display = "none";
  }
  sliderImgs[sliderIndex].style.display = "block";
}
changeSlider();

sliderPrevButton.addEventListener("click", (e) => {
  if (sliderIndex > 0) {
    sliderIndex--;
  } else {
    sliderIndex = sliderImgs.length - 1;
  }
  changeSlider();
});

sliderNextButton.addEventListener("click", (e) => {
  if (sliderIndex < sliderImgs.length - 1) {
    sliderIndex++;
  } else {
    sliderIndex = 0;
  }
  changeSlider();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
