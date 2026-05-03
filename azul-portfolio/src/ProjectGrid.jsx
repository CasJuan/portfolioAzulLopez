import { useState } from 'react'
import { projects } from './data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export const ProjectGrid = () => {
    const [active, setActive] = useState(null);

    return (
        <section id="proyectos" className="py-24 md:py-36">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep mb-4">
                            01 — Selección
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl text-ink tracking-tight max-w-2xl">
                            Proyectos <em className="italic font-light text-lavender-deep">recientes</em>
                        </h2>
                    </div>
                    <p className="md:text-right text-muted-foreground max-w-sm">
                        Una pequeña selección de trabajos de identidad, editorial y comunicación visual.
                    </p>
                </div>

                {/* Masonry layout via CSS columns */}
                <div className="columns-1 md:columns-2 gap-6 md:gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} onOpen={setActive} index={i} />
                    ))}
                </div>
            </div>

            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    );
}
