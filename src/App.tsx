import { useState, useEffect } from 'react';
import { initialProfileData, ProjectItem } from './profileData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TableOfContents } from './components/TableOfContents';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  const [profile] = useState(initialProfileData);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync document title with profile name
  useEffect(() => {
    document.title = `${profile.fullName} · BSCS Personal Profile`;
  }, [profile.fullName]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFB] text-[#1E293B]">
      {/* Sticky Header with Navigation & Quick Actions */}
      <Header name={profile.fullName} />

      {/* Main Page Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Section 1: Hero & Identity Introduction */}
        <HeroSection
          fullName={profile.fullName}
          title={profile.title}
          subtitle={profile.subtitle}
          location={profile.location}
          shortIntro={profile.shortIntro}
          avatarUrl={profile.avatarUrl}
          avatarFallback={profile.avatarFallback}
        />

        {/* Encyclopedia-style Table of Contents */}
        <TableOfContents />

        {/* Section 2: About & Quick Facts */}
        <AboutSection
          fullName={profile.fullName}
          aboutBio={profile.aboutBio}
          quickFacts={profile.quickFacts}
        />

        {/* Section 3: Education */}
        <EducationSection education={profile.education} />

        {/* Section 4: Skills */}
        <SkillsSection categories={profile.skillCategories} />

        {/* Section 5: Projects */}
        <ProjectsSection
          projects={profile.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          githubUrl={profile.contact.github.url}
        />

        {/* Section 6: Areas of Interest */}
        <InterestsSection interests={profile.interests} />

        {/* Section 7: Contact */}
        <ContactSection
          contact={profile.contact}
          fullName={profile.fullName}
        />
      </main>

      {/* Section 8: Footer */}
      <Footer fullName={profile.fullName} />

      {/* Project Detail Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
