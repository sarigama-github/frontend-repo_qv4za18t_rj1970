import React from 'react';
import { BookOpenCheck, Star } from 'lucide-react';

const BookCard = ({ book }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <img
        src={book.cover}
        alt={book.title}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-gray-900 dark:text-gray-100">{book.title}</h3>
        <p className="mb-2 line-clamp-1 text-sm text-gray-500 dark:text-gray-400">by {book.author}</p>
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 dark:bg-gray-800">{book.genre}</span>
          <span className="flex items-center gap-1"><Star size={14} className="text-amber-500" /> {book.rating}</span>
          <span className={book.available ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}>
            {book.available ? 'Available' : 'Checked out'}
          </span>
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{book.description}</p>
        <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-500 active:scale-95 disabled:opacity-50 disabled:hover:bg-blue-600" disabled={!book.available}>
          <BookOpenCheck size={16} /> {book.available ? 'Borrow' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
