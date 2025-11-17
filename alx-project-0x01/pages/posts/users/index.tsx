import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users = ({ users }: { users: UserProps[] }) => {
  return (
    <div>
      <Header />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;

// Fetch data
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}


import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<string[]>([]);

  const handleAddUser = (name: string) => {
    setUsers([...users, name]);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add User
      </button>

      <UserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddUser={handleAddUser}
      />

      <h3 className="mt-6 text-xl font-bold">Users:</h3>
      <ul className="mt-2">
        {users.map((user, i) => (
          <li key={i} className="border p-2 rounded mb-2">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
