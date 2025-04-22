"use server";
import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

    console.log(email, password);

    return { success: "Email sent!" };
  } catch {}
};
