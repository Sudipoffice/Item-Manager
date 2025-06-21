import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const handleAdditionalUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setAdditionalImages(urls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !description || !coverImage) return;
    const newItem = {
      name,
      type,
      description,
      coverImage,
      additionalImages,
    };
    addItem(newItem);
    setName('');
    setType('');
    setDescription('');
    setCoverImage(null);
    setAdditionalImages([]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Add New Item</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Item Name *</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Item Type *</label>
          <select value={type} onChange={(e) => setType(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Select type</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Shoes">Shoes</option>
            <option value="Sports Gear">Sports Gear</option>
            <option value="Accessories">Accessories</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Item Description *</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image *</label>
          <input type="file" accept="image/*" onChange={handleCoverUpload} required className="w-full" />
          {coverImage && <img src={coverImage} alt="Preview" className="w-32 h-32 object-cover rounded-lg shadow mt-3" />}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Images</label>
          <input type="file" accept="image/*" multiple onChange={handleAdditionalUpload} className="w-full" />
          {additionalImages.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {additionalImages.map((img, i) => (
                <img key={i} src={img} alt="Additional" className="w-full h-24 object-cover rounded-lg shadow" />
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;