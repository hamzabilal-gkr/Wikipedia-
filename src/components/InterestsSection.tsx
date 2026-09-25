import { InterestItem } from '../profileData';
import { Brain, Code2, Cpu, Palette, Binary, Camera, Sparkles } from 'lucide-react';

interface InterestsSectionProps {
  interests: InterestItem[];
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return <Brain className="w-4 h-4 text-[#1E3A8A]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#1E3A8A]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#1E3A8A]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#1E3A8A]" />;
      case 'Binary':
        return <Binary className="w-4 h-4 text-[#1E3A8A]" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-[#1E3A8A]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#1E3A8A]" />;
    }
  };

  return (
    <section id="interests" className="py-12 border-b border-[#E2E8F0] scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider uppercase">05. Academic &amp; Creative Pursuits</span>
        <h2 className="font-academic text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Areas of Interest
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Domains of focused study, technological exploration, and extracurricular curiosity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {interests.map((item) => (
          <div
            key={item.name}
            className="p-4 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-all flex items-start gap-3.5"
          >
            <div className="p-2 bg-[#F1F5F9] rounded-md shrink-0 mt-0.5">
              {getIcon(item.iconName)}
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#0F172A] mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {item.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
