import React, { useEffect, useState } from 'react';
import { BookOpen, User, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white shadow-sm">
            <BookOpen size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">Aurora Library</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Read. Learn. Grow.</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 dark:text-gray-300 md:flex">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#books" className="hover:text-blue-600 dark:hover:text-blue-400">Books</a>
          <a href="#dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</a>
          <a href="#profile" className="hover:text-blue-600 dark:hover:text-blue-400">Profile</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 active:scale-95 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-95 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800">
            <User size={16} />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
