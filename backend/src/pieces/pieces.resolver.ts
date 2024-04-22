import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { PiecesService } from './pieces.service';
import { Piece } from './entities/piece.entity';
import { CreatePieceInput } from './dto/create-piece.input';
import { UpdatePieceInput } from './dto/update-piece.input';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';


@Resolver(() => Piece)
export class PiecesResolver {
  constructor(private  piecesService: PiecesService) {}

  @Query(() => [Piece], { name: 'getPieces' })
  findAll() {
    return this.piecesService.findAll();
  }

  @Mutation(() => Piece)
  createPiece(@Args('piece') piece: CreatePieceInput) {
    return this.piecesService.create(piece);
  }

   @Query(() => Piece, { name: 'FindOnePiece' })
  findOne(@Args('id') id: string) {
    return this.piecesService.findOne(id);
  }

  @Mutation(() => Piece)
  updatePiece(@Args('piece') piece: UpdatePieceInput) {
    return this.piecesService.update(piece.id_piece, piece);
  }

  @Mutation(() => Piece)
  removePiece(@Args('id') id: string) {
    return this.piecesService.remove(id);
  } 

  @ResolveField(()=>Fournisseur)
  fournisseur(@Parent() piece : Piece){
    return this.piecesService.getFournisseur(piece.id_fournisseur)
  }
}
