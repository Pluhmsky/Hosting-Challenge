//For the navigation bar at the top
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

//My own nav button customization
import navbuttons from "@/components/layout/navbuttons"

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
import Navbuttons from "@/components/layout/navbuttons";


export default function Header() {
    return (

        <header className="w-full bg-red-600 text-white px-6 py-4">

            <div className="flex items-center justify-between">
                <div className="flex-1">
                <h1 className="text-2xl font-bold">Mikey's Hosting</h1>
                </div>

                <div className="hidden md:block float-right flex-2">
                <NavigationMenu>
                    <NavigationMenuList>
                        <Navbuttons
                            title="Home"
                                items={[
                                    {
                                        href: "../counter",
                                        label: "Counter",
                                        description:"A page for clicking a button many times"

                                },
                                    {
                                        href: "../counter",
                                        label: "Counter",
                                        description:"A page for clicking a button many times"

                                    }
                                ]}
                                        />

                        <Navbuttons
                            title="Games"
                            items={[
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                },
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                }
                            ]}/>

                        <Navbuttons
                            title="Pricing"
                            items={[
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                },
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                }
                            ]}/>

                        <Navbuttons
                            title="Support"
                            items={[
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                },
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                }
                            ]}/>

                        <Navbuttons
                            title="About"
                            items={[
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                },
                                {
                                    href: "../counter",
                                    label: "Counter",
                                    description:"A page for clicking a button many times"

                                }
                            ]}/>

                         </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                <div>
                <Sheet>
                    <SheetTrigger asChild className ="block md:hidden text-2xl">
                        <Button className="bg-background text-white">☰</Button>
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