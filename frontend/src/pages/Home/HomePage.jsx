import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";
import {
  ChevronRight,
  Globe,
  Users,
  Shield,
  MessageCircle,
  Map,
  Lock,
  Sparkles,
  Briefcase,
  Calendar,
  Heart,
  MapPin,
  Search,
  HandHelping,
  UserCheck,
  Star,
  CheckCircle2,
  X,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

/* ─────────────── Animation wrapper (apparition au scroll) ─────────────── */
function FadeIn({
  children,
  className,
  delay = 0,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─────────────── Mockup iPhone ─────────────── */
function PhoneMockup({ children, className }) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Cadre du téléphone */}
      <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[6px] border-foreground/20 bg-background shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/20 rounded-b-2xl z-20" />
        {/* Barre de statut */}
        <div className="absolute top-0 inset-x-0 h-12 bg-background/80 backdrop-blur-sm z-10 flex items-end justify-between px-6 pb-1">
          <span className="text-[9px] font-bold text-muted-foreground">9:41</span>
          <div className="flex gap-1">
            <div className="w-3.5 h-2 rounded-sm bg-muted-foreground/50" />
            <div className="w-1 h-2 rounded-sm bg-muted-foreground/50" />
          </div>
        </div>
        {/* Contenu de l'écran */}
        <div className="absolute inset-0 top-12 overflow-hidden">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-foreground/30 z-20" />
      </div>
      {/* Reflet */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}

/* ─────────────── Mini composants pour les écrans mockup ─────────────── */
function MockupGroupScreen() {
  return (
    <div className="p-3 space-y-3 bg-background h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
          <Globe size={14} className="text-primary" />
        </div>
        <span className="text-xs font-bold text-foreground">Groupes du Réseau</span>
      </div>
      {[
        { name: "Diaspora Paris", platform: "WhatsApp", members: "2.4K", verified: true, color: "bg-emerald-500/15 text-emerald-500" },
        { name: "Étudiants Lyon", platform: "Telegram", members: "890", verified: false, color: "bg-sky-500/15 text-sky-500" },
        { name: "Entrepreneurs BE", platform: "WhatsApp", members: "1.2K", verified: true, color: "bg-emerald-500/15 text-emerald-500" },
        { name: "Tech Africa Berlin", platform: "Discord", members: "650", verified: false, color: "bg-indigo-500/15 text-indigo-500" },
      ].map((g, i) => (
        <div key={i} className="p-2.5 rounded-xl border border-border/30 bg-card/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-foreground">{g.name}</span>
            {g.verified && <CheckCircle2 size={10} className="text-blue-400" />}
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

function MockupEntraideScreen() {
  return (
    <div className="p-3 space-y-3 bg-background h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
          <HandHelping size={14} className="text-primary" />
        </div>
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
        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
          <Briefcase size={14} className="text-primary" />
        </div>
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
            <span className="flex items-center gap-0.5 text-[8px] text-amber-400 font-bold">
              <Star size={8} className="fill-current" /> {s.rating}
            </span>
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

/* ─────────────── Page principale ─────────────── */
export default function HomePage() {
  const { user } = useAuth();

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

  const countries = [
    { flag: "\u{1F1EB}\u{1F1F7}", name: "France", cities: "Paris, Lyon, Marseille..." },
    { flag: "\u{1F1E7}\u{1F1EA}", name: "Belgique", cities: "Bruxelles, Anvers, Gand..." },
    { flag: "\u{1F1E9}\u{1F1EA}", name: "Allemagne", cities: "Berlin, Munich, Cologne..." },
    { flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", cities: "Montréal, Toronto, Vancouver..." },
    { flag: "\u{1F1EA}\u{1F1F8}", name: "Espagne", cities: "Madrid, Barcelone, Valence..." },
    { flag: "\u{1F1FA}\u{1F1F8}", name: "États-Unis", cities: "New York, Washington..." },
    { flag: "\u{1F1EC}\u{1F1E7}", name: "Royaume-Uni", cities: "Londres, Manchester..." },
    { flag: "\u{1F1E8}\u{1F1ED}", name: "Suisse", cities: "Genève, Zurich..." },
    { flag: "\u{1F1EE}\u{1F1F9}", name: "Italie", cities: "Rome, Milan..." },
  ];

  const painPoints = [
    {
      icon: Heart,
      title: "L'isolement",
      desc: "Tu arrives dans un pays où tu ne connais personne. Pas de réseau, pas de repères.",
    },
    {
      icon: Shield,
      title: "Les arnaques",
      desc: "Faux logements, faux services, groupes WhatsApp douteux. Difficile de faire confiance.",
    },
    {
      icon: Search,
      title: "La perte de temps",
      desc: "Des heures sur Facebook à chercher une info fiable. Tout est éparpillé, rien n'est vérifié.",
    },
  ];

  const comparison = [
    { feature: "Groupes vérifiés", agun: true, facebook: false, whatsapp: false },
    { feature: "Services notés", agun: true, facebook: false, whatsapp: false },
    { feature: "Entraide organisée", agun: true, facebook: false, whatsapp: false },
    { feature: "Modération active", agun: true, facebook: false, whatsapp: false },
    { feature: "Recherche par ville", agun: true, facebook: false, whatsapp: false },
    { feature: "Événements locaux", agun: true, facebook: true, whatsapp: false },
    { feature: "Messages privés", agun: true, facebook: true, whatsapp: true },
  ];

  const testimonials = [
    {
      name: "Aminata D.",
      city: "Paris",
      origin: "\u{1F1F8}\u{1F1F3}",
      text: "Grâce à AGUN j'ai trouvé un groupe WhatsApp pour les Sénégalais à Paris. En une semaine j'avais un logement et un coiffeur de confiance.",
      initials: "AD",
    },
    {
      name: "Kwame O.",
      city: "Bruxelles",
      origin: "\u{1F1EC}\u{1F1ED}",
      text: "L'entraide sur AGUN m'a sauvé. Quelqu'un m'a aidé gratuitement avec mes papiers de régularisation. Impossible sur Facebook.",
      initials: "KO",
    },
    {
      name: "Fatoumata B.",
      city: "Lyon",
      origin: "\u{1F1F2}\u{1F1F1}",
      text: "Je suis étudiante et AGUN m'a permis de trouver des cours de soutien et un job étudiant dans ma ville. Tout est bien organisé.",
      initials: "FB",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      {/* ═══════ Background animé ═══════ */}
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

      {/* ═══════ Navigation ═══════ */}
      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight gradient-text font-display">AGUN</span>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-lg shadow-primary/20">
                <Link to="/dashboard">Mon espace <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            ) : (
              <>
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

      {/* ═══════ SECTION 1 : Hero ═══════ */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-bold text-primary border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            La plateforme de la diaspora africaine
          </div>

          <h1 className="animate-slide-up">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight text-foreground">
              Ta communauté,
            </span>
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

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-bold animate-fade-in" style={{ animationDelay: "400ms" }}>
            <span className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/30">
              <Globe className="w-4 h-4 text-primary" /> 9 pays
            </span>
            <span className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/30">
              <Users className="w-4 h-4 text-primary" /> 40+ nationalités
            </span>
            <span className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border/30">
              <Sparkles className="w-4 h-4 text-primary" /> 100% gratuit
            </span>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2 : Le problème ═══════ */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground leading-tight">
                Arriver dans un nouveau pays,
                <br />
                <span className="text-muted-foreground">c'est dur.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <FadeIn key={idx} delay={idx * 150}>
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

          <FadeIn delay={500}>
            <div className="text-center mt-16">
              <p className="text-2xl sm:text-3xl font-display font-black">
                <span className="gradient-text">AGUN</span>
                <span className="text-foreground"> change ça.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ SECTION 3 : Feature + Mockup iPhone ═══════ */}
      <section id="features" className="relative z-10 py-24 px-6 bg-card/20">
        <div className="mx-auto max-w-7xl space-y-32">
          {/* Feature 1 : Groupes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold border border-emerald-500/20">
                  <Globe size={16} /> Groupes vérifiés
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-foreground leading-tight">
                  Rejoins des groupes
                  <br />
                  <span className="gradient-text">WhatsApp & Telegram</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fini les groupes douteux trouvés sur Facebook. Sur AGUN, chaque groupe est vérifié,
                  classé par thème et par ville. Tu sais exactement où tu mets les pieds.
                </p>
                <ul className="space-y-3">
                  {["Groupes classés par ville et thème", "Badge de vérification", "Filtres par plateforme (WhatsApp, Telegram, Discord)"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <PhoneMockup>
                <MockupGroupScreen />
              </PhoneMockup>
            </FadeIn>
          </div>

          {/* Feature 2 : Entraide (inversé) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={200} className="order-2 lg:order-1">
              <PhoneMockup>
                <MockupEntraideScreen />
              </PhoneMockup>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                  <HandHelping size={16} /> Entraide communautaire
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-foreground leading-tight">
                  Trouve de l'aide
                  <br />
                  <span className="gradient-text">ou aide quelqu'un</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Besoin d'aide pour un déménagement ? Des papiers à traduire ? Un conseil juridique ?
                  La communauté est là. Et si tu peux aider, propose tes compétences.
                </p>
                <ul className="space-y-3">
                  {["8 catégories d'entraide", "Matching intelligent selon tes compétences", "Système de demande / offre d'aide"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Feature 3 : Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-bold border border-amber-500/20">
                  <Briefcase size={16} /> Services de proximité
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-foreground leading-tight">
                  Des professionnels
                  <br />
                  <span className="gradient-text">de confiance près de toi</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Coiffeurs, restaurants, transports, formations... Trouve des professionnels
                  recommandés par la communauté, avec des avis et des notes.
                </p>
                <ul className="space-y-3">
                  {["10+ catégories de services", "Notes et avis vérifiés", "Carte interactive pour trouver autour de toi"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <PhoneMockup>
                <MockupServicesScreen />
              </PhoneMockup>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 : Toutes les fonctionnalités ═══════ */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
                Tout ce dont tu as besoin,
                <br />
                <span className="gradient-text">en un seul endroit</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                9 fonctionnalités pensées pour simplifier ta vie d'expatrié
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={idx} delay={idx * 80}>
                  <div className="glass-hover p-6 rounded-2xl group cursor-default h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
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

      {/* ═══════ SECTION 5 : Couverture géographique ═══════ */}
      <section className="relative z-10 py-24 px-6 bg-card/20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
                Partout où tu es,
                <br />
                <span className="gradient-text">on est là</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                60+ villes couvertes dans 9 pays. 40+ nationalités africaines représentées.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="glass-hover p-5 rounded-2xl flex items-center gap-4">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <p className="font-bold text-foreground text-sm">{country.name}</p>
                    <p className="text-xs text-muted-foreground">{country.cities}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6 : Comparaison ═══════ */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
                Pourquoi pas juste
                <br />
                <span className="text-muted-foreground">Facebook ou WhatsApp ?</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="glass rounded-2xl overflow-hidden border border-border/30">
              {/* En-tête du tableau */}
              <div className="grid grid-cols-4 gap-0 border-b border-border/30 bg-card/50">
                <div className="p-4 text-sm font-bold text-muted-foreground">Fonctionnalité</div>
                <div className="p-4 text-center">
                  <span className="text-sm font-black gradient-text">AGUN</span>
                </div>
                <div className="p-4 text-center text-sm font-bold text-muted-foreground">Facebook</div>
                <div className="p-4 text-center text-sm font-bold text-muted-foreground">WhatsApp</div>
              </div>
              {/* Lignes */}
              {comparison.map((row, idx) => (
                <div key={idx} className={cn("grid grid-cols-4 gap-0 border-b border-border/20 last:border-b-0", idx % 2 === 0 ? "bg-transparent" : "bg-card/20")}>
                  <div className="p-4 text-sm font-medium text-foreground">{row.feature}</div>
                  <div className="p-4 flex justify-center">
                    {row.agun ? (
                      <CheckCircle2 size={18} className="text-primary" />
                    ) : (
                      <X size={18} className="text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center">
                    {row.facebook ? (
                      <CheckCircle2 size={18} className="text-muted-foreground/60" />
                    ) : (
                      <X size={18} className="text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center">
                    {row.whatsapp ? (
                      <CheckCircle2 size={18} className="text-muted-foreground/60" />
                    ) : (
                      <X size={18} className="text-muted-foreground/40" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ SECTION 7 : Témoignages ═══════ */}
      <section className="relative z-10 py-24 px-6 bg-card/20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
                Ce qu'ils disent
                <br />
                <span className="gradient-text">de AGUN</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="glass-hover p-6 rounded-2xl space-y-4 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {/* Texte */}
                  <p className="text-sm text-foreground leading-relaxed flex-1">"{t.text}"</p>
                  {/* Auteur */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name} {t.origin}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 : CTA final ═══════ */}
      <section className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="glass relative overflow-hidden p-12 md:p-20 text-center rounded-3xl border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent pointer-events-none" />
              <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ background: "hsl(var(--primary) / 0.4)" }} />

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-foreground leading-tight">
                  Ta communauté
                  <br />
                  <span className="gradient-text">t'attend</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Rejoins des milliers de membres de la diaspora africaine.
                  C'est gratuit, c'est vérifié, c'est fait pour toi.
                </p>
                <Button asChild size="lg" className="h-16 px-12 text-xl bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/30 transition-all hover:scale-105">
                  <Link to={user ? "/dashboard" : "/register"}>
                    {user ? "Retourner à AGUN" : "Rejoindre AGUN gratuitement"}
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer className="relative z-10 border-t border-border/30 bg-card/30 backdrop-blur-sm py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-xl font-display font-black gradient-text">AGUN</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/login" className="hover:text-foreground transition-colors">Se connecter</Link>
              <Link to="/register" className="hover:text-foreground transition-colors">S'inscrire</Link>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="text-sm text-muted-foreground">&copy; 2026 AGUN. Tous droits réservés.</p>
              <p className="text-xs text-muted-foreground/60">Connecter la diaspora africaine en Europe</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
