  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scroll ke bawah → sembunyikan navbar
      header.classList.add("hide-navbar");
      header.classList.remove("show-navbar");
    } else {
      // Scroll ke atas → tampilkan navbar
      header.classList.add("show-navbar");
      header.classList.remove("hide-navbar");
    }
    lastScrollY = window.scrollY;
  });

  function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
  }
