const menuMobile = document.querySelector(".menu-button"),
  nav = document.querySelector(".nav__links"),
  btns = document.querySelectorAll(".nav__links__button"),
  lists = document.querySelectorAll(".nav__links__list");

const openNav = () => {
  nav.classList.toggle("active");
  menuMobile.classList.toggle("open");

  document.querySelector("main").classList.toggle("overflow");
  document.querySelector("footer").classList.toggle("overflow");
};

const listArray = [...lists];

btns.forEach((btn, n) => {
  btn.addEventListener("click", function () {
    let activeList = listArray[n];

    listArray.forEach((list) => {
      if (list !== activeList) {
        list.classList.remove("active-list");
        console.log(list);
      }
    });

    activeList.classList.toggle("active-list");
  });
});

menuMobile.addEventListener("click", openNav);
