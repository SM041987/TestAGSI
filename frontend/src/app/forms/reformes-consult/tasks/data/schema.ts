import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  dob: z.string(),
  numeroinventaire: z.string(),
  designation: z.string(),
  justification: z.string(),
  prix: z.number(),
  montant: z.number(),
  observation: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
