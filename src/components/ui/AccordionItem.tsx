import React from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
  icon: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  isExpanded,
  onToggle,
  children,
  icon,
}) => {
  return (
    <div className="flex flex-col border-b border-[var(--border-glass)]">
      <button
        onClick={() => onToggle(id)}
        className={`flex items-center justify-between py-5 px-2 transition-all duration-300 group ${
          isExpanded ? 'translate-x-1' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <i
            className={`fa ${icon} text-[10px] ${
              isExpanded
                ? 'text-[var(--accent-primary)]'
                : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
            }`}
          ></i>
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
              isExpanded
                ? 'text-[var(--text-primary)]'
                : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
            }`}
          >
            {title}
          </span>
        </div>
        <i
          className={`fa fa-chevron-right text-[8px] transition-transform duration-500 ${
            isExpanded
              ? 'rotate-90 text-[var(--accent-primary)]'
              : 'text-[var(--text-secondary)]'
          }`}
        ></i>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pt-2 px-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
