import React, { useState, useEffect, useCallback } from 'react';
import LoadingSpinner from '../components/loading-spinner';
import Modal from '../components/Modal';  // Import the Modal component

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteItem`, {
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
    <div className="overflow-x-auto px-4 sm:px-10 md:px-20 lg:px-40">
      <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
        All Menu Items
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
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border" scope="col">#</th>
                <th className="px-4 py-2 border" scope="col">Title</th>
                <th className="px-4 py-2 border" scope="col">Price</th>
                <th className="px-4 py-2 border" scope="col">Description</th>
                <th className="px-4 py-2 border" scope="col">Image</th>
                <th className="px-4 py-2 border" scope="col">Image Link</th>
                <th className="px-4 py-2 border" scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'}>
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">{item.title}</td>
                  <td className="px-4 py-2 border">{item.price}</td>
                  <td className="px-4 py-2 border">{item.description}</td>
                  <td className="px-4 py-2 border">
                    <img src={item.src} alt={item.title} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="px-4 py-2 border">
                    <a href={item.src} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.src}</a>
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
