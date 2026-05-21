import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  // With base path, first segment might be the base. We strip from astro internals via `Astro.currentLocale` instead.
  const candidate = segments[0];
  if (candidate === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) return '/' + clean;
  return `/${lang}/` + clean;
}

export function altLangPath(currentLang: Lang, currentPath: string): { lang: Lang; href: string } {
  const target: Lang = currentLang === 'es' ? 'en' : 'es';
  const clean = currentPath.replace(/^\/(en|es)\//, '/').replace(/^\/(en|es)$/, '/');
  if (target === 'es') return { lang: 'es', href: clean === '' ? '/' : clean };
  const withLang = clean === '/' ? '/en/' : `/en${clean}`;
  return { lang: 'en', href: withLang };
}
