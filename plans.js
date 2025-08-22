const cards = document.querySelectorAll(".plan-card");

// default ah 2nd card select panniduvom
cards[1].classList.add("active");

cards.forEach(card => {
  card.addEventListener("click", () => {
    document.querySelector(".plan-card.active")?.classList.remove("active");
    card.classList.add("active");
    card.scrollIntoView({ behavior: "smooth", inline: "center" });
  });
});
