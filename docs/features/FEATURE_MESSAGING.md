# Feature — Messagerie Privée

## Objectif

Permettre aux membres connectés d'échanger en privé, de manière directe et sécurisée. La messagerie renforce les liens créés via le feed ou les événements et permet des échanges de mentoring, de services, ou simplement amicaux.

---

## Priorité : MVP (V1)

---

## Fonctionnalités Détaillées

### 1. Accès à la Messagerie

**Qui peut envoyer un message à qui ?**

| Situation | Peut envoyer un message ? |
|-----------|--------------------------|
| Connexion mutuelle acceptée | ✅ Toujours |
| Abonné (follow uniquement) | ❌ Par défaut (configurable dans les paramètres) |
| Inconnu (aucune relation) | ❌ Impossible |

> L'utilisateur peut modifier ce paramètre dans ses préférences pour autoriser les abonnés ou les inconnus à lui écrire.

---

### 2. Démarrer une Conversation

- Depuis le profil d'un membre : bouton [Envoyer un message]
- Depuis la liste des connexions
- Depuis la messagerie : bouton [Nouvelle conversation] + recherche du membre

---

### 3. Types de Messages

| Type | Description |
|------|-------------|
| `text` | Message texte standard |
| `image` | Photo envoyée depuis l'appareil |
| `file` | Document (PDF, etc.) — max 10 Mo |

---

### 4. Interface de Conversation

**Liste des conversations (inbox) :**
- Triée par date du dernier message
- Aperçu du dernier message + nom + avatar
- Indicateur de messages non lus (badge rouge)
- Recherche dans les conversations

**Interface d'une conversation :**
- Messages dans des bulles (style Messenger/WhatsApp)
- Horodatage des messages
- Indicateur de lecture (message vu ✓✓)
- Zone de saisie + bouton d'envoi + icône d'attachement

---

### 5. Fonctionnalités Complémentaires

| Feature | Description |
|---------|-------------|
| Accusé de lecture | "Vu à 14h32" |
| Indicateur "En train d'écrire" | Les trois points animés |
| Archiver une conversation | La cacher sans la supprimer |
| Supprimer un message | Supprimer pour soi uniquement |
| Signaler une conversation | En cas de harcèlement |
| Bloquer depuis la messagerie | Bloque l'utilisateur et ferme la conversation |

---

### 6. Notifications

| Déclencheur | Notification |
|-------------|--------------|
| Nouveau message reçu | Notification push + badge sur l'icône messagerie |
| Message reçu en arrière-plan | Notification push avec aperçu |

---

## Règles Métier

- Un utilisateur bloqué ne peut plus envoyer de messages.
- Si une connexion est supprimée, la conversation existante reste accessible mais aucun nouveau message ne peut être envoyé.
- Les messages ne sont pas chiffrés de bout en bout (à envisager en V2+). Ils sont stockés dans Supabase.
- Un message signalé est transmis à l'équipe de modération.
- L'historique des messages est conservé 24 mois.

---

## Tables de Base de Données Associées

- `conversations` — fil de discussion
- `conversation_participants` — membres de la conversation + statut de lecture
- `messages` — messages individuels

→ Voir [docs/DATABASE.md](../DATABASE.md) pour le schéma SQL complet.
