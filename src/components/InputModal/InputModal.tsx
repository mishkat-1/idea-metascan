import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const InputModal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Welcome To MelonScan</h2>
        <p className="mb-4">Coming Soon! Stay Updated</p>
        <button
          onClick={onClose}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
