import { Header2 } from '../../components/Header2/Header2/Header2';
import css from './Headers.module.css';

export const Headers = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>Headers</h2>
      </div>
      <Header2 />
      <div className={css.gap} />
    </div>
  );
};
