"use client";

import React, { useState } from "react";
import DialogueBox from "../Dialogue_Box/dialogue_box";

interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileDialog({ isOpen, onClose }: EditProfileDialogProps) {
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const handleUpdate = () => {
    console.log("Updated Profile:", { newEmail, newPhone });
    onClose();
  };

  return (
    <>
      {/* Main Edit Profile Dialog */}
      <DialogueBox
        isOpen={isOpen}
        onClose={onClose}
        title="Edit Profile"
        confirmLabel="Update"
        cancelLabel="Cancel"
        onConfirm={handleUpdate} // Only ONE Cancel Button Inside
      >
        <form>
          {/* Email Field */}
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="block w-full rounded-md px-3 py-1.5 mt-2"
          />

          {/* Phone Number Field */}
          <label className="block text-sm font-medium mt-4">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="(123) 456-7890"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            className="block w-full rounded-md px-3 py-1.5 mt-2"
          />

          {/* Hidden Delete Account Button */}
          <button
            type="button"
            className="hidden"
            onClick={() => setIsDeleteConfirmOpen(true)}
          >
            Delete Account
          </button>
        </form>
      </DialogueBox>

      {/*  Delete Account Confirmation Dialog */}
      <DialogueBox
        isOpen={isDeleteConfirmOpen}
        onClose={() => setIsDeleteConfirmOpen(false)}
        title="Confirm Account Deletion"
        message="Are you sure you want to delete your account? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => console.log("Account Deleted")}
      />
    </>
  );
}
