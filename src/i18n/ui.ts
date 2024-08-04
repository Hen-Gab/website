// https://docs.astro.build/en/recipes/i18n/#hide-default-language-in-the-url

export const languages = {
    pt: 'Português',
    en: 'English',
};
  
export const defaultLang = 'pt';
  
export const ui = {
    pt: {
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
    },
    en: {
      'nav.about': 'About',
      'nav.projects': 'Projects',
    },
} as const;

export const showDefaultLang = false;