import { ObjectType, Field } from '@nestjs/graphql';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Piece {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
	id_piece : string

  @Field()
  @Column()
	type_piece : string

  @Field({ nullable: true })
  @Column({ nullable: true })
	date_piece : Date

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true }) 
	createAt : Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ nullable: true })
	updateAt : Date;

  @Field({ nullable: true }) // Peut être nul si l'entité n'est pas supprimée
  @DeleteDateColumn({ nullable: true })
	deleteAt : Date;

  @ManyToOne(()=>Fournisseur, fournisseur=>fournisseur.pieces)
  @Field(()=>Fournisseur, {nullable : true})
  fournisseur : Fournisseur

  @Field({nullable : true})
  @Column({nullable : true})
  id_fournisseur : string
}
