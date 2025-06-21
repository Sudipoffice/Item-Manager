import React from 'react';

const ViewItems = ({ items, openModal }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">All Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 duration-200"
              onClick={function () {
                openModal(item);
              }}
            >
              <img
                src={item.coverImage}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.name}
                </h3>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                  {item.type}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewItems;