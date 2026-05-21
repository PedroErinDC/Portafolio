import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

const ROUTE_MAP_ES_TO_EN: Record<string, string> = {
  '/': '/en/',
  '/sobre-mi': '/en/about',
  '/sobre-mi/': '/en/about/',
  '/proyectos': '/en/projects',
  '/proyectos/': '/en/projects/',
  '/trabajo/cedis-vision': '/en/work/cedis-vision',
  '/trabajo/cedis-vision/': '/en/work/cedis-vision/',
  '/trabajo/publicvector': '/en/work/publicvector',
  '/trabajo/publicvector/': '/en/work/publicvector/',
  '/escuela/juego-unity': '/en/school/unity-game',
  '/escuela/juego-unity/': '/en/school/unity-game/',
  '/contacto': '/en/contact',
  '/contacto/': '/en/contact/',
};

const ROUTE_MAP_EN_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP_ES_TO_EN).map(([es, en]) => [en, es])
);

function stripBase(pathname: string, base: string): string {
  const normalizedBase = base.replace(/\/$/, '');
  if (normalizedBase && pathname.startsWith(normalizedBase)) {
    const stripped = pathname.slice(normalizedBase.length);
    return stripped === '' ? '/' : stripped;
  }
  return pathname;
}

function withBase(path: string, base: string): string {
  const normalizedBase = base.replace(/\/$/, '');
  if (!normalizedBase) return path;
  return normalizedBase + path;
}

export function getLangFromPath(pathname: string, base: string): Lang {
  const clean = stripBase(pathname, base);
  return clean.startsWith('/en') ? 'en' : 'es';
}

export function altLangPath(currentLang: Lang, currentPath: string, base: string): { lang: Lang; href: string } {
  const target: Lang = currentLang === 'es' ? 'en' : 'es';
  const cleanPath = stripBase(currentPath, base);

  let mapped: string | undefined;
  if (target === 'en') {
    mapped = ROUTE_MAP_ES_TO_EN[cleanPath];
  } else {
    mapped = ROUTE_MAP_EN_TO_ES[cleanPath];
  }

  const href = mapped ?? (target === 'en' ? '/en/' : '/');
  return { lang: target, href: withBase(href, base) };
}
