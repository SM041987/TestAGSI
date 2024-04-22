import { CreateFournisseurInput } from './create-fournisseur.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class DeleteFournisseurInput extends PartialType(CreateFournisseurInput) {
  @Field(() => Int)
  id: number;
}
