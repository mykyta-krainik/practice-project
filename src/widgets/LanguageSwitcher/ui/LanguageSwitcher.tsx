import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui';

import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';

    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button
      theme={ButtonTheme.CLEAN}
      className={styles.languageSwitcher}
      onClick={handleLanguageChange}
    >
      {t('language')}
    </Button>
  );
};
