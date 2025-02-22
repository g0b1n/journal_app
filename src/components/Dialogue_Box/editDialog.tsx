"use client";

import React, { useState } from "react";
import DialogueBox from "../Dialogue_Box/dialogue_box";

interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentEmail: string;
  currentPhone: string;
}

export default function EditProfileDialog({ isOpen, onClose, currentEmail, currentPhone }: EditProfileDialogProps) {
  const [editType, setEditType] = useState<"email" | "phone" | null>(null);
  const [newEmail, setNewEmail] = useState(currentEmail);
  const [newPhone, setNewPhone] = useState(currentPhone);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleUpdate = () => {
    setIsConfirmOpen(false);
    setEditType(null);
    onClose();
  };

  return (
    <>
      {/* Step 1: Ask What to Edit */}
      <DialogueBox isOpen={isOpen && !editType} onClose={onClose} title="Edit Profile">
        <p className="mb-4 text-gray-300 text-center text-lg font-medium">
          What would you like to edit?
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => setEditType("email")}
            className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mr-2"
          >
            Email
          </button>
          <button
            onClick={() => setEditType("phone")}
            className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Phone Number
          </button>
        </div>
      </DialogueBox>

      {/* Step 2: Edit Email */}
      {editType === "email" && (
        <DialogueBox isOpen={true} onClose={() => setEditType(null)} title="Edit Email" onConfirm={() => setIsConfirmOpen(true)} confirmLabel="Update">
          <form>
            <label className="block text-sm font-medium text-gray-300">
              New Email
            </label>
            <input
              type="email"
              name="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="block w-full rounded-md px-3 py-1.5 mt-2 bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </form>
        </DialogueBox>
      )}

      {/* Step 2: Edit Phone Number */}
      {editType === "phone" && (
        <DialogueBox isOpen={true} onClose={() => setEditType(null)} title="Edit Phone Number" onConfirm={() => setIsConfirmOpen(true)} confirmLabel="Update">
          <form>
            <label className="block text-sm font-medium text-gray-300">
              New Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              className="block w-full rounded-md px-3 py-1.5 mt-2 bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </form>
        </DialogueBox>
      )}

      {/* Step 3: Confirm Update */}
      <DialogueBox
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Confirm Update"
        message={`Are you sure you want to update your ${editType === "email" ? "email" : "phone number"}?`}
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={handleUpdate}
      />
    </>
  );
}
