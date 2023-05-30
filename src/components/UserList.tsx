import { FC } from 'react';

import { UserItem } from '.';
import { IUser } from '../types/types';

interface IUserListProps {
  users: IUser[];
}

export const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
