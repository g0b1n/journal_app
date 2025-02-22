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
      <div className="bg-white text-gray-900 dark:bg-[#111827] dark:text-[#E5E7EB] p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300 dark:border-gray-700">


        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900-400 mt-2 text-center">{title}</h2>

        {/* Message */}
        {message && <p className="text-gray-600 dark:text-400 mt-2">{message}</p>}

       
        <div className="mt-4">{children}</div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-2 mt-4 flex-nowrap">
          <button
            onClick={onClose}
            className="px-4 py-2 w-auto min-w-[80px] border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-gray-100"
          >
            {cancelLabel}
          </button>
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="px-4 py-2 w-auto min-w-[80px] bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
