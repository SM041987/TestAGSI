import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/app/forms/entree/entree-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          Annexe 32 : Registre journal d&rsquo;entrées et sorties de matériel
        </h3>
        <p className="text-sm text-muted-foreground">
          Decret 91-455 du 23 novembre 1991
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
