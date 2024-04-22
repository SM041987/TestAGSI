import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fournisseur } from './entities/fournisseur.entity';
import { Repository } from 'typeorm';
import { CreateFournisseurInput } from './dto/create-fournisseur.input';

@Injectable()
export class FournisseursService {
    constructor(@InjectRepository(Fournisseur) private fournisseurRepository : Repository<Fournisseur>){

    }
    async findAll() : Promise<Fournisseur[]>{
         return this.fournisseurRepository.find({
          relations : ["pieces"]
         }) 
    }
    async create(fournisseur : CreateFournisseurInput) : Promise<Fournisseur>{
         const fr = this.fournisseurRepository.create(fournisseur)
         return this.fournisseurRepository.save(fr)
      }

      async findOne(id: string): Promise<Fournisseur> {
          return  this.fournisseurRepository.findOne(   {where: {
               id_fournisseur:id , 
           }, relations : ["pieces"]});
        }
}
