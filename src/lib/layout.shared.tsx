import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 mr-4">
          <span className="text-xl">🔧</span>
          <p className="tracking-tight text-lg font-semibold">Ripperdoc</p>
        </div>
      ),
    },
    githubUrl: "https://github.com/anthropics/ripperdoc",
    links: [
      {
        url: "/docs",
        text: "Docs",
        active: "nested-url",
      },
      {
        url: "https://pypi.org/project/ripperdoc/",
        text: "PyPI",
        active: "none",
        external: true,
      },
    ],
    themeSwitch: {
      enabled: true,
      mode: "light-dark-system",
    },
  };
}
