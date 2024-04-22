import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/app/forms/reforme/entree-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Annexe 34 : P.V de réforme</h3>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
