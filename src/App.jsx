import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BooksGrid from './components/BooksGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <BooksGrid />
        <section id="dashboard" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold">Dashboard Preview</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Admin and student dashboards will live here with tables, stats, and actions.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
