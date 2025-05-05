"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@/lib/icons";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const Search = ({ className }: { className: string }) => {

  const router = useRouter();
  const form = useForm({ defaultValues: { search: "" } });

  const onSubmit = (values : { search: string } ) => {
    router.push(`/blog?q=${values?.search}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`relative bg-transparent ${className} border focus-within:border-neutral-400 dark:focus-within:border-neutral-700 rounded-sm`}>
        <FormField control={form.control} name="search" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" className="border-none tracking-wider" placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant="secondary" type="submit" className="absolute top-[3px] right-[3px] h-[30px] "><MagnifyingGlassIcon /></Button>
      </form>
    </Form>
  );
  
};

export default Search;
