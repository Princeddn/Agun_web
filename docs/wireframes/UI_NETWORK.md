# Wireframes — Réseau & Mise en Relation

## Écran 1 — Découverte (Suggestions de membres)

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  👥 Réseau                  │
     ├─────────────────────────────┤
     │  ┌──────────┐┌──────────┐   │
     │  │Suggestions││Connexions│   │  ← Onglets
     │  └──────────┘└──────────┘   │
     │  ─────────────────────────  │
     │                             │
     │  🔍 Rechercher un membre    │
     │  ┌─────────────────────┐    │
     │  │ 🔍  Nom, ville...   │    │
     │  └─────────────────────┘    │
     │                             │
     │  FILTRES RAPIDES            │
     │  [🇸🇳 Sénégal] [Paris]      │  ← Tags filtres actifs
     │  [Étudiant] [+ Filtres]     │
     │                             │
     │  ─────────────────────────  │
     │  PERSONNES À CONNAÎTRE      │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ┌───┐               │    │
     │  │ │👤 │  Ibou Sarr    │    │  ← Card de suggestion
     │  │ └───┘  @ibou · Dakar│    │
     │  │  Étudiant · Paris   │    │
     │  │                     │    │
     │  │  🇸🇳 Même origine    │    │  ← Raisons du match
     │  │  🏙 Même ville       │    │
     │  │  🤝 2 connexions cx. │    │
     │  │                     │    │
     │  │  ┌────────┐ ┌──────┐│    │
     │  │  │ Suivre │ │  +   ││    │  ← Actions
     │  │  └────────┘ │Conn. │|    │
     │  │             └──────┘│    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ┌───┐               │    │
     │  │ │👤 │  Aïssatou B.  │    │
     │  │ └───┘  @aissa       │    │
     │  │  Entrepreneur·Lyon  │    │
     │  │                     │    │
     │  │  🇬🇳 Guinée (toi aussi)│  │
     │  │  🎓 Même domaine IT  │   │
     │  │  ❤️ 5 intérêts cx.  │    │
     │  │                     │    │
     │  │  ┌────────┐ ┌──────┐│    │
     │  │  │ Suivre │ │  +   ││    │
     │  │  └────────┘ │Conn. ││    │
     │  │             └──────┘│    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ ┌───┐               │    │
     │  │ │👤 │  Omar Diallo  │    │
     │  │ └───┘  @omar_d      │    │
     │  │  Travailleur · Berlin│   │
     │  │                     │    │
     │  │  🇸🇳 Sénégal         │    │
     │  │  🤝 4 connexions cx. │    │
     │  │                     │    │
     │  │  ┌────────┐ ┌──────┐│    │
     │  │  │ Suivre │ │  +   ││    │
     │  │  └────────┘ │Conn. ││    │
     │  │             └──────┘│    │
     │  └─────────────────────┘    │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 2 — Recherche Avancée avec Filtres

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Filtres            ✓OK  │
     ├─────────────────────────────┤
     │                             │
     │  PAYS D'ORIGINE             │
     │  ┌─────────────────────┐    │
     │  │ 🔍 Chercher un pays │    │
     │  └─────────────────────┘    │
     │  [🇸🇳 Sénégal ×]            │
     │                             │
     │  PAYS DE RÉSIDENCE          │
     │  ┌─────────────────────┐    │
     │  │ France            ▼ │    │
     │  └─────────────────────┘    │
     │                             │
     │  VILLE                      │
     │  ┌─────────────────────┐    │
     │  │ Paris               │    │
     │  └─────────────────────┘    │
     │                             │
     │  STATUT                     │
     │  ☑ Étudiant                 │
     │  ☐ Travailleur              │  ← Checkboxes multi-sélection
     │  ☑ Entrepreneur             │
     │  ☐ Freelance                │
     │  ☐ Sans emploi              │
     │  ☐ Retraité                 │
     │                             │
     │  DOMAINE                    │
     │  ┌─────────────────────┐    │
     │  │ Informatique      ▼ │    │
     │  └─────────────────────┘    │
     │                             │
     │  CENTRES D'INTÉRÊT          │
     │  ┌─────────────────────┐    │
     │  │ 🔍 Football, Music. │    │
     │  └─────────────────────┘    │
     │  [Football ×]               │
     │                             │
     │  EST MENTOR                 │
     │  ○ Peu importe              │
     │  ◉ Oui, mentors uniquement  │  ← Radio
     │                             │
     │  ─────────────────────────  │
     │  Résultats estimés : 47     │  ← Preview du nombre
     │                             │
     │  ┌─────────────────────────┐│
     │  │    Voir 47 profils      ││
     │  └─────────────────────────┘│
     │  [Réinitialiser les filtres]│
     │                             │
     └─────────────────────────────┘
