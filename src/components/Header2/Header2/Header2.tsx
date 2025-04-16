import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import { navItems } from '../Navitems';
import { SignUp } from '../SignUp/SignUp';
import { Dropdown } from '../Dropdown/Dropdown';
import css from './Header2.module.css';

export const Header2 = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className={css.navbar}>
        <Link to="/" className={css.navbarLogo}>
          NATURE
          <Icons.FaTree />
        </Link>
        <ul className={css.navItems}>
          {navItems.map(({ id, title, path }) => {
            if (title === 'Services') {
              return (
                // <li key={id} className={css.navItem}>
                //   <Link to={path}>{title}</Link>
                //   <Dropdown />
                // </li>
                <li
                  key={id}
                  className={css.navItem}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={path}>{title}</Link>
                  {dropdown && <Dropdown />}{' '}
                  {/* Wyświetla "<Dropdown />" tylko wtedy gdy "dropdown" jest true */}
                </li>
              );
            }
            return (
              <li key={id} className={css.navItem}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <SignUp />
      </nav>
    </>
  );
};
