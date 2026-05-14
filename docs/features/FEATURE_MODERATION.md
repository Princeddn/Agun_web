# Feature — Modération Automatique

## Objectif

Maintenir un environnement sain, respectueux et sécurisé pour tous les membres de la communauté, sans modération humaine permanente (automatique en priorité, humaine en escalade).

---

## Priorité : MVP (V1 — fonctionnalités de base) puis V2 (avancé)

---

## Philosophie

La modération chez Agun repose sur 3 niveaux :

```
Niveau 1 — Automatique  : Filtrage temps réel des contenus (IA / règles)
Niveau 2 — Communautaire : Signalements agrégés des membres
Niveau 3 — Humain        : Équipe Agun pour les cas complexes (escalade)
```

---

## Fonctionnalités Détaillées

### 1. Filtrage Automatique à la Publication

Déclenché à chaque création de post, commentaire, message, nom de service, ou bio.

**Filtres appliqués :**

| Type | Mécanisme | Action |
|------|-----------|--------|
| Mots interdits (liste noire) | Correspondance exacte + variantes | Blocage immédiat |
| Discours haineux | Modèle IA (API externe) | Mise en quarantaine |
| Spam / liens malveillants | Détection de patterns URL | Blocage + signalement |
| Contenu adulte | Classification d'image (pour les médias) | Mise en quarantaine |
| Désinformation connue | Vérification par base de données | Ajout d'un label "À vérifier" |

**Actions possibles :**
```
blocked      — Contenu bloqué, l'utilisateur est notifié du rejet
quarantined  — Contenu masqué, en attente de revue humaine
labeled      — Contenu visible mais avec un avertissement
approved     — Contenu validé (après revue si quarantainé)
```

---

### 2. Système de Signalement Communautaire

**Ce qui peut être signalé :**
- Un post
- Un commentaire
- Un profil
- Un événement
- Une fiche service
- Un message privé

**Raisons de signalement :**
```
spam                 — Contenu répétitif, publicité non sollicitée
harcelement          — Intimidation, menaces, cyber-harcèlement
contenu_inapproprie  — Contenu choquant, adulte non consenti
haine                — Discours haineux, racisme, discrimination
faux_profil          — Usurpation d'identité
desinformation       — Fausses informations nuisibles
autre
```

**Seuils de déclenchement automatique :**
| Contenu | Seuil | Action automatique |
|---------|-------|-------------------|
| Post / commentaire | 5 signalements | Masqué en attente de revue |
| Profil | 3 signalements | Compte restreint (ne peut plus poster) |
| Service | 5 signalements | Fiche masquée |
| Événement | 3 signalements | Événement masqué |

---

### 3. Sanctions Automatiques

Appliquées selon la gravité et la récidive :

| Sanction | Durée | Déclencheur |
|----------|-------|-------------|
| `avertissement` | — | 1er contenu rejeté |
| `restriction_post` | 24h | 2ème rejet ou 1er grave |
| `suspension` | 7 jours | 3ème rejet ou discours haineux |
| `suspension_longue` | 30 jours | Récidive grave |
| `bannissement` | Permanent | Violations graves répétées |

Un utilisateur banni ne peut pas créer de nouveau compte avec le même email.

---

### 4. Blocage Entre Membres

Chaque membre peut bloquer un autre membre :
- Le bloqué ne voit plus le profil, les posts, les événements du bloquant
- Le bloquant ne reçoit plus de messages ou demandes de connexion du bloqué
- La liste des bloqués est privée

---

### 5. Tableau de Bord de Modération (Équipe Agun)

Interface interne pour traiter les cas en escalade :
- Liste des contenus en quarantaine
- Historique des signalements par utilisateur
- Appliquer / modifier une sanction manuellement
- Réhabiliter un compte suspendu
- Gérer la liste noire de mots

---

### 6. Transparence Utilisateur

Un utilisateur sanctionné est toujours informé :
- Notification claire expliquant la sanction
- Durée de la sanction
- Possibilité de contester via un formulaire de recours
- Délai de réponse : 5 jours ouvrés

---

## Règles Métier

- Les signalements sont anonymes (l'auteur du contenu ne sait pas qui a signalé).
- Un utilisateur ne peut pas signaler le même contenu deux fois.
- Les comptes avec moins de 24h d'ancienneté ont un quota de publications limité (anti-spam).
- Les nouvelles inscriptions depuis des IP récemment bannies sont soumises à vérification supplémentaire.

---

## Tables de Base de Données Associées

- `reports` — signalements
- `moderation_actions` — sanctions appliquées
- `blocked_users` — blocages entre membres
- `moderation_words` — liste noire de mots

→ Voir [docs/DATABASE.md](../DATABASE.md) pour le schéma SQL complet.
