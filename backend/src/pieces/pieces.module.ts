import { Module } from '@nestjs/common';
import { PiecesService } from './pieces.service';
import { PiecesResolver } from './pieces.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Piece } from './entities/piece.entity';
import { FournisseursModule } from 'src/fournisseurs/fournisseurs.module';

@Module({
  imports : [TypeOrmModule.forFeature([Piece]), FournisseursModule],
  providers: [PiecesResolver, PiecesService],
})
export class PiecesModule {}
