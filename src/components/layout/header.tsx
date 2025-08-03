import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
import Image from "next/image"
import {HamburgerIcon, LucideHamburger, Menu, SandwichIcon} from "lucide-react";

export default function Header() {
    return (
        <header className="w-full bg-[#A87A5D] text-white px-6 py-4 sticky top-0 z-50">
            <div className="flex items-center justify-between w-full">
                <div className="flex-shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={100}
                        height={50}
                    />
                </div>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex ">
                            <Button>
                                <Link href="/">
                                    Home
                                </Link>
                            </Button>

                            <Button>
                                <Link href="/dashboard">
                                    Dashboard
                                </Link>
                            </Button>

                            <Button>
                                <Link href="/pricing">
                                    Pricing
                                </Link>
                            </Button>

                            <Button>
                                <Link href="../counter">
                                    Support
                                </Link>
                            </Button>

                            <Button>
                                <Link href="../counter">
                                    About
                                </Link>
                            </Button>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild className="text-2xl">
                            <Button className="active:bg-primary/90"><Menu/></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-3xl font-bold text-[#2D221C] ">Menu</SheetTitle>
                                <hr className="border-[#2D221C] border-1" />
                            </SheetHeader>
                            <SheetDescription>
                            <div className="flex flex-col gap-4 mt-6">
                                <Button className="bg-background  hover:bg-accent w-full justify-start">
                                    <Link href="../counter">
                                        Home
                                    </Link>
                                </Button>

                                <Button className="bg-background text-[#A87A5D] hover:bg-accent w-full justify-start">
                                    <Link href="../counter">
                                        Games
                                    </Link>
                                </Button>

                                <Button className="bg-background text-[#A87A5D] hover:bg-accent w-full justify-start">
                                    <Link href="../counter">
                                        Pricing
                                    </Link>
                                </Button>

                                <Button className="bg-background text-[#A87A5D] hover:bg-accent w-full justify-start">
                                    <Link href="../counter">
                                        Support
                                    </Link>
                                </Button>

                                <Button className="bg-background text-[#A87A5D] hover:bg-accent w-full justify-start">
                                    <Link href="../counter">
                                        About
                                    </Link>
                                </Button>
                            </div>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}