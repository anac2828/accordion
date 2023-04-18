const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", e => {
  const activePanel = accordion.querySelector(
    '[aria-expanded="true"]'
  );

  if (!e.target.closest(".accordion__panel")) return;

  const selectedPanel = e.target
    .closest(".accordion__panel")
    .querySelector(".accordion__trigger");

  let isOpen =
    selectedPanel.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";

  selectedPanel.setAttribute("aria-expanded", isOpen);

  if (activePanel) activePanel.setAttribute("aria-expanded", "false");
});
