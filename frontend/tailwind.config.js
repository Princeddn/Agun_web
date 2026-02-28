/** @type {import('tailwindcss').Config} */

/* ==========================================================================
   LE TRADUCTEUR TAILWIND ⚙️
   Ce fichier est extrêmement important. Tailwind lit ce fichier en premier
   pour savoir "Quels mots-clés de design je dois construire ?".
   C'est ici qu'on fait le lien entre les variables de index.css et nos classes React.
   ========================================================================== */

module.exports = {
  // 🌙 MODE SOMBRE : "class" veut dire que le mode sombre s'active uniquement 
  // si on ajoute `<html class="dark">`. Ça ne se met plus "tout seul" en noir.
  darkMode: ["class"],

  // 📝 OÙ SONT MES FICHIERS ? Tailwind doit savoir où chercher. 
  // Il va lire tous les fichiers qui finissent en .js et .jsx dans le dossier src/
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    // 📦 CONTENEUR : Définit qu'une "div container" est toujours centrée avec des marges.
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    // 🌟 EXTEND (AJOUTS PERSONNALISES) : On ne supprime pas les bases de Tailwind.
    // On vient "Étendre" (rajouter) nos propres trucs par dessus.
    extend: {

      // ✍️ 1. NOS POLICES DE CARACTERES
      // Permet d'écrire `font-display` pour avoir l'Outfit, ou `font-body` pour l'Inter.
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        african: ['African', 'sans-serif'],
      },

      // 🎨 2. NOS COULEURS
      // Tu vois ces `hsl(var(--background))` ? 
      // C'est ce qui fait le lien avec notre fichier `index.css`.
      // Ça dit à Tailwind : "Quand le codeur tape 'bg-background', va chercher la valeur CSS '--background'".
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Sous-couleurs : `bg-primary` utilise DEFAULT, mais `text-primary-foreground` utilise "foreground"
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          glass: "hsl(var(--card-glass))",
        },
        glass: {
          bg: "hsl(var(--glass-bg))",
          border: "hsl(var(--glass-border))",
        },
      },

      // 🔲 3. NOS ARRONDIS (Border Radius)
      // Permet d'écrire `rounded-lg` et que Tailwind aille chercher la taille choisie dans index.css
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // 🎬 4. ETAPES D'ANIMATIONS (Keyframes)
      // On apprend à Tailwind comment bouger les choses. 
      // Ex: "slideUp" = Partir vers le bas avec opacité zero (from), puis remonter au centre et devenir visible (to)
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },

      // ⚡ 5. CLASSES D'ANIMATIONS (Animation)
      // C'est ce qu'on écrit vraiment dans React ! 
      // Ex: Lorsqu'on tape `animate-fade-in` sur une div, il regarde en haut et lance "fadeIn" pendant "0.6s" (secondes) avec l'effet fluide "ease-out"
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    }
  },

  // 🔌 6. PLUGINS FINAUX
  // Des super-pouvoirs officiels créés par l'équipe Tailwind.
  // Ici `tailwindcss-animate` permet d'animer les choses beaucoup plus facilement.
  plugins: [require("tailwindcss-animate")],
}
