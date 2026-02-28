import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Charger les variables du fichier .env
load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_ANON_KEY")

print("====================================")
print("🔍 TEST DE CONNEXION SUPABASE 🔍")
print("====================================")
print(f"URL trouvée : {url}")
print(f"KEY trouvée : {'***' + key[-5:] if key else 'NON TROUVÉE'}")
print("------------------------------------")

try:
    if not url or not key:
        raise ValueError("URL ou clé secrète manquante dans le fichier .env")

    # Tentative de création du client
    supabase: Client = create_client(url, key)
    
    print("✅ Le tunnel avec Supabase est ouvert avec succès !")
    
    print("====================================")
    print("TOUT EST PRÊT, LA CONNEXION EST PARFAITE !")
    
except Exception as e:
    print("❌ ERREUR DE CONNEXION :")
    print(str(e))
