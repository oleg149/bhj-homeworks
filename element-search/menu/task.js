const subMenulist = Array.from(document.querySelectorAll('.menu_sub'));
const linksMenu = Array.from(document.querySelectorAll('.menu__link'));
const liMenu = Array.from(document.querySelectorAll('.menu__item'));

linksMenu.forEach((i) => {
  i.onclick = function() {
  debugger;
  const sub = i.closest(".menu__item").querySelector(".menu_sub");
    if (sub) {
      sub.classList.toggle("menu_active");
      return false;
    }
  }
})


  

