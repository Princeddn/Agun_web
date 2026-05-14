# Wireframes — Fil d'Actualité (Feed)

## Écran 1 — Feed Principal

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  🌍 Agun          🔔(3)  ✉  │  ← Logo + notifs + messages
     ├─────────────────────────────┤
     │  ┌──────────┐ ┌──────────┐  │
     │  │ Pour toi │ │  Récents │  │  ← Onglets feed
     │  └──────────┘ └──────────┘  │
     │  ─────────────              │
     ├─────────────────────────────┤
     │                             │
     │  ┌───┐  Que veux-tu         │
     │  │👤 │  partager ?          │  ← Zone de création rapide
     │  └───┘  ──────────────────  │
     │         📷 Photo  📅 Event  │
     │                             │
     ├─────────────────────────────┤
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ┌──┐ Amara Diallo   │    │  ← Post card
     │  │ │👤│ @amara · 2h    │    │
     │  │ └──┘ Sénégal 🇸🇳    │    │  ← Origine affichée
     │  │                     │    │
     │  │ ❓ QUESTION          │    │  ← Badge catégorie
     │  │                     │    │
     │  │ "Quelqu'un a des    │    │
     │  │  conseils pour      │    │
     │  │  ouvrir un compte   │    │
     │  │  bancaire au UK ?"  │    │
     │  │                     │    │
     │  │ ❤️ 14  💬 7  📤 2   │    │  ← Actions
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ┌──┐ Fatoumata K.   │    │
     │  │ │👤│ @fato · 4h     │    │
     │  │ └──┘ Cameroun 🇨🇲   │    │
     │  │                     │    │
     │  │ 💡 CONSEIL           │    │
     │  │                     │    │
     │  │ "Voici 5 choses que │    │
     │  │  j'aurais voulu     │    │
     │  │  savoir en arrivant │    │
     │  │  en France..."      │    │
     │  │                     │    │
     │  │ [voir plus]         │    │
     │  │                     │    │
     │  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │    │  ← Image du post
     │  │                     │    │
     │  │ ❤️ 89  💬 23  📤 11 │    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ┌──┐ Kofi Mensah    │    │
     │  │ │👤│ @kofi · 6h     │    │
     │  │ └──┘ Ghana 🇬🇭      │    │
     │  │                     │    │
     │  │ 📣 ANNONCE           │    │
     │  │                     │    │
     │  │ "Mon restaurant     │    │
     │  │  ouvre ses portes   │    │
     │  │  à Montréal !       │    │
     │  │  Venez nombreux 🍽"  │    │
     │  │                     │    │
     │  │ ❤️ 47  💬 18  📤 5  │    │
     │  └─────────────────────┘    │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 2 — Créer un Post

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ×  Nouveau post   Publier  │  ← Annuler + Publier
     ├─────────────────────────────┤
     │                             │
     │  ┌───┐                      │
     │  │👤 │  Amara Diallo        │
     │  └───┘  🌍 Public         ▼ │  ← Visibilité
     │                             │
     │  Catégorie *                │
     │  ┌─────┐ ┌─────┐ ┌─────┐   │
     │  │ 💬  │ │ ❓  │ │ 💡  │   │
     │  │Expé.│ │Quest│ │Cons.│   │  ← Sélection catégorie
     │  └─────┘ └─────┘ └─────┘   │
     │  ┌─────┐ ┌─────┐           │
     │  │ 📣  │ │ 📰  │           │
     │  │Ann. │ │Actu │           │
     │  └─────┘ └─────┘           │
     │                             │
     │  ┌─────────────────────┐    │
     │  │                     │    │
     │  │  Qu'as-tu à         │    │
     │  │  partager avec la   │    │
     │  │  communauté ?       │    │  ← Zone de texte
     │  │                     │    │
     │  │                     │    │
     │  │                     │    │
     │  └─────────────────────┘    │
     │                      0/2000 │
     │                             │
     │  Ajouter des médias         │
     │  ┌─────────────────────┐    │
     │  │  📷  +  Ajouter     │    │  ← Zone upload
     │  │       une photo     │    │
     │  └─────────────────────┘    │
     │                             │
     │  # Ajouter un hashtag       │
     │  ┌─────────────────────┐    │
     │  │ #diaspora           │    │
     │  └─────────────────────┘    │
     │  [#diaspora ×] [#paris ×]   │
     │                             │
     │  @ Mentionner quelqu'un     │
     │                             │
     │  🌐 Langue : Français ▼     │
     │                             │
     ├─────────────────────────────┤
     │  📷   🎥   #   @   😊      │  ← Toolbar
     └─────────────────────────────┘
```

---

## Écran 3 — Détail d'un Post + Commentaires

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Post                ⋮  │  ← Menu : Sauvegarder, Signaler
     ├─────────────────────────────┤
     │                             │
     │  ┌──┐ Fatoumata Koné  · 4h  │
     │  │👤│ @fato · Cameroun 🇨🇲  │
     │  └──┘                       │
     │                             │
     │  💡 CONSEIL                  │
     │                             │
     │  "Voici 5 choses que        │
     │   j'aurais voulu savoir     │
     │   en arrivant en France...  │
     │                             │
     │   1. Ouvre un compte Nickel │
     │   2. La CAF : fais-le dès   │
     │      le premier jour        │
     │   3. La carte Vitale prend  │
     │      3 mois, prévois une    │
     │      mutuelle temporaire    │
     │   4. Airvisio pour les      │
     │      démarches en ligne     │
     │   5. Les APL peuvent        │
     │      rembourser jusqu'à     │
     │      300€/mois !"           │
     │                             │
     │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ← Image
     │                             │
     │  ─────────────────────────  │
     │  ❤️ 89  💬 23  📤 Partager  │  ← Actions principales
     │  🔖 Sauvegarder             │
     │  ─────────────────────────  │
     │                             │
     │  COMMENTAIRES (23)          │
     │                             │
     │  ┌──┐ Amara D. · 2h         │
     │  │👤│ "Merci pour le tip    │
     │  └──┘  sur la CAF ! 🙌"     │
     │        ❤️ 5  ↩ Répondre     │
     │                             │
     │    ┌──┐ @fato · 1h          │  ← Réponse imbriquée
     │    │👤│ "Avec plaisir !"    │
     │    └──┘                     │
     │                             │
     │  ┌──┐ Ibou S. · 3h          │
     │  │👤│ "Point 2 crucial,     │
     │  └──┘  je n'avais pas su..."│
     │        ❤️ 12  ↩ Répondre    │
     │                             │
     │  [Voir 21 autres →]         │
     │                             │
     ├─────────────────────────────┤
     │  ┌───┐                      │
     │  │👤 │ Écrire un com...  📤 │  ← Zone réponse
     │  └───┘                      │
     └─────────────────────────────┘
```

---

## Écran 4 — Explorer (Découverte par filtre)

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  Explorer                   │
     ├─────────────────────────────┤
     │  ┌─────────────────────┐    │
     │  │ 🔍  Rechercher...   │    │
     │  └─────────────────────┘    │
     │                             │
     │  CATÉGORIES                 │
     │  ┌───────┐ ┌────────┐       │
     │  │  ❓   │ │  💡    │       │
     │  │Questions│ Conseils│      │
     │  └───────┘ └────────┘       │
     │  ┌───────┐ ┌────────┐       │
     │  │  💬   │ │  📣    │       │
     │  │Expéri.│ │Annonces│       │
     │  └───────┘ └────────┘       │
     │                             │
     │  HASHTAGS POPULAIRES        │
     │  #diaspora(4.2k)            │
     │  #paris(2.1k)               │
     │  #canada(1.8k)              │
     │  #etudiant(1.5k)            │
     │  #entrepreneuriat(980)      │
     │                             │
     │  PAR PAYS D'ORIGINE         │
     │  🇸🇳 Sénégal  ·  🇨🇲 Cameroun│
     │  🇳🇬 Nigeria  ·  🇨🇮 Côte d'I│
     │  [Tous les pays →]          │
     │                             │
     │  TENDANCES CETTE SEMAINE    │
     │  ┌─────────────────────┐    │
     │  │ 💡 Les meilleures   │    │
     │  │    astuces pour la  │    │
     │  │    CAF en 2026      │    │
     │  │    ❤️ 342  💬 89   │    │
     │  └─────────────────────┘    │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Notes Design

| Élément | Choix UI | Raison |
|---------|----------|--------|
| Badge catégorie coloré | Couleur unique par catégorie | Identification visuelle immédiate sans lire |
| Drapeau sur chaque post | Emoji drapeau du pays d'origine | Crée un sentiment de proximité culturelle |
| "Pour toi" / "Récents" | Deux onglets | Satisfait les curieux ET les fidèles d'un algo |
| Zone création rapide en haut | Barre simplifiée → ouvre l'éditeur | Réduit la friction pour poster |
| Toolbar en bas de l'éditeur | Icônes inline | Pattern standard (WhatsApp, Instagram) |
