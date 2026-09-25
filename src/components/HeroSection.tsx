import { useState } from 'react';
import { ArrowRight, BookOpen, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  fullName: string;
  title: string;
  subtitle: string;
  location: string;
  shortIntro: string;
  avatarUrl: string;
  avatarFallback: string;
}

export function HeroSection({
  fullName,
  title,
  subtitle,
  location,
  shortIntro,
  avatarUrl,
  avatarFallback,
}: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="pt-8 pb-12 border-b border-[#E2E8F0]">
      {/* Top Academic Encyclopedia Context Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B] mb-6 pb-3 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#0F172A]">Personal Identity Profile</span>
          <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
          <span>Article Classification: Computer Science</span>
          <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
          <span>Undergraduate Record</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#047857]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
          <span className="font-medium">Active Academic Standing</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Encyclopedic Title & Lead Prose */}
        <div className="lg:col-span-8 space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A8A] mb-1.5 uppercase tracking-wider">
              <span>{title}</span>
              <span aria-hidden="true">·</span>
              <span>{subtitle}</span>
            </div>

            <h1 className="font-academic text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
              {fullName}
            </h1>

            <div className="mt-2.5 flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-[#475569]">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4 text-[#1E3A8A]" />
                <span className="font-medium text-[#0F172A]">BSCS Student</span>
              </span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                <span>{location}</span>
              </span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span className="text-[#64748B]">Status: Currently Enrolled</span>
            </div>
          </div>

          {/* Lead Intro Paragraph */}
          <div className="bg-white border-l-3 border-[#1E3A8A] p-4.5 rounded-r-md border-y border-r border-[#E2E8F0] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-sans-body">
              &ldquo;{shortIntro}&rdquo;
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-md transition-all shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>View Profile</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1E3A8A] bg-[#EEF2F6] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-md transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quiet Citation / Metadata Note */}
          <p className="text-xs text-[#64748B] pt-1">
            This digital identity page acts as a structured personal encyclopedia profile and academic portfolio summary.
          </p>
        </div>

        {/* Right Column: Profile Photo / Avatar Card */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
          <div className="w-full max-w-[280px] bg-white border border-[#CBD5E1] rounded-lg p-3 shadow-xs">
            <div className="relative aspect-square w-full rounded-md overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0]">
              {!imgError && avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`Profile portrait of ${fullName}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#F8FAFC] text-[#475569] p-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E2E8F0] text-[#1E3A8A] font-academic font-bold text-2xl flex items-center justify-center mb-2">
                    {avatarFallback || 'HB'}
                  </div>
                  <span className="text-xs font-medium text-[#0F172A]">{fullName}</span>
                  <span className="text-[11px] text-[#64748B]">Profile Photo</span>
                </div>
              )}
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#F1F5F9] text-center">
              <p className="text-xs font-semibold text-[#0F172A]">{fullName}</p>
              <p className="text-[11px] text-[#64748B]">BSCS Student · Gujranwala</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
