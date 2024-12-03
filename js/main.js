//* Implementation of Back To Top Button appear on scroll *//
const goTop = document.getElementById("goTop");

window.onscroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? goTop.classList.remove("d-none")
    : goTop.classList.add("d-none");
};

goTop.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
