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
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  numeroRGE: z.string().nonempty({
    message: "Numero R.G.E. field is required.",
  }),
  enregistrement: z.string().nonempty({
    message: "Numero de l'inventaire field is required.",
  }),
  provenance: z.string().nonempty({
    message: "Provenance field is required.",
  }),
  designation: z.string().nonempty({
    message: "Designation field is required.",
  }),
  valeur: z.string().nonempty({
    message: "Valeur field is required.",
  }),
  affectation: z.string().nonempty({
    message: "Affectation field is required.",
  }),
  nature: z.string().nonempty({
    message: "Nature sortie field is required.",
  }),
  justificatif: z.string().nonempty({
    message: "Justificatif sortie field is required.",
  }),
  observation: z.string().nonempty({
    message: "Observation field is required.",
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
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date de l&rsquo;inventaire</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numeroRGE"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Numero R.G.E.</FormLabel>
              <FormControl>
                <Input placeholder="Numero RGE" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enregistrement"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Numero de l&rsquo;inventaire</FormLabel>
              <FormControl>
                <Input placeholder="Enregistrement" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="provenance"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              Provenance
              <Select>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Provenance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Achat">Achat</SelectItem>
                    <SelectItem value="Don">Don</SelectItem>
                    <SelectItem value="Aquisition">Aquisition</SelectItem>
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
          name="designation"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Designation</FormLabel>
              <FormControl>
                <Input placeholder="Designation" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="valeur"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Valeur</FormLabel>
              <FormControl>
                <Input placeholder="Valeur" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="affectation"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Affectation</FormLabel>
              <FormControl>
                <Input placeholder="Affectation" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nature"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Nature sortie</FormLabel>
              <FormControl>
                <Input placeholder="nature" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="justificatif"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Justificatif sortie</FormLabel>
              <FormControl>
                <Input placeholder="Justificatif" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="observation"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Observation</FormLabel>
              <FormControl>
                <Input placeholder="Observation" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" w-[240]">
          Eregistrer l&rsquo;inventaire
        </Button>
      </form>
    </Form>
  );
}
