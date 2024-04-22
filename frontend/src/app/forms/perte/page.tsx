import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/app/forms/perte/entree-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">
          Annexe 35 : P.V de perte ou de détérioration
        </h3>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
