from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    #allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_origins=["*"], # On remplace par l'étoile '*' qui veut dire TOUT LE MONDE
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    # ! LOG EXTRÊMEMENT IMPORTANT POUR DÉBOGUER ! #
    body = await request.body()
    print(f"=======================================")
    print(f"❌ REQUÊTE REFUSÉE PAR LE BACKEND (422) ❌")
    print(f"Body reçu : {body.decode('utf-8')}")
    print(f"Détail de l'erreur : {exc.errors()}")
    print(f"=======================================")
    return JSONResponse(
        status_code=422,
        content={"detail": exc.errors(), "body": body.decode("utf-8")},
    )


@app.get("/test")
def dit_hello():
    return {"message": "Bonjour Prince le test fonctionne"}

@app.get("/")
def root():
    return {
        "message": "Welcome to FastAPI Supabase Project",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy", "database": "connected to supabase"}