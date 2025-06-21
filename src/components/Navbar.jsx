import React from 'react';

export default function Navbar({ setPage, currentPage }) {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Item Manager</h1>
        <div className="space-x-4">
          <button
            onClick={() => setPage('view')}
            className={`nav-btn px-4 py-2 rounded transition-colors ${currentPage === 'view' ? 'bg-indigo-400' : 'bg-indigo-500 hover:bg-indigo-400'}`}
          >View Items</button>
          <button
            onClick={() => setPage('add')}
            className={`nav-btn px-4 py-2 rounded transition-colors ${currentPage === 'add' ? 'bg-indigo-400' : 'bg-indigo-500 hover:bg-indigo-400'}`}
          >Add Item</button>
        </div>
      </div>
    </nav>
  );
}
