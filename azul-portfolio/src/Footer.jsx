export const Footer = () => {
    return (
        <footer className="border-t border-border/60 py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p className="font-display text-ink">
                    Azul<span className="text-lavender-deep">.</span>López
                </p>
                <p>© {new Date().getFullYear()} — Diseñado con cuidado en Buenos Aires.</p>
                <a href="#top" className="hover:text-ink transition-smooth">
                    Volver arriba ↑
                </a>
            </div>
        </footer>
    );
};
