import { Link, Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/todos'>Todos</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
