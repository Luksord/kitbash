import { Link } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>KITBASH</h1>
        <Link to="/headers" className={css.link}>
          HEADERS
        </Link>
        <Link to="/footers" className={css.link}>
          FOOTERS
        </Link>
        <Link to="/sections" className={css.link}>
          SECTIONS
        </Link>
      </div>
    </>
  );
};
