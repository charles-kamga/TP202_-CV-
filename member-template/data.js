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
  name:      "Ton Prénom Nom",           // Ex: "Alice Mbarga"
  name_en:   "Your First Last Name",     // English version
  role:      "Ton titre / spécialité",   // Ex: "Développeuse Front-end"
  role_en:   "Your title / specialty",   // English version
  specialty: "Ta spécialité détaillée",  // Ex: "HTML / CSS / JavaScript"
  specialty_en: "Your detailed specialty", // English
  city:      "Ta ville",                 // Ex: "Yaoundé"
  city_en:   "Your city",                // English
  email:     "ton.email@exemple.com",
  phone:     "+237 6xx xxx xxx",
  color:     "#c8f060",   // Couleur accent (hex) — change-la à ton goût
  initials:  "XX",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio: `Écris ici une courte présentation de toi-même.
Parle de ta passion, de ce que tu fais, de ce qui te motive.
Tu peux écrire plusieurs phrases.`,
  bio_en: `Write here a short presentation of yourself.
Talk about your passion, what you do, what motivates you.
You can write several sentences.`,

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    // Ajoute autant que tu veux...
  ],
  skills_en: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    // Add as many as you want...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours: [
    {
      title: "Titre du diplôme ou du poste",   // Ex: "Licence en Informatique"
      title_en: "Degree or job title",        // English
      sub:   "Établissement · Année",           // Ex: "Université de Yaoundé I · 2022–2025"
      sub_en: "Institution · Year",            // English
      desc:  "Courte description de cette étape de ton parcours.",
      desc_en: "Short description of this step in your career.",
      time:  "00:00"  // Time in video/audio where this is discussed (MM:SS)
    },
    {
      title: "Deuxième expérience",
      title_en: "Second experience",
      sub:   "Entreprise ou école · Année",
      sub_en: "Company or school · Year",
      desc:  "Ce que tu y as fait ou appris.",
      desc_en: "What you did or learned there.",
      time:  "00:30"
    },
    // Ajoute autant d'entrées que tu veux...
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
