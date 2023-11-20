import { z } from "zod";
import { categorySchema } from "../lib/validations/categories";

export type Category = z.infer<typeof categorySchema>