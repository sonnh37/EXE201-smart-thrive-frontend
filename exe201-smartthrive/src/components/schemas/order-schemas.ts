import { z } from "zod";

export const formOrderFilterAdvancedSchema = z.object({
  id: z.string().nullable().optional(),
  date: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .refine((date) => !!date.to, { message: "End Date is required." })
    .optional(),
  description: z.string().nullable().optional(),
  isDeleted: z.boolean().nullable().optional(),
});