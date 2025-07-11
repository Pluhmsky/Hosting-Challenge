import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
                            <NavigationMenuContent className="bg-white text-black px-4 py-2 rounded shadow-md">
                                <NavigationMenuLink href="./counter">Counter</NavigationMenuLink>
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

                {/* Show hamburger menu on small screens only */}
                <button className="block md:hidden text-2xl">
                    ☰
                </button>
            </div>
        </header>
    );
}


