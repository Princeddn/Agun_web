import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate sert à changer de page "silencieusement" (ex: après connexion)
import { useAuth } from "../../context/AuthContext"; // Notre contexte d'authentification
import { Button } from "../../components/ui/button"; // Notre joli bouton

export default function LoginPage() {
  const navigate = useNavigate();
  // On récupère la fonction "login" depuis notre contexte (qui fera plus tard l'appel à l'API FastAPI !)
  const { login } = useAuth();

  /* ============================================================================== 
  * 🧠 LES MÉMOIRES DU COMPOSANT (Les Hooks useState)
  * Contrairement au vieux HTML, React stocke ce que l'utilisateur tape EN DIRECT 
  * dans des variables magiques. A chaque touche du clavier, la mémoire se met à jour.
  * ============================================================================== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(""); // Pour afficher une erreur rouge (ex: mauvais mot de passe)
  const [isLoading, setIsLoading] = useState(false); // Pour faire tourner le bouton pendant le chargement

  /* ============================================================================== 
  * 🚀 FONCTION : QUAND ON CLIQUE SUR "SE CONNECTER"
  * ============================================================================== */
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // 🛑 EMPÊCHE la page web de se rafraîchir ! (Le comportement par défaut relou du HTML)

    setErrorText(""); // On efface les anciennes erreurs
    setIsLoading(true); // On lance le petit cercle de chargement sur le bouton

    try {
      // 1. On tente de se connecter
      // (Bientôt on liera ça à ton FastAPI !)
      await login(email, password);

      // 2. Si ça marche, on redirige l'utilisateur vers son Dashboard
      navigate("/dashboard");

    } catch (err) {
      // 3. Si l'API renvoie une erreur (mauvais mot de passe etc.)
      setErrorText("Email ou mot de passe incorrect.");
    } finally {
      // 4. Dans tous les cas (succès ou erreur), on arrête le cercle de chargement
      setIsLoading(false);
    }
  };

  return (
    // "min-h-screen" = Prend toute la hauteur de l'écran. "flex items-center justify-center" = Centre la boite au milieu
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-12 relative overflow-hidden">

      {/* 🌌 L'ARRIERE PLAN DYNAMIQUE (Les boules lumineuses) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[100px]" />
      </div>

      {/* 📦 LE BLOC DU FORMULAIRE */}
      <div className="w-full max-w-md animate-slide-up z-10">

        {/* Le bouton retour vers l'Accueil */}
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-all group font-medium">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Retour</span>
        </Link>

        {/* La Carte (Glassmorphism) contenant les champs */}
        <div className="bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl p-8 md:p-10">

          <div className="mb-10 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-3 tracking-tight">Connexion</h1>
            <p className="text-muted-foreground text-lg">Bienvenue sur AGUN</p>
          </div>

          {/* 📝 LE FORMULAIRE 
              "onSubmit" écoute la touche Entrée ou le clic sur le bouton "submit".
          */}
          <form onSubmit={handleLoginSubmit} className="space-y-6">

            {/* --- CHAMP EMAIL --- */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/90 ml-1">Email</label>
              <input
                type="email"
                placeholder="ton@email.com"
                required
                // onChange : À chaque touche tapée, on met à jour la mémoire 'setEmail'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                // Un peu de style Tailwind pour rendre le champ joli
                className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all bg-secondary/30 text-foreground"
              />
            </div>

            {/* --- CHAMP MOT DE PASSE --- */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground/90 ml-1">Mot de passe</label>
                <Link to="/forgot-password" className="text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors">
                  Mot de passe oublié ?
                </Link>
              </div>
              <input
                type="password"
                placeholder="********"
                required
                // onChange : À chaque touche tapée, on met à jour la mémoire 'setPassword'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all bg-secondary/30 text-foreground"
              />
            </div>

            {/* --- AFFICHAGE DE L'ERREUR (S'il y en a une) --- */}
            {/* Si "errorText" contient du texte, on affiche cette boîte rouge */}
            {errorText && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-medium animate-fade-in">
                {errorText}
              </div>
            )}

            {/* --- BOUTON DE SOUMISSION --- */}
            {/* Ce bouton utilise notre composant spécial <Button> pour avoir le style Orange */}
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg font-bold shadow-xl shadow-orange-500/20"
              isLoading={isLoading} // Dit au bouton d'afficher le cercle de chargement si "isLoading" est vrai
            >
              Se connecter
            </Button>
          </form>

          {/* Lien vers l'Inscription */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link to="/register" className="font-bold text-primary hover:text-primary-dark transition-colors">
                Créer un compte
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
