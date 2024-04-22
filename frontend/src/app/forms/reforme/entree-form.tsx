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
    required_error: "A date is required.",
  }),
  numeroinventaire: z.string().nonempty({
    message: "Numero inventaire field is required.",
  }),
  designation: z.string().nonempty({
    message: "Designation field is required.",
  }),
  justification: z.string().nonempty({
    message: "Justification field is required.",
  }),
  prix: z.string().nonempty({
    message: "Prix field is required.",
  }),
  montant: z.string().nonempty({
    message: "Montant field is required.",
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
              <FormLabel>Date entree</FormLabel>
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
          name="numeroinventaire"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              Numero d&rsquo;ordre de l&rsquo;inventaire
              <Select>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Numero inventaire" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ALG-8782">ALG-8782</SelectItem>
                    <SelectItem value=" ALG-1138"> ALG-1138</SelectItem>
                    <SelectItem value="ALG-7262">ALG-7262</SelectItem>{" "}
                    <SelectItem value="ALG-7878">ALG-7878</SelectItem>
                    <SelectItem value=" ALG-7839"> ALG-7839</SelectItem>
                    <SelectItem value="ALG-5562">ALG-5562</SelectItem>{" "}
                    <SelectItem value="ALG-8686">ALG-8686</SelectItem>
                    <SelectItem value=" ALG-8086"> ALG-8086</SelectItem>
                    <SelectItem value="ALG-1280">ALG-1280</SelectItem>{" "}
                    <SelectItem value="ALG-8182">ALG-8182</SelectItem>
                    <SelectItem value=" ALG-1038"> ALG-1038</SelectItem>
                    <SelectItem value="ALG-7292">ALG-7292</SelectItem>
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
              <FormLabel>Designation de l&rsquo;objet</FormLabel>
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
          name="justification"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Numero de pièce justificative</FormLabel>
              <FormControl>
                <Input placeholder="Numero justification." {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prix"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>prix unité</FormLabel>
              <FormControl>
                <Input placeholder="prix unit" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="montant"
          render={({ field }) => (
            <FormItem className="w-[240px]">
              <FormLabel>Montant total</FormLabel>
              <FormControl>
                <Input placeholder="Montant" {...field} />
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
          Eregistrer la réforme
        </Button>
      </form>
    </Form>
  );
}
