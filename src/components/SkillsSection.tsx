import { useState } from 'react';
import { SkillCategory } from '../profileData';
import { Layers, Search } from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = categories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.name !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') return true;

    const query = searchQuery.toLowerCase();
    const matchesName = cat.name.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(query));
    return matchesName || matchesSkill;
  });

  return (
    <section id="skills" className="py-12 border-b border-[#E2E8F0] scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider uppercase">03. Technical Competencies</span>
          <h2 className="font-academic text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skill (e.g. Python)..."
            className="pl-8 pr-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] w-48 sm:w-56"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none text-xs">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-[#1E3A8A] text-white shadow-xs'
              : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
          }`}
        >
          All Disciplines ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
              selectedCategory === cat.name
                ? 'bg-[#1E3A8A] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((category) => (
          <div
            key={category.name}
            className="bg-white border border-[#E2E8F0] rounded-lg p-5 hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-[#F1F5F9]">
                <Layers className="w-4 h-4 text-[#1E3A8A]" />
                <h3 className="font-semibold text-sm text-[#0F172A] tracking-tight">
                  {category.name}
                </h3>
              </div>

              <p className="text-xs text-[#64748B] mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Zero-Pill Unboxed Clean Typography with Separator Grid */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#475569] uppercase tracking-wider block">
                  Proficiencies &amp; Tools:
                </span>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#334155]">
                  {category.skills.map((skill, sIdx) => (
                    <span key={skill} className="flex items-center">
                      <span className="font-medium hover:text-[#1E3A8A] transition-colors">
                        {skill}
                      </span>
                      {sIdx < category.skills.length - 1 && (
                        <span aria-hidden="true" className="ml-2.5 text-[#CBD5E1]">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F8FAFC] text-[11px] text-[#94A3B8]">
              <span>{category.skills.length} competencies indexed</span>
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white border border-[#E2E8F0] rounded-lg p-6">
            <p className="text-sm text-[#64748B]">No skills found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs text-[#1E3A8A] hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
