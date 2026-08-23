import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GitHubIcon, MailIcon, WhatsAppIcon, InstagramIcon } from './Icons';

export const HomeSection: React.FC = () => {
  const { t, greetingText } = useLanguage();
  const [typedGreeting, setTypedGreeting] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect matching Rython Greeting.svelte
  useEffect(() => {
    setTypedGreeting('');
    setShowCursor(true);
    let index = 0;
    const target = greetingText;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < target.length) {
          setTypedGreeting(target.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, 50);

      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(timeout);
  }, [greetingText]);

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
    <div id="home" className="flex items-center justify-center pt-32">
      <div className="w-[90%] md:w-[600px] lg:w-1/2">
        <div
          className="card z-10 mb-0 rounded-xl animate-fadeIn bg-gradient-to-br from-[#101010] to-[#202020]"
          style={{
            boxShadow: '0 10px 25px 10px rgba(4, 57, 57, 0.5)',
          }}
        >
          <div className="w-full px-5 pt-10 pb-6 lg:px-10">
            {/* Header with Avatar, Name and Role */}
            <div className="flex min-h-20 flex-row items-center">
              <div className="mr-3 flex h-20 w-20 shrink-0 items-center justify-center">
                {/* Profile photo with 80x80 dimensions */}
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-700 bg-[#2a2a2a] shadow-inner">
                  <img
                    src="/images/profile/pedro-salles.jpg"
                    alt={t.home.name}
                    className="h-full w-full object-cover object-[center_22%] select-none"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="ml-2 flex flex-col items-start justify-center">
                <div
                  id="name"
                  className="animate-gradient text-2xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(90deg, #72ffff 0%, #20ffb8 55%, #0096ff 100%) 0 0 / 200% text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t.home.name}
                </div>
                <div className="w-full text-xl text-gray-300 font-medium">
                  {t.home.role}
                </div>
              </div>
            </div>

            {/* Dynamic Typewriter Greeting */}
            <div className="mt-6 mb-4 text-2xl font-bold text-white flex items-center min-h-[36px]">
              <span>{typedGreeting}</span>
              {showCursor && (
                <span className="ml-1 animate-pulse font-extralight text-accent">|</span>
              )}
            </div>

            {/* Bio Presentation */}
            <p className="text-left text-base leading-relaxed text-gray-200 font-normal">
              {t.home.bio}
            </p>

            {/* Circular Social Links (Invert on Hover) */}
            <div className="mt-8 flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center gap-3">
                {t.home.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-[filter] duration-150 hover:invert"
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
  );
};
