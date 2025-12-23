import { useEffect, useState, useTransition } from 'react';
import { urlApiUsers } from '../../lib/contantes';
import UsersList from '../../components/Userslist';
import type { UserType } from '../../interfaces/User';

export default function MainPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, starTransition] = useTransition();
  useEffect(() => {
    starTransition(async () => {
      const result = (await (await fetch(urlApiUsers)).json()).map(
        (user: Omit<UserType, 'city'> & { address: { city: string } }): UserType => ({
          id: Number(user.id),
          name: user.name,
          username: user.name,
          city: user.address.city,
          email: user.email,
        }),
      );
      setUsers(() => result);
    });
  });
  return (
    <main className="w-full h-screen p-8 overflow-auto">
      <h1 className="font-bold text-3xl">All users</h1>
      <UsersList users={users} />
    </main>
  );
}
