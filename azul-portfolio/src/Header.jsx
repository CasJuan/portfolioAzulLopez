import { useEffect, useState } from 'react'

const navItems = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-40 transition-smooth ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border/60"
                : "bg-transparent"
                }`}
        >
            <div className="container flex h-16 md:h-20 items-center justify-between">
                <a href="#top" className="font-display text-lg md:text-xl font-semibold tracking-tight text-ink">
                    Azul<span className="text-lavender-deep">.</span>López
                </a>
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-ink transition-smooth"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contacto"
                    className="hidden md:inline-flex items-center text-sm font-medium text-ink border-b border-ink/40 hover:border-ink transition-smooth pb-0.5"
                >
                    Trabajemos juntas
                </a>
            </div>
        </header>
    );
}
