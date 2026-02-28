# 📚 Le Carnet de Bord des Notions React (Projet AGUN)

Ce document recense toutes les notions importantes de React que nous utilisons dans le projet pour que tu puisses t'y référer à tout moment.

---

## 1. Mémorisation et Données Dépendantes (`useMemo` et `watch`)

### C'est quoi ?
Dans un formulaire complexe (comme l'inscription), certains champs changent en fonction de ce qu'on a sélectionné avant. Par exemple : 
- Afficher les villes de la **France** SEULEMENT si on a choisi la "France" avant.

### Comment on l'a fait ?
Nous utilisons deux outils très puissants pour cela :
1. **`watch` (de react-hook-form)** : C'est le grand observateur. Il permet de "surveiller" en temps réel la valeur d'un champ de texte ou d'un menu déroulant.
   ```javascript
   // J'ai ordonné à React de surveiller la valeur du champ "country"
   const selectedCountry = watch("country"); 
   ```

2. **`useMemo` (de React)** : C'est "l'Usine de Tri Intelligente". Son travail est de faire un calcul lourd (comme trier 350 villes) **uniquement** quand c'est nécessaire. Si l'utilisateur n'a pas touché au champ "Pays", le `useMemo` se repose et garde en mémoire le dernier tri.
   ```javascript
   // Le petit tableau à la fin [selectedCountry] s'appelle "la liste de dépendances".
   // Il dit à react : "Ne refais ce calcul de villes QUE si selectedCountry a changé."
   const availableCities = useMemo(() => {
     if (!selectedCountry) return []; // Si rien sélectionné = pas de villes.
     
     // 1. Va chercher toutes les villes (CITIES)
     // 2. Filtre (.filter) celles dont l'ID du pays correspond à selectedCountry
     return CITIES.filter((city) => city.countryId === selectedCountry);
   }, [selectedCountry]);
   ```

### Pourquoi c'est super puissant ?
Cela permet à ton application d'être "Performante". Au lieu de recalculer la liste des 350 villes à chaque seconde au moment où l'utilisateur bouge sa souris, elle la calcule **une seule fois** quand le pays est cliqué.
Et avec React-Hook-Form, nous n'avons même pas besoin de créer plein de petits états (`useState`), tout est fait automatiquement de manière transparente !
