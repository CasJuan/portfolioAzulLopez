import React from 'react'
import portrait from './img/yop.jpg';

const skills = [
    "Diseño gráfico",
    "Comunicación visual",
    "Creatividad ",
    "Estrategia ",
    "Organización "
];

export const About = () => {
    return (
        <section id="sobre-mi" className="py-24 md:py-36 bg-soft-gradient">
            <div className="container grid md:grid-cols-12 gap-12 md:gap-16 items-center">
                <div className="md:col-span-5">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                        <img
                            src={portrait}
                            alt="Retrato de Azul López"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="md:col-span-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep mb-4">
                        02 — Sobre mí
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-ink tracking-tight mb-8">
                        Ideas con <em className="italic font-light text-lavender-deep">intención</em>.
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                        Soy Azul, estudiante de Diseño Gráfico y técnica publicitaria.
                        Me interesa el diseño y la publicidad como una forma de comunicar ideas de manera creativa, incluso con pocos recursos y desde lugares no esperados.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                        Además de lo creativo, me interesa lo operativo: la organización, los procesos y la implementación de ideas en contextos reales.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                        Tengo experiencia en tareas de asistencia y comunicación, como redacción de copys, gestión de redes y organización de contenido. Me motiva formar parte de equipos donde pueda aportar desde lo creativo, pero también desde la ejecución y el día a día.
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center rounded-full border border-ink/15 bg-background/60 backdrop-blur px-4 py-2 text-sm text-ink/80 hover:border-lavender-deep hover:text-lavender-deep transition-smooth"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
