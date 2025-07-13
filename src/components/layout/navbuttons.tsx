//For the navigation bar at the top
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link"

type NavButtonProps = {
    title: string;
    items: {
        href: string;
        label: string;
        description: string;
    }[];
};

export default function Navbuttons({title, items}: NavButtonProps) {
    return (

<NavigationMenuItem>
<NavigationMenuTrigger>{title}</NavigationMenuTrigger>
<NavigationMenuContent>
    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        {items.map((item, index) => (
            <ListItem key={index} href={item.href} title={item.label}>
                {item.description}
            </ListItem>
        ))}
        </ul>
</NavigationMenuContent>
</NavigationMenuItem>
    )}


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
    )}