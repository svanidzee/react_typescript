import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { List, UserItem } from '.';
import { IUser } from '../types/types';

interface IUsersPageProps {}

export const UsersPage: FC<IUsersPageProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setIsLoaded(true);
      setUsers(response.data);
    } catch (error) {
      setIsLoaded(true);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
  );
};
