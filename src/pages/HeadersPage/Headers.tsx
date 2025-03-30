import css from './Home.module.css';

export const Headers = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>Headers</h2>
      </div>

      <div className={css.gap} />
    </div>
  );
};
