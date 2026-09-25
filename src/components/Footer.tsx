import { ArrowUp } from 'lucide-react';

interface FooterProps {
  fullName: string;
}

export function Footer({ fullName }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#F8FAFC] border-t border-[#E2E8F0] text-xs text-[#64748B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-semibold text-[#0F172A]">
              &copy; 2026 {fullName}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[#CBD5E1]">·</span>
            <span>Personal Identity Profile</span>
            <span aria-hidden="true" className="hidden sm:inline text-[#CBD5E1]">·</span>
            <span>BSCS Student &middot; Gujranwala, Pakistan</span>
          </div>

          {/* Small Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
            <a href="#home" className="hover:text-[#0F172A] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#0F172A] transition-colors">About</a>
            <a href="#education" className="hover:text-[#0F172A] transition-colors">Education</a>
            <a href="#skills" className="hover:text-[#0F172A] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#0F172A] transition-colors">Projects</a>
            <a href="#interests" className="hover:text-[#0F172A] transition-colors">Interests</a>
            <a href="#contact" className="hover:text-[#0F172A] transition-colors">Contact</a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#475569] hover:text-[#0F172A] transition-colors"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-center text-[11px] text-[#94A3B8]">
          <p>
            An academic personal encyclopedia entry structured for clarity and long-term reference.
          </p>
        </div>
      </div>
    </footer>
  );
}
