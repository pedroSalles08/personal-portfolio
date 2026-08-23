import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="skills" className="scroll-mt-16 pt-20">
      <div className="flex h-fit flex-col items-center justify-center">
        <h2 className="mb-8 text-center text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t.skills.sectionTitle}
        </h2>

        {/* Asymmetric 2-Card Grid (1 col + 2 col) */}
        <div className="grid w-[90%] grid-cols-1 gap-x-10 gap-y-6 md:w-[600px] lg:w-2/3 lg:grid-cols-3">
          {/* Left Card: Tech Stack Categories */}
          <div
            className="card z-10 mb-0 rounded-xl bg-gradient-to-br from-[#101010] to-[#202020] border border-gray-800/60"
            style={{
              boxShadow: '0 10px 25px 10px rgba(4, 57, 57, 0.5)',
            }}
          >
            <div className="flex flex-col items-start justify-start gap-5 px-6 py-6 text-left">
              {t.skills.categories.map((category) => (
                <div key={category.title} className="w-full">
                  <div className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-300 leading-relaxed">
                    {category.skills.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Bio Summary, Resume CTA & Direct Contact */}
          <div
            className="card z-10 mb-0 rounded-xl bg-gradient-to-br from-[#202020] to-[#101010] lg:col-span-2 border border-gray-800/60 flex flex-col justify-between"
            style={{
              boxShadow: '0 10px 25px 10px rgba(4, 57, 57, 0.5)',
            }}
          >
            <div className="flex flex-col items-start justify-start gap-4 px-6 py-6 text-left">
              {t.skills.bioParagraphs.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-base text-gray-200 leading-relaxed">
                  {paragraph.includes('encarnacaosalless@gmail.com') || paragraph.includes('e-mail') || paragraph.includes('email') ? (
                    <span>
                      {paragraph.split(/(e-mail|email|Email)/i).map((chunk, cIdx) => {
                        if (/^(e-mail|email|Email)$/i.test(chunk)) {
                          return (
                            <a
                              key={cIdx}
                              href="mailto:encarnacaosalless@gmail.com"
                              className="text-accent underline hover:text-white transition-colors"
                            >
                              {chunk}
                            </a>
                          );
                        }
                        return chunk;
                      })}
                    </span>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}

              {/* View Resume Button */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={t.skills.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors duration-200 hover:bg-neutral-200 shadow-md"
                >
                  {t.skills.resumeButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
