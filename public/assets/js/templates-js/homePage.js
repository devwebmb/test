const navbarOnclickAttributes =
  document.getElementsByClassName("navbarDropdown");
const xlStickyTop = document.getElementById("xlStickyTop");
// const homePageNavbar = document.getElementById('homepageNavbar')

const start = () => {
  let windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth < 1200) {
    for (let i = 0; i < navbarOnclickAttributes.length; i++) {
      navbarOnclickAttributes[i].setAttribute("role", "button");
      navbarOnclickAttributes[i].setAttribute("data-bs-toggle", "dropdown");
    }
  } else if (windowWidth >= 1200) {
    for (let i = 0; i < navbarOnclickAttributes.length; i++) {
      navbarOnclickAttributes[i].setAttribute("role", "");
      navbarOnclickAttributes[i].setAttribute("data-bs-toggle", "");
    }
  }
  if (windowWidth > 1400) {
    xlStickyTop.classList.add("sticky-top");
  } else if (windowWidth <= 1400) {
    xlStickyTop.classList.remove("sticky-top");
  }
};
start();
window.onresize = start;
