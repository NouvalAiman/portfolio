"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200, "Subject must be at most 200 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be at most 5000 characters"),
});

type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const validatedData = validated.data;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nouvalaiman1@gmail.com',
      replyTo: validatedData.email,
      subject: `New Contact Form: ${validatedData.subject}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
    });

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again or email directly.",
    };
  }
}