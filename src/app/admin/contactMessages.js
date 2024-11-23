import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loading-spinner";

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/contactMessages");
        const data = await response.json();
        // Sort messages by time in descending order
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <LoadingSpinner />; // Show spinner while loading

  return (
    <div className="my-10 mb-40 px-8">
      <div className="mb-10 flex justify-center">
        <h1 className="text-2xl font-semibold text-black">
          All Booking
        </h1>
      </div>
      <div>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg._id}
              className="mx-auto mb-6 max-w-xl rounded-lg bg-white p-6 shadow-xl"
            >
              <div className="mb-4 border-b border-gray-300 pb-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {msg.name}
                </h2>
                <p className="text-sm text-gray-600">{msg.email}</p>
                <p className="text-md mt-2 font-medium text-gray-800">
                  {msg.personnummer}
                </p>
              </div>

              <div className="mb-4 rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Message:</strong> {msg.message}
                </p>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Phone Number:</strong> {msg.phoneNumber}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Date:</strong> {msg.date}
                  </p>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Time:</strong> {msg.time}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Number of People:</strong> {msg.numPeople}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                </span>
                <button className="rounded-md bg-green-500 px-4 py-1 text-xs text-white hover:bg-blue-600">
                {new Date(msg.createdAt).toLocaleString()}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </div>
  );
}
