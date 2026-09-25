import { EducationItem } from '../profileData';
import { GraduationCap, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';

interface EducationSectionProps {
  education: EducationItem[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-12 border-b border-[#E2E8F0] scroll-mt-20">
      <div className="mb-8">
        <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider uppercase">02. Academic Track</span>
        <h2 className="font-academic text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Education &amp; Qualifications
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((item, index) => {
          const isEnrolled = item.status === 'Currently Enrolled';

          return (
            <div
              key={item.id || index}
              className={`p-6 rounded-lg transition-all ${
                item.isCurrent
                  ? 'bg-white border-2 border-[#1E3A8A]/30 shadow-[0_2px_8px_rgba(30,58,138,0.04)]'
                  : 'bg-white border border-[#E2E8F0]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-academic font-bold text-lg sm:text-xl text-[#0F172A]">
                      {item.degree}
                    </span>
                    {isEnrolled ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#047857] bg-[#ECFDF5] px-2.5 py-0.5 rounded border border-[#A7F3D0]">
                        <Clock className="w-3 h-3 text-[#059669]" />
                        <span>Currently Enrolled</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#475569] bg-[#F1F5F9] px-2.5 py-0.5 rounded border border-[#E2E8F0]">
                        <CheckCircle className="w-3 h-3 text-[#64748B]" />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-[#1E3A8A] flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>{item.institution}</span>
                  </p>
                </div>

                <div className="text-xs text-[#64748B] sm:text-right space-y-1 shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium text-[#334155]">
                    <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                    <span className="font-mono-code">{item.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework & Academic Highlights */}
              {item.details && item.details.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#F1F5F9]">
                  <span className="text-xs font-semibold text-[#475569] block mb-2">
                    Key Highlights &amp; Core Coursework:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#475569]">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold text-sm leading-none mt-0.5">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
