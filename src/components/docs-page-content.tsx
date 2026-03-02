"use client";

import * as React from "react";
import { CopyAsMarkdownButton } from "@/components/copy-as-markdown-button";

interface DocsPageContentProps {
  children: React.ReactNode;
  rawMarkdown: string;
  title: string;
  action?: React.ReactNode;
}

export function DocsPageContent({
  children,
  rawMarkdown,
  title,
  action,
}: DocsPageContentProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">{action}</div>
        {mounted && (
          <CopyAsMarkdownButton rawMarkdown={rawMarkdown} title={title} />
        )}
      </div>
      {children}
    </div>
  );
}
