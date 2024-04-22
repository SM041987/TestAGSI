import { Separator } from "@/components/ui/separator";
import { AppearanceForm } from "@/app/forms/appearance/appearance-form";

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Apparence</h3>
        <p className="text-sm text-muted-foreground">
          Personnalisez l&rsquo;apparence de l&rsquo;application. Passez
          automatiquement entre les thèmes clair et sombre.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
}
