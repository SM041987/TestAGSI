import {  Field, ObjectType,  } from '@nestjs/graphql';
import { Piece } from 'src/pieces/entities/piece.entity';
import { Column,  CreateDateColumn,  DeleteDateColumn,  Entity,  OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,  } from 'typeorm';

@ObjectType()
@Entity()
export class Fournisseur {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id_fournisseur : string // Identifiant unique du fournisseur, généré automatiquement au format UUID

  @Field()
  @Column()
  denomination_fournisseur : string // Nom ou désignation du fournisseur

  @Field()
  @Column()
  num_telephone : string // Numéro de téléphone du fournisseur

  @Field()
  @Column()
  adresse_mail : string // Adresse e-mail du fournisseur

  @Field({ nullable : true})
  @Column({ nullable : true})
  adresse_postal : string // Adresse postale du fournisseur (optionnelle)

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true }) // Date et heure de création du fournisseur, créée automatiquement lors de la création
  createAt: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ nullable: true }) // Date et heure de la dernière mise à jour du fournisseur, mise à jour automatiquement lors de la modification
  updateAt: Date;

  @Field({ nullable: true }) // Peut être nul si l'entité n'est pas supprimée
  @DeleteDateColumn({ nullable: true }) // Date et heure de la suppression du fournisseur (soft delete), marqué automatiquement lors de la suppression
  deliteAt: Date; // Marqué comme nul si l'entité n'est pas supprimée

  @OneToMany(()=>Piece, piece =>piece.fournisseur)
  @Field(()=>[Piece], {nullable : true})
  pieces : Piece[]
}
