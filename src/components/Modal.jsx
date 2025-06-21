import React, { useState } from 'react';

const Modal = ({ item, closeModal }) => {
  const [index, setIndex] = useState(0);

  const images = [];
  images.push(item.coverImage);
  if (item.additionalImages && item.additionalImages.length > 0) {
    for (let i = 0; i < item.additionalImages.length; i++) {
      images.push(item.additionalImages[i]);
    }
  }

  const next = () => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
  };

  const prev = () => {
    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src={images[index]} alt={item.name} className="w-full h-80 object-cover" />
            </div>
            <div className="flex justify-center space-x-2">
              <button onClick={prev} className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded">←</button>
              <button onClick={next} className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded">→</button>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">{item.type}</span>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
            <button onClick={() => alert('Thank you for your interest in "' + item.name + '"! We\'ll get back to you soon.')} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;