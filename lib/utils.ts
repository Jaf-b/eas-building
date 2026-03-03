import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError(err: unknown) {
  console.error(err);
  const errorMessage = err instanceof Error ? translateFirebaseError(err.message) : "Une erreur est survenue.";
  
  if (typeof window !== "undefined") {
    toast.error(errorMessage);
  }
}

export function translateFirebaseError(message: string): string {
  if (message.includes("auth/invalid-credential") || message.includes("auth/user-not-found") || message.includes("auth/wrong-password")) {
    return "Email ou mot de passe incorrect.";
  }
  if (message.includes("auth/invalid-email")) {
    return "L'adresse email n'est pas valide.";
  }
  if (message.includes("auth/user-disabled")) {
    return "Ce compte a été désactivé.";
  }
  if (message.includes("auth/too-many-requests")) {
    return "Trop de tentatives de connexion. Veuillez réessayer plus tard.";
  }
  if (message.includes("auth/network-request-failed")) {
    return "Erreur de réseau. Veuillez vérifier votre connexion.";
  }
  if (message.includes("auth/email-already-in-use")) {
    return "Cette adresse email est déjà utilisée.";
  }
  if (message.includes("auth/weak-password")) {
    return "Le mot de passe est trop faible.";
  }

  return message || "Une erreur inconnue est survenue.";
}
