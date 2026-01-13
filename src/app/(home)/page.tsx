import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center space-y-12 max-w-4xl mx-auto px-4 py-12 sm:pt-24">
      <div className="space-y-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span className="text-6xl">🔧</span>
          <h1 className="text-6xl sm:text-7xl tracking-tighter font-bold">
            Ripperdoc
          </h1>
        </div>

        <p className="text-sm px-3 rounded-lg border py-1.5 bg-muted font-medium">
          Open Source AI Coding Agent
        </p>

        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          An extensible AI coding assistant that runs in your terminal.
          Works with any LLM - Claude, GPT, DeepSeek, Gemini, or local models.
        </p>

        <div className="bg-muted/50 border rounded-lg px-4 py-3 font-mono text-sm">
          <span className="text-muted-foreground">$</span>{" "}
          <span className="text-primary">pip install ripperdoc</span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs/installation">Installation</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 pt-8 w-full">
          <FeatureCard
            title="Multi-Model Support"
            description="Works with Anthropic Claude, OpenAI, DeepSeek, Gemini, and any OpenAI-compatible API."
          />
          <FeatureCard
            title="Extensible"
            description="Customize with hooks, skills, subagents, and MCP integration."
          />
          <FeatureCard
            title="Terminal Native"
            description="Rich CLI interface with syntax highlighting, streaming responses, and real-time feedback."
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-5 text-left bg-card">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
