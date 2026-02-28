import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";

// --- IMPORT DES LIBRAIRIES DE FORMULAIRE ---
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// --- IMPORT DES COMPOSANTS ---
import { UiverseInput } from "../../components/ui/uiverse-input";
import { PasswordInput } from "../../components/ui/password-input";
import { CountrySelect } from "../../components/ui/country-select";
import { CitySelect } from "../../components/ui/city-select";
import { cn } from "../../lib/utils";
import { CITIES, NATIONALITIES, HOST_COUNTRIES, STATUS_OPTIONS, GENDER_OPTIONS } from "../../data/constants";

// ============================================================================== 
// LE SCHEMA ZOD : Le grand détecteur de mensonges !
// ============================================================================== 
const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  status: z.enum(["Etudiant", "Employe", "Entrepreneur"], { required_error: "Statut requis" }),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "6 caractères minimum"),
  nationality: z.string().min(2, "Nationalité requise"),
  originCity: z.string().min(2, "Ville d'origine requise"),
  country: z.string().min(2, "Pays de résidence requis"),
  city: z.string().min(2, "Ville de résidence requise"),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Genre requis" }),
  birthDate: z.string().refine((val) => {
    if (!val) return false;
    const birth = new Date(val);
    const today = new Date();
    return birth <= today && birth.getFullYear() >= 1900;
  }, "La date de naissance est invalide"),
  confirmPassword: z.string().min(6, "Confirmation requise"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register: registerAction } = useAuth();
  const [formError, setFormError] = useState("");

  // ==============================================================================
  // ÉTAT POUR LE MULTI-ÉTAPES (1, 2 ou 3)
  // ==============================================================================
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger, // Fonction magique pour valider QUE certains champs avant de passer à l'étape suivante !
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      status: "Etudiant",
      nationality: "",
      originCity: "",
      country: "",
      city: "",
    },
  });

  const selectedStatus = watch("status");
  const selectedCountry = watch("country");
  const selectedNationality = watch("nationality");
  const selectedCity = watch("city");
  const selectedOriginCity = watch("originCity");

  const availableCities = useMemo(() => {
    if (!selectedCountry) return [];
    return CITIES
      .filter((city) => city.countryId === selectedCountry)
      .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
  }, [selectedCountry]);

  const availableOriginCities = useMemo(() => {
    if (!selectedNationality) return [];
    return CITIES
      .filter((city) => city.countryId === selectedNationality)
      .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
  }, [selectedNationality]);

  // FONCTION POUR PASSER À L'ÉTAPE SUIVANTE
  const nextStep = async () => {
    let fieldsToValidate = [];

    // Selon l'étape où l'on est, on dit à Zod de ne vérifier QUE ces cases-là
    if (step === 1) {
      fieldsToValidate = ["firstName", "lastName", "birthDate", "gender", "status"];
    } else if (step === 2) {
      fieldsToValidate = ["nationality", "originCity", "country", "city"];
    }

    // "trigger" lance la vérification. Ça renvoie `true` si tout est rempli selon le schéma Zod.
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  // FONCTION POUR REVENIR EN ARRIÈRE
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (values) => {
    // Si on n'est pas à la dernière étape (qui elle, trigger le Submit), on arrête
    if (step !== 3) return;

    setFormError("");
    try {
      await registerAction({ ...values, birthDate: values.birthDate || null });
      navigate("/dashboard");
    } catch (error) {
      setFormError("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-12 relative overflow-hidden">

      {/* 🌌 Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-lg animate-slide-up z-10">

        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-all group font-medium">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Retour sur l'accueil</span>
        </Link>

        {/* 📦 LE BLOC DU FORMULAIRE */}
        <div className="bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl p-8 md:p-10">

          <div className="mb-8 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-3 tracking-tight">Créer un compte</h1>
            <p className="text-muted-foreground text-lg mb-6">Rejoins la communauté AGUN</p>

            {/* INDICATEUR D'ÉTAPE (Progress Bar) */}
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <span className={cn("flex items-center justify-center w-8 h-8 rounded-full transition-colors", step >= 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground")}>1</span>
              <div className={cn("w-12 h-1 rounded-full transition-colors", step >= 2 ? "bg-primary" : "bg-secondary")} />
              <span className={cn("flex items-center justify-center w-8 h-8 rounded-full transition-colors", step >= 2 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground")}>2</span>
              <div className={cn("w-12 h-1 rounded-full transition-colors", step >= 3 ? "bg-primary" : "bg-secondary")} />
              <span className={cn("flex items-center justify-center w-8 h-8 rounded-full transition-colors", step >= 3 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground")}>3</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* =========================================
                 ÉTAPE 1 : QUI ÊTES-VOUS ?
               ========================================= */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-primary">1. Qui êtes-vous ?</h2>

                {/* PRÉNOM / NOM */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/90 ml-1">Prénom <span className="text-red-500">*</span></label>
                    <UiverseInput placeholder="Awa" {...register("firstName")} />
                    {errors.firstName && <p className="text-xs text-red-500 ml-1">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/90 ml-1">Nom <span className="text-red-500">*</span></label>
                    <UiverseInput placeholder="Konate" {...register("lastName")} />
                    {errors.lastName && <p className="text-xs text-red-500 ml-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                {/* DATE DE NAISSANCE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Date de naissance <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    max={new Date().toISOString().split('T')[0]} // Empêche de choisir le futur
                    min="1900-01-01"
                    {...register("birthDate")}
                    className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary outline-none transition-all bg-background text-foreground text-sm font-medium"
                  />
                  {errors.birthDate && <p className="text-xs text-red-500 ml-1">{errors.birthDate.message}</p>}
                </div>

                {/* LE GENRE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Genre <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-3 gap-2">
                    {GENDER_OPTIONS.map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-center justify-center h-12 rounded-xl border-2 font-medium text-sm transition-all duration-200",
                          watch("gender") === option.value
                            ? "border-primary bg-primary/10 text-primary shadow-sm"
                            : "border-border bg-secondary/50 text-muted-foreground hover:border-border/80 hover:bg-secondary"
                        )}
                      >
                        <input type="radio" value={option.value} {...register("gender")} className="sr-only" />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.gender && <p className="text-xs text-red-500 ml-1">{errors.gender.message}</p>}
                </div>

                {/* LE STATUT */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Statut <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-3 gap-2">
                    {STATUS_OPTIONS.map((status) => (
                      <label
                        key={status}
                        className={cn(
                          "flex cursor-pointer items-center justify-center h-12 rounded-xl border-2 font-medium text-sm transition-all duration-200",
                          selectedStatus === status
                            ? "border-primary bg-primary/10 text-primary shadow-sm"
                            : "border-border bg-secondary/50 text-muted-foreground hover:border-border/80 hover:bg-secondary"
                        )}
                      >
                        <input type="radio" value={status} {...register("status")} className="sr-only" />
                        <span>{status}</span>
                      </label>
                    ))}
                  </div>
                  {errors.status && <p className="text-xs text-red-500 ml-1">{errors.status.message}</p>}
                </div>

                <div className="pt-4">
                  <Button type="button" onClick={nextStep} className="w-full text-lg shadow-md" size="lg">
                    Suivant →
                  </Button>
                </div>
              </div>
            )}


            {/* =========================================
                 ÉTAPE 2 : D'OÙ VENEZ-VOUS ?
               ========================================= */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-primary">2. Vos origines</h2>

                {/* LA NATIONALITÉ */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Nationalité <span className="text-red-500">*</span></label>
                  <CountrySelect
                    value={selectedNationality}
                    onChange={(value) => {
                      setValue("nationality", value, { shouldValidate: true });
                      if (value !== selectedNationality) {
                        const nextOriginCities = CITIES
                          .filter((city) => city.countryId === value)
                          .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
                        setValue("originCity", nextOriginCities[0]?.id ?? "", { shouldValidate: true });
                      }
                    }}
                    countries={NATIONALITIES}
                    placeholder="Choisis ta nationalité"
                  />
                  {errors.nationality && <p className="text-xs text-red-500 ml-1">{errors.nationality.message}</p>}
                </div>

                {/* VILLE D'ORIGINE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Ville d'origine <span className="text-red-500">*</span></label>
                  <CitySelect
                    value={selectedOriginCity}
                    onChange={(value) => setValue("originCity", value, { shouldValidate: true })}
                    cities={availableOriginCities}
                    placeholder="Où es-tu né ?"
                  />
                  {errors.originCity && <p className="text-xs text-red-500 ml-1">{errors.originCity.message}</p>}
                </div>

                <h2 className="text-xl font-semibold mb-4 border-b pb-2 pt-6 text-primary">Lieu de résidence actuel</h2>

                {/* PAYS DE RÉSIDENCE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Pays de résidence <span className="text-red-500">*</span></label>
                  <CountrySelect
                    value={selectedCountry}
                    onChange={(value) => {
                      setValue("country", value, { shouldValidate: true });
                      if (value !== selectedCountry) {
                        const nextCities = CITIES
                          .filter((city) => city.countryId === value)
                          .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
                        setValue("city", nextCities[0]?.id ?? "", { shouldValidate: true });
                      }
                    }}
                    countries={HOST_COUNTRIES}
                    placeholder="Où habites-tu ?"
                  />
                  {errors.country && <p className="text-xs text-red-500 ml-1">{errors.country.message}</p>}
                </div>

                {/* VILLE DE RÉSIDENCE (Dépend de "Pays") */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Ville de résidence <span className="text-red-500">*</span></label>
                  <CitySelect
                    value={selectedCity}
                    onChange={(value) => setValue("city", value, { shouldValidate: true })}
                    cities={availableCities}
                    placeholder="Choisis ta ville de résidence"
                  />
                  {errors.city && <p className="text-xs text-red-500 ml-1">{errors.city.message}</p>}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={prevStep} className="w-1/3" size="lg">
                    ← Retour
                  </Button>
                  <Button type="button" onClick={nextStep} className="w-2/3 text-lg shadow-md" size="lg">
                    Suivant →
                  </Button>
                </div>
              </div>
            )}


            {/* =========================================
                 ÉTAPE 3 : IDENTIFIANTS
               ========================================= */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-primary">3. Vos identifiants</h2>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Email <span className="text-red-500">*</span></label>
                  <UiverseInput placeholder="awa@agun.app" type="email" {...register("email")} />
                  {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
                </div>

                {/* MOT DE PASSE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Mot de passe <span className="text-red-500">*</span></label>
                  <PasswordInput placeholder="********" {...register("password")} />
                  {errors.password && <p className="text-xs text-red-500 ml-1">{errors.password.message}</p>}
                </div>

                {/* CONFIRMATION */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90 ml-1">Confirmer mot de passe <span className="text-red-500">*</span></label>
                  <PasswordInput placeholder="********" {...register("confirmPassword")} />
                  {errors.confirmPassword && <p className="text-xs text-red-500 ml-1">{errors.confirmPassword.message}</p>}
                </div>

                {formError && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-medium animate-fade-in">
                    {formError}
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={prevStep} className="w-1/3" size="lg">
                    ← Retour
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-2/3 text-lg font-bold shadow-xl shadow-primary/20"
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "Création..." : "Terminer 🎉"}
                  </Button>
                </div>
              </div>
            )}

          </form>

          {/* ON CACHE CE TEXTE SI ON EST A L'ÉTAPE 1 (Plus de place) */}
          {step === 1 && (
            <div className="mt-8 text-center animate-fade-in">
              <p className="text-sm text-muted-foreground">
                Déjà membre ?{" "}
                <Link to="/login" className="font-bold text-primary hover:text-primary-dark transition-colors">
                  Se connecter
                </Link>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
