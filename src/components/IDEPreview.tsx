import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  FileCode,
  Folder,
  FolderOpen,
  Terminal,
  Sparkles,
  Play,
  Settings,
  Search,
  GitBranch,
  Box,
  X,
  Minus,
  Square,
} from "lucide-react";

const IDEPreview = () => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["src", "components"]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  const fileTree = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "App.tsx", type: "file" },
            { name: "Header.tsx", type: "file" },
            { name: "Sidebar.tsx", type: "file" },
          ],
        },
        { name: "index.tsx", type: "file" },
        { name: "styles.css", type: "file" },
      ],
    },
    { name: "package.json", type: "file" },
    { name: "tsconfig.json", type: "file" },
  ];

  const renderTree = (items: any[], depth = 0) => {
    return items.map((item) => (
      <div key={item.name}>
        <div
          className={`flex items-center gap-2 py-1 px-2 text-sm cursor-pointer hover:bg-secondary/50 transition-colors ${
            depth > 0 ? `ml-${depth * 4}` : ""
          }`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => item.type === "folder" && toggleFolder(item.name)}
        >
          {item.type === "folder" ? (
            <>
              {expandedFolders.includes(item.name) ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
              {expandedFolders.includes(item.name) ? (
                <FolderOpen className="w-4 h-4 text-primary" />
              ) : (
                <Folder className="w-4 h-4 text-primary" />
              )}
            </>
          ) : (
            <>
              <span className="w-4" />
              <FileCode className="w-4 h-4 text-muted-foreground" />
            </>
          )}
          <span className="text-foreground/80">{item.name}</span>
        </div>
        {item.type === "folder" &&
          expandedFolders.includes(item.name) &&
          item.children &&
          renderTree(item.children, depth + 1)}
      </div>
    ));
  };

  const codeLines = [
    { num: 1, content: 'import React from "react";', type: "import" },
    { num: 2, content: 'import { Button } from "./ui/button";', type: "import" },
    { num: 3, content: "", type: "empty" },
    { num: 4, content: "export const App = () => {", type: "function" },
    { num: 5, content: "  const [count, setCount] = useState(0);", type: "code" },
    { num: 6, content: "", type: "empty" },
    { num: 7, content: "  return (", type: "code" },
    { num: 8, content: '    <div className="container">', type: "jsx" },
    { num: 9, content: '      <h1 className="title">Hello AstraIDE</h1>', type: "jsx" },
    { num: 10, content: "      <Button onClick={() => setCount(c => c + 1)}>", type: "jsx" },
    { num: 11, content: "        Count: {count}", type: "jsx" },
    { num: 12, content: "      </Button>", type: "jsx" },
  ];

  const aiSuggestion = [
    { content: "      <p className=\"text-muted\">", type: "suggestion" },
    { content: "        You've clicked {count} times!", type: "suggestion" },
    { content: "      </p>", type: "suggestion" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Experience the </span>
            <span className="text-primary">Future of Coding</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A powerful, AI-enhanced development environment with intelligent
            autocomplete, integrated terminal, and seamless agent workflows.
          </p>
        </div>

        {/* IDE Window */}
        <div className="max-w-6xl mx-auto border-2 border-border bg-card shadow-glow-lg overflow-hidden">
          {/* Window Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-chart-4" />
                <div className="w-3 h-3 rounded-full bg-chart-3" />
              </div>
              <span className="text-sm text-muted-foreground ml-4">
                AstraIDE — my-project
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-muted-foreground" />
              <Square className="w-3 h-3 text-muted-foreground" />
              <X className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* IDE Layout */}
          <div className="flex h-[500px]">
            {/* Activity Bar */}
            <div className="w-12 bg-background border-r border-border flex flex-col items-center py-4 gap-4">
              <FileCode className="w-5 h-5 text-primary" />
              <Search className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              <GitBranch className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              <Box className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              <Sparkles className="w-5 h-5 text-accent hover:text-accent/80 transition-colors cursor-pointer" />
              <div className="flex-1" />
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            </div>

            {/* Sidebar */}
            <div className="w-56 bg-sidebar border-r border-border overflow-y-auto">
              <div className="px-3 py-2 text-xs text-muted-foreground uppercase tracking-wide">
                Explorer
              </div>
              <div className="py-1">{renderTree(fileTree)}</div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Tabs */}
              <div className="flex items-center bg-secondary border-b border-border">
                <div className="px-4 py-2 bg-card border-r border-border flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-primary" />
                  <span className="text-sm">App.tsx</span>
                  <X className="w-3 h-3 text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
              </div>

              {/* Editor */}
              <div className="flex-1 overflow-auto bg-card p-4">
                <div className="font-mono text-sm">
                  {codeLines.map((line) => (
                    <div key={line.num} className="flex">
                      <span className="w-8 text-muted-foreground/50 select-none">
                        {line.num}
                      </span>
                      <span
                        className={
                          line.type === "import"
                            ? "text-chart-2"
                            : line.type === "function"
                            ? "text-accent"
                            : line.type === "jsx"
                            ? "text-chart-4"
                            : "text-foreground"
                        }
                      >
                        {line.content}
                      </span>
                    </div>
                  ))}
                  
                  {/* AI Suggestion */}
                  <div className="border-l-2 border-primary/50 bg-primary/5 -ml-1 pl-1 animate-pulse">
                    {aiSuggestion.map((line, i) => (
                      <div key={i} className="flex">
                        <span className="w-8 text-muted-foreground/30 select-none">
                          {13 + i}
                        </span>
                        <span className="text-primary/60">{line.content}</span>
                      </div>
                    ))}
                  </div>

                  {/* AI Badge */}
                  <div className="mt-2 ml-8 inline-flex items-center gap-2 px-2 py-1 bg-primary/10 border border-primary/30 text-xs">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-primary">Tab to accept • Esc to dismiss</span>
                  </div>
                </div>
              </div>

              {/* Terminal */}
              <div className="h-32 bg-background border-t border-border">
                <div className="flex items-center px-4 py-2 bg-secondary border-b border-border">
                  <Terminal className="w-4 h-4 text-muted-foreground mr-2" />
                  <span className="text-xs text-muted-foreground">Terminal</span>
                  <div className="flex-1" />
                  <Play className="w-4 h-4 text-chart-3 cursor-pointer hover:text-chart-3/80" />
                </div>
                <div className="p-3 font-mono text-sm">
                  <div className="text-chart-3">$ npm run dev</div>
                  <div className="text-muted-foreground mt-1">
                    ➜ Local: http://localhost:3000
                  </div>
                  <div className="text-muted-foreground">
                    ➜ Ready in 245ms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDEPreview;
