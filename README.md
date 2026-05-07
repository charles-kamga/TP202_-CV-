# 📋 Trombinoscope — Notre Groupe

CV interactif de groupe en **HTML / CSS / JavaScript pur** (aucun framework).

---

## 📁 Structure du projet

```
trombinoscope/
│
├── index.html          ← Page d'accueil (liste des membres)
├── style.css           ← CSS partagé par toutes les pages
├── script.js           ← Logique de la page d'accueil
│
├── member-template/    ← 📌 MODÈLE À COPIER pour chaque membre
│   ├── index.html      ← Page CV du membre (ne pas modifier)
│   └── data.js         ← ✏️  Seul fichier à remplir !
│
├── alice-mbarga/       ← Exemple de membre rempli
│   ├── index.html
│   ├── data.js
│   ├── photo.jpg       ← Ta photo
│   ├── video.mp4       ← Ta vidéo de présentation
│   └── audio.mp3       ← Ton message audio
│
└── bruno-essono/       ← Autre exemple...
    ├── index.html
    ├── data.js
    ├── photo.jpg
    ├── video.mp4
    └── audio.mp3
```

---

## 🚀 Comment ajouter ton CV (étape par étape)

### Étape 1 — Clone le projet
```bash
git clone <URL_DU_REPO>
cd trombinoscope
```

### Étape 2 — Crée ton dossier
Duplique le dossier `member-template/` et renomme-le avec ton prénom et nom :
```bash
cp -r member-template/ prenom-nom/
# Exemple :
cp -r member-template/ carole-ngo/
```

### Étape 3 — Remplis tes informations
Ouvre le fichier `prenom-nom/data.js` et remplis **uniquement ce fichier** :
- Ton nom, rôle, ville, email, téléphone
- Ta bio
- Tes compétences
- Ton parcours (formations et expériences)

### Étape 4 — Dépose tes médias
Place ces 3 fichiers dans **ton dossier** (renomme-les exactement ainsi) :

| Fichier     | Contenu                         |
|-------------|----------------------------------|
| `photo.jpg` | Ta photo de profil               |
| `video.mp4` | Ta vidéo de présentation         |
| `audio.mp3` | Ton message audio                |

> Si tu n'as pas encore de vidéo/audio, laisse le champ vide dans `data.js` :
> ```js
> video: "",
> audio: "",
> ```

### Étape 5 — Ajoute-toi à la liste d'accueil
Ouvre `script.js` et ajoute une ligne dans le tableau `MEMBERS` :
```js
const MEMBERS = [
  { folder: "alice-mbarga",  name: "Alice Mbarga",  role: "Développeuse Front-end", color: "#c8f060", initials: "AM" },
  { folder: "bruno-essono",  name: "Bruno Essono",  role: "Développeur Back-end",   color: "#60c8f0", initials: "BE" },

  // ← Ajoute ta ligne ici :
  { folder: "carole-ngo",    name: "Carole Ngo",    role: "UI/UX Designer",          color: "#f060c8", initials: "CN" },
];
```

**Champs à renseigner :**
- `folder` → nom de ton dossier (exactement pareil)
- `name`   → ton prénom et nom
- `role`   → ton titre ou spécialité
- `color`  → une couleur en hexadécimal (choisie librement)
- `initials` → tes 2 initiales (affichées si pas de photo)

### Étape 6 — Commit & Push
```bash
git add .
git commit -m "feat: ajout du CV de Carole Ngo"
git push
```

---

## 🎨 Personnaliser l'apparence de ta page

Tu peux changer la **couleur accent** de ta page via le champ `color` dans `data.js`.
Cette couleur est utilisée pour les points de timeline, les tags, etc.

Quelques idées :
| Couleur    | Code      |
|------------|-----------|
| Vert lime  | `#c8f060` |
| Bleu ciel  | `#60c8f0` |
| Rose       | `#f060c8` |
| Orange     | `#f0c860` |
| Turquoise  | `#60f0c8` |
| Violet     | `#c8a0f0` |

---

## 🌐 Tester en local

Ouvre simplement `index.html` dans un navigateur.

> **Astuce** : Si ta photo/vidéo/audio ne s'affiche pas, utilise un serveur local :
> ```bash
> # Python (si installé)
> python -m http.server 8000
> # puis ouvre : http://localhost:8000
> ```

---

## 📌 Règles du projet

- **Ne modifie pas** `style.css`, `script.js`, `index.html` à la racine, ni les fichiers des autres membres.
- **Seuls tes fichiers** (`prenom-nom/data.js`, `prenom-nom/photo.jpg`, etc.) t'appartiennent.
- Le fichier `member-template/index.html` est commun à tous — **ne le modifie pas**.

---

> Projet réalisé dans le cadre du cours — Promo 2025–2026
