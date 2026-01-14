import type { StructuredData } from "fumadocs-core/mdx-plugins/remark-structure";
import type { TOCItemType } from "fumadocs-core/toc";
import type { MDXContent } from "mdx/types";

declare module "fumadocs-core/source" {
  interface PageData {
    body: MDXContent;
    toc: TOCItemType[];
    structuredData: StructuredData;
    _exports?: Record<string, unknown>;
    full?: boolean;
  }
}
