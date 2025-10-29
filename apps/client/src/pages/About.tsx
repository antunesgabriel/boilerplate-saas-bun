import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-muted-foreground">
          Learn more about this application
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About This App</CardTitle>
          <CardDescription>
            Built with modern technologies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Vite - Fast build tool and dev server</li>
              <li>React 19 - Latest React features</li>
              <li>TypeScript - Type safety</li>
              <li>React Router v7 - Client-side routing</li>
              <li>Tailwind CSS - Utility-first CSS</li>
              <li>@repo/ui - Shared component library</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Fast HMR (Hot Module Replacement)</li>
              <li>Client-side routing with React Router</li>
              <li>Shared UI components from monorepo</li>
              <li>Fully typed with TypeScript</li>
              <li>Ready for Vercel deployment</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

