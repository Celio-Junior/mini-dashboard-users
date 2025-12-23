import { useEffect, useState } from 'react';

import UsersList from '../../components/Userslist';
import type { UserType } from '../../interfaces/User';
import Loading from '../../components/Loading';
import { SearchIcon } from 'lucide-react';
import { loadingUsers } from '../../database';

export default function MainPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const resultUsers = await loadingUsers();
      setUsers(() => resultUsers);
      setIsLoading(true);
    })();
  }, []);

  async function handleChange(inputValue: string) {
    const usersNew = (await loadingUsers()).filter((user) =>
      user.name.toLowerCase().includes(inputValue.trim()),
    );

    setUsers(() => usersNew);
  }
  return (
    <main className="w-full h-screen p-8 overflow-auto">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold text-3xl">All users {isLoading ? 'true' : 'false'} </h1>
        <div className="flex gap-2">
          <input
            onChange={(e) => {
              handleChange(e.target.value);
              setInputSearch(e.target.value);
            }}
            type="text"
            value={inputSearch}
            placeholder="search user"
            className="bg-gray-200 border-2 border-gray-500 p-2 rounded-xl"
          />
          <button
            onClick={() => handleChange(inputSearch)}
            title="Search"
            type="button"
            className="cursor-pointer"
          >
            {' '}
            <SearchIcon />
          </button>
        </div>
      </div>
      {isLoading ? <UsersList users={users} /> : <Loading />}
    </main>
  );
}
