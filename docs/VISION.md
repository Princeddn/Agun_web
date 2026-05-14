# Vision Produit & Index des Features — Agun

## Index des Documents Features

| Feature | Fichier | Priorité |
|---------|---------|----------|
| Profils & Identité Culturelle | [features/FEATURE_PROFILES.md](features/FEATURE_PROFILES.md) | MVP V1 |
| Fil d'Actualité (Feed) | [features/FEATURE_FEED.md](features/FEATURE_FEED.md) | MVP V1 |
| Événements | [features/FEATURE_EVENTS.md](features/FEATURE_EVENTS.md) | MVP V1 |
| Réseau Social & Mise en Relation | [features/FEATURE_NETWORK.md](features/FEATURE_NETWORK.md) | MVP V1 |
| Messagerie Privée | [features/FEATURE_MESSAGING.md](features/FEATURE_MESSAGING.md) | MVP V1 |
| Modération Automatique | [features/FEATURE_MODERATION.md](features/FEATURE_MODERATION.md) | MVP V1 |
| Services & Annuaire | [features/FEATURE_SERVICES.md](features/FEATURE_SERVICES.md) | V2 |
| Mentoring | [features/FEATURE_MENTORING.md](features/FEATURE_MENTORING.md) | V3 |

**Schéma de Base de Données :** [DATABASE.md](DATABASE.md)

---

## Résumé Exécutif

**Agun** est une plateforme communautaire destinée à la diaspora africaine mondiale. Elle permet à ses membres de se retrouver, de s'entraider, de partager leurs expériences et de rester connectés à leur culture, quelle que soit leur localisation géographique.

**Tagline :** *Unir la diaspora, un lien à la fois.*

---

## Problème

Les membres de la diaspora africaine font face à des défis communs dans leurs pays d'accueil :
- **Isolement social** : difficile de trouver des compatriotes ou des personnes partageant la même culture.
- **Manque de ressources de confiance** : trouver un service (avocat, médecin, artisan) parlant sa langue et comprenant sa culture.
- **Perte de lien culturel** : éloignement des pratiques, langues et événements culturels.
- **Intégration difficile** : pas de guide ou de mentor pour naviguer les démarches administratives, professionnelles.

**Fragmentation actuelle :** Ces besoins sont adressés aujourd'hui via WhatsApp, Facebook, et des groupes informels — sans structure, sans fiabilité, sans centralisation.

---

## Solution

Une plateforme unique qui centralise :
1. Le réseau social communautaire (feed, histoires, discussions)
2. L'annuaire de services et business de la diaspora
3. Le calendrier des événements culturels
4. Le système de mentoring entre anciens et nouveaux arrivants

---

## Personas Utilisateurs

### Persona 1 — Amara, Nouvel Arrivant (26 ans)
- **Situation :** Étudiant sénégalais qui vient d'arriver à Paris pour son Master.
- **Besoins :** Trouver un logement, comprendre les démarches CAF/sécurité sociale, rencontrer d'autres Sénégalais, trouver un plat du pays.
- **Frustration actuelle :** Passe des heures sur des groupes WhatsApp chaotiques.

### Persona 2 — Fatoumata, Professionnelle Établie (38 ans)
- **Situation :** Camerounaise installée à Lyon depuis 10 ans, directrice dans une PME.
- **Besoins :** Partager son expertise, aider les nouveaux arrivants, rester connectée à la communauté, trouver des événements culturels le weekend.
- **Frustration actuelle :** Aucun endroit structuré pour offrir son aide ou trouver des événements fiables.

### Persona 3 — Kofi, Entrepreneur de la Diaspora (33 ans)
- **Situation :** Ghanéen au Canada, gérant d'un restaurant de cuisine africaine à Montréal.
- **Besoins :** Promouvoir son restaurant, attirer des clients de la diaspora, recruter des profils qui comprennent sa cuisine.
- **Frustration actuelle :** Publicité très coûteuse sur des plateformes qui ne ciblent pas la diaspora.

---

## Roadmap des Fonctionnalités

### V1 — MVP (Priorité Maximale)

L'objectif est de lancer rapidement avec le strict nécessaire pour créer de la valeur et valider l'usage.

#### 1. Authentification & Profils

| Feature | Description | Statut |
|---------|-------------|--------|
| Inscription / Connexion | Email + mot de passe via Supabase Auth | À faire |
| Profil utilisateur | Photo, prénom, pays d'origine, pays de résidence, bio courte | À faire |
| Compétences / Tags | Tags libres (ex: "Informatique", "Cuisine congolaise", "Droit français") | À faire |

**User Stories :**
- En tant que nouveau membre, je veux m'inscrire avec mon email afin d'accéder à la communauté.
- En tant qu'utilisateur, je veux renseigner mon pays d'origine et ma ville actuelle afin que d'autres membres de ma communauté me trouvent facilement.
- En tant qu'utilisateur, je veux modifier mon profil afin de maintenir mes informations à jour.

