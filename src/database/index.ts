import type { UserType } from '../interfaces/User';
import { urlApiUsers } from '../lib/contantes';

export async function loadingUsers() {
  let result = localStorage.getItem('users');

  if (!result) {
    console.log('criado');
    result = await (
      await (await fetch(urlApiUsers)).json()
    ).map(
      (user: Omit<UserType, 'city'> & { address: { city: string } }): UserType => ({
        id: Number(user.id),
        name: user.name,
        username: user.name,
        city: user.address.city,
        email: user.email,
      }),
    );
    localStorage.setItem('users', JSON.stringify(result));
  }
  const usersApi = typeof result === 'string' ? JSON.parse(result as string) : result;
  return usersApi as UserType[];
}
