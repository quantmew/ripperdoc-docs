import { docs } from "../../.source/server";
import { defineI18n } from "fumadocs-core/i18n";
import { loader } from "fumadocs-core/source";
import { DEFAULT_LANGUAGE, DOCS_LANGUAGES } from "@/lib/i18n";

const i18n = defineI18n({
  languages: [...DOCS_LANGUAGES],
  defaultLanguage: DEFAULT_LANGUAGE,
  hideLocale: "default-locale",
  parser: "dir",
  fallbackLanguage: DEFAULT_LANGUAGE,
});

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  i18n,
});
