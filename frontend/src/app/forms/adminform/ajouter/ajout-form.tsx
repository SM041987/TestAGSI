"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const accountFormSchema = z.object({

  nom: z.string().nonempty({
    message: "nom field is required.",
  }),
  prenom: z.string().nonempty({
    message: "prenom field is required.",
  }),
  typecompte: z.string().nonempty({
    message: "typecompte field is required.",
  }),
  intitule: z.string().nonempty({
    message: "intitule field is required.",
  }),
  password : z.string().nonempty({
    message: "password field is required.",
  }),
  repassword : z.string().nonempty({
    message: "password field is required.",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 "
      >
       

        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typecompte"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              typecompte
              <Select>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="typecompte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Achat">chef magasin</SelectItem>
                    <SelectItem value="Don">fonctionnaire 1</SelectItem>
                    <SelectItem value="Aquisition">fonctionnaire 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="intitule"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>intitule</FormLabel>
              <FormControl>
                <Input placeholder="intitule" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
       
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>mot de passe</FormLabel>
              <FormControl>
                <Input placeholder="mot de passe" type="password" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repassword"
       
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>confirmer mot de passe</FormLabel>
              <FormControl>
                <Input placeholder="mot de passe" type="password" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
 
 

        <Button type="submit" className=" w-[240]">
          Ajouter le compte
        </Button>
      </form>
    </Form>
  );
}
