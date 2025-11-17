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
