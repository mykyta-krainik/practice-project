import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.notFoundPage}>
      <h1>{t('notFoundPage.title')}</h1>
      <p>{t('notFoundPage.subtitle')}</p>
      <Link to="/">{t('notFoundPage.button')}</Link>
    </div>
  );
};
