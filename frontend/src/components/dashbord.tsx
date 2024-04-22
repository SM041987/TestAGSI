import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "../components/date-range-picker";
import { MainNav } from "../components/main-nav";
import { Overview } from "../components/overview";
import RecentSales from "../components/recent-sales";
import { Search } from "../components/search";

import { UserNav } from "../components/user-nav";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Stock du magasin</TabsTrigger>

              <TabsTrigger value="reports">Raports</TabsTrigger>
              <Popover>
                <PopoverTrigger>
                  Notifications{" "}
                  <span className="text-red-900">
                    <strong>(3)</strong>
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <div>
                    {" "}
                    <Link href="">
                      {" "}
                      Stock reparovisionnement Produit{" "}
                      <strong>détergent</strong> dont le ID :{" "}
                      <strong>19/DET160134658</strong>
                    </Link>
                  </div>
                  <Separator />
                  <div>
                    {" "}
                    <Link href="">
                      Stock sécurité Produit <strong>Eau de Javel</strong> dont
                      le ID : <strong>23/JAV160134118</strong>
                    </Link>
                  </div>
                  <Separator />
                  <div>
                    {" "}
                    <Link href="">
                      Date de peromtion Produit{" "}
                      <strong>Gel hydroalcoolique</strong> dont le ID :{" "}
                      <strong>18/GEL160137718</strong>
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
              {/*     <TabsTrigger value="notifications" >
                Notifications{" "}
                <span className="text-red-900">
                  <strong>(3)</strong>
                </span>
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Couts Total du stock du magasin
                    </CardTitle>
                    DA
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75,564,231.89</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Nombres total d&apos;articles dans le magasin
                    </CardTitle>
                    {/*                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg> */}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">245350</div>
                    <p className="text-xs text-muted-foreground"></p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Couts des sorties du moi actuel
                    </CardTitle>
                    {/*     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg> */}
                    DA
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4,297,019.32</div>
                    <p className="text-xs text-muted-foreground">
                      +19% du mois precedent
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Nombre articles sortie du mois
                    </CardTitle>
                    {/*                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg> */}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2301</div>
                    <p className="text-xs text-muted-foreground">
                      +301 articles du mois precedent
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Consommation Mensuelle</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Stock du magasin</CardTitle>
                    <CardDescription>
                      Stockage et restant et consommé en porcentage par rapport
                      au stock initiale
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                    <div className=" w-3 h-3 bg-gray-500"></div>
                    <div> Stock consomme </div>
                    <div className=" w-3 h-3 bg-gray-950"></div>
                    <div> Stock restant </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
