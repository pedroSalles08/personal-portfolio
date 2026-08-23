import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CalendarIcon, MapPinIcon } from './Icons';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'extracurricular'>('experience');

  const tabList = [
    { key: 'experience' as const, label: t.experience.tabs.experience },
    { key: 'education' as const, label: t.experience.tabs.education },
    { key: 'extracurricular' as const, label: t.experience.tabs.extracurricular },
  ];

  const currentItems = t.experience.items[activeTab];

  return (
    <div id="experience" className="flex scroll-mt-24 flex-col items-center justify-center">
      {/* Horizontal Divider Line */}
      <hr className="mx-auto mb-10 h-[1px] w-1/3 border-[#404040]" />

      <div className="flex flex-col gap-2 w-[90%] md:w-[600px] lg:w-2/3">
        {/* Tab Buttons Bar */}
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="text-primary inline-flex h-11 items-center justify-center rounded-lg bg-[#101010] p-[3px] w-full border border-gray-800"
        >
          {tabList.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex h-[calc(100%-2px)] flex-1 cursor-pointer items-center justify-center rounded-md border border-transparent px-2 py-4 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary text-white shadow-sm border-gray-700/60'
                    : 'text-gray-400 hover:text-white hover:bg-secondary/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel with Gradient */}
        <div className="flex-1 rounded-md bg-gradient-to-bl from-[#101010] via-[#272727] to-[#181818] px-6 py-6 border border-gray-800/80 shadow-lg">
          <div className="flex flex-col gap-6">
            {currentItems.map((item, idx) => {
              const isLast = idx === currentItems.length - 1;
              return (
                <div key={idx} className="flex flex-row items-start gap-4">
                  {/* Timeline Point and Vertical Gray Line */}
                  <div className="flex flex-col items-center justify-start gap-2 self-stretch pt-2">
                    <div className="bg-accent h-2.5 w-2.5 rounded-full shadow-[0_0_8px_#72ffff]" />
                    {!isLast && <div className="w-[1px] flex-grow bg-gray-700 min-h-[40px]" />}
                  </div>

                  {/* Experience Content */}
                  <div className="pb-3 flex-1">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-base text-gray-300 font-semibold mt-0.5">
                      {item.organization}
                    </div>

                    {/* Metadata: Period & Location / Type */}
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex flex-row items-center gap-1.5">
                        <CalendarIcon size={14} className="text-gray-400" />
                        <span>{item.period}</span>
                      </div>
                      {(item.location || item.type) && (
                        <div className="flex flex-row items-center gap-1.5">
                          <MapPinIcon size={14} className="text-gray-400" />
                          <span>{[item.type, item.location].filter(Boolean).join(' · ')}</span>
                        </div>
                      )}
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-gray-200 leading-relaxed">
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-gray-300">
                          <span className="text-gray-200">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
