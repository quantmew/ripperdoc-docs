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
import { DEFAULT_LANGUAGE } from "@/lib/i18n";
import { DocsPageContent } from "@/components/docs-page-content";
import fs from "fs";
import path from "path";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

async function getRawMarkdown(slug?: string[]): Promise<string> {
  const docsDir = path.join(process.cwd(), "content/docs/en");
  const filePath = slug
    ? path.join(docsDir, `${slug.join("/")}.mdx`)
    : path.join(docsDir, "index.mdx");

  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug, DEFAULT_LANGUAGE);
  if (!page) notFound();

  const MDX = page.data.body;
  const rawMarkdown = await getRawMarkdown(params.slug);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <DocsPageContent
          rawMarkdown={rawMarkdown}
          title={page.data.title ?? ""}
        >
          <MDX components={getMDXComponents({})} />
        </DocsPageContent>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.getPages(DEFAULT_LANGUAGE).map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, DEFAULT_LANGUAGE);
  if (!page) notFound();

  return {
    title: page.data.title ?? "Untitled",
    description: page.data.description,
  };
}
