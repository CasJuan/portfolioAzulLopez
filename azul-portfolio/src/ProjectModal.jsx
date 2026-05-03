import { useEffect } from 'react';
import { X } from 'lucide-react';


export const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        if (!project) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
            onClick={onClose}
        >
            <div className="min-h-full flex items-start justify-center p-4 md:p-10">
                <div
                    className="relative w-full max-w-5xl bg-background rounded-2xl shadow-card overflow-hidden animate-fade-up"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="absolute top-4 right-4 z-10 rounded-full bg-cream/90 backdrop-blur p-2 hover:bg-cream transition-smooth"
                    >
                        <X className="w-5 h-5 text-ink" />
                    </button>

                    {/* Cover */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                        <img
                            src={project.cover}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-12">
                        <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep mb-4">
                            {project.category}
                        </p>
                        <h3 className="font-display text-3xl md:text-5xl text-ink tracking-tight mb-8">
                            {project.title}
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
                            <div>
                                <h4 className="font-display text-sm uppercase tracking-wider text-ink/60 mb-3">
                                    Contexto
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">{project.context}</p>
                            </div>
                            <div>
                                <h4 className="font-display text-sm uppercase tracking-wider text-ink/60 mb-3">
                                    Objetivo
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
                            </div>
                            <div>
                                <h4 className="font-display text-sm uppercase tracking-wider text-ink/60 mb-3">
                                    Solución visual
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="grid gap-4 md:gap-6">
                            {project.gallery.map((src, i) => (
                                <div key={i} className="overflow-hidden rounded-xl bg-muted">
                                    <img
                                        src={src}
                                        alt={`${project.title} — ${i + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {project.pdfUrl && (
                            <div className="mt-12 flex justify-center">
                                <a
                                    href={project.pdfUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-medium hover:bg-lavender-deep transition-smooth"
                                >
                                    Ver presentación completa →
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};