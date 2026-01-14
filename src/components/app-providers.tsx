"use client";

import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RootProvider } from "fumadocs-ui/provider/next";
import {
  buildDocsPathname,
  DOCS_LANGUAGES,
  getDocsLocaleFromPathname,
  isDocsLanguage,
  type DocsLanguage,
} from "@/lib/i18n";

const LOCALE_LABELS: Record<DocsLanguage, string> = {
  en: "English",
  "zh-CN": "简体中文",
};

export function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const locale = getDocsLocaleFromPathname(pathname);

  const locales = DOCS_LANGUAGES.map((language) => ({
    locale: language,
    name: LOCALE_LABELS[language],
  }));

  return (
    <RootProvider
      i18n={{
        locale,
        locales,
        onLocaleChange: (nextLocale) => {
          if (!isDocsLanguage(nextLocale) || nextLocale === locale) return;
          router.push(buildDocsPathname(pathname, nextLocale));
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
