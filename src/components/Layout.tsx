// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/tokki.webp";
import discord from "../assets/discord.svg";
import mail from "../assets/mail.svg";

export default function Layout() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            // onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="Tokki Korean logo" className="w-9 h-9" />
            <h1 className="text-xl font-bold">Tokki Korean</h1>
          </Link>
          <div className="flex items-center gap-4">
            {/* <div className="hidden md:flex items-center gap-3"> */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:contact@tokkikorean.com"
                className="opacity-70 hover:opacity-100 transition"
                title="Email"
              >
                <img src={mail} alt="Email" className="w-7 h-7" />
              </a>
              <a
                href="https://discord.gg/9rAVZw442A"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                title="Join Discord"
              >
                <img src={discord} alt="Discord" className="w-7 h-7" />
              </a>
            </div>

            {/* Mobile menu button */}
            {/* <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button> */}
          </div>
        </div>

        {/* Mobile menu */}
        {/* {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
            <Link to="/app" onClick={() => setOpen(false)}>
              Resources
            </Link>
          </div>
        )} */}
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://axeldevelops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              AxelDevelops
            </a>{" "}
            all rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-black">
              Terms of Service
            </Link>
            <a
              href="mailto:contact@tokkikorean.com"
              className="hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
