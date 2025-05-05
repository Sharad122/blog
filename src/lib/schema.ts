import { z } from "zod";

const nameRegex = /^[A-Za-z]+$/;

export const schema = {
  contact: z.object({
    firstName: z
      .string()
      .trim()
      .min(3, "First name must be at least 3 characters")
      .max(16, "First name must be at most 16 characters")
      .regex(nameRegex, "First name can only contain letters"),
    lastName: z
      .string()
      .trim()
      .min(3, "Last name must be at least 3 characters")
      .max(16, "Last name must be at most 16 characters")
      .regex(nameRegex, "Last name can only contain letters"),
    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .max(100, "Email must be at most 100 characters"),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(300, "Message must be at most 300 characters"),
  }),
};
