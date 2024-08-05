import React, { useState, useEffect, useCallback } from 'react';
import LoadingSpinner from '../components/loading-spinner';
import Modal from '../components/Modal';  // Import the Modal component
import { BASE_API_URL } from '@/lib/utils';

const Table = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/api/data`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
    setShowAll(false);
  }, []);

  const handleShowAllClick = () => {
    setShowAll(true);
    setSelectedCategory(null);
  };

  const handleDeleteClick = (category, title) => {
    setModalMessage(`Are you sure you want to delete "${title}"?`);
    setItemToDelete({ category, title });
    setModalVisible(true);
  };

  const confirmDelete = async () => {
    setModalVisible(false);
    const { category, title } = itemToDelete;

    try {
      const response = await fetch(`${BASE_API_URL}/api/deleteItem`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, title }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete the item');
      }

      const result = await response.json();
      alert(result.message);

      setData((prevData) => prevData.map(cat => {
        if (cat.category === category) {
          return {
            ...cat,
            items: cat.items.filter(item => item.title !== title),
          };
        }
        return cat;
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-red-500">No data available</p>;
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
      <h1 className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-200 uppercase mb-4'>
        Click Button to View Menu Items
      </h1>
      <div className="flex flex-wrap justify-center mb-6 gap-2 sm:gap-4">
        {data.map((category, index) => (
          <button
            key={index}
            className={`text-white px-4 py-2 rounded border ${selectedCategory === category.category ? 'bg-black border-white' : 'bg-primary'}`}
            onClick={() => handleCategoryClick(category.category)}
          >
            {category.category}
          </button>
        ))}
        <button
          className={`text-white px-4 py-2 rounded border ${showAll ? 'bg-black border-white' : 'bg-primary'}`}
          onClick={handleShowAllClick}
        >
          Show All
        </button>
      </div>
      {(showAll ? data : data.filter((category) => category.category === selectedCategory)).map((category, index) => (
        <div key={index} className="mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300">#</th>
                  <th className="px-4 py-2 border-b border-gray-300">Title</th>
                  <th className="px-4 py-2 border-b border-gray-300">Price</th>
                  <th className="px-4 py-2 border-b border-gray-300">Description</th>
                  <th className="px-4 py-2 border-b border-gray-300">Image</th>
                  <th className="px-4 py-2 border-b border-gray-300">Image Link</th>
                  <th className="px-4 py-2 border-b border-gray-300">Delete</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
                    <td className="px-4 py-2 border-b">{idx + 1}</td>
                    <td className="px-4 py-2 border-b">{item.title}</td>
                    <td className="px-4 py-2 border-b">{item.price}</td>
                    <td className="px-4 py-2 border-b">{item.description}</td>
                    <td className="px-4 py-2 border-b">
                      <img src={item.src} alt={item.title} className="w-20 h-20 object-cover rounded-md border border-gray-300" />
                    </td>
                    <td className="px-4 py-2 border-b">
                      <a href={item.src} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.src}</a>
                    </td>
                    <td className="px-4 py-2 border-b">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={() => handleDeleteClick(category.category, item.title)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={confirmDelete}
        message={modalMessage}
      />
    </div>
  );
};

export default Table;
