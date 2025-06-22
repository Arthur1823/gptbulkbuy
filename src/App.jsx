import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-teal-400 text-white p-6">
      <h1 className="text-4xl font-heading mb-4 text-center">GPTBulkBuy</h1>
      <p className="text-lg max-w-xl text-center">
        Welcome to GPTBulkBuy — an AI-powered collective purchasing platform. Join forces with other individuals to get better prices from suppliers. The more we unite, the more we save.
      </p>
      <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
        Join the Mailing List
      </button>
    </div>
  );
}

export default App;
