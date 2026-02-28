from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from app.core.config import settings
from supabase import create_client, Client

# Création du "Routeur"
# C'est lui qui va dire à l'application principale (main.py) : "Hé, j'ai des routes ici !"
router = APIRouter()

# Initialisation du client Supabase
# C'est notre tuyau de communication entre Python et la base de données Supabase
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_ANON_KEY)

# ============================================================================== 
# SCHEMA PYDANTIC (Le moule de la donnée)
# Pydantic vérifie automatiquement que React nous envoie bien les bonnes infos.
# Il refuse la requête direct si "email" ou "password" manquent !
# ==============================================================================
class LoginRequest(BaseModel):
    email: str
    password: str

# ============================================================================== 
# ROUTE POST : /login
# ==============================================================================
# Pourquoi "@router.post" ? Car on "ENVOIE" (Post) des informations secrètes. 
# Si c'était ".get", les mots de passes seraient écrits en clair dans l'URL (catastrophe !).
@router.post("/login")
async def login(credentials: LoginRequest):
    """
    Tente de connecter un utilisateur via Supabase.
    """
    try:
        # On demande à Supabase de tenter la connexion avec les infos reçues
        # .auth.sign_in_with_password() est une fonction magique toute prête de Supabase !
        response = supabase.auth.sign_in_with_password({
            "email": credentials.email,
            "password": credentials.password
        })

        # Si Supabase accepte, il nous renvoie une session contenant le "Token"
        session = response.session
        user = response.user

        if not session or not user:
            # S'il manque des infos de Supabase mais sans crasher, c'est étrange.
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Erreur lors de la récupération de la session."
            )

        # TOUT EST BON ! 🎉
        # On renvoie à React le précieux Token (access_token)
        return {
            "message": "Connexion réussie",
            "access_token": session.access_token,
            "token_type": "bearer",
            "user_id": user.id
        }

    except Exception as e:
        # SI CA PLANTE (Ex: mauvais mot de passe)
        # Supabase lève une erreur, on la rattrape avec ce 'Except'
        # Et on renvoie une belle erreur 401 Unauthorized à React.
        print(f"Erreur de login: {str(e)}") # Sert à débugger dans la console de ton terminal
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
        )

# ============================================================================== 
# SCHEMA PYDANTIC POUR L'INSCRIPTION
# ==============================================================================
from typing import Optional

class RegisterRequest(BaseModel):
    email: str
    password: str
    firstName: str
    lastName: str
    status: str
    nationality: str
    originCity: str
    country: str
    city: str
    gender: str
    birthDate: Optional[str] = None

# ============================================================================== 
# ROUTE POST : /register
# ==============================================================================
@router.post("/register")
async def register(user_data: RegisterRequest):
    """
    Inscrit un nouvel utilisateur via Supabase et lui crée un profil.
    """
    try:
        # 1. Création du compte dans le système d'authentification Supabase
        response = supabase.auth.sign_up({
            "email": user_data.email,
            "password": user_data.password,
            "options": {
                # On sauvegarde toutes ces infos précieuses dans les "user_metadata" !
                "data": {
                    "first_name": user_data.firstName,
                    "last_name": user_data.lastName,
                    "status": user_data.status,
                    "nationality": user_data.nationality,
                    "origin_city": user_data.originCity,
                    "country": user_data.country,
                    "city": user_data.city,
                    "gender": user_data.gender,
                    "birth_date": user_data.birthDate,
                }
            }
        })

        return {
            "message": "Inscription réussie",
            "user_id": response.user.id if response.user else None
        }

    except Exception as e:
        print(f"Erreur d'inscription: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Impossible de créer ce compte. L'email est peut-être déjà utilisé.",
        )
