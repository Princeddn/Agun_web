import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; /* Pour savoir si l'utilisateur est connecté */
import { Button } from "../../components/ui/button"; /* Notre bouton spécial qui est réutilisable */
import { useInView } from "react-intersection-observer"; /* Un outil pour savoir si une div est visible à l'écran (pour déclencher l'animation quand on scrolle) */
import { cn } from "../../lib/utils"; /* Une fonction magique pour mélanger des classes Tailwind CSS */

// 🔸 Import de toutes nos icônes gratuites issues de la librairie "Lucide React"
import {
  ChevronRight, Globe, Users, Shield, MessageCircle, Map, Lock, Sparkles, Briefcase,
  Calendar, Heart, MapPin, Search, HandHelping, UserCheck, Star, CheckCircle2,
  X, MessageSquare, ArrowRight,
} from "lucide-react";

/* ============================================================================== 
 * 🎨 COMPOSANT OUTIL : FADE IN (Apparition magique)
 * Ce petit composant enveloppe les blocs qu'on veut animer (quand on scrolle).
 * ============================================================================== */
function FadeIn({ children, className, delay = 0 }) {
  // `useInView` nous dit "inView = true" dès que ce bloc passe devant nos yeux (sur l'écran)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref} /* L'observateur regarde cette Div */
      className={cn(
        "transition-all duration-700 ease-out", /* Transition fluide sur 0.7 seconde (700ms) */
        // S'il est à l'écran : opacité à 100% et en position normale (translate-y-0)
        // S'il est caché bas : opacité 0% et descendu de 32px (translate-y-8) pour faire son apparition du bas
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className // On peut rajouter d'autres classes par dessus
      )}
      style={{ transitionDelay: `${delay}ms` }} /* On peut retarder l'animation pour un effet de "cascade" */
    >
      {/* "children" c'est ce qu'il y a à l'intérieur de notre <FadeIn>...</FadeIn> */}
      {children}
    </div>
  );
}

/* ============================================================================== 
 * 📱 COMPOSANT OUTIL : FAUX IPHONE (Mockup)
 * Dessine un cadre de téléphone (contour rond, encoche en haut, trait du bas).
 * ============================================================================== */
function PhoneMockup({ children, className }) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* 📱 1. Le Boitier (le corps) du téléphone */}
      <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[6px] border-foreground/20 bg-background shadow-2xl overflow-hidden">

        {/* 2. L'encoche en haut de l'écran (Notch iPhone) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/20 rounded-b-2xl z-20" />

        {/* 3. La barre des statuts (heure en haut à gauche, batterie) */}
        <div className="absolute top-0 inset-x-0 h-12 bg-background/80 backdrop-blur-sm z-10 flex items-end justify-between px-6 pb-1">
          <span className="text-[9px] font-bold text-muted-foreground">9:41</span>
          <div className="flex gap-1">
            <div className="w-3.5 h-2 rounded-sm bg-muted-foreground/50" />
            <div className="w-1 h-2 rounded-sm bg-muted-foreground/50" />
          </div>
        </div>

        {/* 4. L'écran : on va injecter "children" (notre faux contenu de Groupe, ou Entraide) ici */}
        <div className="absolute inset-0 top-12 overflow-hidden">
          {children}
        </div>

        {/* 5. Le petit trait en bas de tous les iPhone (Home indicator) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-foreground/30 z-20" />
      </div>

      {/* 🌟 6. Le reflet de verre au dessus de tout pour faire brillant */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}

/* ============================================================================== 
 * Mini "Faux Ecrans" pour mettre l'intérieur du faux iPhone (Mockups)
 * Chaque Mockup est une boucle (un ".map()") qui crée des petites cartes visuelles.
 * ============================================================================== */
