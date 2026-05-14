# Wireframes — Messagerie Privée

## Écran 1 — Liste des Conversations (Inbox)

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ✉ Messages          ✏️     │  ← Titre + Nouvelle conversation
     ├─────────────────────────────┤
     │                             │
     │  ┌─────────────────────┐    │
     │  │ 🔍  Rechercher...   │    │
     │  └─────────────────────┘    │
     │                             │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐  Fatoumata Koné    2  │  ← Badge messages non lus
     │  │👤│  "Oui bien sûr,   │   │
     │  └──┘   je suis dispo..."   │  ← Aperçu dernier message
     │         14:23               │  ← Heure
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐  Ibou Sarr            │
     │  │👤│  "Merci pour le       │
     │  └──┘   conseil !"          │
     │         Hier · ✓✓           │  ← Lu (double coche)
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐  Kofi Mensah          │
     │  │👤│  Tu : "Je serai là    │
     │  └──┘       samedi"         │  ← "Tu :" = message envoyé
     │         Lun. · ✓✓           │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐  Aïssatou Baldé    1  │
     │  │👤│  "Est-ce que tu       │
     │  └──┘   connais un bon..."  │
     │         09:15               │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐  Omar Diallo          │
     │  │👤│  📷 Photo             │  ← Message image
     │  └──┘                       │
     │         Dim.                │
     │  ─────────────────────────  │
     │                             │
     │         [Conversations      │
     │          archivées (3)]     │  ← Accès aux archivées
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 2 — Conversation Ouverte

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  ┌──┐ Fatoumata K.   ⋮  │  ← Retour + avatar + menu
     │      │👤│ En ligne ●         │  ← Statut en ligne
     │      └──┘                   │
     ├─────────────────────────────┤
     │                             │
     │          Mercredi 14 Mai    │  ← Séparateur de date
     │                             │
     │  ┌──────────────────┐       │
     │  │ Salut ! J'ai vu  │       │  ← Message reçu (gauche)
     │  │ ton post sur les │       │
     │  │ démarches CAF,  │       │
     │  │ c'était super ! │       │
     │  └──────────────────┘       │
     │  Fato. · 09:14              │
     │                             │
     │  ┌──────────────────┐       │
     │  │ Merci beaucoup ! │       │
     │  │ J'essaie de      │       │  ← Message reçu
     │  │ partager ce que  │       │
     │  │ j'ai appris 🙏   │       │
     │  └──────────────────┘       │
     │  Fato. · 09:15              │
     │                             │
     │            ┌──────────────┐ │
     │            │ Tu aurais des│ │  ← Message envoyé (droite)
     │            │ conseils pour│ │
     │            │ la mutuelle? │ │
     │            └──────────────┘ │
     │                   09:32 ✓✓ │  ← Heure + lu
     │                             │
     │  ┌──────────────────┐       │
     │  │ Oui bien sûr, je │       │
     │  │ suis dispo pour  │       │
     │  │ en parler ! Tu   │       │
     │  │ préfères quand ? │       │
     │  └──────────────────┘       │
     │  Fato. · 14:23              │
     │                             │
     │  ● En train d'écrire...     │  ← Indicateur frappe
     │                             │
     ├─────────────────────────────┤
     │  ┌────────────────────┐ 📤  │
     │  │ Écrire un message  │     │  ← Zone de saisie
     │  └────────────────────┘     │
     │  📷   📎   😊               │  ← Attachements + émojis
     └─────────────────────────────┘
```

---

## Écran 3 — Nouvelle Conversation

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ×  Nouveau message         │
     ├─────────────────────────────┤
     │                             │
     │  À :                        │
     │  ┌─────────────────────┐    │
     │  │ 🔍 Chercher parmi   │    │
     │  │    mes connexions.. │    │
     │  └─────────────────────┘    │
     │                             │
     │  MES CONNEXIONS RÉCENTES    │
     │                             │
     │  ┌──┐ Fatoumata Koné        │
     │  │👤│ @fato · Lyon          │
     │  └──┘                       │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐ Ibou Sarr             │
     │  │👤│ @ibou · Paris         │
     │  └──┘                       │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐ Kofi Mensah           │
     │  │👤│ @kofi · Montréal      │
     │  └──┘                       │
     │  ─────────────────────────  │
     │                             │
     │  ℹ️ Tu peux seulement        │
     │     contacter tes           │  ← Info limitation
     │     connexions              │
     │                             │
     └─────────────────────────────┘
```

---

## Notes Design

| Élément | Choix UI | Raison |
|---------|----------|--------|
| Messages reçus à gauche, envoyés à droite | Convention universelle | Identique à WhatsApp, iMessage, Messenger — aucun apprentissage nécessaire |
| Double coche (✓✓) | Bleu = lu, gris = livré | Pattern connu de WhatsApp |
| "En train d'écrire..." | Animé avec 3 points | Feedback temps réel, donne vie à la conversation |
| Aperçu du dernier message dans l'inbox | 1 ligne tronquée | Scannabilité rapide de la liste |
| "Tu :" préfixe pour les messages envoyés | Distinction claire | L'utilisateur sait immédiatement qui a dit quoi |
| Limitation aux connexions | Message informatif | Transparency sur la règle, sans blocage frustrant |
