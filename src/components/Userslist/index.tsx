import type { UserType } from '../../interfaces/User';
import UserCard from '../UserCard';

type UserListProps = {
  users: UserType[];
};
export default function UsersList({ users }: UserListProps) {
  return (
    <div className="flex flex-wrap gap-6">
      {users.map((user) => {
        return <UserCard key={user.id} propsUser={user} />;
      })}
    </div>
  );
}
