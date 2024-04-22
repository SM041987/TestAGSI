import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/authentication/components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div /* className="md:hidden" */></div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
          href="/authentication/admin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Admin
        </Link> 
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Application de Gestion de Stock et d&apos;Immobilisation (AGSI)
          </div>
          <div
            className="bg-cover bg-center w-full h-auto z-30"
            style={{ backgroundImage: "url('/chemin/vers/votre/image.jpg')" }}
          >
            {/* Contenu de votre composant */}

            <Image
              src="/auth.png"
              width={680}
              height={443}
              alt="Authentication"
              className="block dark:hidden"
            />
          </div>

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                {/*                 Cette application vous aidera a gerer votre stock et tracer vos
                immobilisation */}
              </p>
              <footer className="text-sm">Copyright SMART-BLADI 2024</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Authentification
              </h1>
              <p className="text-sm text-muted-foreground">
                Selectionner votre nom et votre role et mot de passe
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