function MockupGroupScreen() {
  return (
    <div className="p-3 space-y-3 bg-background h-full">
      <div className="flex items-center gap-2 mb-4">
        {/* L'icône de globe pour "Groupes" */}
        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
          <Globe size={14} className="text-primary" />
        </div>
        <span className="text-xs font-bold text-foreground">Groupes du Réseau</span>
      </div>

      {/* On va lister ces 4 faux groupes */}
      {[
        { name: "Diaspora Paris", platform: "WhatsApp", members: "2.4K", verified: true, color: "bg-emerald-500/15 text-emerald-500" },
        { name: "Étudiants Lyon", platform: "Telegram", members: "890", verified: false, color: "bg-sky-500/15 text-sky-500" },
        { name: "Entrepreneurs BE", platform: "WhatsApp", members: "1.2K", verified: true, color: "bg-emerald-500/15 text-emerald-500" },
        { name: "Tech Africa Berlin", platform: "Discord", members: "650", verified: false, color: "bg-indigo-500/15 text-indigo-500" },
      ].map((g, i) => (
        // Pour chaque faux groupe "g", on dessine ce cadre :
        <div key={i} className="p-2.5 rounded-xl border border-border/30 bg-card/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-foreground">{g.name}</span>
            {g.verified && <CheckCircle2 size={10} className="text-blue-400" />} {/* Si vérifié, affiche la coche bleue */}
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("text-[8px] font-bold px-1.5 py-0.5 rounded-md", g.color)}>{g.platform}</span>
            <span className="text-[8px] text-muted-foreground">{g.members} membres</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// (Maintiens des mockups d'entraide et services... on utilise le même principe => des listes qui sont affichées en boucle avec .map)
function MockupEntraideScreen() {
  return (
    <div className="p-3 space-y-3 bg-background h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center"><HandHelping size={14} className="text-primary" /></div>
        <span className="text-xs font-bold text-foreground">Entraide</span>
      </div>
      {[
        { title: "Aide pour déménagement", cat: "Déménagement", city: "Paris", urgent: true },
        { title: "Traduction documents", cat: "Administratif", city: "Bruxelles", urgent: false },
        { title: "Cherche coiffeur africain", cat: "Services", city: "Lyon", urgent: false },
        { title: "Cours de français", cat: "Formation", city: "Berlin", urgent: true },
      ].map((item, i) => (
        <div key={i} className="p-2.5 rounded-xl border border-border/30 bg-card/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-foreground">{item.title}</span>
            {item.urgent && <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-destructive/15 text-destructive">Urgent</span>}
          </div>
          <div className="flex items-center gap-2 text-[8px] text-muted-foreground">
            <span className="px-1.5 py-0.5 rounded-md bg-primary/10 text-primary font-bold">{item.cat}</span>
            <span className="flex items-center gap-0.5"><MapPin size={7} /> {item.city}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockupServicesScreen() {
  return (
    <div className="p-3 space-y-3 bg-background h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center"><Briefcase size={14} className="text-primary" /></div>
        <span className="text-xs font-bold text-foreground">Services</span>
      </div>
      {[
        { name: "Chez Fatou - Coiffure", rating: 4.8, city: "Paris 18e", cat: "Coiffure" },
        { name: "Moussa Express", rating: 4.5, city: "Bruxelles", cat: "Transport" },
        { name: "AfroTech Solutions", rating: 4.9, city: "Lyon", cat: "Informatique" },
        { name: "Mama Cuisine", rating: 4.7, city: "Marseille", cat: "Restauration" },
      ].map((s, i) => (
        <div key={i} className="p-2.5 rounded-xl border border-border/30 bg-card/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-foreground">{s.name}</span>
            <span className="flex items-center gap-0.5 text-[8px] text-amber-400 font-bold"><Star size={8} className="fill-current" /> {s.rating}</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] text-muted-foreground">
            <span className="px-1.5 py-0.5 rounded-md bg-secondary/60 font-bold">{s.cat}</span>
            <span className="flex items-center gap-0.5"><MapPin size={7} /> {s.city}</span>
          </div>
        </div>
      ))}
    </div>
  );
}


/* ============================================================================== 
 * 🚀 PAGE D'ACCUEIL : `HomePage` (C'est ce qui s'affiche sur ton site quand on arrive sur "/")
 * ============================================================================== */
export default function HomePage() {
  const { user } = useAuth(); // On demande tout de suite à notre système : "Le visiteur est-il connecté ?" (Si oui, user contient ses infos)

  /* 👇 Ce sont nos "bases de données visuelles". Tout le texte de la page est listé ici ! (Ca évite de faire des longs codes plus bas) */
  const allFeatures = [
    { icon: Globe, title: "Groupes externes", desc: "Rejoins des groupes WhatsApp & Telegram vérifiés par la communauté" },
    { icon: Users, title: "Communautés", desc: "Crée et anime tes propres espaces de discussion" },
    { icon: Briefcase, title: "Services", desc: "Trouve des pros de confiance : coiffure, transport, formation..." },
    { icon: Calendar, title: "Événements", desc: "Découvre les rencontres et activités près de chez toi" },
    { icon: MessageSquare, title: "Forum", desc: "Pose tes questions et partage ton expérience" },
    { icon: HandHelping, title: "Entraide", desc: "Propose ou demande de l'aide : déménagement, papiers, traduction..." },
    { icon: UserCheck, title: "Annuaire", desc: "Connecte-toi avec des pros et ambassadeurs de la diaspora" },
    { icon: MessageCircle, title: "Messages", desc: "Échange en privé avec les membres de la communauté" },
    { icon: Map, title: "Carte interactive", desc: "Visualise services, événements et groupes sur la carte" },
  ];

  const painPoints = [
    { icon: Heart, title: "L'isolement", desc: "Tu arrives dans un pays où tu ne connais personne. Pas de réseau, pas de repères." },
    { icon: Shield, title: "Les arnaques", desc: "Faux logements, faux services, groupes WhatsApp douteux. Difficile de faire confiance." },
    { icon: Search, title: "La perte de temps", desc: "Des heures sur Facebook à chercher une info fiable. Tout est éparpillé, rien n'est vérifié." },
  ];

  /* 🎬 La page retournée (Le visuel) */
  return (
    // `main` est la div qui englobe toute ta page d'accueil !
    // Son fond (bg) prend la couleur `background` definie dans ton index.css !
    // Son texte par defaut (text) prend la couleur `foreground` (Gris tres foncé en theme blanc).
    // `overflow-hidden` empêche les choses de déborder sur les côtés (Scroll horizontal).
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">

      {/* 
        ═══════ 🌌 ARRIERE PLAN ═══════
        Ces grandes DIV floues ("blur-[150px]") tournent derrière le texte de la page
        pour donner des grandes taches de lumières colorées stylées (orange car var(--primary)).
      */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
          style={{ background: "hsl(var(--primary) / 0.4)" }}
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
          style={{ background: "hsl(var(--primary) / 0.25)" }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: "hsl(var(--primary) / 0.3)" }}
        />
      </div>

      {/* 
        ═══════ 🍔 BARRE DE NAVIGATION (Menu Top) ═══════
        `sticky top-0` veut dire : La barre de menu "colle" en haut quand tu descends.
        `backdrop-blur-xl` veut dire : Si du texte passe en dessous je le rends un peu flou (effet de verre).
      */}
      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          {/* LOGO AGUN à Gauche */}
          <div className="flex items-center gap-3">
            {/* Le titre "AGUN" utilise la classe `gradient-text` définie dans index.css pour faire un joli dégradé orange */}
            <span className="text-2xl font-black tracking-tight gradient-text font-display">AGUN</span>
          </div>

          {/* Boutons à Droite */}
          <div className="flex items-center gap-3">
            {/* MAGIE REACT : On utilise un "Ternaire" => (condition) ? (Si OUI) : (Si NON) */}
            {user ? (
              // SI LE MEC EST DEJA CONNECTE => On affiche juste un bouton pour aller dans son espace "Mon Espace"
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-lg shadow-primary/20">
                <Link to="/dashboard">Mon espace <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            ) : (
              // SI LE MEC EST DECONNECTE => On affiche "Se connecter" ou "Rejoindre"
              <>
                {/* On utilise notre composant <Button> qu'on a créé (celui qui est joli) !
                    `asChild` veut dire : "Je suis un composant Button, mais en fait donne mon design à l'enfant (le Link)"
                */}
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium hidden sm:inline-flex">
                  <Link to="/login">Se connecter</Link>
                </Button>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-lg shadow-primary/20">
                  <Link to="/register">Rejoindre AGUN</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* 
        ═══════ ⚡ SECTION 1 : Le GRAND TITRE (HERO) ═══════ 
        C'est le sommet de la page, la première chose que le visiteur lit.
      */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-5xl text-center space-y-8">

          {/* Petit badge d'éffet "Glass" tout en haut avant le titre */}
          <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-bold text-primary border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4" /> {/* Icône petite et brillante */}
            La plateforme de la diaspora africaine
          </div>

          {/* LE GROS TITRE ! */}
          {/* "animate-slide-up" => Dès le chargement, le tire remonte d'un coup avec classe ! */}
          <h1 className="animate-slide-up">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight text-foreground">
              Ta communauté,
            </span>
            {/* Encore ce dégradé orange magique (gradient-text) */}
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight gradient-text mt-2">
              partout en Europe
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Trouve ton logement, ton emploi, ta communauté
            <span className="text-foreground font-semibold"> — où que tu sois.</span>
            <br className="hidden sm:block" />
            Groupes vérifiés, services de confiance, entraide locale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/30 transition-all hover:scale-105">
              <Link to={user ? "/dashboard" : "/register"}>
                {user ? "Retourner à AGUN" : "Rejoindre AGUN gratuitement"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-14 px-10 text-lg rounded-2xl border border-border/50 text-foreground hover:bg-card/50 transition-all">
              <a href="#features">Découvrir</a>
            </Button>
          </div>

        </div>
      </section>

      {/* 
        ═══════ 😔 SECTION 2 : LE PROBLÈME ═══════ 
        Ici on s'adresse à la douleur du client. Pourquoi l'app AGUN existe !?
      */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-5xl">

          {/* T'AS VU ? On met un `<FadeIn>` autour du titre. Comme ça, quand l'utilisateur scrolle jusqu'ici, POP le texte apparait (via useInView) ! */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground leading-tight">
                Arriver dans un nouveau pays,
                <br />
                <span className="text-muted-foreground">c'est dur.</span>
              </h2>
            </div>
          </FadeIn>

          {/* Et on remet un ".map()" sur "painPoints" ! Souviens toi, en haut on a listé.
              Ici pour chaque "douleur", on affiche une "classe glass-hover" (Une tuile)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => {
              const Icon = point.icon; // L'icone spécifiée (Coeur / Bouclier...)
              return (
                <FadeIn key={idx} delay={idx * 150}> {/* Ca permet que chaque bloc s'anime l'un après l'autre ! */}
                  {/* `glass-hover` : la magie dans `index.css` de l'animation quand tu passes la souris. L'Ombre s'agrandit. */}
                  <div className="glass-hover p-8 rounded-2xl text-center space-y-4 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-destructive" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{point.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        ═══════ 🛠️ SECTION 3 : LA SOLUTION (Les faux téléphones) ═══════ 
        On montre les 3 plus gros arguments : Groupes, Entraide, Service 
      */}
      <section id="features" className="relative z-10 py-24 px-6 bg-card/20">
        <div className="mx-auto max-w-7xl space-y-32">

          {/* Argument N°1 : Les GROUPES TELEGRAM/WHATSAPP */}
          {/* Grid = On sépare l'écran en 2 blocs gauche/droite (Sur un tel, ce sera 1 bloc l'un sur l'autre) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* BLOC TEXTE à gauche */}
            <FadeIn>
              <div className="space-y-6">
                {/* Petit badge vert text-emerald */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold border border-emerald-500/20">
                  <Globe size={16} /> Groupes vérifiés
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-foreground leading-tight">
                  Rejoins des groupes
                  <br />
                  <span className="gradient-text">WhatsApp & Telegram</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fini les groupes douteux trouvés sur Facebook. Sur AGUN, chaque groupe est vérifié...
                </p>
                {/* Les 3 petites coches (check bleus) pour détailler */}
                <ul className="space-y-3">
                  {["Groupes classés par ville et thème", "Badge de vérification", "Filtres par plateforme"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* BLOC IPHONE à droite */}
            <FadeIn delay={200}>
              {/* On appelle le composant faux téléphone, et dedans ("en child") on met de quoi dessiner un écran de Groupes ! */}
              <PhoneMockup>
                <MockupGroupScreen />
              </PhoneMockup>
            </FadeIn>
          </div>

          {/* ... Et l'entraide se liste pareil juste en dessous. Mais en mode ZIG ZAG (cette fois le tel est a gauche sur PC grâce aux `order-1`) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={200} className="order-2 lg:order-1"> {/* Téléphone a gauche */}
              <PhoneMockup>
                <MockupEntraideScreen />
              </PhoneMockup>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2"> {/* Texte à droite */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                  <HandHelping size={16} /> Entraide communautaire
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-foreground leading-tight">
                  Trouve de l'aide
                  <br />
                  <span className="gradient-text">ou aide quelqu'un</span>
                </h3>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 
        ═══════ 📦 SECTION 4 : LA GRILLE DE FONCTIONNALITES ═══════ 
        Un damier avec absolument chaque petite fonctionnalité du site listée. 
      */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
                Tout ce dont tu as besoin, en un seul endroit
              </h2>
            </div>
          </FadeIn>

          {/* Encore une boucle sur `allFeatures` */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={idx} delay={idx * 80}>
                  <div className="glass-hover p-6 rounded-2xl group cursor-default h-full">
                    <div className="flex items-start gap-4">
                      {/* L'icône */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {/* Le texte */}
                      <div>
                        <h3 className="text-base font-display font-bold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🏁 FIN 🏁 
        ═══════ LE BLOC FINAL (CTA) ET LE PIED DE PAGE (Footer) ═══════ */}
      <section className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground leading-tight">Ta communauté t'attend</h2>
          <br />
          {/* L'ultime bouton pour emmener faire ce qu'on attend de lui (s'inscrire) */}
          <Button size="lg" className="h-16 px-12 text-xl bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl">
            <Link to={user ? "/dashboard" : "/register"}> Rejoindre AGUN gratuitement </Link>
          </Button>
        </div>
      </section>

      <footer className="py-12 border-t text-center text-sm text-muted-foreground">
        © 2026 AGUN. Tous droits réservés.
      </footer>
    </main>
  );
}
