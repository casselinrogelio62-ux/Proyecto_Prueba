import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z.string().min(3, "Nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  serviceId: z.string().min(1, "Selecciona un servicio"),
  date: z.string().refine((date) => {
    const d = new Date(date);
    return d > new Date();
  }, "La fecha debe ser futura"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Hora inválida"),
  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
