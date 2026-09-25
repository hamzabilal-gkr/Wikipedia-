import { useState } from 'react';
import { ListCollapse, ChevronDown, ChevronUp } from 'lucide-react';

export function TableOfContents() {
  const [collapsed, setCollapsed] = useState(false);

  const sections = [
    { number: '1', title: 'Biographical Overview & Facts', href: '#about' },
    { number: '2', title: 'Education & Academic Track', href: '#education' },
    { number: '3', title: 'Skills & Technical Competencies', href: '#skills' },
    { number: '4', title: 'Projects & Case Studies', href: '#projects' },
    { number: '5', title: 'Areas of Interest', href: '#interests' },
    { number: '6', title: 'Contact & Communication Channels', href: '#contact' },
  ];

  return (
    <div className="my-6 p-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg shadow-2xs no-print">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListCollapse className="w-4 h-4 text-[#1E3A8A]" />
          <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
            Contents
          </span>
          <span className="text-[11px] text-[#64748B] hidden sm:inline">
            [Quick Navigation]
          </span>
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-xs text-[#1E3A8A] hover:underline flex items-center gap-0.5"
          aria-expanded={!collapsed}
        >
          <span>{collapsed ? 'show' : 'hide'}</span>
          {collapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!collapsed && (
        <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs pt-3 border-t border-[#E2E8F0]">
          {sections.map((sec) => (
            <li key={sec.href}>
              <a
                href={sec.href}
                className="text-[#334155] hover:text-[#1E3A8A] hover:underline flex items-baseline gap-1.5 transition-colors py-0.5"
              >
                <span className="font-semibold text-[#1E3A8A] font-mono-code">{sec.number}.</span>
                <span>{sec.title}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
