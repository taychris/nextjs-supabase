import { z } from "zod";

export const categorySchema = z.object({
    category_title: z.string(),
    description: z.string().optional(),
    duration: z.string(),
    price: z.string().optional()
})