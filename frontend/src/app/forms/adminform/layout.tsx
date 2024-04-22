import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};



export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <h3 className="text-lg font-medium">Administrateur</h3>
         <Link
          href="adminform/ajouter"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            " right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Ajouter un utilisatteur
        </Link> 
        <Link
          href="/authentication/admin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            " right-4 top-4 md:right-8 md:top-8"
          )}
        >
         Modifier un utilisatteur
        </Link> 
        <Link
          href="/authentication/admin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            " right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Supprimer un utilisatteur
        </Link> 

      </div>
      <Separator />
          <div className=" w-10/12 ">{children}</div>
     
    </>
  );
}
