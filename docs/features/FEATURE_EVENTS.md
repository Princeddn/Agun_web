# Feature — Événements

## Objectif

Permettre aux membres de la diaspora de se retrouver physiquement ou en ligne. Les événements sont le pont entre le virtuel et le réel : concerts, soirées, conférences professionnelles, matchs, rencontres culturelles, webinaires.

---

## Priorité : MVP (V1)

---

## Fonctionnalités Détaillées

### 1. Créer un Événement

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| Titre | Texte (max 100) | Oui | Nom de l'événement |
| Description | Texte (max 2000) | Non | Détails, programme |
| Image de couverture | Image | Non | Visuel principal |
| Catégorie | Enum | Oui | Voir liste ci-dessous |
| Type | Enum | Oui | `présentiel`, `en_ligne`, `hybride` |
| Date de début | DateTime | Oui | Date et heure de début |
| Date de fin | DateTime | Non | Heure de fin |

**Pour les événements présentiel / hybride :**
| Champ | Type | Obligatoire |
|-------|------|-------------|
| Adresse | Texte | Oui |
| Ville | Texte | Oui |
| Pays | Texte | Oui |
| Coordonnées GPS | Float, Float | Auto (géocodage) |

**Pour les événements en ligne / hybride :**
| Champ | Type | Obligatoire |
|-------|------|-------------|
| Lien de connexion | URL | Oui |
| Plateforme | Enum | Non | Zoom, Teams, YouTube, Autre |

**Billetterie / Accès :**
| Champ | Type | Obligatoire |
|-------|------|-------------|
| Gratuit | Booléen | Oui | Défaut : Oui |
| Prix | Décimal | Si payant | Ex: 15.00 |
| Devise | Texte | Si payant | EUR, GBP, XOF... |
| Lien d'inscription | URL | Non | Lien externe (Billetweb, Eventbrite...) |
| Nombre max de participants | Entier | Non | Laisser vide = illimité |

---

### 2. Catégories d'Événements

```
culturel        — Concert, soirée, exposition, spectacle
professionnel   — Networking, conférence, job fair, pitch
sportif         — Match, tournoi, run, yoga
social          — Pique-nique, repas communautaire, fête
formation       — Atelier, webinaire, cours, mentoring collectif
religieux       — Rassemblement communautaire, prière, fête religieuse
autre
```

---

### 3. Découverte des Événements

**Onglet "Près de moi"**
Événements géolocalisés dans un rayon paramétrable (10 km, 50 km, 100 km).

**Onglet "En ligne"**
Tous les événements accessibles à distance.

**Onglet "Par la communauté"**
Événements créés par des membres ayant les mêmes origines ou la même communauté culturelle.

**Filtres disponibles :**
- Date (ce weekend, cette semaine, ce mois)
- Catégorie
- Gratuit / Payant
- Ville / Pays
- Langue de l'événement

---

### 4. Page Détail d'un Événement

- Photo de couverture
- Titre, catégorie, type (présentiel / en ligne / hybride)
- Date, heure, lieu
- Description complète
- Créateur de l'événement (lien vers son profil)
- Bouton **[Je participe]** / **[Je suis intéressé(e)]**
- Compteur de participants / intéressés
- Liste des membres inscrits (avatars)
- Carte Google Maps (pour les présentiel)
- Lien de billetterie externe si applicable
- Bouton Partager (post dans le feed, lien direct)

---

### 5. Statuts de Participation

Un membre peut indiquer son rapport à un événement :

```
inscrit      — Je participe (engagement fort)
intéressé    — Je suis curieux mais pas sûr
annulé       — J'ai annulé ma participation
```

---

### 6. Notifications Automatiques

| Déclencheur | Notification |
|-------------|--------------|
| Événement créé par une connexion | "Untel a créé un événement" |
| Événement dans ta ville | "Nouvel événement près de chez toi" |
| J-7 avant un événement où tu es inscrit | "Rappel : [Titre] dans 7 jours" |
| J-1 avant un événement où tu es inscrit | "Rappel : [Titre] demain" |
| Événement annulé | "L'événement [Titre] a été annulé" |

---

### 7. Gestion d'un Événement (pour le créateur)

- Modifier les informations d'un événement
- Annuler l'événement (notification automatique aux inscrits)
- Voir la liste complète des inscrits
- Publier une mise à jour / annonce pour les inscrits (message groupé)
- Dupliquer un événement (pour créer une édition suivante)

---

## Règles Métier

- Un événement ne peut être créé qu'avec une date dans le futur.
- Si le nombre max de participants est atteint, les nouveaux arrivants sont en liste d'attente.
- Un événement passé depuis plus de 24h passe automatiquement au statut `terminé`.
- Le créateur peut supprimer son événement uniquement s'il n'y a pas encore de participants.
- Un événement signalé 3 fois est soumis à modération automatique.

---

## Tables de Base de Données Associées

- `events` — données de l'événement
- `event_participants` — inscriptions et statuts de participation
- `event_updates` — mises à jour publiées par le créateur

→ Voir [docs/DATABASE.md](../DATABASE.md) pour le schéma SQL complet.
