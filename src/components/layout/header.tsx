//For the navigation bar at the top
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

//For the Hamburger in mobile view
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"

import Link from "next/link"

export default function Header() {
    return (

        <header className="w-full bg-red-600 text-white px-6 py-4">
            <div className="flex items-center justify-between flex-wrap">
                <h1 className="text-2xl font-bold">Mikey's Hosting</h1>

                <div className="hidden md:block">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Counter</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                               href="https://github.com/shadcn/ui"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    Beautifully designed components built with Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="../counter" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="../counter" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="../counter" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Other page</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white text-black px-4 py-2 rounded shadow-md">
                                <NavigationMenuLink href="#">Another Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Third page</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white text-black px-4 py-2 rounded shadow-md">
                                <NavigationMenuLink href="#">Third link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

                <Sheet>
                    <SheetTrigger asChild className ="block md:hidden text-2xl">
                        <Button className="bg-black text-white">☰</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid flex-1 auto-rows-min gap-6 px-4">
                            <div className="grid gap-3">
                                <Label htmlFor="sheet-demo-name">Name</Label>
                                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="sheet-demo-username">Username</Label>
                                <Input id="sheet-demo-username" defaultValue="@peduarte" />
                            </div>
                        </div>
                        <SheetFooter>
                            <Button type="submit">Save changes</Button>
                            <SheetClose asChild>
                                <Button variant="outline">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}


function ListItem({
                      title,
                      children,
                      href,
                      ...props
                  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}