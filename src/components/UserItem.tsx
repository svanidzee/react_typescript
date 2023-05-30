import { FC } from 'react';

import { IUser } from '../types/types';

interface IUserItemProps {
  user: IUser;
}

export const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray' }}>
      {user.id}. {user.name} {user.address.city}
    </div>
  );
};
