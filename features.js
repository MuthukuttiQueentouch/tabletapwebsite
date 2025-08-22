document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // visible aana udane add
      } else {
        entry.target.classList.remove("show"); // viewport la irukaama poiduchuna remove
      }
    });
  }, { threshold: 0.2 }); // 20% visible aana trigger aagum

  features.forEach(feature => {
    observer.observe(feature);
  });
});
