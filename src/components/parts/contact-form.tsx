"use client";
import { z } from "zod";
import { useState } from "react";
import { schema } from "@/lib/schema";
import MessageStrap from  "./message-strap";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendContactMessage } from "@/lib/actions";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function ContactForm() {

  const [ response, setResponse ] = useState<{message:string, variant:string}>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof schema.contact>>({
    resolver: zodResolver(schema.contact),
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof schema.contact>) {
    setIsSubmitting(true);
    try {
      const res = await sendContactMessage(values);
      form.reset();
      setResponse(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {setResponse(undefined)}, 6000);
    }
  }
  
  return (
    <>
      {response && <MessageStrap variant={response?.variant} message={response?.message}/>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 2xl:space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl><Input placeholder="Jhon" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField control={form.control} name="lastName" render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl><Input placeholder="Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
          </div>
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="example@email.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
            )}
          />
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea placeholder="Your message here..." className="min-h-[120px]" {...field}/></FormControl>
              <FormMessage />
            </FormItem>
            )}
          />
          <Button type="submit" variant="secondary" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
        </form>
      </Form>
    </>
  );

}
