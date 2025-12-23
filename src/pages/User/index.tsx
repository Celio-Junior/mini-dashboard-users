import { UserIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { UserType } from '../../interfaces/User';
import { loadingUsers } from '../../database';

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<UserType>({ name: '', city: '', email: '', id: 0, username: '' });
  useEffect(() => {
    (async () => {
      const users = await loadingUsers();
      const user = users.find((user) => user.id === Number(id));
      if (user) setUser(user);
    })();
  }, [id]);

  return (
    <div className="w-full h-screen p-8 overflow-auto">
      <div className="mt-20">
        <h2 className="font-extrabold text-4xl mb-5">Description {user.name}</h2>
        <div className="flex justify-between">
          <UserIcon size={150} />

          <div className="mr-20">
            <h3 className="text-2xl font-bold">contact information</h3>
            <ul className="list-none">
              <li>username: {user.username}</li>
              <li>email: {user.email}</li>
              <li>city: {user.city}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
