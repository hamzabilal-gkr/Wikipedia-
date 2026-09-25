import { useState } from 'react';
import { ProjectItem } from '../profileData';
import { ExternalLink, Github, Code2, Eye, FolderGit2 } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  githubUrl?: string;
}

export function ProjectsSection({
  projects,
  onSelectProject,
  githubUrl,
}: ProjectsSectionProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-12 border-b border-[#E2E8F0] scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider uppercase">04. Portfolio Works</span>
          <h2 className="font-academic text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Projects &amp; Case Studies
          </h2>
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0F172A] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Browse All Repositories</span>
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const hasError = imageErrors[project.id];

          return (
            <article
              key={project.id}
              className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group"
            >
              <div>
                {/* Thumbnail Image with Resilient Fallback */}
                <div className="relative aspect-[16/10] w-full bg-[#F1F5F9] border-b border-[#E2E8F0] overflow-hidden">
                  {!hasError && project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#F8FAFC]">
                      <Code2 className="w-8 h-8 text-[#94A3B8] mb-1.5" />
                      <span className="text-xs font-medium text-[#475569]">{project.name}</span>
                      <span className="text-[11px] text-[#94A3B8]">Project Screenshot</span>
                    </div>
                  )}

                  {/* Top-Right Category Ribbon */}
                  <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-semibold text-base text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Clean unboxed technologies with typographic separators */}
                  <div className="pt-2 border-t border-[#F8FAFC]">
                    <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                      Technologies &amp; Tools:
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#334155]">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tech} className="inline-flex items-center">
                          <span className="font-medium text-[#1E293B]">{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="ml-2 text-[#CBD5E1]">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0F172A] hover:bg-[#1E3A8A] rounded-md transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository"
                        className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        className="p-1.5 text-[#64748B] hover:text-[#1E3A8A] hover:bg-[#F1F5F9] rounded transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Informative Additional Works Card */}
        <div className="border border-dashed border-[#CBD5E1] bg-[#FAFAFA] rounded-lg p-6 flex flex-col items-center justify-center text-center min-h-[320px]">
          <div className="w-12 h-12 rounded-full bg-[#EEF2F6] text-[#1E3A8A] flex items-center justify-center mb-3">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-sm text-[#0F172A] mb-1">
            Ongoing Research &amp; Projects
          </h3>
          <p className="text-xs text-[#64748B] max-w-xs mb-3">
            Additional semester coursework, experimental AI pipelines, and software tools are continuously committed and documented.
          </p>
          <span className="text-xs font-medium text-[#64748B]">
            Regularly updated with BSCS milestones
          </span>
        </div>
      </div>
    </section>
  );
}
