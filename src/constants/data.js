// EXPERIENCE DATA - Easy to edit
export const experienceData = [
  {
    position: 'experience.jobs.0.position',
    company: 'experience.jobs.0.company',
    period: 'experience.jobs.0.period',
    description: 'experience.jobs.0.description',
  },
  {
    position: 'experience.jobs.1.position',
    company: 'experience.jobs.1.company',
    period: 'experience.jobs.1.period',
    description: 'experience.jobs.1.description',
  },
  {
    position: 'experience.jobs.2.position',
    company: 'experience.jobs.2.company',
    period: 'experience.jobs.2.period',
    description: 'experience.jobs.2.description',
  },
  {
    position: 'experience.jobs.3.position',
    company: 'experience.jobs.3.company',
    period: 'experience.jobs.3.period',
    description: 'experience.jobs.3.description',
  },
]

// PROJECTS DATA - Easy to edit
export const projectsData = [
  ...Array.from({ length: 9 }, (_, index) => ({
    name: `projects.items.${index}.name`,
    description: `projects.items.${index}.description`,
    frameworks: `projects.items.${index}.frameworks`,
    imageUrl: `projects.items.${index}.imageUrl`,
    link: `projects.items.${index}.link`,
  })),
]

// SOCIAL LINKS - Easy to edit
export const socialLinks = [
  {
    name: 'GitHub',
    handle: 'basharmestrih',
    icon: 'https://cdn.simpleicons.org/github/ffffff',
    url: 'https://github.com/basharmestrih',
  },
  {
    name: 'LinkedIn',
    handle: 'bashar-mestrih',
    icon: 'https://cdn.simpleicons.org/linkedin/ffffff',
    url: 'https://www.linkedin.com/in/bashar-mestrih-b99201242/',
  },
  {
    name: 'WhatsApp',
    handle: '+963 371 389 15',
    icon: 'https://cdn.simpleicons.org/whatsapp/ffffff',
    url: 'https://wa.me/96337138915',
  },
  {
    name: 'Instagram',
    handle: '@bashar_mestrih',
    icon: 'https://cdn.simpleicons.org/instagram/ffffff',
    url: 'https://www.instagram.com/bashar_mestrih?igsh=MW9na2IzcmI5d2NodA==',
  },
  {
    name: 'Behance',
    handle: 'basharmest',
    icon: 'https://cdn.simpleicons.org/behance/ffffff',
    url: 'https://www.behance.net/basharmest',
  },
]
