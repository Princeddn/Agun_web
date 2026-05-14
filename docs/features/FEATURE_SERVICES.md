# Feature — Services & Annuaire de la Diaspora

## Objectif

Référencer et promouvoir les entreprises, commerces et services gérés par des membres de la diaspora africaine. Permettre aux membres de trouver des services de confiance dans leur communauté, et aux entrepreneurs de se faire connaître.

---

## Priorité : V2

---

## Fonctionnalités Détaillées

### 1. Référencer son Business / Service

Un utilisateur avec le statut `entrepreneur` ou `freelance` peut créer une fiche service.

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| Nom du service/business | Texte | Oui | Ex: "Salon Afro by Fatou" |
| Catégorie | Enum | Oui | Voir liste ci-dessous |
| Description | Texte (max 1000) | Oui | Présentation détaillée |
| Logo | Image | Non | Logo ou photo principale |
| Photos | Images (max 6) | Non | Galerie du service |
| Téléphone | Texte | Non | Contact direct |
| Email | Texte | Non | Contact email |
| Site web | URL | Non | Site externe |
| Adresse | Texte | Non | Pour les services physiques |
| Ville | Texte | Oui | Localisation principale |
| Pays | Texte | Oui | |
| Service en ligne | Booléen | Non | Peut servir à distance |
| Langues parlées | Tableau | Non | Ex: `["Français", "Wolof"]` |
| Horaires | JSON | Non | Jours et heures d'ouverture |

---

### 2. Catégories de Services

```
restaurant_traiteur   — Restaurant, traiteur, chef à domicile
coiffure_beaute       — Coiffeur, esthéticienne, barbier
sante_bien_etre       — Médecin, psychologue, naturopathe, coach sportif
juridique_admin       — Avocat, notaire, aide aux démarches administratives
immobilier            — Agence, agent, gestion locative
transport             — Taxi, chauffeur VTC, déménagement
education_formation   — Cours particuliers, formation professionnelle, école de langues
informatique_tech     — Développeur, designer, IT support
commerce              — Épicerie, boutique, import-export
artisanat_art         — Artisan, styliste, artiste, décorateur
evenementiel          — Organisation de mariages, soirées, baptêmes
finance               — Comptable, conseiller financier, transfert d'argent
autre
```

---

### 3. Découverte des Services

**Recherche :**
- Barre de recherche par mot-clé
- Filtres : catégorie, ville, pays, note minimale, disponible en ligne

**Cartes géolocalisées :**
- Vue carte avec punaises des services à proximité
- Vue liste avec distance

**Sections dans l'app :**
- "Services près de toi"
- "Services de ta communauté" (même origine)
- "Les mieux notés"
- "Nouveaux membres"

---

### 4. Fiche d'un Service

- Logo + nom + catégorie
- Note moyenne (étoiles) + nombre d'avis
- Description + photos galerie
- Informations de contact (téléphone, email, site)
- Adresse + carte
- Langues parlées
- Horaires d'ouverture
- Propriétaire (lien vers profil Agun)
- Badge "Vérifié Diaspora" (si vérifié par l'équipe)
- Avis et commentaires des membres
- Bouton [Contacter] → messagerie Agun ou WhatsApp

---

### 5. Système d'Avis

| Champ | Description |
|-------|-------------|
| Note | 1 à 5 étoiles |
| Titre | Court (max 80 car.) |
| Commentaire | Texte libre (max 500 car.) |

**Règles :**
- Un membre ne peut laisser qu'un seul avis par service
- L'avis peut être modifié dans les 30 jours
- L'auteur du service peut répondre à un avis

---

### 6. Badge "Vérifié Diaspora"

Attribué manuellement par l'équipe après vérification :
- Le propriétaire est bien membre de la diaspora africaine
- Le business existe réellement
- Au moins 3 avis positifs

---

### 7. Petites Annonces

Section séparée pour les annonces ponctuelles (pas un business permanent).

**Types d'annonces :**
```
logement      — Colocation, sous-location, hébergement
emploi        — Offre ou recherche d'emploi
objet         — Revente, don d'objet
covoiturage   — Partage de trajet
service_ponct — Besoin ponctuel (baby-sitting, cours de langue, etc.)
autre
```

**Champs d'une annonce :**
- Titre, description, prix (optionnel), ville, contact, date d'expiration (max 60 jours)

---

## Règles Métier

- Un membre peut avoir maximum 3 fiches service actives.
- Une fiche service non modifiée depuis 12 mois passe en statut "inactif" (masquée).
- Les transactions financières ne passent pas par Agun (V1/V2). Le contact se fait entre les parties.
- Un service signalé 5 fois est soumis à vérification.

---

## Tables de Base de Données Associées

- `services` — fiches des business et services
- `service_reviews` — avis et notes
- `service_images` — galerie photos
- `service_hours` — horaires d'ouverture
- `listings` — petites annonces

→ Voir [docs/DATABASE.md](../DATABASE.md) pour le schéma SQL complet.
