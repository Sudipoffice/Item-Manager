import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ViewItems from './components/ViewItems';
import AddItemForm from './components/AddItemForm';
import Notification from './components/Notification';
import Modal from './components/Modal';

const sampleItems = [
  {
    id: 1,
    name: "Classic Blue Denim Shirt",
    type: "Shirt",
    description: "A timeless blue denim shirt perfect for casual and semi-formal occasions. Made from high-quality cotton with a comfortable fit and durable construction.",
    coverImage: "https://images.pexels.com/photos/17664378/pexels-photo-17664378.jpeg",
    additionalImages: [
      "https://images.pexels.com/photos/6299252/pexels-photo-6299252.jpeg"
    ]
  },
  {
    id: 2,
    name: "Running Sneakers Pro",
    type: "Shoes",
    description: "Professional running shoes designed for comfort and performance...",
    coverImage: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    additionalImages: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
    ]
  },
  {
    id: 3,
    name: "Wireless Bluetooth Headphones",
    type: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and superior sound quality...",
    coverImage: "https://images.pexels.com/photos/21424622/pexels-photo-21424622.jpeg",
    additionalImages: [
      "https://images.pexels.com/photos/18236754/pexels-photo-18236754.jpeg"
    ]
  }
];

function App() {

  let savedItems = localStorage.getItem('items');
  const initialItems = savedItems ? JSON.parse(savedItems) : sampleItems;

  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState('view');
  const [showNotification, setShowNotification] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const updated = JSON.stringify(items);
    localStorage.setItem('items', updated);
  }, [items]);

  const addItem = function(item) {
    const newId = Date.now();
    const newItem = {
      ...item,
      id: newId
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    setPage('view');
  };

  const openModal = function(item) {
    setModalItem(item);
  };

  const closeModal = function() {
    setModalItem(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar currentPage={page} setPage={setPage} />

      {showNotification && <Notification message="Item successfully added!" />}

      {page === 'view' && <ViewItems items={items} openModal={openModal} />}
      {page === 'add' && <AddItemForm addItem={addItem} />}

      {modalItem && <Modal item={modalItem} closeModal={closeModal} />}
    </div>
  );
}

export default App;