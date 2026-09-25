import { QuickFact } from '../profileData';
import { FileText, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  fullName: string;
  aboutBio: string[];
  quickFacts: QuickFact[];
}

export function AboutSection({
  fullName,
  aboutBio,
  quickFacts,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-12 border-b border-[#E2E8F0] scroll-mt-20">
      <div className="mb-8">
        <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider uppercase">01. Overview</span>
        <h2 className="font-academic text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          About &amp; Background
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Narrative Description (Left 7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#64748B] pb-2 border-b border-[#F1F5F9]">
            <FileText className="w-3.5 h-3.5 text-[#1E3A8A]" />
            <span>Biographical Summary</span>
            <span aria-hidden="true">·</span>
            <span>Subject: {fullName}</span>
          </div>

          <div className="space-y-4 text-[15px] sm:text-base text-[#334155] leading-relaxed font-sans-body">
            {aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Academic Focus Highlights */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-white border border-[#E2E8F0] rounded-md">
              <span className="text-xs font-semibold text-[#0F172A] block mb-1">Academic Philosophy</span>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Prioritizing deep fundamental comprehension of data structures, algorithm efficiency, and clean code architecture.
              </p>
            </div>
            <div className="p-3.5 bg-white border border-[#E2E8F0] rounded-md">
              <span className="text-xs font-semibold text-[#0F172A] block mb-1">Career Orientation</span>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Aiming to contribute to impactful software engineering, intelligent systems, and modern full-stack application development.
              </p>
            </div>
          </div>
        </div>

        {/* Wikipedia-Inspired Quick Facts / Infobox Card (Right 5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#CBD5E1] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Infobox Header */}
            <div className="bg-[#F8FAFC] border-b border-[#CBD5E1] px-4 py-3 text-center">
              <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                Personal Identity Record
              </span>
              <h3 className="font-academic font-bold text-lg text-[#0F172A]">
                {fullName}
              </h3>
            </div>

            {/* Infobox Data Table */}
            <div className="divide-y divide-[#E2E8F0] text-xs">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 px-4 py-2.5 hover:bg-[#F8FAFC]/60 transition-colors"
                >
                  <span className="col-span-5 font-semibold text-[#475569] pr-2">
                    {fact.label}
                  </span>
                  <span className="col-span-7 text-[#0F172A] break-words">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Infobox Footer Note */}
            <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-4 py-2.5 flex items-center justify-between text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                <span>Standardized Profile Record</span>
              </span>
              <span className="text-[11px] text-[#94A3B8]">
                Verified Data
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
