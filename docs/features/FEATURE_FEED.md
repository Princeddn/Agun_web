# Feature — Fil d'Actualité (Feed)

## Objectif

Le feed est le point d'entrée quotidien de l'application. Il permet aux membres de partager leurs expériences, poser des questions, donner des conseils et s'informer. C'est l'espace de conversation central de la communauté.

---

## Priorité : MVP (V1)

---

## Fonctionnalités Détaillées

### 1. Créer un Post

Un post est une publication visible par la communauté selon la visibilité choisie.

| Champ | Type | Obligatoire | Contraintes |
|-------|------|-------------|-------------|
| Contenu texte | Texte | Oui | Max 2 000 caractères |
| Catégorie | Enum | Oui | Voir liste ci-dessous |
| Médias | Images/Vidéos | Non | Max 4 images ou 1 vidéo |
| Langue | Enum | Auto | Détectée ou choisie par l'utilisateur |
| Visibilité | Enum | Non | Défaut : Public |

**Catégories de posts :**
```
experience   — Partager une histoire vécue
question     — Demander un conseil à la communauté
conseil      — Donner un tip, une recommandation
annonce      — Information, événement à partager
actualite    — Actualité africaine ou diaspora
```

---

### 2. Algorithme du Feed

Le feed présente les posts selon deux onglets :

**Onglet "Pour toi" (algorithmique)**
Priorité aux posts de :
1. Connexions et personnes suivies
2. Personnes ayant les mêmes origines
3. Personnes dans la même ville
4. Posts populaires (beaucoup de likes/commentaires récents)
5. Personnes avec des centres d'intérêt communs

**Onglet "Récents" (chronologique)**
Tous les posts publics, du plus récent au plus ancien. Aucun algorithme.

---

### 3. Interactions sur un Post

| Action | Description |
|--------|-------------|
| ❤️ Liker | Aimer un post (toggle) — augmente le compteur |
| 💬 Commenter | Répondre sous un post |
| ↩️ Répondre à un commentaire | Fil de discussion imbriqué (max 1 niveau) |
| 📤 Partager | Repartager le post dans son propre feed avec une note |
| 🔖 Sauvegarder | Mettre en favori pour retrouver plus tard |
| ⚠️ Signaler | Signaler un contenu inapproprié |

---

### 4. Commentaires

- Max 500 caractères par commentaire
- Réponses imbriquées sur 1 niveau (pas de thread infini)
- Likes sur les commentaires
- L'auteur du post peut supprimer n'importe quel commentaire sous son post
- Chaque utilisateur peut supprimer son propre commentaire

---

### 5. Visibilité des Posts

| Option | Qui peut voir |
|--------|---------------|
| `public` | Tout le monde, même non-connecté |
| `followers` | Uniquement les abonnés |
| `connections` | Uniquement les connexions (mutuelles) |

---

### 6. Gestion de ses posts

- Modifier un post dans les 15 minutes suivant la publication (badge "Modifié" affiché)
- Supprimer un post (suppression logique — `is_deleted = true`)
- Archiver un post (invisible du feed, accessible dans son profil)

---

### 7. Fonctionnalités de Confort

| Feature | Description |
|---------|-------------|
| Mentions | `@username` pour mentionner un membre → notification |
| Hashtags | `#diaspora` `#sénégal` → agrégation des posts par thème |
| Sauvegardes | Section "Posts sauvegardés" dans le profil |
| Traduction | Bouton "Traduire" pour les posts dans une autre langue (API externe) |

---

### 8. Feed de Découverte

Page dédiée "Explorer" :
- Posts populaires par pays d'origine
- Posts populaires par ville
- Posts par catégorie (seulement les "questions", seulement les "conseils"...)
- Recherche de posts par mot-clé ou hashtag

---

## Règles Métier

- Un utilisateur ne peut pas liker son propre post.
- Un post signalé 5 fois est automatiquement masqué en attente de modération.
- Les posts contenant des mots de la liste de modération automatique sont mis en quarantaine.
- La modification d'un post réinitialise son rang dans l'algorithme.

---

## Tables de Base de Données Associées

- `posts` — publications
- `post_likes` — likes par utilisateur
- `comments` — commentaires
- `comment_likes` — likes sur commentaires
- `post_saves` — posts sauvegardés
- `post_shares` — partages
- `hashtags` — référentiel des hashtags
- `post_hashtags` — liaison posts ↔ hashtags

→ Voir [docs/DATABASE.md](../DATABASE.md) pour le schéma SQL complet.
