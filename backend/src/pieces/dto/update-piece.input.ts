
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePieceInput  {
  @Field()
  id_piece: string

  @Field()
	type_piece : string

  @Field({ nullable: true })
	date_piece : Date

  @Field({ nullable: true })
	createAt : Date;

  @Field({ nullable: true })
	updateAt : Date;

  @Field({ nullable: true }) // Peut être nul si l'entité n'est pas supprimée
	deleteAt : Date;

  @Field()
  id_fournisseur : string
}
