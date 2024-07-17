const Modal = ({ isVisible, onClose, onConfirm, message }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="mb-4">{message}</p>
          <div className="flex justify-end">
            <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>No</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onConfirm}>Yes</button>
          </div>
        </div>
      </div>
    );
  };
  export default Modal;