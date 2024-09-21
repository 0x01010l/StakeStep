"use client";

import React, { useState } from "react";

const Challenge = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);

  const toggleCreateModal = () => setCreateModalOpen(!isCreateModalOpen);
  const toggleJoinModal = () => setJoinModalOpen(!isJoinModalOpen);

  return (
    <div className="flex justify-center items-center h-screen -mt-20">
      {/* Create Challenge Button */}
      <button
        onClick={toggleCreateModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        Create Challenge
      </button>

      {/* Join Challenge Button */}
      <button
        onClick={toggleJoinModal}
        className="bg-green-600 hover:bg-green-700 text-white font-bold text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ml-20"
      >
        Join Challenge
      </button>

      {/* Create Challenge Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create Challenge</h2>
            <p className="mb-4">Here you can create a new challenge.</p>
            <button onClick={toggleCreateModal} className="bg-red-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Join Challenge Modal */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Join Challenge</h2>
            <p className="mb-4">Here you can join an existing challenge.</p>
            <button onClick={toggleJoinModal} className="bg-red-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
