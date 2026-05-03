import React from 'react'

export const ProjectCard = ({ project, onOpen, index }) => {
    return (
        <article
            className="group flex flex-col h-full cursor-pointer"
            onClick={() => onOpen(project)}
        >
            <div
                className="relative overflow-hidden rounded-2xl bg-muted h-[300px] md:h-[380px] shrink-0 shadow-soft"
            >
                <img
                    src={project.cover}
                    alt={project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-wider text-ink">
                    {project.category}
                </span>
            </div>

            <div className="mt-5 flex flex-col flex-1 items-start justify-between gap-6">
                <div className="flex-1 w-full">
                    <h3 className="font-display text-2xl md:text-[28px] text-ink leading-tight">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                        {project.description}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onOpen(project); }}
                    className="shrink-0 mt-1 inline-flex items-center text-sm font-medium text-ink border-b border-ink/30 hover:border-lavender-deep hover:text-lavender-deep transition-smooth pb-0.5"
                >
                    Ver proyecto →
                </button>
            </div>
        </article>
    );
};
