import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { DEFAULT_LANGUAGE, isDocsLanguage } from "@/lib/i18n";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { notFound } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isDocsLanguage(lang) || lang === DEFAULT_LANGUAGE) notFound();

  return (
    <DocsLayout tree={source.getPageTree(lang)} {...baseOptions(lang)} i18n>
      {children}
    </DocsLayout>
  );
}
