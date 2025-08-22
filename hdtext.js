document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("section-title")) {
          entry.target.classList.add("animate-fadeUp");
        } else if (entry.target.classList.contains("section-subtitle")) {
          setTimeout(() => {
            entry.target.classList.add("animate-fadeUp");
          }, 400); // delay for subtitle
        } else {
          entry.target.classList.add("show-text");
        }
      } else {
        // 👇 Animate remove pannidu scroll aagi poyiduchuna
        entry.target.classList.remove("animate-fadeUp", "show-text");
      }
    });
  }, { threshold: 0.3 });

  // observe all elements
  document.querySelectorAll(".running-header, .section-title, .section-subtitle").forEach((el) => {
    observer.observe(el);
  });
});
