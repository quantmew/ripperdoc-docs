import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import {
  ALTERNATE_LANGUAGES,
  DEFAULT_LANGUAGE,
  isDocsLanguage,
} from "@/lib/i18n";

interface PageProps {
  params: Promise<{ slug?: string[]; lang: string }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { lang } = params;

  if (!isDocsLanguage(lang) || lang === DEFAULT_LANGUAGE) notFound();

  const page = source.getPage(params.slug, lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents({})} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return ALTERNATE_LANGUAGES.flatMap((lang) =>
    source.getPages(lang).map((page) => ({
      lang,
      slug: page.slugs,
    })),
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { lang } = params;

  if (!isDocsLanguage(lang) || lang === DEFAULT_LANGUAGE) notFound();

  const page = source.getPage(params.slug, lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
