document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".tables-section");
  if (!section) return;

  const elements = section.querySelectorAll(".tables-wrapper h1, .tables-desc, .table-point, .table-dot");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elements.forEach(el => el.classList.add("show"));
      } else {
        elements.forEach(el => el.classList.remove("show"));
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});
