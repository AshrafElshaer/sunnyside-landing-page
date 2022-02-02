const Toggle = document.getElementById("hamburger");
const NavbarNav = document.querySelector('.navbar-nav');

Toggle.onclick = () => {
  if (Toggle.classList.contains("x")) {
    Toggle.classList.remove("x");
    NavbarNav.classList.remove('open');
  } else {
    Toggle.classList.add("x");
    NavbarNav.classList.add('open');
  }
};
