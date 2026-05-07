/* =====================================================================
   data.js — EXEMPLE REMPLI : Alice Mbarga
   (Voir member-template/data.js pour la version vierge)
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
  name:      "Alice Mbarga",
  name_en:   "Alice Mbarga",
  role:      "Développeuse Front-end",
  role_en:   "Front-end Developer",
  specialty: "HTML / CSS / JavaScript",
  specialty_en: "HTML / CSS / JavaScript",
  city:      "Yaoundé",
  city_en:   "Yaoundé",
  email:     "alice.mbarga@exemple.cm",
  phone:     "+237 655 123 456",
  color:     "#c8f060",
  initials:  "AM",

  bio: `Passionnée par les interfaces accessibles et le design web,
je transforme des maquettes en expériences interactives soignées.
J'aime que chaque pixel soit à sa place et que chaque interaction soit fluide.`,
  bio_en: `Passionate about accessible interfaces and web design,
I transform mockups into polished interactive experiences.
I love that every pixel is in its place and every interaction is smooth.`,

  skills: [
    "HTML5", "CSS3", "JavaScript", "Figma", "Git", "Responsive Design"
  ],
  skills_en: [
    "HTML5", "CSS3", "JavaScript", "Figma", "Git", "Responsive Design"
  ],

  parcours: [
    {
      title: "Licence en Informatique",
      title_en: "Bachelor in Computer Science",
      sub:   "Université de Yaoundé I · 2022–2025",
      sub_en: "University of Yaoundé I · 2022–2025",
      desc:  "Spécialisation en développement web et interfaces utilisateur. Projet de fin d'études : refonte du portail étudiant.",
      desc_en: "Specialization in web development and user interfaces. End-of-studies project: redesign of the student portal.",
      time:  "00:00"
    },
    {
      title: "Stage Développeuse Web",
      title_en: "Web Developer Internship",
      sub:   "TechCM Yaoundé · Juil–Oct 2024",
      sub_en: "TechCM Yaoundé · Jul–Oct 2024",
      desc:  "Intégration de maquettes Figma, développement de composants HTML/CSS/JS pour une plateforme e-commerce.",
      desc_en: "Integration of Figma mockups, development of HTML/CSS/JS components for an e-commerce platform.",
      time:  "00:30"
    },
    {
      title: "Baccalauréat série C",
      title_en: "Baccalaureate series C",
      sub:   "Lycée de la Cité Verte · 2022",
      sub_en: "Lycée de la Cité Verte · 2022",
      desc:  "Mention Bien. Orientation vers les filières scientifiques et numériques.",
      desc_en: "Good mention. Orientation towards scientific and digital fields.",
      time:  "01:00"
    },
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
