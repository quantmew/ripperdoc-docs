export const DOCS_LANGUAGES = ["en", "zh-CN"] as const;
export type DocsLanguage = (typeof DOCS_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: DocsLanguage = "en";
export const ALTERNATE_LANGUAGES: DocsLanguage[] = DOCS_LANGUAGES.filter(
  (lang) => lang !== DEFAULT_LANGUAGE,
);

export function isDocsLanguage(value: string): value is DocsLanguage {
  return DOCS_LANGUAGES.includes(value as DocsLanguage);
}

function normalizePathname(pathname: string): string {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getDocsLocaleFromPathname(pathname: string): DocsLanguage {
  const segments = normalizePathname(pathname).split("/").filter(Boolean);
  if (
    segments.length >= 2 &&
    isDocsLanguage(segments[0]) &&
    segments[1] === "docs"
  ) {
    return segments[0];
  }
  return DEFAULT_LANGUAGE;
}

export function buildDocsPathname(
  pathname: string,
  targetLocale: DocsLanguage,
): string {
  const segments = normalizePathname(pathname).split("/").filter(Boolean);

  let rest: string[] | null = null;
  if (segments[0] === "docs") {
    rest = segments.slice(1);
  } else if (
    segments.length >= 2 &&
    isDocsLanguage(segments[0]) &&
    segments[1] === "docs"
  ) {
    rest = segments.slice(2);
  }

  const base =
    targetLocale === DEFAULT_LANGUAGE ? "/docs" : `/${targetLocale}/docs`;

  if (!rest) return base;
  return rest.length ? `${base}/${rest.join("/")}` : base;
}
