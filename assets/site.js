const siteRoot = document.body.dataset.root || ".";

const researchLinks = [
  ["geometry-symmetries-information", "Geometry, Symmetries and Quantum Information Measures"],
  ["extremal-black-hole-formation", "Extremal Black Hole Formation"],
  ["correlated-matter-anomalous-transport", "Strongly Correlated Quantum Matter and Anomalous Transport"],
  ["quantum-dynamics-information", "Quantum Dynamics and Information"],
  ["complexity-error-correction", "QIT of Complexity and Error Correction"],
];

document.querySelector("#site-header").innerHTML = `
  <header class="site-header">
    <a class="logo-link" href="${siteRoot}/index.html" aria-label="HoloQUBITS home">
      <img src="${siteRoot}/assets/logoMilenio.png" alt="HoloQUBITS Millennium Nucleus">
    </a>
    <nav aria-label="Main navigation">
      <a href="${siteRoot}/index.html">Home</a>
      <a href="${siteRoot}/synergy/index.html">Synergy</a>
      <details class="research-menu">
        <summary>Research</summary>
        <div>${researchLinks.map(([folder, title]) => `<a href="${siteRoot}/research/${folder}/index.html">${title}</a>`).join("")}</div>
      </details>
    </nav>
  </header>`;

document.querySelector("#site-footer").innerHTML = `
  <footer>
    <img src="${siteRoot}/assets/logoMilenio.png" alt="" aria-hidden="true">
    <div><p>Holographic Quantum Universe</p><p>Black Holes, Information Theory and Spacetime</p></div>
    <p class="institutions">PUCV · UAI · UNAB · UdeC</p>
  </footer>`;

const synergyFrame = document.querySelector(".synergy-frame");
if (synergyFrame) {
  window.addEventListener("message", (event) => {
    if (event.source !== synergyFrame.contentWindow) return;
    if (event.data?.type !== "holoqubits-synergy-height") return;
    const height = Number(event.data.height);
    if (Number.isFinite(height)) synergyFrame.style.height = `${Math.max(720, Math.ceil(height))}px`;
  });
}
