# Feature — Profils & Identité Culturelle

## Objectif

Le profil est le cœur de l'expérience Agun. Il permet à chaque membre de se présenter dans toute sa richesse culturelle : origines multiples, ethnicité, communauté, statut, compétences et centres d'intérêt. C'est la base du système de matching et de mise en relation.

---

## Priorité : MVP (V1)

---

## Fonctionnalités Détaillées

### 1. Création de Profil

Déclenché automatiquement à l'inscription. L'utilisateur complète son profil en plusieurs étapes (onboarding).

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| Photo de profil | Image | Non | Avatar, stocké dans Supabase Storage |
| Photo de couverture | Image | Non | Bannière du profil |
| Nom complet | Texte | Oui | Prénom + Nom |
| Nom d'utilisateur | Texte | Oui | Unique, utilisé dans l'URL du profil (`@amara`) |
| Biographie | Texte (max 300 car.) | Non | Présentation libre |
| Statut | Enum | Oui | Voir la liste des statuts ci-dessous |

---

### 2. Identité & Origines (Multi-valeurs)

Un utilisateur peut avoir plusieurs origines et plusieurs nationalités.

| Champ | Type | Obligatoire | Exemple |
|-------|------|-------------|---------|
| Pays d'origine | Tableau de pays | Oui (min. 1) | `["Sénégal", "Guinée"]` |
| Nationalité(s) | Tableau | Non | `["Française", "Sénégalaise"]` |
| Pays de résidence | Pays unique | Oui | `"France"` |
| Ville de résidence | Texte | Oui | `"Paris"` |
| Ethnie(s) | Tableau (libre) | Non | `["Wolof", "Peul"]` |
| Communauté culturelle | Tableau (libre) | Non | `["Diaspora sénégalaise de France"]` |

---

### 3. Statuts Utilisateur

```
étudiant         — En études (université, école, formation)
travailleur      — Salarié ou employé
entrepreneur     — Gérant d'une entreprise ou en cours de création
freelance        — Travailleur indépendant, auto-entrepreneur
sans_emploi      — En recherche d'emploi active
retraité         — Retraité (ajouté car présent dans la diaspora senior)
```

> **Note dev :** Un même utilisateur ne peut avoir qu'un seul statut à la fois. Il peut le changer librement.

---

### 4. Informations Professionnelles / Académiques

Affichées selon le statut sélectionné.

**Si `étudiant` :**
| Champ | Description |
|-------|-------------|
| Domaine d'études | Ex: Informatique, Médecine, Droit |
| Université / École | Nom de l'établissement |
| Année d'études | L1, M2, Doctorat... |
| Pays d'études | Peut différer du pays de résidence |

**Si `travailleur` ou `freelance` :**
| Champ | Description |
|-------|-------------|
| Titre du poste | Ex: "Développeur Backend" |
| Secteur d'activité | Ex: "Technologie", "Finance", "Santé" |
| Entreprise | Optionnel |

**Si `entrepreneur` :**
| Champ | Description |
|-------|-------------|
| Nom de l'entreprise | |
| Secteur | |
| Description courte de l'activité | |

---

### 5. Compétences & Centres d'Intérêt

**Compétences (Skills)**
- Liste ouverte, l'utilisateur tape et choisit dans une liste existante ou crée un nouveau tag
- Chaque compétence a un niveau : `Débutant`, `Intermédiaire`, `Expert`
- Exemples : `Python`, `Design Graphique`, `Comptabilité`, `Cuisine africaine`

**Centres d'intérêt**
- Sélection dans des catégories prédéfinies + saisie libre
- Catégories : `Sport`, `Musique`, `Culture`, `Cuisine`, `Voyages`, `Politique`, `Religion`, `Entrepreneuriat`, `Arts`

---

### 6. Paramètres de Visibilité

| Paramètre | Options | Défaut |
|-----------|---------|--------|
| Visibilité du profil | Public / Connexions seulement / Privé | Public |
| Afficher l'ethnie | Oui / Non | Non |
| Afficher la ville exacte | Oui / Non | Oui |
| Afficher l'employeur | Oui / Non | Non |

---

### 7. Système de Recommandation (Matching)

Le profil alimente l'algorithme de matching. Les critères de matching sont pondérés :

| Critère | Poids |
|---------|-------|
| Même pays d'origine | ★★★ Fort |
| Même ethnie / communauté | ★★★ Fort |
| Même ville de résidence | ★★★ Fort |
| Mêmes centres d'intérêt | ★★ Moyen |
| Même domaine professionnel / études | ★★ Moyen |
| Même statut (étudiant + étudiant) | ★ Faible |

---

### 8. Page Profil Publique

URL : `/profile/@username`

Sections affichées :
- Photo + couverture + nom + username
- Statut + ville + origines
- Biographie
- Statistiques : Abonnés / Abonnements / Connexions / Posts
- Compétences + Centres d'intérêt
- Posts récents de l'utilisateur
- Événements créés

Actions disponibles selon la relation :
- [Suivre] / [Ne plus suivre]
- [Se connecter] / [Connexion en attente] / [Connecté]
- [Envoyer un message] (si connecté ou selon paramètres)
- [Signaler le profil]

---

## Règles Métier

- Le `username` est unique et immuable après 30 jours (pour éviter l'usurpation).
- Un utilisateur ne peut avoir qu'un seul compte (vérification par email).
- Le profil est incomplet tant que : pays d'origine, pays de résidence, statut ne sont pas renseignés. Un badge "Profil incomplet" est affiché.
- Le profil devient "Mentor" en cochant une case dédiée + renseignant ses domaines d'expertise.

---

## Tables de Base de Données Associées

- `profiles` — données principales du profil
- `profile_origins` — pays d'origine (multi-valeurs)
- `profile_nationalities` — nationalités (multi-valeurs)
- `profile_ethnicities` — ethnicités (multi-valeurs)
- `profile_skills` — compétences avec niveau
- `profile_interests` — centres d'intérêt
- `skills` — référentiel global des compétences
- `interests` — référentiel global des centres d'intérêt
- `user_recommendations` — scores de matching précalculés

→ Voir [docs/DATABASE.md](../DATABASE.md) pour le schéma SQL complet.
