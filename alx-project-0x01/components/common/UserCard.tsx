import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>

      <div className="mt-3">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>

      <div className="mt-3">
        <p className="font-semibold">Company:</p>
        <p>{user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
