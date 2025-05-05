"use server";
import { z } from "zod";
import { schema } from "./schema";
import prisma from "@/lib/prisma";
import { headers } from 'next/headers';

type ContactFormData = z.infer<typeof schema.contact>

export async function sendContactMessage(formData: ContactFormData) {
  try{
    const ip = (await headers()).get('x-forwarded-for') || 'unknown';
    const validatedFields = schema.contact.safeParse(formData);
    if (!validatedFields.success) return { code: 400, message:"Invalid form data", success:false, variant:"error" };
    const contact = await prisma.contact.findFirst({ where: { OR: [ { email: formData.email }, { ip } ] }, orderBy: { createdAt: 'desc' } } );
    if (contact && (Date.now() - new Date(contact.createdAt).getTime()) < 86400000) {
      return { code : 429, message: "Please wait at least 1 day before submitting again.", success: false, variant:"warning" };
    }
    await prisma.contact.create({ data : { name : formData.firstName + " " + formData.lastName, email : formData.email, message : formData.message, ip } });
    return { code: 201, message:"Thank you for your message. I'll get back to you soon.", success:true, variant:"success" };
  }catch(exception){
    console.error(exception);
    return { code: 500, message:"Your message couldn't be sent. Please try again later.", success:false, variant:"error" };
  }
};