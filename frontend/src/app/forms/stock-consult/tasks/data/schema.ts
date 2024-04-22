import { string, z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  dob: z.string(),
  categorie: z.string(),
  unite: string(),
  inventaire: z.string(),
  designation: z.string(),
  qinitiale: z.number(),
  qactuelle: z.number(),
  prixu: z.number(),
  Prixt: z.number(),
  limitedate: z.string(),
  reapprovisionnement: z.string(),
  securite: z.string(),
  specification1: z.string(),
  specification2: z.string(),
  Remarque: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
