import React from 'react';

interface DialogBoxProps {
  isOpen: boolean;
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function DialogueBox({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onClose,
  children
}: DialogBoxProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white">{title}</h2>

        {/* Message */}
        {message && <p className="text-gray-400 mt-2">{message}</p>}

       
        <div className="mt-4">{children}</div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            {cancelLabel}
          </button>
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
