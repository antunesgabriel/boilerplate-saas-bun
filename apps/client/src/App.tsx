import { Outlet, Link } from "react-router-dom";
import { Button } from "@repo/ui";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <Link to="/" className="text-foreground font-semibold">
                Client App
              </Link>
              <div className="flex space-x-4">
                <Link to="/">
                  <Button variant="ghost">Home</Button>
                </Link>
                <Link to="/about">
                  <Button variant="ghost">About</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
