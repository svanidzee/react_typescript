import { FC } from 'react';

import { ITodo } from '../types/types';

interface ITodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};
