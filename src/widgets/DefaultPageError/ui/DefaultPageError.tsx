import { Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './DefaultPageError.module.scss';

export const DefaultPageError = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.defaultPageError}>
      <h1>{t('defaultPageError.title')}</h1>

      <Button
        onClick={() => window.location.reload()}
        className={styles.actionButton}
      >
        {t('defaultPageError.button')}
      </Button>
    </section>
  );
};
