import { Injectable } from '@nestjs/common';
import { CreatePieceInput } from './dto/create-piece.input';
import { Piece } from './entities/piece.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePieceInput } from './dto/update-piece.input';
import { FournisseursService } from 'src/fournisseurs/fournisseurs.service';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';


@Injectable()
export class PiecesService {
  constructor(@InjectRepository(Piece) private pieceRepository : Repository<Piece>,
private fournisseurService : FournisseursService){

  }


  async findAll() : Promise<Piece[]>{
  
       return this.pieceRepository.find() 
  }

  async create(piece : CreatePieceInput) : Promise<Piece>{
    const pce = this.pieceRepository.create(piece)
    return this.pieceRepository.save(pce)
 }

    async findOne(id_piece: string): Promise<Piece> {
    return  this.pieceRepository.findOneBy({id_piece});
  }

  update(id: string, updatePieceInput: UpdatePieceInput)  {
    return this.pieceRepository.update(id, updatePieceInput)
  }

  remove(id: string) {
    return `This action removes a #${id} piece`;
  }  

  async getFournisseur(id: string) : Promise<Fournisseur>{
    return this.fournisseurService.findOne(id);
  }
}
