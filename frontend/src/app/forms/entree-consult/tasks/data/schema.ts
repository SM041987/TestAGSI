import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  dob: z.string(),
  enregistrement: z.string(),
  provenance: z.string(),
  designation: z.string(),
  numeroBR: z.string(),
  unit: z.string(),
  quantite: z.number(),
  prix: z.number(),
  total: z.number(),
  justification: z.string(),
  observation: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
