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
  name:      "Ryan Fonkou",           // Ex: "Alice Mbarga"
  name_en:   "Ryan Fonkou",
  role:      "Étudiant à l'université de Yaoundé 1",   // Ex: "Développeuse Front-end"
  role_en:   "Student at the University of Yaoundé 1",
  specialty: "Spécialité sécurité informatique en ICT4D",  // Ex: "HTML / CSS / JavaScript"
  specialty_en: "Cybersecurity in ICT4D",
  city:      "Yaoundé",                 // Ex: "Yaoundé"
  city_en:   "Yaoundé",
  email:     "ryanfonkou@icloud.com",
  phone:     "+237 655860481",
  color:     "#0637f8",   // Couleur accent (hex) — change-la à ton goût
  initials:  "RF",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio: `je suis unnetudiant passionner de technologie et d'innovation d'ou le choix de cyber-securite en ICT4D comme specialite a l'universite de yaounde 1. je suis motivé a apprendre et a contribuer dans le domaine de la securite informatique pour aider a proteger les systemes et les données contre les menaces cybernétiques. je suis également intéressé par les nouvelles technologies et les tendances émergentes dans le domaine de la cybersécurité, et je suis déterminé à développer mes compétences pour devenir un professionnel compétent et efficace dans ce domaine en constante évolution.Depuis petit j'ai toujours ete attirer par les ordinateurs et la technologie, se qui m'a poussé à poursuivre des études en informatique et à me spécialiser en cybersécurité. je suis convaincu que la cybersécurité est un domaine crucial pour protéger les individus, les entreprises et les gouvernements contre les menaces cybernétiques, et je suis déterminé à contribuer à cet effort en développant mes compétences et en travaillant sur des projets innovants dans ce domaine passionnant.
  Mais aussi j'ai voulu me demarquer en premiere annee universitaire en me lancans en entrepreneuriat nottament dans le domaine du marketing ou j'ai une petite carriere faisans l'objet d'ne experience appele par moi meme "un pied a l'ecole, un pied dna sle buisiness", une xperience qui m'as vraiment marquer.
  `,
  bio_en: `I am a student passionate about technology and innovation, which is why I chose cybersecurity in ICT4D at the University of Yaoundé 1. I am motivated to learn and contribute to information security to help protect systems and data against cyber threats. I am also interested in new technologies and emerging trends in cybersecurity, and I am determined to develop my skills to become a competent and effective professional in this constantly evolving field. Since I was young, I have always been drawn to computers and technology, which pushed me to pursue computer science studies and specialize in cybersecurity. I believe cybersecurity is a crucial field to protect individuals, companies, and governments from cyber threats, and I am determined to contribute to this effort by developing my skills and working on innovative projects in this exciting field.
  I also wanted to stand out in my first university year by launching into entrepreneurship, especially in marketing, where I have a small career that I call "one foot at school, one foot in business", an experience that really marked me.
  `,  // Ex: "Je suis un développeur passionné par le web et la technologie, avec une expérience dans la création de sites web modernes et réactifs. J'aime apprendre de nouvelles compétences et relever des défis techniques pour créer des solutions innovantes."

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "python",
    "cryptographie",
    "marketing relationnel",
    "Git",
    // Ajoute autant que tu veux...
  ],
  skills_en: [
    "Python",
    "Cryptography",
    "Relationship Marketing",
    "Git",
    // Add as many as you want...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours: [
    {
      title: "baccalaureat c ",   // Ex: "Licence en Informatique"
      sub:   "COLLEGE LARIE ALBERT 2· 2023-2024",           // Ex: "Université de Yaoundé I · 2022–2025"
      desc:  "j'ai obtenu mon baccalauréat en 2024 avec une spécialisation en sciences informatiques, ce qui m'a permis d'acquérir des connaissances solides dans les domaines de l'informatique et de la technologie. cette formation m'a également permis de développer mes compétences en programmation, en analyse de données et en résolution de problèmes, ce qui me prépare à poursuivre mes études dans le domaine de la cybersécurité et à contribuer efficacement à la protection des systèmes informatiques contre les menaces cybernétiques."  // Ex: "Description de ce que tu as fait ou appris."
    },
    {
      title: "LICENCE 2 EN ICT4D",
      sub:   "universite de yaounde 1 · 2025-2026",
      desc:  "je suis actuellement en deuxième année de licence en ICT4D à l'université de yaoundé 1, où je me spécialise dans la cybersécurité. au cours de cette formation, j'ai approfondi mes connaissances en sécurité informatique, en cryptographie et en gestion des risques, ce qui me permet de mieux comprendre les défis et les solutions liés à la protection des systèmes inform"
    },
    {
      title: "creation startup generation academique",
      sub:   "marketing relationnel · 2024-2025",
      desc:  "fondateur d'une starup dans le domaine du marketing relationnel, j'ai acquis une expérience précieuse en gestion de projet, en développement de stratégies marketing et en communication avec les clients. cette expérience m'a permis de développer mes compétences en leadership, en résolution de problèmes et en travail d'équipe, ce qui me prépare à relever les défis du domaine de la cybersécurité et à contribuer efficacement à la protection des systèmes informatiques contre les menaces cybernétiques."
    },
    // Ajoute autant d'entrées que tu veux...
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)
  audio_en: "audio-en.mp3",   // Message audio en anglais (place le fichier ici)

};
