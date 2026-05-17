# CLAUDE.md — Agun_web

## Ce qu'est ce projet

**Agun_web** est le projet principal d'Agun — une plateforme communautaire pour la diaspora africaine mondiale.

**Stack :**
- Backend : FastAPI (Python) + Uvicorn
- Frontend : React 18 + TailwindCSS + Zustand
- Base de données : Supabase (PostgreSQL)
- Auth : Supabase Auth (JWT)
- Storage : Supabase Storage (images)

## Référence de code — projet AGUN

Le dossier `C:\Users\nouko\OneDrive\Documents\GitHub\AGUN` est un projet Next.js qui sert de **référence**.
Il contient la logique métier complète, les composants React, les types TypeScript et les schémas DB.

**Stratégie d'utilisation :**
- Backend FastAPI : s'inspirer de `AGUN/src/app/api/` pour la logique des endpoints (traduire TS → Python)
- Frontend React : copier/adapter les composants de `AGUN/src/components/`
- Zustand stores : réutiliser directement depuis `AGUN/src/store/`
- Schéma Supabase : identique, utiliser `AGUN/docs/DATABASE.md` comme référence

## Structure du projet

```
Agun_web/
├── backend/
│   └── app/
│       ├── api/v1/endpoints/   ← Routes FastAPI (inspirées de AGUN/src/app/api/)
│       ├── core/               ← Config, sécurité, DB, dépendances
│       ├── schemas/            ← Modèles Pydantic (équivalent des types TS)
│       └── services/           ← Logique métier (équivalent de AGUN/src/lib/)
└── frontend/
    └── src/
        ├── pages/              ← Pages React (inspirées de AGUN/src/app/)
        ├── components/         ← Composants (copier depuis AGUN/src/components/)
        ├── store/              ← Stores Zustand (copier depuis AGUN/src/store/)
        └── services/           ← Appels API axios
```

## Flux de données

```
React Component → Zustand Store → axios service → FastAPI endpoint → Supabase
```

## Règles de développement

### Backend (FastAPI / Python)
- `snake_case` pour tout (variables, fonctions, fichiers, routes)
- Un schéma Pydantic `Create`, `Update`, `Response` par ressource
- Toutes les méthodes de service sont `async`
- Toute route protégée utilise `Depends(get_current_active_user)`
- Ne jamais appeler Supabase depuis un endpoint — passer par un service

### Frontend (React / JavaScript)
- `camelCase` pour les variables/fonctions, `PascalCase` pour les composants
- TailwindCSS uniquement — pas de CSS inline
- State serveur : React Query (déjà installé)
- State global : Zustand stores
- Appels HTTP : axios via les services (jamais directement dans un composant)

## État du projet

### ✅ Déjà en place
- Structure backend FastAPI (app/, core/, schemas/, services/)
- Structure frontend React (pages/, components/, context/, hooks/)
- Authentification UI (LoginPage, RegisterPage)
- Contextes (AuthContext, ThemeContext, NotificationContext)
- Configuration Supabase

### ❌ À implémenter (dans l'ordre)
1. **Auth endpoints** — `POST /auth/login` et `POST /auth/register` (vides actuellement)
2. **Profil enrichi** — champs multi-origines, ethnie, communauté
3. **Feed & Posts** — créer/liker/commenter des posts
4. **Événements** — CRUD complet + participation
5. **Messagerie UI** — conversation en temps réel
6. **Réseau** — Follow/Connect entre membres

## Comment s'inspirer de AGUN

### Exemple : implémenter `POST /auth/login` en FastAPI

Regarder : `AGUN/src/app/api/auth/login/route.ts`
→ Traduire la logique en Python dans : `backend/app/api/v1/endpoints/auth.py`

```python
# Ce que fait AGUN en TypeScript → à faire en Python avec FastAPI
@router.post("/login", response_model=LoginResponse)
async def login(data: LoginRequest):
    user = await supabase.auth.sign_in_with_password({
        "email": data.email,
        "password": data.password
    })
    return {"access_token": user.session.access_token, ...}
```

### Exemple : copier un composant React

Regarder : `AGUN/src/components/feed/feed-item-card.tsx`
→ Copier et adapter dans : `frontend/src/components/feed/FeedItemCard.jsx`

Les composants AGUN utilisent déjà TailwindCSS — la copie est quasi directe.

## Variables d'environnement

### Backend (`backend/.env`)
```
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SECRET_KEY=
ENVIRONMENT=development
BACKEND_CORS_ORIGINS=["http://localhost:5173"]
```

### Frontend (`frontend/.env`)
```
VITE_API_URL=http://localhost:8000/api/v1
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Commandes

```bash
# Backend
cd backend && pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Frontend
cd frontend && npm install
npm run dev
```

## Roadmap

Voir `docs/ROADMAP.md` pour les phases complètes.
**Prochaine priorité : implémenter les auth endpoints (actuellement vides).**
