/* =====================================================
   TROMBINOSCOPE — script.js
   Ce fichier charge la liste des membres et
   génère les cartes sur index.html
   ===================================================== */

/**
 * ─────────────────────────────────────────────────────
 * AJOUTER UN MEMBRE :
 *  1. Duplique le dossier  member-template/
 *  2. Renomme-le avec le prénom/nom ex:  alice-mbarga/
 *  3. Remplis  alice-mbarga/data.js  avec tes infos
 *  4. Ajoute une entrée dans le tableau MEMBERS ci-dessous
 * ─────────────────────────────────────────────────────
 */

const MEMBERS = [
  { folder: "Fossong-Patricia",  name: "Fossong Tsofack Patricia",  role: "Développeuse Front-end et UI/UX Designer", color: "#60c5f0", initials: "FP" },
  { folder: "alice-mbarga",  name: "Alice Mbarga",  role: "Développeuse Front-end",   color: "#c8f060", initials: "AM" },
  // Ajoute les autres membres ici :
  // { folder: "prenom-nom", name: "Prénom Nom", role: "Ton rôle", color: "#rrggbb", initials: "XX" },
];

/* ── Génération des cartes ── */
const grid        = document.getElementById('grid');
const memberCount = document.getElementById('memberCount');
let currentView   = 'grid';
let filtered      = [...MEMBERS];

function arrowSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="1.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>`;
}

function renderCards(data) {
  grid.innerHTML = '';
  memberCount.textContent = String(data.length).padStart(2, '0');

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">🔍</div>
        <p>Aucun membre trouvé.</p>
      </div>`;
    return;
  }

  data.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (i * 0.06) + 's';

    /* Photo : si le membre a mis une photo dans son dossier */
    const photoSrc = m.folder + '/photo.jpg';
    const photoHTML = `
      <img class="card-photo"
           src="${photoSrc}"
           alt="${m.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="card-photo-placeholder" style="color:${m.color};display:none">${m.initials}</div>
    `;

    card.innerHTML = `
      ${photoHTML}
      <div class="card-body">
        <div class="card-name">${m.name}</div>
        <div class="card-role">${m.role}</div>
        <p class="card-bio">Clique sur <strong>Parcours</strong> pour en savoir plus.</p>
      </div>
      <div class="card-footer">
        <a class="parcours-link" href="${m.folder}/index.html">
          ${arrowSVG()} Parcours

        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ── Recherche ── */
document.getElementById('searchInput').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  filtered = MEMBERS.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.role.toLowerCase().includes(q)
  );
  renderCards(filtered);
});

/* ── Vue grille / liste ── */
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    grid.classList.toggle('list-view', currentView === 'list');
  });
});

/* ── Init ── */
renderCards(MEMBERS);
