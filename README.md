# Agun — La plateforme de la diaspora africaine

> **Agun** connecte la diaspora africaine à travers le monde : partage d'expériences, services, événements et entraide.

---

## Vision

La diaspora africaine représente des millions de personnes réparties aux quatre coins du monde, souvent isolées, cherchant à maintenir leurs racines, trouver des compatriotes et s'entraider. **Agun** est la plateforme qui relie ces communautés.

**Problème :** Trouver un plombier de confiance parlant sa langue, un événement culturel près de chez soi, ou un mentor pour s'intégrer dans un nouveau pays est aujourd'hui difficile et fragmenté.

**Solution :** Une super-app communautaire centrée sur la confiance, la culture et l'entraide.

---

## Fonctionnalités Cibles

| Pilier | Description | Priorité |
|--------|-------------|----------|
| **Communauté & Feed** | Fil d'actualité, histoires, conseils, discussions | MVP |
| **Profils** | Origine, localisation, compétences, communauté | MVP |
| **Événements** | Calendrier culturel, meetups, concerts, conférences | MVP |
| **Services & Annuaire** | Business de la diaspora, petites annonces | V2 |
| **Mentoring** | Mise en relation anciens / nouveaux arrivants | V2 |
| **Groupes** | Forums par pays, ville, thématique | V3 |

→ Voir [docs/VISION.md](docs/VISION.md) pour les détails complets.

---

## Stack Technique

| Couche | Technologie |
|--------|-------------|
| **Backend** | FastAPI (Python) + Supabase |
| **Frontend** | React 18 + Tailwind CSS |
| **Base de données** | PostgreSQL (via Supabase) |
| **Auth** | Supabase Auth (JWT) |
| **Storage** | Supabase Storage (images, fichiers) |

→ Voir [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) pour l'architecture complète.

---

## Démarrage Rapide

```bash
# Cloner le projet
git clone https://github.com/Princeddn/Agun_web.git
cd Agun_web

# Backend
cd backend
pip install -r requirements.txt
cp .env.example .env   # Remplir les variables
uvicorn app.main:app --reload

# Frontend
cd ../frontend
npm install
cp .env.example .env   # Remplir les variables
npm run dev
```

→ Voir [docs/SETUP.md](docs/SETUP.md) pour le guide complet.

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/VISION.md](docs/VISION.md) | Vision produit, User Stories, Roadmap |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Architecture technique, structure du code |
| [docs/SETUP.md](docs/SETUP.md) | Installation et configuration locale |
| [docs/API.md](docs/API.md) | Référence des endpoints API |

---

## Contribuer

Ce projet est en développement actif. Chaque PR doit :
1. Cibler une feature ou un bug précis
2. Respecter la structure de code existante
3. Inclure les endpoints documentés dans [docs/API.md](docs/API.md)

---

*Agun — Unir la diaspora, un lien à la fois.*
