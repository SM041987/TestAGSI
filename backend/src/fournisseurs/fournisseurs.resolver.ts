
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Fournisseur } from './entities/fournisseur.entity';
import { FournisseursService } from './fournisseurs.service';
import { CreateFournisseurInput } from './dto/create-fournisseur.input';

@Resolver(()=>Fournisseur)
export class FournisseursResolver {
    constructor( private fournisseurService : FournisseursService){

    }
    @Query(()=>[Fournisseur], {name : "getFournisseurs"})
    findAll(){
       return  this.fournisseurService.findAll()
    }
    @Mutation( ()=>Fournisseur, {name : "createFournisseur"})
    create(@Args("fournisseur") fournisseur : CreateFournisseurInput ){
        return this.fournisseurService.create(fournisseur)
    }

    @Query(() => Fournisseur, { name: 'getOneFournisseur' })
    findOne(@Args('id') id: string) {
      return this.fournisseurService.findOne(id);
    }
}