```

---

## Écran 3 — Mes Connexions & Abonnements

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Réseau                  │
     ├─────────────────────────────┤
     │  ┌────────┐┌────────┐┌────┐ │
     │  │Connexions││Abonnés││Abon│ │  ← Onglets
     │  │   (12) ││  (87) ││(48)│ │
     │  └────────┘└────────┘└────┘ │
     │  ─────────────────────────  │
     │                             │
     │  ┌─────────────────────┐    │
     │  │ 🔍  Chercher...     │    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌─────────────────────┐    │  ← Demandes en attente
     │  │ ⏳ 3 demandes reçues│    │
     │  │    [Voir tout]      │    │
     │  └─────────────────────┘    │
     │                             │
     │  ┌──┐ Fatoumata K.          │
     │  │👤│ Cameroun · Lyon       │  ← Liste connexions
     │  └──┘ Entrepreneuse         │
     │       [Message] [Profil]    │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐ Kofi Mensah           │
     │  │👤│ Ghana · Montréal      │
     │  └──┘ Entrepreneur          │
     │       [Message] [Profil]    │
     │  ─────────────────────────  │
     │                             │
     │  ┌──┐ Ibou Sarr             │
     │  │👤│ Sénégal · Paris       │
     │  └──┘ Étudiant              │
     │       [Message] [Profil]    │
     │  ─────────────────────────  │
     │                             │
     ├─────────────────────────────┤
     │  🏠    🔍    ➕    🔔    👤 │
     └─────────────────────────────┘
```

---

## Écran 4 — Demande de Connexion (popup)

```
     ┌─────────────────────────────┐
 📶  │  9:41                   🔋  │
     ├─────────────────────────────┤
     │  ←  Profil             ⋮   │
     │       ...                   │
     │                             │
     │  ╔═════════════════════╗    │  ← Modal overlay
     │  ║  Se connecter avec  ║    │
     │  ║  Fatoumata Koné     ║    │
     │  ╠═════════════════════╣    │
     │  ║                     ║    │
     │  ║  Ajouter un message ║    │
     │  ║  (optionnel)        ║    │
     │  ║                     ║    │
     │  ║  ┌─────────────────┐║    │
     │  ║  │ Bonjour, j'ai   │║    │
     │  ║  │ vu ton profil   │║    │
     │  ║  │ et j'aimerais   │║    │
     │  ║  │ qu'on échange   │║    │
     │  ║  │ sur l'entrepr...│║    │
     │  ║  └─────────────────┘║    │
     │  ║            134/200  ║    │
     │  ║                     ║    │
     │  ║  ┌─────────────────┐║    │
     │  ║  │  Envoyer        │║    │
     │  ║  └─────────────────┘║    │
     │  ║  [Annuler]          ║    │
     │  ╚═════════════════════╝    │
     │                             │
     └─────────────────────────────┘
```

---

## Notes Design

| Élément | Choix UI | Raison |
|---------|----------|--------|
| Raisons du match affichées | Tags colorés sous chaque profil | L'utilisateur comprend instantanément pourquoi cette personne lui est suggérée |
| "Suivre" + "Se connecter" côte à côte | Deux boutons distincts | Actions différentes, ne pas les confondre |
| Message optionnel à la connexion | Champ texte dans popup | Humanise la demande, taux d'acceptation plus élevé |
| Onglet demandes reçues avec badge | Mise en avant | Réduire le délai de réponse |
| Filtres multiples combinables | Checkboxes + dropdowns | La recherche croisée est le cœur du matching |