#### 2. Fil d'Actualité (Feed)

| Feature | Description | Statut |
|---------|-------------|--------|
| Créer un post | Texte + image(s), avec catégorie (expérience, question, conseil, annonce) | À faire |
| Liker un post | Réaction rapide à une publication | À faire |
| Commenter un post | Discussion sous un post | À faire |
| Fil chronologique | Affichage des posts des membres par ordre antéchronologique | À faire |
| Suppression de ses propres posts | Contrôle de son contenu | À faire |

**User Stories :**
- En tant qu'utilisateur, je veux partager mon expérience d'arrivée dans un nouveau pays afin d'aider ceux qui arrivent après moi.
- En tant qu'utilisateur, je veux poser une question à la communauté (ex: "Quelle banque choisir en France ?") afin d'obtenir des conseils fiables.
- En tant qu'utilisateur, je veux réagir aux posts des autres afin de montrer mon soutien.

#### 3. Événements

| Feature | Description | Statut |
|---------|-------------|--------|
| Consulter la liste des événements | Événements par ville, avec date, lieu, description | À faire |
| Créer un événement | Titre, description, date, lieu, lien/contact, image | À faire |
| Filtrer par ville / pays | Trouver les événements près de chez soi | À faire |
| Marquer sa participation | Indiquer "Je participe" à un événement | À faire |

**User Stories :**
- En tant qu'utilisateur, je veux voir les événements culturels africains près de chez moi afin de ne rater aucune sortie.
- En tant qu'organisateur, je veux publier mon événement afin d'atteindre la communauté diaspora locale.

---

### V2 — Services & Annuaire (Phase 2)

#### 4. Annuaire des Business & Services

| Feature | Description |
|---------|-------------|
| Référencer son business | Nom, catégorie, description, localisation, contact, photos |
| Rechercher un service | Par catégorie et ville (ex: "Coiffeur afro à Berlin") |
| Système d'avis | Note et commentaire après une visite/utilisation |
| Badge "Vérifié Diaspora" | Confiance renforcée pour les business authentiques |

**User Stories :**
- En tant que membre, je veux trouver un restaurant sénégalais à Londres afin de manger un repas du pays.
- En tant qu'entrepreneur, je veux référencer mon salon de coiffure afin d'attirer des clients de la communauté.

#### 5. Petites Annonces

| Feature | Description |
|---------|-------------|
| Poster une annonce | Logement, emploi, revente d'objets, covoiturage |
| Filtrer par type et localisation | Trouver rapidement ce dont on a besoin |
| Contacter le posteur | Messagerie directe intégrée |

---

### V3 — Mentoring & Groupes (Phase 3)

#### 6. Système de Mentoring

| Feature | Description |
|---------|-------------|
| Profil Mentor | S'inscrire comme mentor avec ses domaines d'expertise |
| Demande de Mentoring | Envoyer une demande à un mentor disponible |
| Messagerie Privée | Communication directe entre mentor et mentoré |
| Évaluation | Note et retour après une session |

**User Stories :**
- En tant que nouvel arrivant, je veux être guidé par quelqu'un qui a vécu la même expérience d'immigration afin de gagner du temps et éviter les erreurs.
- En tant que professionnel établi, je veux partager mon expérience afin de contribuer à la communauté.

#### 7. Groupes & Forums

| Feature | Description |
|---------|-------------|
| Groupes par localisation | "Nigérians à Paris", "Diaspora à Montréal" |
| Groupes thématiques | "Étudiants africains", "Entrepreneurs diaspora", "Cuisine africaine" |
| Modération | Règles communautaires, signalement de contenu |

---

## Principes de Design Produit

1. **Confiance avant tout** : Les profils doivent inspirer confiance. Privilégier des photos réelles, des biographies complètes.
2. **Localisation** : Toujours ancrer les features dans une géographie (ville, pays) pour créer des liens de proximité.
3. **Simplicité** : L'utilisateur cible n'est pas nécessairement technophile. L'UX doit être simple et intuitive.
4. **Multilinguisme** : Prévoir le support du français, de l'anglais, et potentiellement d'autres langues africaines.
5. **Mobile-first** : La majorité des utilisateurs accèdent via mobile.

---

## Métriques de Succès

| Métrique | Cible V1 |
|----------|----------|
| Inscriptions | 500 membres en 3 mois |
| Posts créés par semaine | > 50 |
| Événements créés par mois | > 20 |
| Taux de rétention J7 | > 30% |
| Taux de rétention J30 | > 15% |

---

## Ce que Agun n'est PAS

- ❌ Un réseau social généraliste (pas un Facebook ou Instagram concurrent)
- ❌ Une application de rencontres
- ❌ Une plateforme d'envoi d'argent
- ❌ Un service de streaming musical ou vidéo

---

*Document maintenu par l'équipe Produit — Dernière mise à jour : Mai 2026*
