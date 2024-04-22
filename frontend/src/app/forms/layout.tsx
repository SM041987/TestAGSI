import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/app/forms/components/sidebar-nav";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Magasin central",
    parent: "Magasins",
    href: "/forms",
    title2: "Consulter le stock",
    href2: "/forms/stock-consult/tasks",
  },
  {
    title: "Nouvelle entree",
    title2: "Consulter le registre",
    href: "/forms/entree",
    href2: "/forms/entree-consult/tasks",
    parent: "Entree R.G.I",
  },

  {
    parent: "Inventaire R.I",
    title: "Nouvelle entree inventaire",
    title2: "Consulter le registre",
    href: "/forms/inventaire",
    href2: "/forms/inventaire-consult/tasks",
  },
  /*   {
    parent: "Sortie du magsins",
    title: "Nouvelle sortie",
    title2: "Consulter le registre",
    href: "/forms/sortie",
    href2: "/forms/sortie-consult/tasks",
  }, */
  {
    parent: "Reformes",
    title: "Enregistrer une reforme",
    title2: "Consulter les Reformes",
    href: "/forms/reforme",
    href2: "/forms/reformes-consult/tasks",
  },
  {
    parent: "Perte ou de Détérioration",
    title: "Enregistrer une perte ou détorioration",
    title2: "Consulter les pertes ou détoriorations",
    href: "/forms/perte",
    href2: "/forms/perte-consult/tasks",
  },
  {
    title: "Aparence",
    parent: "Reglage",
    href: "/forms/appearance",

    title2: "A propos de l'application",

    href2: "../src/app/",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      {/*       <div className="md:hidden">
        {/*      <Image
          src="/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        /> *
      </div> */}
      <div className="hidden space-y-6  pb-16 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row ">
          <div className="mx-4 w-56 py-8">
            <div className=" flex flex-col top-0 items-center justify-center">
              <Image src="/logo.png" width={170} height={170} alt="Forms" />{" "}
              <br />
              <strong></strong>
              <br />
              <br />
              <br />
            </div>
            <div className=" left-3 justify-start">

              <SidebarNav items={sidebarNavItems} />
            </div>
          </div>
          <div className=" w-10/12 "><Link
          href="/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Deconnecter
        </Link>{children}</div>
        </div>
      </div>
    </>
  );
}
