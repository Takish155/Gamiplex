import z from "zod";

export const registrationSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be more than 3 letters" })
      .max(30, { message: "Name must be less than 30 letters" })
      .refine((data) => /^[a-zA-Z\s]*$/.test(data), {
        message: "Name cannot contain numbers special characters",
      }),
    email: z.string().email({ message: "Invalid email adresss..." }),
    password: z
      .string()
      .min(6, { message: "Password must be more than 6 letters" })
      .max(15, { message: "Password must be less than 15 letters" }),
    passwordAgain: z.string().min(6),
  })
  .refine((data) => data.password === data.passwordAgain, {
    message: "Passwords do not match",
    path: ["passwordAgain"],
  });

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;
