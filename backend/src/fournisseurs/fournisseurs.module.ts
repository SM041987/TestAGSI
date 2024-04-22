import { Module } from '@nestjs/common';
import { FournisseursService } from './fournisseurs.service';
import { FournisseursResolver } from './fournisseurs.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fournisseur } from './entities/fournisseur.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Fournisseur])],
  providers: [FournisseursService, FournisseursResolver],
  exports : [FournisseursService]
})
export class FournisseursModule {}
