document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".running-tables");
  if (!section) return;

  const elements = section.querySelectorAll(".bg-circle, .device-img, .info-circle");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elements.forEach((el, i) => {
          if (el.classList.contains("info-circle")) {
            el.style.transitionDelay = `${i * 0.3}s`; // stagger effect
          } else {
            el.style.transitionDelay = "0s";
          }
          el.classList.add("show");
        });
      } else {
        elements.forEach(el => el.classList.remove("show")); // scroll back repeat
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});
