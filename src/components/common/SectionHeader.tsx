import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  coordinates?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  light = false,
  coordinates,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {/* Kicker & Optional Technical Coordinates */}
      {(kicker || coordinates) && (
        <div className={`flex items-center gap-3 text-xs tracking-wider uppercase font-semibold mb-3 ${isCenter ? 'justify-center' : ''} ${light ? 'text-[#EAF4FA]' : 'text-[#0B4F8A]'}`}>
          {kicker && <span>{kicker}</span>}
          {kicker && coordinates && <span className="opacity-40" aria-hidden="true">|</span>}
          {coordinates && (
            <span className="font-mono text-[11px] opacity-75">{coordinates}</span>
          )}
        </div>
      )}

      {/* Main Title */}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${light ? 'text-white' : 'text-[#062A4D]'}`}>
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-[#EAF4FA]/90' : 'text-[#52606D]'}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative Engineering Line */}
      <div className={`mt-5 flex items-center gap-1 ${isCenter ? 'justify-center' : ''}`}>
        <div className={`h-1 w-12 ${light ? 'bg-[#0B78B5]' : 'bg-[#0B4F8A]'}`}></div>
        <div className={`h-1 w-2 ${light ? 'bg-white/40' : 'bg-[#D9E4EC]'}`}></div>
        <div className={`h-1 w-1 ${light ? 'bg-white/20' : 'bg-[#D9E4EC]'}`}></div>
      </div>
    </div>
  );
};
