import Link from "next/link";

interface NavbarMenuButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function NavbarMenuButton({ href, children }: NavbarMenuButtonProps) {
    return (
        <Link
            href={href}
            className="
                text-[var(--menu-button-color)] font-[500] font-sans text-sm
                no-underline transition-colors duration-200 focus:outline-none hover:text-[var(--menu-button-hover-color)]"
        >
            {children}
        </Link>
    );
}