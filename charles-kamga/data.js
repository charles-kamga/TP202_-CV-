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
  name:      "Charles Kamga",           // Ex: "Alice Mbarga"
  name_en:   "Charles Kamga",     // English version
  role:      "Développeur Backend Django & Cybersécurité",   // Ex: "Développeuse Front-end"
  role_en:   "Django Back-end Developer & Cybersecurity",   // English version
  specialty: "Pentest WiFi, Audit Web, IA générative",  // Ex: "HTML / CSS / JavaScript"
  specialty_en: "WiFi Pentesting, Web Auditing, Generative AI", // English
  city:      "Yaoundé",                 // Ex: "Yaoundé"
  city_en:   "Yaoundé",                // English
  email:     "charleskamgapr@gmail.com",
  phone:     "+237 654175725",
  website:   "https://www.charleskamga.me/",
  color:     "#0411fa",   // Couleur accent (hex) — change-la à ton goût
  initials:  "CK",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio: `Étudiant passionné par la cybersécurité offensive et le développement web. Je consacre mon temps libre à résoudre des challenges sur Hack The Box et à approfondir mes connaissances en pentesting WiFi et audit d'applications web. Curieux et autodidacte, j'aime apprendre en pratiquant et partager mes découvertes avec mes pairs.

En dehors de l'informatique, je suis également amateur d'échecs, passionné de musique et j'aime m'adonner à l'écriture.`,
  bio_en: `Passionate student focused on offensive cybersecurity and web development. I dedicate my free time to solving challenges on Hack The Box and deepening my knowledge in WiFi penetration testing and web application auditing. Curious and self-taught, I enjoy learning by doing and sharing discoveries with peers.

Outside of computing, I am also a chess enthusiast, passionate about music, and enjoy writing.`,

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "Nmap",
    "Gobuster",
    "Wireshark",
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
    "Nmap",
    "Gobuster",
    "Wireshark",
    // Add as many as you want...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
  parcours: [
    {
      title: "Licence en filière ICT4D",   // Ex: "Licence en Informatique"
      title_en: "Bachelor in ICT4D",        // English
      sub:   "Université de Yaoundé I · 2024-2026",           // Ex: "Université de Yaoundé I · 2022–2025"
      sub_en: "University of Yaoundé I · 2024-2026",            // English
      desc:  "Formation en technologies de l'information et de la communication pour le développement. Cours pratiques en programmation, réseaux et cybersécurité.",
      desc_en: "Training in Information and Communication Technologies for Development. Practical courses in programming, networking and cybersecurity.",
      time:  "00:00"  // Time in video/audio where this is discussed (MM:SS)
    },
    {
      title: "Recherches personnelles en cybersécurité",
      title_en: "Self-study in Cybersecurity",
      sub:   "Hack The Box · 2024-présent",
      sub_en: "Hack The Box · 2024-present",
      desc:  "Pratique sur plateforme de challenges CTF : énumération, exploitation de vulnérabilités web, pivotage réseau. Participation à des stages académiques et projets en équipe.",
      desc_en: "Hands-on practice on CTF challenge platform: enumeration, web vulnerability exploitation, network pivoting. Participation in academic internships and team projects.",
      time:  "00:30"
    },
    // Ajoute autant d'entrées que tu veux...
  ],

  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};
