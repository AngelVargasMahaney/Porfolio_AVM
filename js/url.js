let lis = document.querySelectorAll(".header__item");
lis = Array.from(lis);

lis.forEach((headerItem) => {
  // configurando el click de cada <li>
  headerItem.onclick = function () {
    const itemActive = document.querySelector(".header__item.active");
    itemActive.classList.remove("active");
   
    headerItem.classList.add("active");
  }
});

