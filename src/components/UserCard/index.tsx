import { UserIcon } from 'lucide-react';
import type { UserType } from '../../interfaces/User';
import { useNavigate } from 'react-router';
type UserCardProps = {
  propsUser: UserType;
};
export default function UserCard({ propsUser: { id, name, email, city, username } }: UserCardProps) {
  const navigate = useNavigate();
  function handleClick() {
    console.log('iai');
    navigate('/user/' + id);
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex min-w-50 w-60 justify-between items-center gap-3 rounded-2xl hover:bg-gray-300 transition-all duration-150"
    >
      <UserIcon size={60} />
      <div className="flex flex-col flex-nowrap overflow-hidden">
        <h3 className="font-bold text-lg sm:text-xl border-b-2 mb-2">{name}</h3>
        <p className="hover:font-bold cursor-default" title="username">
          {' '}
          {username}
        </p>
        <p
          title={`email:${email}`}
          className="text-blue-400 truncate overflow-te font-bold cursor-default border-transparent border-b-2 hover:text-blue-500 hover:border-blue-500"
        >
          {email}
        </p>
        <p className="hover:font-bold cursor-default" title="city">
          {city}
        </p>
      </div>
    </div>
  );
}
