import { Palette } from "lucide-react";


const links = [
    { label: "Email", value: "azul@ejemplo.com", href: "mailto:azul@ejemplo.com", Icon: Palette },
    { label: "LinkedIn", value: "/in/azullopez", href: "https://linkedin.com", Icon: Palette },
    { label: "Behance", value: "/azullopez", href: "https://behance.net", Icon: Palette },
];

export const Contact = () => {
    return (
        <section id="contacto" className="py-24 md:py-36">
            <div className="container max-w-4xl text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep mb-4">
                    03 — Contacto
                </p>
                <h2 className="font-display text-4xl md:text-7xl text-ink tracking-tight mb-8 leading-[1]">
                    Hablemos de tu <em className="italic font-light text-lavender-deep">próximo proyecto</em>.
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-14">
                    Si querés ver más de mi trabajo o contactarme, podés escribirme o
                    visitar mis perfiles.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                    {links.map(({ label, value, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-8 hover:border-lavender-deep hover:shadow-soft transition-smooth"
                        >
                            <span className="rounded-full bg-blush p-3 text-lavender-deep group-hover:bg-lavender-deep group-hover:text-cream transition-smooth">
                                <Icon className="w-5 h-5" />
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                {label}
                            </span>
                            <span className="font-display text-base text-ink">{value}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};