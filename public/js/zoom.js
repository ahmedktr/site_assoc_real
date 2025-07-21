window.addEventListener("DOMContentLoaded", () => {
  const zoomBtn = document.createElement("button");
  zoomBtn.className = "zoom-btn";
  zoomBtn.title = "Activer/Désactiver le zoom";
  zoomBtn.innerHTML = `
    <svg class="zoom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 2a8 8 0 1 0 4.9 14.32l5.39 5.39a1 1 0 0 0 1.42-1.42l-5.39-5.39A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4Z"/>
    </svg>
  `;
  document.body.appendChild(zoomBtn);

  let zoomed = false;
  zoomBtn.addEventListener("click", () => {
    document.body.style.fontSize = zoomed ? "1em" : "2.5em";  // ← ici on passe à x2.5
    zoomed = !zoomed;
  });
});
