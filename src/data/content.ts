import { ContentData, Locale } from '../types/content';

export const content: Record<Locale, ContentData> = {
  'pt-BR': {
    meta: {
      title: 'Pedro Salles — Desenvolvedor de Software',
      description: 'Estudante de Informática e desenvolvedor de software. Crio sites, automações e ferramentas para resolver problemas reais.',
    },
    nav: {
      home: 'Início',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    home: {
      name: 'Pedro Salles',
      role: 'Desenvolvedor de Software',
      bio: 'Sou estudante de Informática e desenvolvedor de software. Crio sites, automações e ferramentas para resolver problemas reais, com projetos que vão de soluções para o ambiente acadêmico a aplicações para empresas locais.',
      greetings: {
        morning: 'Bom dia!',
        afternoon: 'Boa tarde!',
        evening: 'Boa noite!',
      },
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/pedroSalles08',
          icon: 'github',
          ariaLabel: 'Perfil no GitHub de Pedro Salles',
        },
        {
          name: 'E-mail',
          url: 'mailto:encarnacaosalless@gmail.com',
          icon: 'mail',
          ariaLabel: 'Enviar e-mail para Pedro Salles',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/5555999214159',
          icon: 'whatsapp',
          ariaLabel: 'Conversar no WhatsApp com Pedro Salles',
        },
      ],
    },
    experience: {
      sectionTitle: 'Experiência',
      tabs: {
        experience: 'Experiência',
        education: 'Formação',
        extracurricular: 'Extracurricular',
      },
      items: {
        experience: [
          {
            title: 'Desenvolvedor de Software',
            organization: 'OrbitalAuto',
            period: 'Fev 2026 – Presente',
            type: 'Projeto independente',
            location: 'IFFar',
            description: [
              'Desenvolvi uma aplicação web que automatiza o agendamento semanal de refeições no sistema Orbital do IFFar.',
              'Implementei automações para múltiplos usuários, persistência de configurações e mecanismos de recuperação quando uma execução não é concluída.',
              'Desenvolvi recursos de segurança e administração para proteger dados dos usuários e acompanhar o funcionamento das automações.',
            ],
          },
          {
            title: 'Desenvolvedor de Software',
            organization: 'InfoSIGAA',
            period: 'Ago 2026 – Presente',
            type: 'Projeto independente · Open Source',
            description: [
              'Criei uma extensão para Chrome que transforma notas, médias, faltas e frequência do SIGAA em um painel mais claro e acessível.',
              'Desenvolvi a integração com as páginas do SIGAA para coletar e organizar as informações acadêmicas sem exigir alterações no sistema original.',
              'Implementei mecanismos de privacidade e armazenamento pensados para dispositivos pessoais, compartilhados e sessões anônimas.',
            ],
          },
          {
            title: 'Desenvolvedor Full Stack',
            organization: 'Quelin Joias',
            period: 'Jul 2026 – Ago 2026',
            type: 'Projeto independente',
            description: [
              'Desenvolvi um catálogo digital mobile-first com busca, filtros, páginas individuais de produtos e contato contextual pelo WhatsApp.',
              'Criei um painel administrativo para gerenciar produtos, categorias, destaques, visibilidade e imagens.',
              'Estruturei banco de dados, autenticação administrativa, armazenamento de mídia e publicação da aplicação na Cloudflare.',
            ],
          },
        ],
        education: [
          {
            title: 'Técnico em Informática Integrado ao Ensino Médio',
            organization: 'Instituto Federal de Educação, Ciência e Tecnologia Farroupilha — Campus Júlio de Castilhos',
            period: '2024 – Presente',
            location: 'Júlio de Castilhos, RS, Brasil',
            type: '3º ano',
            description: [
              'Formação integrada em informática, incluindo desenvolvimento de software, lógica de programação, banco de dados, redes de computadores e outras áreas da computação.',
            ],
          },
        ],
        extracurricular: [
          {
            title: 'Curso HTML5 e CSS3: módulo 1 de 5 [40 horas]',
            organization: 'Curso em Vídeo — Gustavo Guanabara',
            period: '20 Fev 2025',
            type: 'Carga horária: 40 horas',
            description: [
              'Formação em fundamentos e práticas de desenvolvimento web com HTML5 e CSS3.',
            ],
          },
          {
            title: 'Algoritmos e Lógica de Programação - O Curso COMPLETO',
            organization: 'Udemy — Nelio Alves',
            period: '02 Fev 2025',
            type: 'Carga horária: 30,5 horas',
            description: [
              'Formação em lógica de programação, algoritmos, estruturas condicionais, estruturas de repetição e resolução de problemas.',
            ],
          },
          {
            title: 'Fundamentos em Redes de Computadores',
            organization: 'Cisco Networking Academy (NetAcad) · Instituto Federal Farroupilha',
            period: 'Mar 2025 – Dez 2025',
            type: 'Carga horária: 40 horas',
            description: [
              'Formação em conceitos, tecnologias e práticas relacionadas à comunicação de dados e à infraestrutura de redes de computadores.',
            ],
          },
        ],
      },
    },
    projects: {
      sectionTitle: 'Projetos',
      items: [
        {
          id: 'quelin-joias',
          title: 'Quelin Joias',
          description: 'Catálogo digital de joias com vitrine pública e painel administrativo. Permite organizar produtos e categorias e direcionar o atendimento pelo WhatsApp.',
          tags: ['React', 'Cloudflare Pages', 'Cloudflare D1'],
          imageSrc: '/assets/projects/quelin-joias.png',
          imageAlt: 'Quelin Joias Catálogo Digital',
          ctaText: 'Ver projeto',
          ctaUrl: 'https://quelin-joias.pages.dev/',
          hasLiveCta: true,
        },
        {
          id: 'orbitalauto',
          title: 'OrbitalAuto',
          description: 'Aplicação que automatiza o agendamento semanal de refeições para estudantes do IFFar. O usuário define suas preferências e acompanha as automações por um painel.',
          tags: ['Next.js', 'FastAPI', 'Automation'],
          imageSrc: '/assets/projects/orbitalauto.png',
          imageAlt: 'OrbitalAuto Sistema de Automação',
          ctaText: 'Ver projeto',
          ctaUrl: 'https://orbitalauto.onrender.com/',
          hasLiveCta: true,
        },
        {
          id: 'infosigaa',
          title: 'InfoSIGAA',
          description: 'Extensão para Chrome que organiza notas, médias, faltas e frequência do SIGAA em um painel mais claro, mantendo os dados acadêmicos localmente no navegador.',
          tags: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
          imageSrc: '/assets/projects/infosigaa-site.png',
          imageAlt: 'InfoSIGAA Extensão para Chrome',
          ctaText: 'Ver projeto',
          ctaUrl: 'https://pedrosalles08.github.io/InfoSIGAA/',
          hasLiveCta: true,
        },
        {
          id: 'music-downloader',
          title: 'Music Downloader',
          description: 'Aplicativo para Windows que transforma listas de músicas e arquivos exportados do Spotify em uma fila organizada de downloads em MP3, com revisão dos resultados e acompanhamento do progresso.',
          tags: ['Python', 'PySide6', 'yt-dlp'],
          imageSrc: '/assets/projects/music-downloader.png',
          imageAlt: 'Music Downloader App Windows',
          hasLiveCta: false,
        },
        {
          id: 'sabor-dos-anjos',
          title: 'Sabor dos Anjos',
          description: 'Aplicação web para organizar ingredientes, receitas, produção, vendas, clientes e estoque de uma pequena confeitaria. Funciona como PWA e mantém os dados no próprio dispositivo.',
          tags: ['React', 'PWA', 'IndexedDB'],
          imageSrc: '/assets/projects/sabor-dos-anjos.png',
          imageAlt: 'Sabor dos Anjos Confeitaria PWA',
          hasLiveCta: false,
        },
      ],
    },
    skills: {
      sectionTitle: 'Habilidades',
      categories: [
        {
          title: 'Frontend',
          skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
        },
        {
          title: 'Backend',
          skills: ['Python', 'FastAPI', 'SQLite', 'Cloudflare Pages Functions'],
        },
        {
          title: 'Tools',
          skills: ['Git', 'Docker', 'GitHub Actions'],
        },
      ],
      bioParagraphs: [
        'Desenvolvo principalmente aplicações web, trabalhando tanto no frontend quanto no backend.',
        'Também desenvolvo automações em Python, extensões para navegador e aplicações desktop para Windows.',
        'Meu currículo completo está disponível abaixo. Para entrar em contato, envie um e-mail.',
      ],
      resumeButton: 'Ver currículo',
      resumeNotice: 'Currículo em PDF a ser disponibilizado em breve.',
      resumeUrl: '/assets/cv/resume-pt.pdf',
      emailLabel: 'encarnacaosalless@gmail.com',
    },
    contact: {
      sectionTitle: 'Contato',
      name: 'Pedro Salles',
      role: 'Desenvolvedor de Software',
      emailLabel: 'Entre em contato:',
      emailValue: 'encarnacaosalless@gmail.com',
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/pedroSalles08',
          icon: 'github',
          ariaLabel: 'GitHub Pedro Salles',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/5555999214159',
          icon: 'whatsapp',
          ariaLabel: 'WhatsApp Pedro Salles',
        },
        {
          name: 'E-mail',
          url: 'mailto:encarnacaosalless@gmail.com',
          icon: 'mail',
          ariaLabel: 'E-mail Pedro Salles',
        },
      ],
      copyright: 'Copyright © 2026 Pedro Salles. Todos os direitos reservados.',
    },
  },
  en: {
    meta: {
      title: 'Pedro Salles — Software Developer',
      description: "I'm an IT student and software developer. I build websites, automations, and tools to solve real-world problems.",
    },
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    home: {
      name: 'Pedro Salles',
      role: 'Software Developer',
      bio: "I'm an IT student and software developer. I build websites, automations, and tools to solve real-world problems, with projects ranging from solutions for academic environments to applications for small businesses.",
      greetings: {
        morning: 'Good morning!',
        afternoon: 'Good afternoon!',
        evening: 'Good evening!',
      },
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/pedroSalles08',
          icon: 'github',
          ariaLabel: 'GitHub profile of Pedro Salles',
        },
        {
          name: 'Email',
          url: 'mailto:encarnacaosalless@gmail.com',
          icon: 'mail',
          ariaLabel: 'Send email to Pedro Salles',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/5555999214159',
          icon: 'whatsapp',
          ariaLabel: 'Chat on WhatsApp with Pedro Salles',
        },
      ],
    },
    experience: {
      sectionTitle: 'Experience',
      tabs: {
        experience: 'Experience',
        education: 'Education',
        extracurricular: 'Extracurricular',
      },
      items: {
        experience: [
          {
            title: 'Software Developer',
            organization: 'OrbitalAuto',
            period: 'Feb 2026 – Present',
            type: 'Independent Project',
            location: 'IFFar',
            description: [
              "Developed a web application that automates weekly meal scheduling in IFFar's Orbital system.",
              'Implemented multi-user automation, persistent configuration, and recovery mechanisms for unsuccessful executions.',
              'Built security and administrative features to protect user data and monitor automation activity.',
            ],
          },
          {
            title: 'Software Developer',
            organization: 'InfoSIGAA',
            period: 'Aug 2026 – Present',
            type: 'Independent Project · Open Source',
            description: [
              'Created a Chrome extension that turns SIGAA grades, averages, absences, and attendance data into a clearer and more accessible dashboard.',
              'Developed the integration with SIGAA pages to collect and organize academic information without modifying the original system.',
              'Implemented privacy and storage mechanisms designed for personal devices, shared computers, and incognito sessions.',
            ],
          },
          {
            title: 'Full Stack Developer',
            organization: 'Quelin Joias',
            period: 'Jul 2026 – Aug 2026',
            type: 'Independent Project',
            description: [
              'Developed a mobile-first digital catalog with search, filters, individual product pages, and contextual WhatsApp contact.',
              'Built an administrative dashboard for managing products, categories, featured items, visibility, and images.',
              'Structured the database, admin authentication, media storage, and application deployment on Cloudflare.',
            ],
          },
        ],
        education: [
          {
            title: 'High School Integrated with a Technical Program in Information Technology',
            organization: 'Federal Institute of Education, Science and Technology Farroupilha — Júlio de Castilhos Campus',
            period: '2024 – Present',
            location: 'Júlio de Castilhos, RS, Brazil',
            type: '3rd year',
            description: [
              'Technical education in information technology integrated with high school, covering software development, programming logic, databases, computer networks, and other areas of computing.',
            ],
          },
        ],
        extracurricular: [
          {
            title: 'HTML5 and CSS3 Course: Module 1 of 5 [40 Hours]',
            organization: 'Curso em Vídeo — Gustavo Guanabara',
            period: 'Feb 20, 2025',
            type: 'Duration: 40 hours',
            description: [
              'Training in web development fundamentals and practices using HTML5 and CSS3.',
            ],
          },
          {
            title: 'Algorithms and Programming Logic - The COMPLETE Course',
            organization: 'Udemy — Nelio Alves',
            period: 'Feb 2, 2025',
            type: 'Duration: 30.5 hours',
            description: [
              'Training in programming logic, algorithms, conditional structures, loops, and problem solving.',
            ],
          },
          {
            title: 'Computer Networking Fundamentals',
            organization: 'Cisco Networking Academy (NetAcad) · Instituto Federal Farroupilha',
            period: 'Mar 2025 – Dec 2025',
            type: 'Duration: 40 hours',
            description: [
              'Training in fundamental concepts, technologies, and practices related to data communication and computer network infrastructure.',
            ],
          },
        ],
      },
    },
    projects: {
      sectionTitle: 'Projects',
      items: [
        {
          id: 'quelin-joias',
          title: 'Quelin Joias',
          description: 'A digital jewelry catalog with a public storefront and an admin dashboard for managing products and categories, with customer inquiries directed through WhatsApp.',
          tags: ['React', 'Cloudflare Pages', 'Cloudflare D1'],
          imageSrc: '/assets/projects/quelin-joias.png',
          imageAlt: 'Quelin Joias Digital Catalog',
          ctaText: 'View Project',
          ctaUrl: 'https://quelin-joias.pages.dev/',
          hasLiveCta: true,
        },
        {
          id: 'orbitalauto',
          title: 'OrbitalAuto',
          description: 'An application that automates weekly meal scheduling for IFFar students. Users set their preferences and track the automation through a dashboard.',
          tags: ['Next.js', 'FastAPI', 'Automation'],
          imageSrc: '/assets/projects/orbitalauto.png',
          imageAlt: 'OrbitalAuto Automation System',
          ctaText: 'View Project',
          ctaUrl: 'https://orbitalauto.onrender.com/',
          hasLiveCta: true,
        },
        {
          id: 'infosigaa',
          title: 'InfoSIGAA',
          description: 'A Chrome extension that organizes SIGAA grades, averages, absences, and attendance into a clearer dashboard while keeping academic data locally in the browser.',
          tags: ['JavaScript', 'Chrome Extension', 'Manifest V3'],
          imageSrc: '/assets/projects/infosigaa-site.png',
          imageAlt: 'InfoSIGAA Chrome Extension',
          ctaText: 'View Project',
          ctaUrl: 'https://pedrosalles08.github.io/InfoSIGAA/',
          hasLiveCta: true,
        },
        {
          id: 'music-downloader',
          title: 'Music Downloader',
          description: 'A Windows application that turns music lists and Spotify-exported files into an organized MP3 download queue, with result review and progress tracking.',
          tags: ['Python', 'PySide6', 'yt-dlp'],
          imageSrc: '/assets/projects/music-downloader.png',
          imageAlt: 'Music Downloader Windows App',
          hasLiveCta: false,
        },
        {
          id: 'sabor-dos-anjos',
          title: 'Sabor dos Anjos',
          description: 'A web application for managing ingredients, recipes, production, sales, customers, and inventory for a small bakery. It works as a PWA and stores its data locally on the device.',
          tags: ['React', 'PWA', 'IndexedDB'],
          imageSrc: '/assets/projects/sabor-dos-anjos.png',
          imageAlt: 'Sabor dos Anjos Bakery PWA',
          hasLiveCta: false,
        },
      ],
    },
    skills: {
      sectionTitle: 'Skills',
      categories: [
        {
          title: 'Frontend',
          skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
        },
        {
          title: 'Backend',
          skills: ['Python', 'FastAPI', 'SQLite', 'Cloudflare Pages Functions'],
        },
        {
          title: 'Tools',
          skills: ['Git', 'Docker', 'GitHub Actions'],
        },
      ],
      bioParagraphs: [
        'I primarily develop web applications, working across both the frontend and the backend.',
        'I also build Python automations, browser extensions, and desktop applications for Windows.',
        'My full resume is available below. To get in touch, send me an email.',
      ],
      resumeButton: 'View Resume',
      resumeNotice: 'PDF resume will be available soon.',
      resumeUrl: '/assets/cv/resume-en.pdf',
      emailLabel: 'encarnacaosalless@gmail.com',
    },
    contact: {
      sectionTitle: 'Contact',
      name: 'Pedro Salles',
      role: 'Software Developer',
      emailLabel: 'Email me at:',
      emailValue: 'encarnacaosalless@gmail.com',
      socials: [
        {
          name: 'GitHub',
          url: 'https://github.com/pedroSalles08',
          icon: 'github',
          ariaLabel: 'GitHub Pedro Salles',
        },
        {
          name: 'WhatsApp',
          url: 'https://wa.me/5555999214159',
          icon: 'whatsapp',
          ariaLabel: 'WhatsApp Pedro Salles',
        },
        {
          name: 'Email',
          url: 'mailto:encarnacaosalless@gmail.com',
          icon: 'mail',
          ariaLabel: 'Email Pedro Salles',
        },
      ],
      copyright: 'Copyright © 2026 Pedro Salles. All Rights Reserved.',
    },
  },
};
