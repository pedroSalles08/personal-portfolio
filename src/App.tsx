import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ConnectingLine } from './components/ConnectingLine';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#101010] text-white selection:bg-accent/30 selection:text-white">
        <Header />
        <main className="relative mx-auto flex flex-col items-center justify-center overflow-x-hidden">
          <HomeSection />
          <ConnectingLine />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
