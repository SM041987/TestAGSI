import { Module } from '@nestjs/common';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { PiecesModule } from './pieces/pieces.module';


@Module({
  imports: [FournisseursModule,PiecesModule, GraphQLModule.forRoot(
    {
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql_schema.gql'),
    }
  ),
 TypeOrmModule.forRoot(
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "1234",
    "database": "TestAGSI",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true,
/*      "logging": true  */
  }
),
  
],
  controllers: [],
  providers: [],
})
export class AppModule {}
