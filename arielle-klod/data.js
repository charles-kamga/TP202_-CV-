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
=================================================================== */
const MEMBER = {
/* ── INFOS PERSONNELLES ── */
name:      "TCHOUTA HAPPPI CLAUDE ARIELLE",           // Ex: "Alice Mbarga"
name_en:   "TCHOUTA HAPPI CLAUDE ARIELLE",     // English version
role:      "Etudiante en securite informatique",   // Ex: "Développeuse Front-end"
role_en:   "cybersecurity student",   // English version
Matricule:"24G2523",
Matricule_en:"24G2523",
Numero:"Membre 87 ",
Number_en:"Membre 87",
specialty: "Sécurité des Réseaux informatique",  // Ex: "HTML / CSS / JavaScript"
specialty_en: "Network Security", // English
city:      "YAOUNDE",                 // Ex: "Yaoundé"
city_en:   "YAOUNDE",                // English
email:     "happiklod@gmail.com",
phone:     "+237 673390383",
color:     "#1403ff",   // Couleur accent (hex) — change-la à ton goût
initials:  "KA",        // Tes initiales (2 lettres) si pas de photo
/* ── À PROPOS ── */
bio: `Étudiante en Licence 2 Sécurité Informatique à l'Université de Yaoundé I.
optimiste et travailleuse aimant decouvrir de nouvelles choses, la securisation des systemes informatiques est cle.
sinon je suis multi-fonctionelle , je touche un peu de tout.
sinon vue en face j'aime cuisiner, patisser , le make-up,etc.`,
bio_en: `Student in Second Year of Computer Security at the University of Yaoundé I.
Optimistic and hardworking, loving to discover new things, securing computer systems is key.
Otherwise I am multi-functional, I touch a bit of everything.
Otherwise in person I like cooking, baking, make-up, etc.`,
  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "HTML5",
    "CSS3",
    "php",
    "Git",
    "securite des reseaux ",
    // Ajoute autant que tu veux...
  ],
  skills_en: [
    "HTML5",
    "CSS3",
    "Git",
    "php",
    "network security",
    // Add as many as you want...
  ],
  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours: [
    {
      title: "Titulaire d'un baccalaureat TI",   // Ex: "Licence en Informatique"
      title_en: "High School Graduate -science series TI",        // English
      sub:   "universite de yaounde I . 2024-2026",           // Ex: "Université de Yaoundé I · 2022–2025"
      sub_en: "UYI",            // English
      desc:  "quelques bases en maintenance, reseau , montage de maquettes , arduino",
      desc_en: "computer maintenance, network ,prototype , arduino",
      time:  "00:00"  // Time in video/audio where this is discussed (MM:SS)
    },
    {
      title: "Licence 2 en securite informatique",
      title_en: "2nd Year Bachelor's in Computer Security",
      sub:   "Universite de yaounde 1 · 2024-2026",
      sub_en: "University of Yaoundé 1 · 2024-2026",
      desc:  "Formation axée sur la sécurité des systèmes et des réseaux, la cyberdéfense, la cryptographie et la gestion des vulnérabilités.",
      desc_en: "Training focused on system and network security, cyberdefense, cryptography, and vulnerability management.",
      time:  "00:30"
    },
    // Ajoute autant d'entrées que tu veux...
  ],
  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (polace le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)
}; 
