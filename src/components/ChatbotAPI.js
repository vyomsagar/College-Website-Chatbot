import React, { useState, useEffect } from 'react';

const ChatbotPage = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callBotpressAPI = () => {
    setLoading(true);

    const options = {
      method: 'PUT',
      headers: { 
        accept: 'application/json', 
        'content-type': 'application/json' 
      }
    };

    fetch('https://api.botpress.cloud/v1/files/id', options)
      .then(response => response.json())
      .then(response => {
        setResponseData(response);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    callBotpressAPI();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Chatbot Interface</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our chatbot can help you by answering your questions and simplifying the solutions.
        </p>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {responseData && (
          <pre className="text-sm text-gray-800">{JSON.stringify(responseData, null, 2)}</pre>
        )}


        <button 
          onClick={callBotpressAPI}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reload Chatbot Data
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
