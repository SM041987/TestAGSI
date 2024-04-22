import { CreateFournisseurInput } from './create-fournisseur.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFournisseurInput extends PartialType(CreateFournisseurInput) {
  @Field(() => Int)
  id: number;
}
