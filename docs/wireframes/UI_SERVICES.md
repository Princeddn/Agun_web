# Wireframes — Services & Annuaire

## Écran 1 — Annuaire des Services

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  🛍 Services           🗺   │  ← Vue liste + vue carte
     ├─────────────────────────────┤
     │                             │
     │  ┌─────────────────────┐    │
     │  │ 🔍 Coiffeur, médecin│    │
     │  └─────────────────────┘    │
     │  📍 Paris, France     ▼     │  ← Localisation
     │                             │
     │  ─────────────────────────  │
     │                             │
     │  CATÉGORIES                 │
     │                             │
     │  ┌──────┐┌──────┐┌──────┐   │
     │  │  🍽  ││  ✂️  ││  ⚖️  │   │
     │  │Rest. ││Coiff.││Jurid.│   │
     │  └──────┘└──────┘└──────┘   │
     │  ┌──────┐┌──────┐┌──────┐   │
     │  │  🏥  ││  🏠  ││  🎓  │   │
     │  │Santé ││Immob.││Form. │   │
     │  └──────┘└──────┘└──────┘   │
     │  [Voir toutes →]            │
     │                             │
     │  ─────────────────────────  │
     │  LES MIEUX NOTÉS PRÈS DE TOI│
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ▓▓▓▓▓ ┌──────────┐  │    │
     │  │ Logo  │✅Vérifié  │  │    │  ← Badge vérifié
     │  │       └──────────┘  │    │
     │  │ Salon Afro by Fatou │    │
     │  │ ✂️ Coiffure & Beauté │    │
     │  │ ⭐⭐⭐⭐⭐ (47 avis) │    │  ← Note
     │  │ 📍 0.8 km · Barbès  │    │  ← Distance
     │  │ 🌐 Aussi en ligne   │    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ▓▓▓▓▓               │    │
     │  │       Le Dakar      │    │
     │  │ 🍽 Restaurant Sénég.│    │
     │  │ ⭐⭐⭐⭐½ (89 avis) │    │
     │  │ 📍 1.2 km · Château │    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ▓▓▓▓▓               │    │
     │  │ Maître Koné &       │    │
     │  │ Associés            │    │
     │  │ ⚖️ Droit des Étrangers│   │
     │  │ ⭐⭐⭐⭐⭐ (23 avis) │    │
     │  │ 📍 2.1 km · Opéra   │    │
     │  │ 🗣 Fr / Wolof / Ang  │    │  ← Langues
     │  └─────────────────────┘    │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 2 — Fiche Détaillée d'un Service

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←                     ⋮   │
     ├─────────────────────────────┤
     │                             │
     │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ← Photos galerie (swipeable)
     │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
     │              ● ○ ○          │  ← Indicateur galerie
     │                             │
     │  ┌──────┐ ✅ Vérifié Diaspora│
     │  │ LOGO │                   │
     │  └──────┘ Salon Afro by Fatou│
     │           ✂️ Coiffure & Beauté│
     │                             │
     │  ⭐⭐⭐⭐⭐  4.9  (47 avis)  │
     │                             │
     │  ─────────────────────────  │
     │  📍 12 rue de la Charbonnière│
     │     Paris 18e               │
     │  📞 +33 6 12 34 56 78       │
     │  🌐 salonafro.fr            │
     │  🗣 Français · Wolof · Fulani│
     │                             │
     │  HORAIRES                   │
     │  Lun-Sam   09:00 → 19:00    │
     │  Dimanche  Fermé            │
     │                             │
     │  ─────────────────────────  │
     │                             │
     │  À PROPOS                   │
     │  "Salon spécialisé dans les │
     │   coiffures afro, tresses,  │
     │   locks et soins capillaires│
     │   naturels. 8 ans à Paris.  │
     │   RDV conseillé."           │
     │                             │
     │  ─────────────────────────  │
     │                             │
     │  AVIS (47)     [Laisser ⭐] │
     │                             │
     │  ┌──┐ Amara D. · ⭐⭐⭐⭐⭐  │
     │  │👤│ "Excellent service !  │
     │  └──┘  Fatou est talentueuse│
     │        et à l'écoute."      │
     │                             │
     │  ↩ Réponse de Fatou :       │
     │  "Merci Amara, à bientôt !"  │
     │                             │
     │  [Voir 46 avis →]           │
     │                             │
     │  Proposé par                │
     │  ┌──┐ Fatou Cissé  → profil │
     │  │👤│ @fatoucisse            │
     │  └──┘ Membre depuis 2025    │
     │                             │
     ├─────────────────────────────┤
     │  ┌──────────────────────┐   │
     │  │   💬 Contacter Fatou │   │  ← Message Agun
     │  └──────────────────────┘   │
     └─────────────────────────────┘
```

---

## Écran 3 — Petites Annonces

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Petites Annonces    ➕  │  ← Poster une annonce
     ├─────────────────────────────┤
     │                             │
     │  ┌──────┐┌──────┐┌──────┐   │
     │  │ 🏠   ││  💼  ││  📦  │   │  ← Filtres catégorie
     │  │Logem.││Emploi││Objets│   │
     │  └──────┘└──────┘└──────┘   │
     │  ┌──────┐┌──────┐           │
     │  │  🚗  ││  🤝  │           │
     │  │Covoit││Serv. │           │
     │  └──────┘└──────┘           │
     │                             │
     │  📍 Paris                   │
     │  ─────────────────────────  │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ 🏠 LOGEMENT          │    │
     │  │                     │    │
     │  │ Chambre disponible  │    │
     │  │ en coloc (18e Paris)│    │
     │  │ 450€/mois cc        │    │
     │  │ 📍 Barbès · Paris   │    │
     │  │ 👤 Ibou S. · 3h     │    │
     │  │ [Contacter]         │    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ 💼 EMPLOI            │    │
     │  │                     │    │
     │  │ Cherche développeur │    │
     │  │ React/Python (CDI)  │    │
     │  │ AfroBiz Solutions   │    │
     │  │ 📍 Lyon (remote ok) │    │
     │  │ 👤 Fato K. · 1j     │    │
     │  │ [Contacter]         │    │
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
| Distance en km | "0.8 km" en temps réel | Plus parlant qu'une adresse pour trouver |
| Badge "Vérifié Diaspora" | Couleur verte + icône ✅ | Confiance immédiate, différenciateur fort |
| Galerie swipeable | Indicateur dots | Montre les photos sans scroller |
| Réponse du propriétaire aux avis | Indentée différemment | Dialogue visible, rassure les prospects |
| Langues parlées affichées | Ligne dédiée 🗣 | Critère clé pour la diaspora (trouver quelqu'un qui parle sa langue) |
| "Contacter" → messagerie Agun | Bouton principal en bas fixe | Le contact reste dans l'app = traçabilité et confiance |
