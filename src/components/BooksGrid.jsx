import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import BookCard from './BookCard';

const mockBooks = [
  {
    id: 1,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    genre: 'Technology',
    rating: 4.8,
    available: true,
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
    description: 'Classic guide to pragmatic thinking and effective software craftsmanship.'
  },
  {
    id: 2,
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    rating: 4.6,
    available: false,
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    description: 'A powerful memoir about resilience, transformation, and the pursuit of knowledge.'
  },
  {
    id: 3,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    rating: 4.7,
    available: true,
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop',
    description: 'Epic science fiction saga set on the desert planet Arrakis.'
  },
  {
    id: 4,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    rating: 4.9,
    available: true,
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    description: 'An easy and proven way to build good habits and break bad ones.'
  }
];

const BooksGrid = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return mockBooks.filter((b) => {
      const matchesQuery =
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genre.toLowerCase().includes(q);
      const matchesFilter = filter === 'All' || b.genre === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  const genres = ['All', ...Array.from(new Set(mockBooks.map((b) => b.genre)))];

  return (
    <section id="books" className="bg-gray-50 py-14 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Browse Books</h2>
          <div className="flex flex-1 items-center gap-3 sm:justify-end">
            <div className="relative w-full max-w-md">
              <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, author, genre..."
                className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
            >
              {genres.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksGrid;
