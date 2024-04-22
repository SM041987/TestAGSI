import { Separator } from "@/components/ui/separator";
import { AdminForm } from "@/app/forms/adminform/admin-form";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SettingsAdminPage() {
  return (
    <div className="space-y-6">

      <AdminForm />
    </div>
  );
}
