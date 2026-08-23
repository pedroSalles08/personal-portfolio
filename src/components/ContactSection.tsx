import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GitHubIcon, MailIcon, WhatsAppIcon, InstagramIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <GitHubIcon size={18} />;
      case 'mail':
        return <MailIcon size={18} />;
      case 'whatsapp':
        return <WhatsAppIcon size={18} />;
      case 'instagram':
        return <InstagramIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <div id="contact" className="pt-20 pb-16 w-full flex flex-col items-center justify-center">
      <div className="relative flex w-full items-center justify-center">
        {/* Wide Card matching Rython (w-[90%] md:w-[600px] lg:w-2/3) */}
        <div className="w-[90%] md:w-[600px] lg:w-2/3">
          <div
            className="card z-10 mb-0 rounded-xl animate-fadeIn bg-gradient-to-br from-[#101010] via-[#252525] to-[#101010] border border-gray-800/80"
            style={{
              boxShadow: '0 10px 25px 10px rgba(4, 57, 57, 0.5)',
              padding: '0.5rem',
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 py-10 px-6">
              {/* Profile Photo with Cyan Accent Border */}
              <div className="mb-1 px-5">
                <div className="flex h-[130px] w-[130px] md:h-[140px] md:w-[140px] items-center justify-center overflow-hidden rounded-full border-2 border-solid border-accent bg-[#2a2a2a] aspect-square shadow-[0_0_15px_rgba(114,255,255,0.3)]">
                  <img
                    src="/images/profile/pedro-salles.jpg"
                    alt={t.contact.name}
                    className="h-full w-full object-cover object-[center_22%] select-none"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white tracking-tight">
                  {t.contact.name}
                </div>
                <div className="text-muted-foreground text-xl">
                  {t.contact.role}
                </div>
              </div>

              {/* Lower Contact Area: Horizontal on Desktop (Email | Divider | Socials) */}
              <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row md:items-stretch">
                {/* Email Block on Left */}
                <div className="flex flex-col justify-center text-center md:text-left">
                  <div className="text-muted-foreground text-base">
                    {t.contact.emailLabel}
                  </div>
                  <div className="text-white">
                    <a
                      href={`mailto:${t.contact.emailValue}`}
                      className="hover:text-accent transition-colors font-medium"
                    >
                      {t.contact.emailValue}
                    </a>
                  </div>
                </div>

                {/* Vertical Divider Line with Accent Color */}
                <div className="bg-accent h-[1px] w-full md:h-auto md:w-[1px] self-stretch opacity-80" />

                {/* Social Icons on Right */}
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-3">
                    {t.contact.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-[filter] duration-150 hover:invert shadow-sm"
                      >
                        {renderSocialIcon(social.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="mt-12 text-center text-xs text-muted-foreground font-normal">
        {t.contact.copyright}
      </div>
    </div>
  );
};
