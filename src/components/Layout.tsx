import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold">MyApp</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/app" onClick={() => setOpen(false)}>
              App
            </Link>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-center">
          © {new Date().getFullYear()} MyApp
        </div>
      </footer>
    </div>
  );
}
