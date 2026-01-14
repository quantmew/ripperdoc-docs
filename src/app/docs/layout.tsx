import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree(DEFAULT_LANGUAGE)}
      {...baseOptions(DEFAULT_LANGUAGE)}
      i18n
    >
      {children}
    </DocsLayout>
  );
}
