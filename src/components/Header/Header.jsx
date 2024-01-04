import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Header.module.css';

const Layout = () => {

  return (
    <>
      <nav className={css.nav}>
        <div className={css.nav_block}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'aquamarine' : 'white',
            })}
            className={css.link}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? 'aquamarine' : 'white',
            })}
            className={css.link}
            to="/movies"
          >
            MOVIES
          </NavLink>
        </div>
      </nav>
      <main className={css.main}>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
