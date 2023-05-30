import { FC } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Home, UsersPage, TodosPage } from './components';
import { Root } from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/todos' element={<TodosPage />} />
    </Route>,
  ),
);

export const App: FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
