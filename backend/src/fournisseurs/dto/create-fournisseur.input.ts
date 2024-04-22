import { InputType,  Field } from '@nestjs/graphql';


@InputType()
export class CreateFournisseurInput {

// Identifiant unique du fournisseur, généré automatiquement au format UUID
// On le mentionne pas ici

@Field()
denomination_fournisseur : string // Nom ou désignation du fournisseur

@Field()
num_telephone : string // Numéro de téléphone du fournisseur

@Field()
adresse_mail : string // Adresse e-mail du fournisseur

@Field({ nullable : true})
adresse_postal : string // Adresse postale du fournisseur (optionnelle)

@Field({ nullable: true })
createAt: Date;  // Date et heure de création du fournisseur, créée automatiquement lors de la création

@Field({ nullable: true }) // Date et heure de la dernière mise à jour du fournisseur, mise à jour automatiquement lors de la modification
updateAt: Date;

@Field({ nullable: true }) // Peut être nul si l'entité n'est pas supprimée
// Date et heure de la suppression du fournisseur (soft delete), marqué automatiquement lors de la suppression
deliteAt: Date; // Marqué comme nul si l'entité n'est pas supprimée

}
