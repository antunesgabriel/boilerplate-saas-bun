import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Client App</h1>
        <p className="text-muted-foreground">
          This is a Vite + React + TypeScript app with React Router and @repo/ui
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Vite</CardTitle>
            <CardDescription>
              Lightning fast build tool and dev server
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built with Vite for instant server start and lightning-fast HMR.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>React Router</CardTitle>
            <CardDescription>Client-side routing made easy</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Navigate between pages seamlessly with React Router v7.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>@repo/ui</CardTitle>
            <CardDescription>
              Shared UI components from the monorepo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All shadcn/ui components available through the @repo/ui package.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TypeScript</CardTitle>
            <CardDescription>Full type safety throughout</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              TypeScript configured for maximum developer experience.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 justify-center">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    </div>
  );
}
