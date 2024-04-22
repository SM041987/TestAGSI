import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  dob: z.string(),
  numeroRGE: z.string(),
  enregistrement: z.string(),
  provenance: z.string(),
  designation: z.string(),
  valeur: z.string(),
  affectation: z.string(),
  nature: z.string(),
  justificatif: z.string(),
  observation: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
