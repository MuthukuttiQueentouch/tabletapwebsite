document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("order-point")) {
          const p = entry.target.querySelector("p");
          if (p && !p.classList.contains("show")) {
            // 🔥 delay illa direct add pannidum
            p.classList.add("show");
          }
        } else {
          entry.target.classList.add("show");
        }
      } else {
        entry.target.classList.remove("show");
        const p = entry.target.querySelector("p");
        if (p) {
          p.classList.remove("show");
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(
    ".circle-wrapper, .center-icon, .orders-wrapper h1, .orders-desc, .order-point, .order-dot"
  ).forEach((el) => {
    // ❌ delay remove panniduchu
    observer.observe(el);
  });
});
