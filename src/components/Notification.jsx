import React from 'react';

function Notification(props) {
  const message = props.message;

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 50 }} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
      <div className="flex items-center">
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Notification;