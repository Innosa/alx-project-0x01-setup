import React, { useState } from "react";
import { UserData, UserModalProps } from "../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null; // hide modal when closed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserData = {
      id: Date.now(), // simple ID generator
      name,
      username,
      email,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    };

    onAddUser(newUser);
    onClose(); // close modal after adding user
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md w-80">
        <h2 className="text-xl font-bold mb-3">Add New User</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-2"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-2 w-full mb-2"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border p-2 w-full mb-4"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add User
          </button>

          <button
            type="button"
            className="ml-2 text-red-500"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
