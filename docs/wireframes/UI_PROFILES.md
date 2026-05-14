# Wireframes — Profils & Identité

## Écran 1 — Mon Profil (vue personnelle)

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ← Photo de couverture
     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
     │     ┌───────────────┐   ✏️  │
     │     │  [  Photo  ]  │       │  ← Avatar centré + bouton modifier
     │     └───────────────┘       │
     │   Amara Diallo    🇸🇳🇫🇷    │  ← Nom + drapeaux origine/résidence
     │   @amara_diallo             │
     │   Étudiant · Paris, France  │
     │                             │
     │  ┌───────┐ ┌───────┐ ┌───┐ │
     │  │  248  │ │  112  │ │ 3 │ │  ← Abonnés / Abonnements / Connexions
     │  │Abonnés│ │Abonn. │ │Cx │ │
     │  └───────┘ └───────┘ └───┘ │
     │                             │
     │  "Étudiant en Informatique  │
     │   à Paris. Passionné de     │
     │   tech et de culture 🌍"    │  ← Bio
     │                             │
     │─────────────────────────────│
     │  🌍 Sénégal, Guinée         │  ← Origines multiples
     │  🏠 Paris, France           │  ← Résidence
     │  🎓 Master Info · Paris-8   │  ← Infos académiques
     │  👥 Ethnie : Wolof, Peul    │
     │                             │
     │─────────────────────────────│
     │  COMPÉTENCES                │
     │  [Python] [React] [Design]  │  ← Tags compétences
     │                             │
     │  CENTRES D'INTÉRÊT          │
     │  [Football] [Musique] [IA]  │
     │                             │
     │─────────────────────────────│
     │  MES POSTS         SAUVEG.  │  ← Onglets
     │  ─────────                  │
     │  [Post card 1]              │
     │  [Post card 2]              │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │  ← Navigation principale
     └─────────────────────────────┘
```

---

## Écran 2 — Profil d'un Autre Membre

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Profil             ⋮   │  ← Retour + menu (Signaler, Bloquer)
     ├─────────────────────────────┤
     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
     │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
     │     ┌───────────────┐       │
     │     │  [  Photo  ]  │       │
     │     └───────────────┘       │
     │   Fatoumata Koné   🇨🇲🇫🇷  │
     │   @fato_kone                │
     │  Entrepreneuse · Lyon       │
     │                             │
     │  ┌────┐  ┌────────────────┐ │
     │  │ +  │  │   ✓ Connecter  │ │  ← Suivre + Se connecter
     │  │Suiv│  └────────────────┘ │
     │  └────┘                     │
     │  ┌──────────────────────┐   │
     │  │   💬 Envoyer message │   │  ← Visible si connexion établie
     │  └──────────────────────┘   │
     │                             │
     │  3 connexions en commun  ·  │  ← Info matching
     │  Même origine : Cameroun    │
     │                             │
     │─────────────────────────────│
     │  🌍 Cameroun                │
     │  🏠 Lyon, France            │
     │  💼 CEO · AfroBiz Lyon      │
     │                             │
     │─────────────────────────────│
     │  COMPÉTENCES                │
     │  [Management] [Marketing]   │
     │                             │
     │─────────────────────────────│
     │  SES POSTS                  │
     │  [Post card 1]              │
     │  [Post card 2]              │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 3 — Modifier le Profil

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Modifier mon profil     │
     ├─────────────────────────────┤
     │                             │
     │  Photo de profil            │
     │  ┌───────┐                  │
     │  │  👤   │  [Changer]       │
     │  └───────┘                  │
     │                             │
     │  Nom complet *              │
     │  ┌─────────────────────┐    │
     │  │ Amara Diallo        │    │
     │  └─────────────────────┘    │
     │                             │
     │  Statut *                   │
     │  ┌─────────────────────┐    │
     │  │ Étudiant          ▼ │    │  ← Dropdown
     │  └─────────────────────┘    │
     │                             │
     │  Pays d'origine(s) *        │
     │  ┌─────────────────────┐    │
     │  │ + Ajouter un pays   │    │  ← Multi-select
     │  └─────────────────────┘    │
     │  [🇸🇳 Sénégal  ×] [🇬🇳 ×]  │
     │                             │
     │  Nationalité(s)             │
     │  ┌─────────────────────┐    │
     │  │ + Ajouter           │    │
     │  └─────────────────────┘    │
     │                             │
     │  Ethnie(s)                  │
     │  ┌─────────────────────┐    │
     │  │ + Ajouter           │    │
     │  └─────────────────────┘    │
     │  👁 Masqué sur mon profil   │  ← Toggle visibilité
     │                             │
     │  Domaine d'études           │
     │  ┌─────────────────────┐    │
     │  │ Informatique        │    │
     │  └─────────────────────┘    │
     │                             │
     │  Bio (300 car. max)         │
     │  ┌─────────────────────┐    │
     │  │                     │    │
     │  │                     │    │
     │  └─────────────────────┘    │
     │                        82/300│
     │                             │
     │  Compétences                │
     │  ┌─────────────────────┐    │
     │  │ 🔍 Rechercher...    │    │
     │  └─────────────────────┘    │
     │  [Python ★★★×] [React ★★×] │
     │                             │
     │  ┌─────────────────────────┐│
     │  │      Enregistrer        ││  ← Bouton principal
     │  └─────────────────────────┘│
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 4 — Onboarding (après inscription)

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │                             │
     │      ● ○ ○ ○               │  ← Étape 1/4
     │                             │
     │   🌍                        │
     │   Bienvenue sur Agun !      │
     │   Raconte-nous qui tu es    │
     │                             │
     │  D'où viens-tu ?            │
     │  ┌─────────────────────┐    │
     │  │ 🔍 Chercher un pays │    │
     │  └─────────────────────┘    │
     │                             │
     │  🇸🇳 Sénégal                │  ← Suggestions fréquentes
     │  🇨🇲 Cameroun               │
     │  🇨🇮 Côte d'Ivoire          │
     │  🇳🇬 Nigeria                │
     │  🇬🇭 Ghana                  │
     │  🇨🇩 Congo RDC              │
     │  🇲🇱 Mali                   │
     │  [Voir tous les pays →]     │
     │                             │
     │  Tu peux en choisir         │
     │  plusieurs si tes origines  │
     │  sont multiples ✓           │
     │                             │
     │                             │
     │                             │
     │                             │
     │  ┌─────────────────────────┐│
     │  │      Continuer →        ││
     │  └─────────────────────────┘│
     │                             │
     └─────────────────────────────┘
```

---

## Notes Design

| Élément | Choix UI | Raison |
|---------|----------|--------|
| Drapeaux emoji | Affiché à côté du nom | Identification visuelle instantanée des origines |
| Multi-select pays | Tags avec ×supprimer | Supporte les origines multiples |
| Ethnie masquée par défaut | Toggle privé visible seulement par soi | Donnée sensible, consentement explicite |
| Étoiles sur compétences | ★★★ = niveau visuel | Plus rapide à lire qu'un texte "Expert" |
| Onboarding 4 étapes | Étape 1: Origines, 2: Localisation, 3: Statut, 4: Intérêts | Profil minimum viable pour le matching |
