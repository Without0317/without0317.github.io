function showPage() {
  const hash = window.location.hash || "#home";
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const activePage = document.querySelector(hash);
  if (activePage) activePage.classList.add("active");
  document.querySelector(".nav-links").classList.toggle("hidden");

}

window.addEventListener("load", showPage);
window.addEventListener("hashchange", showPage);

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// Scroll to top when clicked
btn.addEventListener("click", () => {
  const card = document.querySelector(".cardname");
  window.scrollTo({
    top: card.offsetTop,
    behavior: "smooth"
  });
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");

  const activePage = document.querySelector(".page.active");
  if (activePage) {
    activePage.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}



// Collapse menu when any nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();   // stop auto-scroll
    const target = link.getAttribute("href"); // "#contact"
    
    // manually change hash → triggers showPage()
    window.location.hash = target;

    // close menu if mobile
    document.querySelector(".nav-links").classList.remove("show");
  });
});

