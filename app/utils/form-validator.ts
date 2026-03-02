import z from "zod";

// Patrones peligrosos comunes (XSS, SQL Injection)
const dangerousPatterns = [
  /<script\b[^>]*>/i,
  /<\/script>/i,
  /javascript:/i,
  /on\w+\s*=/i, // onclick=, onerror=, etc.
  /('|")\s*(OR|AND)\s+\d+\s*=\s*\d+/i, // ' OR 1=1
  /--/,
  /;.*DROP|DELETE|UPDATE|INSERT/i,
];

function containsDangerousContent(value: string): boolean {
  return dangerousPatterns.some((pattern) => pattern.test(value));
}

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener mínimo 3 caracteres." })
    .max(25)
    .refine((val) => !containsDangerousContent(val), {
      message: "El mensaje contiene contenido no permitido.",
    }),
  message: z
    .string()
    .max(2000)
    .refine((val) => !containsDangerousContent(val), {
      message: "El mensaje contiene contenido no permitido.",
    }),
  email: z
    .string()
    .email({ message: "Debe indicar un email válido." })
    .refine((val) => !containsDangerousContent(val), {
      message: "El mensaje contiene contenido no permitido.",
    }),
});

export type FormData = z.infer<typeof formSchema>;

export function validateForm(data: FormData) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    const errors: Partial<Record<keyof FormData, string>> = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof FormData;
      errors[field] = err.message;
    });
    return { success: false, errors };
  }

  return { success: true, data: result.data, errors: null };
}
