/* =====================================================================
   data.js — FICHIER PERSONNEL DE CHAQUE MEMBRE
   =====================================================================

   INSTRUCTIONS :
   ──────────────
   1. Remplis TOUTES les informations ci-dessous avec tes vraies données.
   2. Dépose ta photo dans ce dossier et nomme-la :  photo.jpg
   3. Dépose ta vidéo dans ce dossier et nomme-la :  video.mp4
   4. Dépose ton audio dans ce dossier et nomme-la : audio.mp3
   5. N'efface pas les guillemets ni les virgules !

===================================================================== */

const MEMBER = {

  /* ── INFOS PERSONNELLES ── */
  name:      "FOSSONG TSOFACK PATRICIA",           // Ex: "Alice Mbarga"
  name_en:   "FOSSONG TSOFACK PATRICIA",           // English version
  role:      "Développeuse Front-end et UI/UX Designer",   // Ex: "Développeuse Front-end"
  role_en:   "Front-end Developer and UI/UX Designer",  
  matricule: "24G2975", 
  matricule_en: "24G2975",
  number:"membre 81 du groupe 8",
  number_en: "member 81 of group 8",
  specialty: "Génie Logiciel",  // Ex: "HTML / CSS / JavaScript"
  specialty_en: "Software Engineering", // English
  city:      "Yaoundé",                 // Ex: "Yaoundé"
  city_en:   "Yaoundé",                 // English
  email:     "fossongpatricia@gmail.com",
  phone:     "+237 679 31 90 03",
  color:     "#3959e7",   // Couleur accent (hex) — change-la à ton goût
  initials:  "FP",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio:  `Étudiante a l'université de Yaoundé 1 en faculté de science informatique(ICT4D) spécialisée en Génie Logiciel et je vie a l'École des Postes Neptune de Yaoundé.
je suis passionnée par le design et le développement Front-end.
J'aime créer des interfaces belles et intuitives qui mettent la technologie
au service du développement. Transformer une idée en une expérience visuelle
soignée, c'est ce qui me motive chaque jour.`,
  bio_en: `Student at the University of Yaoundé 1 in the Faculty of Computer Science (ICT4D) specialized in Software Engineering and I live at the École des Postes Neptune in Yaoundé.
I am passionate about design and front-end development.
I love creating beautiful and intuitive interfaces that put technology
at the service of development. Transforming an idea into a refined visual experience
is what motivates me every day.`,

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "React.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Figma",
    "CANVA",
    "Adobe Photoshop",
    // Ajoute autant que tu veux...
  ],
  skills_en: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "React.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Figma",
    "CANVA",
    "Adobe Photoshop",
    // Add as many as you want...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours_scolaire: [
    {
      title: "Licence 2 — Génie Logiciel · ICT4D",  // Ex: "Licence en Informatique"
      title_en: "Bachelor 2 — Software Engineering · ICT4D",
      sub:   "Université de Yaoundé I · 2024–2026",           // Ex: "Université de Yaoundé I · 2022–2025"
      sub_en: "University of Yaoundé I · 2024–2026",
      desc:  "Formation en ingénierie logicielle orientée technologies pour le développement. Spécialisation en développement web, design d'interfaces et expériences utilisateur.",
      desc_en: "Training in software engineering oriented towards technologies for development. Specialization in web development, interface design and user experiences.",
      time:  "00:00"
    },
    {
      title: "GCE Advanced Level",
      title_en: "GCE Advanced Level",
      sub:   "Mario Academic Complex(MAC) · 2024",
      sub_en: "Mario Academic Complex(MAC) · 2024",
      desc:  "J'ai obtenu mon GCE A/L, base solide en sciences qui oriente vers les filières technologiques(Informatique).",
      desc_en: "I obtained my GCE A/L, a solid base in sciences that leads to technological fields (Computer Science).",
      time:  "00:30"
    },
  {
    title: "Stage - logonedigital",
    title_en: "Internship - logonedigital",
    sub:   "Yaoundé · 2024",
    sub_en: "Yaoundé · 2024",
    desc:  "Stage de 10 jours en développement web(un projet de gestion de finance) et Dart où j'ai obtenu une attestation à la création d'un projet de gestion d'argence en utilisant HTML, CSS et JavaScript et Dart.",
    desc_en: "10-day internship in web development (a finance management project) and Dart where I obtained a certificate for creating a money management project using HTML, CSS, JavaScript and Dart.",
    time:  "01:00"
  },
  {
    title: "Projet Hult Prize",
    title_en: "Hult Prize Project",
    sub:   "Compétition internationale  · 2026",
    sub_en: "International Competition · 2026",
    desc:  "J'ai participé à la compétition Hult Prize 2026 avec un projet appelé NUTRI-TRUST qui m'a permis d'utiliser mes competances en design et grace a cela mon equipe et etions parmis les gagnants de cette competition et a la fin recu une attestation de participation.",
    desc_en: "I participated in the Hult Prize 2026 competition with a project called NUTRI-TRUST which allowed me to use my design skills and thanks to that my team was among the winners of this competition and at the end received a participation certificate.",
    time:  "01:30"
  }
    // Ajoute autant d'entrées que tu veux...
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
