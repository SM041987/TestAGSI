"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    href2?: string;
    title: string;
    title2?: string;
    parent: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div>
      <nav
        className={cn("flex  lg:flex-col lg:space-x-0 lg:space-y-1", className)}
        {...props}
      >
        {items.map((item) => (
          <Accordion key={item.href} type="multiple">
            <AccordionItem value={`${item.parent}`}>
              <AccordionTrigger>{item.parent}</AccordionTrigger>
              <AccordionContent>
                {" "}
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    pathname === item.href
                      ? "bg-muted hover:bg-muted"
                      : "hover:bg-transparent hover:underline",
                    " justify-start"
                  )}
                >
                  {item.title}
                </Link>{" "}
              </AccordionContent>
              <AccordionContent>
                <Link
                  key={item.href2}
                  //@ts-ignore
                  href={item.href2}
                  className={cn(
                    /*pathname === item.href
                                          ? "bg-muted hover:bg-muted"
                      : "hover:bg-transparent hover:underline",*/
                    " justify-start"
                  )}
                >
                  {item.title2}
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </nav>
    </div>
  );
}
