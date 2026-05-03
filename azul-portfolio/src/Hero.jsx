import React from 'react'

export const Hero = () => {
    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden bg-hero-gradient"
        >
            {/* soft decorative blobs */}
            <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-blush/60 blur-3xl opacity-70" aria-hidden />
            <div className="absolute -bottom-40 -left-32 w-[460px] h-[460px] rounded-full bg-lavender/40 blur-3xl opacity-60" aria-hidden />

            <div className="container relative grid md:grid-cols-12 gap-10 items-end">
                <div className="md:col-span-9 animate-fade-up">
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-lavender-deep mb-6 md:mb-10">
                        Portfolio · 2025
                    </p>
                    <h1 className="font-display font-medium text-ink leading-[0.95] tracking-tight text-[clamp(2.75rem,9vw,8.5rem)]">
                        Azul <em className="font-light italic text-lavender-deep">López</em>
                    </h1>
                    <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="max-w-xl">
                            <p className="font-display text-lg md:text-xl text-ink/80 mb-4">
                                Graphic Designer · Diseñadora Gráfica
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                {/* REPLACE: short intro */}
                                Soy estudiante de Diseño Gráfico con formación en publicidad. Me
                                interesa crear piezas visuales con intención, coherencia y una
                                mirada creativa pero funcional.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:gap-4 md:shrink-0">
                            <a
                                href="#proyectos"
                                className="inline-flex items-center justify-center rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-medium hover:bg-lavender-deep transition-smooth"
                            >
                                Ver proyectos →
                            </a>
                            <a
                                href="#contacto"
                                className="inline-flex items-center justify-center rounded-full bg-transparent border border-ink/30 text-ink px-7 py-3.5 text-sm font-medium hover:bg-ink hover:text-cream transition-smooth"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
