import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { List, TodoItem } from '.';
import { ITodo } from '../types/types';

interface ITodosPageProps {}

export const TodosPage: FC<ITodosPageProps> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setIsLoaded(true);
      setTodos(response.data);
    } catch (error) {
      setIsLoaded(true);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
  );
};
