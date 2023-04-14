const menuMobile = document.querySelector(".menu-button"),
  nav = document.querySelector(".nav__links"),
  btns = document.querySelectorAll(".nav__links__button"),
  lists = document.querySelectorAll(".nav__links__list");

const openNav = () => {
  nav.classList.toggle("active");
  menuMobile.classList.toggle("open");
  document.querySelector("main").classList.toggle("hide-all");
  document.querySelector("footer").classList.toggle("hide-all");

  if (menuMobile.contains !== "open") {
    listArray.forEach((list) => {
      list.classList.remove("active-list");
    });
  }
};

const listArray = [...lists];

btns.forEach((btn, n) => {
  btn.addEventListener("click", function () {
    let activeList = listArray[n];

    listArray.forEach((list) => {
      if (list !== activeList) {
        list.classList.remove("active-list");
      }
    });

    activeList.classList.toggle("active-list");
  });
});

menuMobile.addEventListener("click", openNav);
