"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { link } from "fs";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
{/*             <Select>
              <Label>Role</Label>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selectionnez un role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="responsable">
                    Responsable magasin
                  </SelectItem>
                  <SelectItem value="role2">President APC</SelectItem>
                  <SelectItem value="role3">fonctionnaire 1</SelectItem>
                  <SelectItem value="role4">fonctionnaire 2</SelectItem>
                  <SelectItem value="role5">fonctionnaire 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>{" "}
          <div className="grid gap-1">
            <Label>User Name</Label>
            <Input
              id="name"
              placeholder="User name"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label>Mote de passe</Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>{" "}
          <Link
            href="../forms"
            className={cn(buttonVariants({ variant: "destructive" }), "")}
          >
            Login
          </Link>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase"></div>
      </div>
    </div>
  );
}
