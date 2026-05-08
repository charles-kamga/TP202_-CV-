const MEMBER = {

  /* ── INFOS PERSONNELLES ── */
  name:      "Bipon samuel albert",           
  name_en:   "Bipon Samuel Albert",
  role:      "Genie Logiciel",   
  role_en:   "Software Engineer",
  specialty: "Ta spécialité détaillée",  
  specialty_en: "Software Engineering Student",
  city:      "Yaounde",                 
  city_en:   "Yaoundé",                 
  email:     "biponsamuel9@gmail.com",
  phone:     "+237 657222426",
  color:     "#152f87",   // Couleur accent (hex) — change-la à ton goût
  initials:  "BI",        // Tes initiales (2 lettres) si pas de photo

  /* ── À PROPOS ── */
  bio: 
  `CURRICULUM VITAE
BIPON SAMUEL ALBERT
Téléphone : 657222426
Email : biponsamuel9@gmail.com

Résidant à Yaoundé, je suis actuellement étudiant en Licence 2 Génie Logiciel (GL) à Université de Yaoundé I. 
Passionné par l’informatique et les technologies numériques, je m’intéresse particulièrement au développement 
d’applications, à la programmation, aux bases de données ainsi qu’aux solutions informatiques modernes. Sérieux, 
dynamique et motivé, je possède une bonne capacité d’adaptation et un fort esprit d’apprentissage qui me permettent 
de progresser rapidement dans les domaines techniques.

Au cours de mon parcours académique, j’ai obtenu plusieurs diplômes notamment le Certificat d’Études Primaires (CEP), 
le Brevet d’Études du Premier Cycle (BEPC), le Probatoire série D ainsi que le Baccalauréat série D. Ces différentes 
formations m’ont permis d’acquérir des bases solides en sciences, en logique et en analyse, compétences essentielles 
dans le domaine du génie logiciel et de l’informatique.

Dans le cadre de ma formation universitaire, j’ai développé des compétences en programmation et en développement web, 
notamment avec les technologies HTML, CSS, JavaScript, PHP et MySQL. Je possède également des connaissances dans la 
conception de bases de données, l’utilisation de XAMPP ainsi que dans le développement d’applications web dynamiques.
 J’ai déjà travaillé sur plusieurs projets académiques liés à la gestion informatique, ce qui m’a permis de renforcer 
 mes capacités en résolution de problèmes, en organisation et en travail d’équipe.

Rigoureux et déterminé, je cherche continuellement à améliorer mes compétences techniques afin de devenir un ingénieur 
logiciel compétent et capable de contribuer efficacement à des projets innovants. Je suis également intéressé par les 
nouvelles technologies, le développement mobile, les systèmes informatiques et l’intelligence artificielle.`,
  bio_en: `CURRICULUM VITAE
BIPON SAMUEL ALBERT
Phone: 657222426
Email: biponsamuel9@gmail.com

Residing in Yaoundé, I am currently a student in Bachelor 2 Software Engineering (GL) at University of Yaoundé I.
Passionate about computer science and digital technologies, I am particularly interested in application development,
programming, databases and modern IT solutions. Serious, dynamic and motivated, I have good adaptability and a strong
learning spirit that allow me to progress quickly in technical fields.

During my academic career, I obtained several diplomas including the Primary School Certificate (CEP),
the First Cycle Secondary Education Certificate (BEPC), the Probatoire series D and the Advanced Level series D.
These different trainings allowed me to acquire solid foundations in sciences, logic and analysis, essential skills
in the field of software engineering and computer science.

As part of my university training, I developed skills in programming and web development,
particularly with HTML, CSS, JavaScript, PHP and MySQL technologies. I also have knowledge in
database design, XAMPP usage and dynamic web application development.
I have already worked on several academic projects related to IT management, which allowed me to strengthen
my problem-solving abilities, organization and teamwork.

Rigorous and determined, I continuously seek to improve my technical skills to become a competent software engineer
capable of effectively contributing to innovative projects. I am also interested in new technologies, mobile development,
computer systems and artificial intelligence.`,

  /* ── COMPÉTENCES ── */
  /* Liste tes compétences séparées par des virgules */
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "Responsive Design",
    "Figma",
    "CANVA",
    "Adobe Photoshop"
    // Ajoute autant que tu veux...
  ],
  skills_en: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git",
    "Responsive Design",
    "Figma",
    "CANVA",
    "Adobe Photoshop"
    // Add as many as you want...
  ],

  /* ── PARCOURS ── */
  /* Chaque entrée = une expérience ou formation */
   parcours_scolaire: [
  {
    title: "Licence 2 — Génie Logiciel",
    title_en: "Bachelor 2 — Software Engineering",
    sub: "Université de Yaoundé I · 2025–2026",
    sub_en: "University of Yaoundé I · 2025–2026",
    desc: "Formation en génie logiciel et technologies informatiques avec des compétences en développement web, programmation, bases de données et conception d’applications.",
    desc_en: "Training in software engineering and information technologies with skills in web development, programming, databases and application design.",
    time: "00:00"
  },
  {
    title: "Baccalauréat D",
    title_en: "Advanced Level D",
    sub: "Cameroun · Obtenu",
    sub_en: "Cameroon · Obtained",
    desc: "Obtention du Baccalauréat série D avec une formation scientifique axée sur les mathématiques, les sciences de la vie et les technologies.",
    desc_en: "Obtained the D series Advanced Level with scientific training focused on mathematics, life sciences and technologies.",
    time: "00:30"
  },
  {
    title: "Probatoire D",
    title_en: "Probatoire D",
    sub: "Cameroun · Obtenu",
    sub_en: "Cameroon · Obtained",
    desc: "Formation scientifique ayant permis de développer des bases solides en logique, analyse et raisonnement scientifique.",
    desc_en: "Scientific training that helped develop strong foundations in logic, analysis and scientific reasoning.",
    time: "01:00"
  },
  {
    title: "BEPC",
    title_en: "BEPC",
    sub: "Cameroun · Obtenu",
    sub_en: "Cameroon · Obtained",
    desc: "Obtention du Brevet d’Études du Premier Cycle avec des connaissances générales en sciences et en enseignement secondaire.",
    desc_en: "Obtained the First Cycle Secondary Education Certificate with general knowledge in sciences and secondary education.",
    time: "01:30"
  },
  {
    title: "CEP",
    title_en: "Primary School Certificate",
    sub: "Cameroun · Obtenu",
    sub_en: "Cameroon · Obtained",
    desc: "Obtention du Certificat d’Études Primaires marquant la fin du cycle primaire.",
    desc_en: "Obtained the Primary School Certificate marking the completion of primary education.",
    time: "02:00"
  }
],
  /* ── MÉDIAS ── */
  /* Laisse les chemins tels quels si tu as bien nommé tes fichiers */
  video: "video.mp4",   // Vidéo de présentation (place le fichier ici)
  audio: "audio.mp3",   // Message audio          (place le fichier ici)

};